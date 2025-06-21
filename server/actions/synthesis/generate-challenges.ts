"use server";

import { getCurrentUser } from "@/server/lib/auth";
import { db } from "@/server/db";
import { synthesesTable, challengesTable } from "@/server/db/schema";
import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { runSynthesisPipeline } from "@/server/ai/synthesis-pipeline";

export async function generateChallenges(synthesisId: string) {
  const user = await getCurrentUser();

  if (!user?.id) {
    throw new Error("User must be authenticated to generate challenges");
  }

  try {
    // Get the synthesis with brain dump content
    const [synthesis] = await db
      .select()
      .from(synthesesTable)
      .where(
        and(
          eq(synthesesTable.id, synthesisId),
          eq(synthesesTable.userId, user.id)
        )
      );

    if (!synthesis) {
      throw new Error("Synthesis not found or access denied");
    }

    if (!synthesis.rawText?.trim()) {
      throw new Error("Brain dump content is required to generate challenges");
    }

    // Run the AI synthesis pipeline
    console.log("🧠 Running AI synthesis pipeline for synthesis:", synthesisId);
    const pipelineResult = await runSynthesisPipeline(synthesis.rawText);

    // Clear any existing challenges for this synthesis
    await db
      .delete(challengesTable)
      .where(eq(challengesTable.synthesisId, synthesisId));

    // Insert the new challenge cards
    const challengeInserts = pipelineResult.challengeCards.map(card => ({
      id: crypto.randomUUID(),
      synthesisId: synthesisId,
      type: card.type,
      aiGeneratedQuestion: card.question,
      aiGeneratedContext: card.context || null,
      order: card.order,
      userResponse: null, // User hasn't responded yet
    }));

    await db.insert(challengesTable).values(challengeInserts);

    // Update synthesis stage to gauntlet (if not already)
    await db
      .update(synthesesTable)
      .set({
        stage: "gauntlet",
        updatedAt: new Date(),
      })
      .where(eq(synthesesTable.id, synthesisId));

    // Revalidate paths
    revalidatePath(`/synthesis/${synthesisId}`);
    revalidatePath("/dashboard");

    console.log(
      "✅ Successfully generated challenges for synthesis:",
      synthesisId
    );

    return {
      success: true,
      challenges: pipelineResult.challengeCards,
      metadata: pipelineResult.metadata,
    };
  } catch (error) {
    console.error("Failed to generate challenges:", error);

    // If this is an AI-related error, provide more context
    if (error instanceof Error && error.message.includes("API key")) {
      throw new Error("AI service is not configured. Please contact support.");
    }

    throw new Error(
      `Failed to generate challenges: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

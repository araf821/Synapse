"use server";

import { getCurrentUser } from "@/server/lib/auth";
import { db } from "@/server/db";
import { synthesesTable } from "@/server/db/schema";
import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function saveFinalSynthesis(
  synthesisId: string,
  finalText: string
) {
  const user = await getCurrentUser();

  if (!user?.id) {
    throw new Error("User must be authenticated to save final synthesis");
  }

  if (!synthesisId || !finalText?.trim()) {
    throw new Error("Synthesis ID and final content are required");
  }

  try {
    // Update the synthesis with final content
    const [updatedSynthesis] = await db
      .update(synthesesTable)
      .set({
        finalText: finalText.trim(),
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(synthesesTable.id, synthesisId),
          eq(synthesesTable.userId, user.id)
        )
      )
      .returning();

    if (!updatedSynthesis) {
      throw new Error("Synthesis not found or access denied");
    }

    // Revalidate the synthesis page
    revalidatePath(`/synthesis/${synthesisId}`);

    return { success: true, synthesis: updatedSynthesis };
  } catch (error) {
    console.error("Failed to save final synthesis:", error);
    throw new Error("Failed to save final synthesis. Please try again.");
  }
}

export async function completeSynthesis(synthesisId: string) {
  const user = await getCurrentUser();

  if (!user?.id) {
    throw new Error("User must be authenticated to complete synthesis");
  }

  try {
    // Get the synthesis to validate it has all required content
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
      throw new Error("Brain dump content is required to complete synthesis");
    }

    if (!synthesis.finalText?.trim()) {
      throw new Error("Final synthesis content is required to complete");
    }

    // Mark synthesis as completed
    const [completedSynthesis] = await db
      .update(synthesesTable)
      .set({
        isCompleted: true,
        updatedAt: new Date(),
      })
      .where(eq(synthesesTable.id, synthesisId))
      .returning();

    // Revalidate paths
    revalidatePath(`/synthesis/${synthesisId}`);
    revalidatePath("/dashboard");

    console.log("✅ Synthesis completed:", synthesisId);

    return { success: true, synthesis: completedSynthesis };
  } catch (error) {
    console.error("Failed to complete synthesis:", error);
    throw new Error(
      `Failed to complete synthesis: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

export async function completeSynthesisAndRedirect(synthesisId: string) {
  try {
    await completeSynthesis(synthesisId);
    redirect("/dashboard");
  } catch (error) {
    console.error("Failed to complete synthesis and redirect:", error);
    throw error; // Re-throw to let the UI handle the error
  }
}

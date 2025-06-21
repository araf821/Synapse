"use server";

import { getCurrentUser } from "@/server/lib/auth";
import { db } from "@/server/db";
import { synthesesTable, challengesTable } from "@/server/db/schema";
import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function saveChallengeResponse(
  synthesisId: string,
  challengeId: string,
  userResponse: string
) {
  const user = await getCurrentUser();

  if (!user?.id) {
    throw new Error("User must be authenticated to save responses");
  }

  if (!synthesisId || !challengeId || !userResponse?.trim()) {
    throw new Error("Synthesis ID, challenge ID, and response are required");
  }

  try {
    // Update the specific challenge with user response
    const [updatedChallenge] = await db
      .update(challengesTable)
      .set({
        userResponse: userResponse.trim(),
      })
      .where(
        and(
          eq(challengesTable.id, challengeId),
          eq(challengesTable.synthesisId, synthesisId)
        )
      )
      .returning();

    if (!updatedChallenge) {
      throw new Error("Challenge not found");
    }

    // Verify user owns this synthesis
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

    // Revalidate the synthesis page
    revalidatePath(`/synthesis/${synthesisId}`);

    return { success: true, challenge: updatedChallenge };
  } catch (error) {
    console.error("Failed to save challenge response:", error);
    throw new Error("Failed to save response. Please try again.");
  }
}

export async function saveAllChallengeResponses(
  synthesisId: string,
  responses: { challengeId: string; userResponse: string }[]
) {
  const user = await getCurrentUser();

  if (!user?.id) {
    throw new Error("User must be authenticated to save responses");
  }

  if (!synthesisId || !responses?.length) {
    throw new Error("Synthesis ID and responses are required");
  }

  try {
    // Verify user owns this synthesis
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

    // Update all challenge responses
    const updatePromises = responses.map(({ challengeId, userResponse }) =>
      db
        .update(challengesTable)
        .set({
          userResponse: userResponse.trim(),
        })
        .where(
          and(
            eq(challengesTable.id, challengeId),
            eq(challengesTable.synthesisId, synthesisId)
          )
        )
    );

    await Promise.all(updatePromises);

    // Revalidate the synthesis page
    revalidatePath(`/synthesis/${synthesisId}`);

    return { success: true };
  } catch (error) {
    console.error("Failed to save challenge responses:", error);
    throw new Error("Failed to save responses. Please try again.");
  }
}

export async function progressToStage3(synthesisId: string) {
  const user = await getCurrentUser();

  if (!user?.id) {
    throw new Error("User must be authenticated");
  }

  try {
    // Update synthesis stage to synthesis
    const [updatedSynthesis] = await db
      .update(synthesesTable)
      .set({
        stage: "synthesis",
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

    // Revalidate paths
    revalidatePath(`/synthesis/${synthesisId}`);
    revalidatePath("/dashboard");

    return { success: true, synthesis: updatedSynthesis };
  } catch (error) {
    console.error("Failed to progress to stage 3:", error);
    throw new Error("Failed to progress to next stage. Please try again.");
  }
}

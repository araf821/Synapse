"use server";

import { getCurrentUser } from "@/server/lib/auth";
import { db } from "@/server/db";
import { synthesesTable, challengesTable } from "@/server/db/schema";
import { eq, and } from "drizzle-orm";

export async function getSynthesis(synthesisId: string) {
  const user = await getCurrentUser();

  if (!user?.id) {
    throw new Error("User must be authenticated to access synthesis");
  }

  if (!synthesisId) {
    throw new Error("Synthesis ID is required");
  }

  try {
    // Get the synthesis
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

    return { success: true, synthesis };
  } catch (error) {
    console.error("Failed to get synthesis:", error);
    throw new Error(
      `Failed to get synthesis: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

export async function getSynthesisWithChallenges(synthesisId: string) {
  const user = await getCurrentUser();

  if (!user?.id) {
    throw new Error("User must be authenticated to access synthesis");
  }

  if (!synthesisId) {
    throw new Error("Synthesis ID is required");
  }

  try {
    // Get the synthesis
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

    // Get associated challenges
    const challenges = await db
      .select()
      .from(challengesTable)
      .where(eq(challengesTable.synthesisId, synthesisId))
      .orderBy(challengesTable.order);

    return {
      success: true,
      synthesis,
      challenges,
    };
  } catch (error) {
    console.error("Failed to get synthesis with challenges:", error);
    throw new Error(
      `Failed to get synthesis data: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

export async function getUserSyntheses() {
  const user = await getCurrentUser();

  if (!user?.id) {
    throw new Error("User must be authenticated to access syntheses");
  }

  try {
    // Get all user's syntheses
    const syntheses = await db
      .select()
      .from(synthesesTable)
      .where(eq(synthesesTable.userId, user.id))
      .orderBy(synthesesTable.updatedAt);

    return { success: true, syntheses };
  } catch (error) {
    console.error("Failed to get user syntheses:", error);
    throw new Error(
      `Failed to get syntheses: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

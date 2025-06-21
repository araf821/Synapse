"use server";

import { getCurrentUser } from "@/server/lib/auth";
import { db } from "@/server/db";
import { synthesesTable } from "@/server/db/schema";
import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function saveBrainDump(synthesisId: string, rawText: string) {
  const user = await getCurrentUser();

  if (!user?.id) {
    throw new Error("User must be authenticated to save brain dump");
  }

  if (!synthesisId || !rawText?.trim()) {
    throw new Error("Synthesis ID and content are required");
  }

  try {
    // Update the synthesis with brain dump content
    const [updatedSynthesis] = await db
      .update(synthesesTable)
      .set({
        rawText: rawText.trim(),
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
    console.error("Failed to save brain dump:", error);
    throw new Error("Failed to save content. Please try again.");
  }
}

export async function progressToStage2(synthesisId: string) {
  const user = await getCurrentUser();

  if (!user?.id) {
    throw new Error("User must be authenticated");
  }

  try {
    // Update synthesis stage to gauntlet
    const [updatedSynthesis] = await db
      .update(synthesesTable)
      .set({
        stage: "gauntlet",
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
    console.error("Failed to progress to stage 2:", error);
    throw new Error("Failed to progress to next stage. Please try again.");
  }
}

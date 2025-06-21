"use server";

import { getCurrentUser } from "@/server/lib/auth";
import { db } from "@/server/db";
import { synthesesTable } from "@/server/db/schema";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function createSynthesis(title?: string) {
  const user = await getCurrentUser();

  if (!user?.id) {
    throw new Error("User must be authenticated to create synthesis");
  }

  try {
    // Generate a unique ID for the synthesis
    const synthesisId = crypto.randomUUID();

    // Create new synthesis record
    const [newSynthesis] = await db
      .insert(synthesesTable)
      .values({
        id: synthesisId,
        title: title || "Untitled Synthesis",
        userId: user.id,
        stage: "brain_dump",
        isCompleted: false,
      })
      .returning();

    // Revalidate dashboard to show new synthesis
    revalidatePath("/dashboard");

    // Redirect to Stage 1
    redirect(`/synthesis/${synthesisId}/stage1`);
  } catch (error) {
    console.error("Failed to create synthesis:", error);
    throw new Error("Failed to create synthesis. Please try again.");
  }
}

"use server";

import { getCurrentUser } from "@/server/lib/auth";
import { db } from "@/server/db";
import { synthesesTable } from "@/server/db/schema";
import { eq, and } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function deleteSynthesis(synthesisId: string) {
  const user = await getCurrentUser();

  if (!user?.id) {
    throw new Error("User must be authenticated to delete synthesis");
  }

  try {
    // Delete the synthesis, but only if it belongs to the current user
    const result = await db
      .delete(synthesesTable)
      .where(
        and(
          eq(synthesesTable.id, synthesisId),
          eq(synthesesTable.userId, user.id)
        )
      )
      .returning();

    if (result.length === 0) {
      throw new Error(
        "Synthesis not found or you don't have permission to delete it"
      );
    }

    // Revalidate dashboard to remove deleted synthesis
    revalidatePath("/dashboard");

    return { success: true };
  } catch (error) {
    console.error("Failed to delete synthesis:", error);
    throw new Error("Failed to delete synthesis. Please try again.");
  }
}

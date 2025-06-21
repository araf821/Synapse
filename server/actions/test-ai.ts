"use server";

import { structuralMappingAgent } from "../ai";

export async function testStructuralMapping(rawText: string) {
  try {
    const result = await structuralMappingAgent(rawText);
    return { success: true, data: result };
  } catch (error) {
    console.error("Test failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

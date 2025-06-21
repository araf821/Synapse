"use server";

import {
  structuralMappingAgent,
  externalContradictionAgent,
  internalCritiqueAgent,
  socraticGeneratorAgent,
  runSynthesisPipeline,
} from "../ai";

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

export async function testExternalContradiction(
  primaryClaim: string,
  context?: string
) {
  try {
    const result = await externalContradictionAgent(primaryClaim, context);
    return { success: true, data: result };
  } catch (error) {
    console.error("Test failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function testInternalCritique(
  rawText: string,
  assumptions: string[],
  claims: string[]
) {
  try {
    const result = await internalCritiqueAgent(rawText, assumptions, claims);
    return { success: true, data: result };
  } catch (error) {
    console.error("Test failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function testSocraticGenerator(
  externalChallenge: any,
  internalChallenge: any,
  primaryThesis: string
) {
  try {
    const result = await socraticGeneratorAgent(
      externalChallenge,
      internalChallenge,
      primaryThesis
    );
    return { success: true, data: result };
  } catch (error) {
    console.error("Test failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

export async function testFullPipeline(rawText: string) {
  try {
    const result = await runSynthesisPipeline(rawText);
    return { success: true, data: result };
  } catch (error) {
    console.error("Test failed:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

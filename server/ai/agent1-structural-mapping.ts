import "server-only";
import { getFlashModel } from "./models";

// Agent 1 Output Type
export interface StructuralMappingOutput {
  claims: string[];
  assumptions: string[];
  primaryThesis: string;
}

/**
 * Agent 1: Structural Mapping Agent
 *
 * Purpose: Analyze the structure and foundation of the user's thinking without altering content
 * Model: Google Gemini 2.5 Flash (optimized for structured output tasks)
 *
 * Primary Tasks:
 * 1. Claim Extraction: Identify and extract up to 3 central, assertive claims (verbatim)
 * 2. Assumption Identification: Analyze unstated premises underlying the argument
 */
export async function structuralMappingAgent(
  rawText: string
): Promise<StructuralMappingOutput> {
  if (!process.env.GOOGLE_AI_API_KEY) {
    throw new Error("Google AI API key is not configured");
  }

  if (!rawText || rawText.trim().length === 0) {
    throw new Error("Raw text input is required");
  }

  const model = getFlashModel();

  const prompt = `
You are a structural analysis expert. Analyze the following text and extract its core structure without altering or interpreting the content.

Your task:
1. Extract up to 3 central, assertive CLAIMS made by the user (verbatim, no rephrasing)
2. Identify unstated ASSUMPTIONS underlying the argument
3. Determine the PRIMARY THESIS (main overarching argument)

Focus on claims that are most defensible/attackable. Preserve the user's exact wording.

Text to analyze:
${rawText}

Respond with valid JSON only:
{
  "claims": ["exact verbatim claim 1", "exact verbatim claim 2", "exact verbatim claim 3"],
  "assumptions": ["identified unstated assumption 1", "identified unstated assumption 2"],
  "primaryThesis": "user's main overarching argument"
}
`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    // Parse and validate JSON response
    const parsed = JSON.parse(response);

    // Basic validation
    if (!parsed.claims || !Array.isArray(parsed.claims)) {
      throw new Error("Invalid response: claims must be an array");
    }
    if (!parsed.assumptions || !Array.isArray(parsed.assumptions)) {
      throw new Error("Invalid response: assumptions must be an array");
    }
    if (!parsed.primaryThesis || typeof parsed.primaryThesis !== "string") {
      throw new Error("Invalid response: primaryThesis must be a string");
    }

    return {
      claims: parsed.claims.slice(0, 3), // Ensure max 3 claims
      assumptions: parsed.assumptions,
      primaryThesis: parsed.primaryThesis,
    };
  } catch (error) {
    console.error("Agent 1 (Structural Mapping) error:", error);

    if (error instanceof SyntaxError) {
      throw new Error("Failed to parse AI response as JSON");
    }

    throw new Error(
      `Structural mapping failed: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

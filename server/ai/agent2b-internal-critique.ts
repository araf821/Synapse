import "server-only";
import { getFlashModel } from "./models";

// Agent 2B Output Type
export interface InternalCritiqueOutput {
  logicalFlaw: string;
  vulnerableAssumption: string;
  blindSpot: string;
  flawType: string;
}

/**
 * Agent 2B: Antagonist Agent (Internal Critique)
 *
 * Purpose: Identify internal weaknesses in the user's reasoning and logic
 * Model: Google Gemini 2.5 Flash (cost-effective for logical analysis tasks)
 *
 * Primary Tasks:
 * 1. Logical Fallacy Detection: Scan for common reasoning errors
 * 2. Assumption Vulnerability Analysis: Test the robustness of identified assumptions
 * 3. Blind Spot Identification: Surface overlooked perspectives or considerations
 */
export async function internalCritiqueAgent(
  rawText: string,
  assumptions: string[],
  claims: string[]
): Promise<InternalCritiqueOutput> {
  if (!process.env.GOOGLE_AI_API_KEY) {
    throw new Error("Google AI API key is not configured");
  }

  if (!rawText || rawText.trim().length === 0) {
    throw new Error("Raw text input is required");
  }

  const model = getFlashModel();

  const prompt = `
You are a logical analysis expert. Analyze the following argument for internal weaknesses, logical flaws, and blind spots.

Common logical fallacies to check for:
- Strawman arguments, false dichotomies, ad hominem attacks
- Circular reasoning, slippery slope, appeal to authority
- Hasty generalizations, correlation/causation confusion
- Cherry picking, confirmation bias, false equivalence

Your task:
1. Identify the PRIMARY logical flaw or reasoning weakness
2. Find the most VULNERABLE assumption that could undermine the argument
3. Surface a significant BLIND SPOT or overlooked consideration

Original Text:
${rawText}

Identified Claims:
${claims.map((claim, i) => `${i + 1}. ${claim}`).join("\n")}

Identified Assumptions:
${assumptions.map((assumption, i) => `${i + 1}. ${assumption}`).join("\n")}

Analyze step-by-step:
1. What is the weakest link in the logical chain?
2. Which assumption is most questionable or context-dependent?
3. What important perspective or consideration is missing?

Respond with valid JSON only:
{
  "logicalFlaw": "Primary reasoning weakness identified (be specific and constructive)",
  "vulnerableAssumption": "Most questionable assumption that could undermine the argument",
  "blindSpot": "Significant overlooked consideration or alternative perspective",
  "flawType": "Category of logical issue (fallacy, assumption, perspective, evidence)"
}
`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    // Parse and validate JSON response
    const parsed = JSON.parse(response);

    // Basic validation
    if (!parsed.logicalFlaw || typeof parsed.logicalFlaw !== "string") {
      throw new Error("Invalid response: logicalFlaw must be a string");
    }
    if (
      !parsed.vulnerableAssumption ||
      typeof parsed.vulnerableAssumption !== "string"
    ) {
      throw new Error(
        "Invalid response: vulnerableAssumption must be a string"
      );
    }
    if (!parsed.blindSpot || typeof parsed.blindSpot !== "string") {
      throw new Error("Invalid response: blindSpot must be a string");
    }
    if (!parsed.flawType || typeof parsed.flawType !== "string") {
      throw new Error("Invalid response: flawType must be a string");
    }

    return {
      logicalFlaw: parsed.logicalFlaw,
      vulnerableAssumption: parsed.vulnerableAssumption,
      blindSpot: parsed.blindSpot,
      flawType: parsed.flawType,
    };
  } catch (error) {
    console.error("Agent 2B (Internal Critique) error:", error);

    if (error instanceof SyntaxError) {
      throw new Error("Failed to parse AI response as JSON");
    }

    throw new Error(
      `Internal critique analysis failed: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

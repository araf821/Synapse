import "server-only";
import { generateWithSearch } from "./models";
import { Type } from "@google/genai";

// Agent 2A Output Type
export interface ExternalContradictionOutput {
  counterArgument: string;
  sourceType: string;
  credibilityLevel: string;
  searchQueries: string[];
}

/**
 * Agent 2A: Antagonist Agent (External Contradiction)
 *
 * Purpose: Generate evidence-based external friction by finding credible contradictory information
 * Model: Google Gemini 2.5 Pro (superior web research and synthesis capabilities)
 *
 * Primary Tasks:
 * 1. Targeted Search: Use web search to find counter-arguments to the user's primary claim
 * 2. Evidence Synthesis: Summarize the strongest counter-argument found
 */
export async function externalContradictionAgent(
  primaryClaim: string,
  context?: string
): Promise<ExternalContradictionOutput> {
  if (!process.env.GOOGLE_AI_API_KEY) {
    throw new Error("Google AI API key is not configured");
  }

  if (!primaryClaim || primaryClaim.trim().length === 0) {
    throw new Error("Primary claim input is required");
  }

  const prompt = `
You are a research expert tasked with finding credible counter-evidence to challenge an argument.

Your task:
1. Search for and analyze credible sources that contradict the primary claim
2. Find the strongest opposing evidence from academic studies, reports, or expert opinions
3. Synthesize findings into a concise, accessible summary
4. Assess source credibility and type

Primary Claim to Challenge:
"${primaryClaim}"

${context ? `Additional Context:\n${context}` : ""}

Focus on:
- Academic studies, institutional reports, expert opinions
- Recent, relevant findings from credible sources
- Evidence that directly contradicts or weakens the claim
- Maintain academic rigor while ensuring readability

IMPORTANT: Provide your response in the following JSON format:
{
  "counterArgument": "A concise summary of the strongest counter-evidence found",
  "sourceType": "Type of source (e.g., 'Academic Study', 'Expert Opinion', 'Research Report')",
  "credibilityLevel": "High/Medium/Low based on source authority and methodology", 
  "searchQueries": ["query1", "query2", "query3"]
}

Ensure the JSON is valid and properly formatted.`;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      counterArgument: {
        type: Type.STRING,
      },
      sourceType: {
        type: Type.STRING,
      },
      credibilityLevel: {
        type: Type.STRING,
      },
      searchQueries: {
        type: Type.ARRAY,
        items: {
          type: Type.STRING,
        },
      },
    },
    propertyOrdering: [
      "counterArgument",
      "sourceType",
      "credibilityLevel",
      "searchQueries",
    ],
  };

  try {
    // Use Google Search to find counter-evidence (structured config removed due to API limitation)
    const result = await generateWithSearch(prompt);
    const response = result.text;

    if (!response) {
      throw new Error("No response received from AI model");
    }

    // Extract JSON from response (handle potential markdown formatting)
    let jsonText = response.trim();
    if (jsonText.includes("```json")) {
      const match = jsonText.match(/```json\s*([\s\S]*?)\s*```/);
      if (match) {
        jsonText = match[1];
      }
    } else if (jsonText.includes("```")) {
      const match = jsonText.match(/```\s*([\s\S]*?)\s*```/);
      if (match) {
        jsonText = match[1];
      }
    }

    // Parse and validate JSON response
    const parsed = JSON.parse(jsonText);

    // Basic validation
    if (!parsed.counterArgument || typeof parsed.counterArgument !== "string") {
      throw new Error("Invalid response: counterArgument must be a string");
    }
    if (!parsed.sourceType || typeof parsed.sourceType !== "string") {
      throw new Error("Invalid response: sourceType must be a string");
    }
    if (
      !parsed.credibilityLevel ||
      typeof parsed.credibilityLevel !== "string"
    ) {
      throw new Error("Invalid response: credibilityLevel must be a string");
    }
    if (!parsed.searchQueries || !Array.isArray(parsed.searchQueries)) {
      throw new Error("Invalid response: searchQueries must be an array");
    }

    return {
      counterArgument: parsed.counterArgument,
      sourceType: parsed.sourceType,
      credibilityLevel: parsed.credibilityLevel,
      searchQueries: parsed.searchQueries,
    };
  } catch (error) {
    console.error("Agent 2A (External Contradiction) error:", error);

    if (error instanceof SyntaxError) {
      throw new Error("Failed to parse AI response as JSON");
    }

    throw new Error(
      `External contradiction analysis failed: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

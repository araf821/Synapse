import "server-only";
import { getProModel } from "./models";

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

  const model = getProModel();

  // For MVP, we'll use Gemini Pro's built-in search capabilities
  // In production, this would integrate with Google Search API or Tavily API
  const prompt = `
You are a research expert tasked with finding credible counter-evidence to challenge an argument.

Your task:
1. Analyze the primary claim and identify potential counter-arguments
2. Find the strongest opposing evidence from credible sources
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

Respond with valid JSON only:
{
  "counterArgument": "Concise summary of strongest opposing evidence (2-3 sentences)",
  "sourceType": "Type of source (study, report, analysis, expert opinion, etc.)",
  "credibilityLevel": "Assessment of source reliability (high, medium, low)",
  "searchQueries": ["search query 1", "search query 2", "search query 3"]
}
`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    // Parse and validate JSON response
    const parsed = JSON.parse(response);

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

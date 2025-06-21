import "server-only";

import { generateStructuredWithFlash } from "./models";
import { Type } from "@google/genai";
import { ExternalContradictionOutput } from "./agent2a-external-contradiction";
import { InternalCritiqueOutput } from "./agent2b-internal-critique";

// Agent 3 Output Types - Aligned with database schema
export interface ChallengeCard {
  id: "counter-argument" | "hidden-assumption" | "devils-advocate";
  title: string;
  question: string;
  type: "counter-argument" | "hidden-assumption" | "devils-advocate";
  context?: string; // Maps to aiGeneratedContext in schema
  order: number; // Maps to order in schema
}

export interface SocraticGeneratorOutput {
  challengeCards: ChallengeCard[];
}

/**
 * Agent 3: Socratic Question Generator
 *
 * Purpose: Transform analytical outputs into engaging, human-readable Socratic challenges
 * Model: Google Gemini 2.5 Flash (cost-effective choice with adequate language generation)
 *
 * Primary Tasks:
 * 1. Question Crafting: Convert analytical findings into thought-provoking questions
 * 2. Tone Calibration: Ensure questions are challenging but not hostile
 * 3. Template Application: Apply consistent formatting for the three challenge types
 *
 * Output aligns with database schema: challengesTable
 */
export async function socraticGeneratorAgent(
  externalChallenge: ExternalContradictionOutput,
  internalChallenge: InternalCritiqueOutput,
  primaryThesis: string
): Promise<SocraticGeneratorOutput> {
  if (!process.env.GOOGLE_AI_API_KEY) {
    throw new Error("Google AI API key is not configured");
  }

  if (!externalChallenge || !internalChallenge || !primaryThesis) {
    throw new Error("All challenge inputs are required");
  }

  const prompt = `
You are a Socratic dialogue expert. Transform analytical findings into engaging, thought-provoking questions that challenge thinking without being hostile.

Your task is to create exactly 3 challenge questions using these templates:

CHALLENGE 1 - The Counter-Argument (External):
Template: "A recent [SOURCE_TYPE] argues the opposite. It says [COUNTER_ARGUMENT]. How do you defend your position against this new evidence?"

CHALLENGE 2 - The Hidden Assumption (Internal):
Template: "Your argument appears to rest on the assumption that [VULNERABLE_ASSUMPTION]. Is this always true? What happens to your argument if this assumption is false?"

CHALLENGE 3 - The Devil's Advocate (Self-Reflection):
Template: "If you had to argue against your own main point, what would be the strongest single argument you would use?"

Input Data:
External Challenge:
- Counter Argument: ${externalChallenge.counterArgument}
- Source Type: ${externalChallenge.sourceType}
- Credibility: ${externalChallenge.credibilityLevel}

Internal Challenge:
- Logical Flaw: ${internalChallenge.logicalFlaw}
- Vulnerable Assumption: ${internalChallenge.vulnerableAssumption}
- Blind Spot: ${internalChallenge.blindSpot}

Primary Thesis: ${primaryThesis}

Requirements:
- Questions should be challenging but respectful
- Use accessible language, avoid academic jargon
- Each question should be 1-2 sentences maximum
- Maintain intellectual honesty - no "gotcha" questions
- Include context for the counter-argument challenge

CRITICAL: You must respond with exactly this JSON structure:
{
  "challengeCards": [
    {
      "id": "counter-argument",
      "title": "The Counter-Argument",
      "question": "Your counter-argument question here",
      "type": "counter-argument",
      "context": "Context about the source and evidence",
      "order": 1
    },
    {
      "id": "hidden-assumption",
      "title": "The Hidden Assumption",
      "question": "Your assumption challenge question here",
      "type": "hidden-assumption",
      "context": "Context about the assumption",
      "order": 2
    },
    {
      "id": "devils-advocate",
      "title": "The Devil's Advocate",
      "question": "Your self-reflection question here",
      "type": "devils-advocate",
      "context": "Context for self-reflection",
      "order": 3
    }
  ]
}

The id and type fields MUST be exactly: "counter-argument", "hidden-assumption", or "devils-advocate".`;

  const responseSchema = {
    type: Type.OBJECT,
    properties: {
      challengeCards: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: {
              type: Type.STRING,
            },
            title: {
              type: Type.STRING,
            },
            question: {
              type: Type.STRING,
            },
            type: {
              type: Type.STRING,
            },
            context: {
              type: Type.STRING,
            },
            order: {
              type: Type.NUMBER,
            },
          },
          propertyOrdering: [
            "id",
            "title",
            "question",
            "type",
            "context",
            "order",
          ],
        },
      },
    },
    propertyOrdering: ["challengeCards"],
  };

  try {
    const result = await generateStructuredWithFlash(prompt, responseSchema);
    const response = result.text;

    if (!response) {
      throw new Error("No response received from AI model");
    }

    // Parse and validate JSON response
    const parsed = JSON.parse(response);

    // Basic validation
    if (!parsed.challengeCards || !Array.isArray(parsed.challengeCards)) {
      throw new Error("Invalid response: challengeCards must be an array");
    }

    if (parsed.challengeCards.length !== 3) {
      throw new Error(
        "Invalid response: must contain exactly 3 challenge cards"
      );
    }

    const validTypes = [
      "counter-argument",
      "hidden-assumption",
      "devils-advocate",
    ];

    // Validate each challenge card
    for (const card of parsed.challengeCards) {
      if (!card.id || !validTypes.includes(card.id)) {
        throw new Error("Invalid response: each card must have a valid id");
      }
      if (!card.title || typeof card.title !== "string") {
        throw new Error("Invalid response: each card must have a string title");
      }
      if (!card.question || typeof card.question !== "string") {
        throw new Error(
          "Invalid response: each card must have a string question"
        );
      }
      if (!card.type || !validTypes.includes(card.type)) {
        throw new Error("Invalid response: each card must have a valid type");
      }
      if (typeof card.order !== "number" || card.order < 1 || card.order > 3) {
        throw new Error(
          "Invalid response: each card must have a valid order (1-3)"
        );
      }
    }

    return {
      challengeCards: parsed.challengeCards,
    };
  } catch (error) {
    console.error("Agent 3 (Socratic Generator) error:", error);

    if (error instanceof SyntaxError) {
      throw new Error("Failed to parse AI response as JSON");
    }

    throw new Error(
      `Socratic question generation failed: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
}

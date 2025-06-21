import "server-only";
import {
  structuralMappingAgent,
  StructuralMappingOutput,
} from "./agent1-structural-mapping";
import {
  externalContradictionAgent,
  ExternalContradictionOutput,
} from "./agent2a-external-contradiction";
import {
  internalCritiqueAgent,
  InternalCritiqueOutput,
} from "./agent2b-internal-critique";
import {
  socraticGeneratorAgent,
  SocraticGeneratorOutput,
  ChallengeCard,
} from "./agent3-socratic-generator";

// Pipeline Output Type - Aligned with database schema
export interface SynthesisPipelineOutput {
  challengeCards: ChallengeCard[];
  metadata: {
    structuralAnalysis: StructuralMappingOutput;
    externalChallenge: ExternalContradictionOutput;
    internalChallenge: InternalCritiqueOutput;
    processingTime: number;
    success: boolean;
  };
}

/**
 * Main Synthesis Pipeline Orchestration
 *
 * Coordinates the four-agent pipeline that transforms user input through:
 * 1. Agent 1: Structural Mapping (sequential)
 * 2. Agent 2A & 2B: External & Internal Challenges (parallel)
 * 3. Agent 3: Socratic Question Generation (final synthesis)
 *
 * @param rawText - User's brain dump from Stage 1
 * @returns Three polished Challenge Cards for Stage 2, aligned with database schema
 */
export async function runSynthesisPipeline(
  rawText: string
): Promise<SynthesisPipelineOutput> {
  const startTime = Date.now();

  try {
    if (!rawText || rawText.trim().length === 0) {
      throw new Error("Raw text input is required for synthesis pipeline");
    }

    // Step 1: Structural Analysis (Sequential - required for next steps)
    console.log("🔍 Running Agent 1: Structural Mapping...");
    const structuralAnalysis = await structuralMappingAgent(rawText);

    // Step 2: Parallel Challenge Generation (2A and 2B can run simultaneously)
    console.log("⚔️ Running Agents 2A & 2B: Challenge Generation...");
    const [externalChallenge, internalChallenge] = await Promise.all([
      externalContradictionAgent(
        structuralAnalysis.primaryThesis,
        rawText.substring(0, 500) // Provide context but limit length
      ),
      internalCritiqueAgent(
        rawText,
        structuralAnalysis.assumptions,
        structuralAnalysis.claims
      ),
    ]);

    // Step 3: Socratic Question Generation (Final synthesis)
    console.log("🎯 Running Agent 3: Socratic Question Generation...");
    const socraticOutput = await socraticGeneratorAgent(
      externalChallenge,
      internalChallenge,
      structuralAnalysis.primaryThesis
    );

    const processingTime = Date.now() - startTime;

    console.log(`✅ Synthesis pipeline completed in ${processingTime}ms`);

    return {
      challengeCards: socraticOutput.challengeCards,
      metadata: {
        structuralAnalysis,
        externalChallenge,
        internalChallenge,
        processingTime,
        success: true,
      },
    };
  } catch (error) {
    const processingTime = Date.now() - startTime;

    console.error("❌ Synthesis pipeline failed:", error);

    // Graceful degradation - provide generic but functional challenges
    const fallbackChallengeCards: ChallengeCard[] = [
      {
        id: "counter-argument",
        title: "The Counter-Argument",
        question:
          "What would someone who disagrees with your main point say? How would you respond to their strongest objection?",
        type: "counter-argument",
        context:
          "Generic counter-argument challenge due to AI processing error",
        order: 1,
      },
      {
        id: "hidden-assumption",
        title: "The Hidden Assumption",
        question:
          "What assumptions is your argument built on? What happens if one of these assumptions turns out to be false?",
        type: "hidden-assumption",
        order: 2,
      },
      {
        id: "devils-advocate",
        title: "The Devil's Advocate",
        question:
          "If you had to argue against your own position, what would be your strongest counter-argument?",
        type: "devils-advocate",
        order: 3,
      },
    ];

    return {
      challengeCards: fallbackChallengeCards,
      metadata: {
        structuralAnalysis: {
          claims: ["Unable to extract claims due to processing error"],
          assumptions: [
            "Unable to identify assumptions due to processing error",
          ],
          primaryThesis:
            "Unable to determine primary thesis due to processing error",
        },
        externalChallenge: {
          counterArgument:
            "External research unavailable due to processing error",
          sourceType: "error",
          credibilityLevel: "unknown",
          searchQueries: [],
        },
        internalChallenge: {
          logicalFlaw:
            "Unable to analyze logical structure due to processing error",
          vulnerableAssumption:
            "Unable to identify vulnerable assumptions due to processing error",
          blindSpot: "Unable to identify blind spots due to processing error",
          flawType: "error",
        },
        processingTime,
        success: false,
      },
    };
  }
}

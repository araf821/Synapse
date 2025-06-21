import "server-only";

// Export all AI agents from their individual files
export {
  structuralMappingAgent,
  type StructuralMappingOutput,
} from "./ai/agent1-structural-mapping";

export {
  externalContradictionAgent,
  type ExternalContradictionOutput,
} from "./ai/agent2a-external-contradiction";

export {
  internalCritiqueAgent,
  type InternalCritiqueOutput,
} from "./ai/agent2b-internal-critique";

export {
  socraticGeneratorAgent,
  type SocraticGeneratorOutput,
  type ChallengeCard,
} from "./ai/agent3-socratic-generator";

// Main pipeline orchestration function
export {
  runSynthesisPipeline,
  type SynthesisPipelineOutput,
} from "./ai/synthesis-pipeline";

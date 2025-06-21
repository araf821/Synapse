import "server-only";

// Export all AI agents from their individual files
export {
  structuralMappingAgent,
  type StructuralMappingOutput,
} from "./ai/agent1-structural-mapping";

// TODO: Add other agents as they are implemented
// export { externalContradictionAgent } from './ai/agent2a-external-contradiction';
// export { internalCritiqueAgent } from './ai/agent2b-internal-critique';
// export { socraticQuestionGenerator } from './ai/agent3-socratic-questions';

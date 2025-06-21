// Synthesis Server Actions - Complete API for the 3-stage synthesis workflow
// Connects the AI pipeline to the user interface

// Stage 1: Brain Dump
export { createSynthesis } from "./create-synthesis";
export { saveBrainDump, progressToStage2 } from "./save-brain-dump";

// Stage 2: AI Gauntlet
export { generateChallenges } from "./generate-challenges";
export {
  saveChallengeResponse,
  saveAllChallengeResponses,
  progressToStage3,
} from "./save-challenge-responses";

// Stage 3: Final Synthesis
export {
  saveFinalSynthesis,
  completeSynthesis,
  completeSynthesisAndRedirect,
} from "./complete-synthesis";

// Data Fetching
export {
  getSynthesis,
  getSynthesisWithChallenges,
  getUserSyntheses,
} from "./get-synthesis";

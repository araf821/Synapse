import "server-only";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Google AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY!);

// Model configurations as specified in synthesis-feature.md
export const MODELS = {
  FLASH: "gemini-2.5-flash",
  PRO: "gemini-2.5-pro",
} as const;

// Get model instances
export function getFlashModel() {
  return genAI.getGenerativeModel({ model: MODELS.FLASH });
}

export function getProModel() {
  return genAI.getGenerativeModel({ model: MODELS.PRO });
}

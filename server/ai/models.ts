import "server-only";
import { GoogleGenAI } from "@google/genai";

/**
 * AI Model Configuration for Synapse Synthesis Pipeline
 *
 * Uses Google Gemini models as specified in synthesis-feature.md:
 * - Gemini 2.5 Flash: Cost-effective for structured output (Agents 1, 2B, 3)
 * - Gemini 2.5 Pro: Superior capabilities for research (Agent 2A)
 */

// Initialize Google AI client
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_AI_API_KEY! });

// Model configurations as specified in synthesis-feature.md
export const MODELS = {
  FLASH: "gemini-2.5-flash",
  PRO: "gemini-2.5-pro",
} as const;

/**
 * Get AI client instance for basic operations
 */
export function getAI() {
  return ai;
}

/**
 * Generate content with Gemini 2.5 Flash
 * Used by: Agent 1 (Structural Mapping), Agent 2B (Internal Critique), Agent 3 (Socratic Generator)
 */
export async function generateWithFlash(contents: string, config?: any) {
  return await ai.models.generateContent({
    model: MODELS.FLASH,
    contents,
    config,
  });
}

/**
 * Generate content with Gemini 2.5 Pro
 * Used by: Agent 2A (External Contradiction) - requires superior research capabilities
 */
export async function generateWithPro(contents: string, config?: any) {
  return await ai.models.generateContent({
    model: MODELS.PRO,
    contents,
    config,
  });
}

/**
 * Generate content with Gemini 2.5 Flash + Google Search
 * Used by: Agent 2A (External Contradiction) for web search capabilities
 */
export async function generateWithSearch(contents: string, config?: any) {
  const groundingTool = {
    googleSearch: {},
  };

  const searchConfig = {
    tools: [groundingTool],
    ...config,
  };

  return await ai.models.generateContent({
    model: MODELS.FLASH,
    contents,
    config: searchConfig,
  });
}

/**
 * Generate structured JSON content with Gemini 2.5 Flash
 * Used by: All agents for structured output
 */
export async function generateStructuredWithFlash(
  contents: string,
  responseSchema: any,
  config?: any
) {
  const structuredConfig = {
    responseMimeType: "application/json",
    responseSchema,
    ...config,
  };

  return await ai.models.generateContent({
    model: MODELS.FLASH,
    contents,
    config: structuredConfig,
  });
}

/**
 * Generate structured JSON content with Gemini 2.5 Pro
 * Used by: Agent 2A for structured output with superior capabilities
 */
export async function generateStructuredWithPro(
  contents: string,
  responseSchema: any,
  config?: any
) {
  const structuredConfig = {
    responseMimeType: "application/json",
    responseSchema,
    ...config,
  };

  return await ai.models.generateContent({
    model: MODELS.PRO,
    contents,
    config: structuredConfig,
  });
}

import { z } from "zod";

export const newSynthesisSchema = z.object({
  title: z.string().trim().optional(),
});

export type NewSynthesisFormData = z.infer<typeof newSynthesisSchema>;

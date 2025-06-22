"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Save,
  CheckCircle,
  Brain,
  Target,
  FileText,
  Clock,
} from "lucide-react";
import { z } from "zod";
import { Synthesis, Challenge } from "@/server/db/schema";
import {
  saveFinalSynthesis,
  completeSynthesisAndRedirect,
} from "@/server/actions/synthesis";
import { useRouter } from "next/navigation";
import { SynapseIcon } from "../ui/synapse-icon";

const finalSynthesisSchema = z.object({
  content: z
    .string()
    .trim()
    .min(1, "Please write your final synthesis before completing"),
});

type FinalSynthesisFormData = z.infer<typeof finalSynthesisSchema>;

interface FinalSynthesisEditorProps {
  synthesisId: string;
  synthesis: Synthesis;
  challenges: Challenge[];
}

const challengeTypeInfo = {
  "counter-argument": {
    title: "The Counter-Argument",
    color: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
  },
  "hidden-assumption": {
    title: "The Hidden Assumption",
    color:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400",
  },
  "devils-advocate": {
    title: "The Devil's Advocate",
    color:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
  },
};

export function FinalSynthesisEditor({
  synthesisId,
  synthesis,
  challenges,
}: FinalSynthesisEditorProps) {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<FinalSynthesisFormData>({
    resolver: zodResolver(finalSynthesisSchema),
    defaultValues: {
      content: synthesis.finalText || "",
    },
  });

  const content = form.watch("content");
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const hasContent = content.trim().length > 0;

  const handleSave = (data: FinalSynthesisFormData) => {
    startTransition(async () => {
      try {
        await saveFinalSynthesis(synthesisId, data.content);
        setLastSaved(new Date());
      } catch (error) {
        console.error("Failed to save:", error);
      }
    });
  };

  const handleComplete = () => {
    startTransition(async () => {
      try {
        // Save the final content first, then complete the synthesis
        await saveFinalSynthesis(synthesisId, content);
        await completeSynthesisAndRedirect(synthesisId);
        router.push("/dashboard");
      } catch (error) {
        console.error("Failed to complete synthesis:", error);
      }
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Reference Materials */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
            <Target className="size-4 sm:size-5" />
            Reference Materials
          </CardTitle>
          <p className="text-sm text-muted-foreground sm:text-base">
            Review your original thoughts and challenge responses to craft a
            stronger argument.
          </p>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="w-full">
            {/* Original Brain Dump */}
            <AccordionItem value="brain-dump">
              <AccordionTrigger className="py-3 hover:no-underline sm:py-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Badge
                    variant="outline"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                  >
                    <Brain className="mr-1 size-3" />
                    <span className="text-xs sm:text-sm">
                      Original Brain Dump
                    </span>
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 sm:pt-3 sm:pb-6">
                <div className="rounded-lg bg-muted/50 p-3 sm:p-4">
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {synthesis.rawText || "No original content available"}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Challenge Responses */}
            {challenges.map((challenge, index) => {
              const typeInfo = challengeTypeInfo[challenge.type];
              return (
                <AccordionItem key={challenge.id} value={`challenge-${index}`}>
                  <AccordionTrigger className="py-3 hover:no-underline sm:py-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Badge
                        variant="outline"
                        className={`${typeInfo.color} text-xs sm:text-sm`}
                      >
                        Challenge {index + 1}: {typeInfo.title}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 pt-2 pb-4 sm:space-y-4 sm:pt-3 sm:pb-6">
                    <div>
                      <h4 className="mb-1 text-xs font-medium sm:mb-2 sm:text-sm">
                        AI Challenge:
                      </h4>
                      <div className="rounded-lg bg-muted/50 p-3">
                        <p className="text-xs text-muted-foreground sm:text-sm">
                          {challenge.aiGeneratedQuestion}
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-1 text-xs font-medium sm:mb-2 sm:text-sm">
                        Your Response:
                      </h4>
                      <div className="rounded-lg bg-muted/50 p-3">
                        <p className="text-xs leading-relaxed whitespace-pre-wrap sm:text-sm">
                          {challenge.userResponse || "No response provided"}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>

      {/* Final Synthesis Editor */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-4 sm:pb-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
              <CheckCircle className="size-4 sm:size-5" />
              Your Final Synthesis
            </CardTitle>
            <div className="flex items-center gap-3 text-xs text-muted-foreground sm:gap-4 sm:text-sm">
              {wordCount > 0 && (
                <span className="flex items-center gap-1">
                  <FileText className="size-3" />
                  {wordCount} words
                </span>
              )}
              {lastSaved && (
                <span className="flex items-center gap-1">
                  <Clock className="size-3" />
                  <span className="hidden sm:inline">Saved </span>
                  {lastSaved.toLocaleTimeString()}
                </span>
              )}
            </div>
          </div>
          <p className="text-sm text-muted-foreground sm:text-base">
            Synthesize your original thinking with your challenge responses into
            a refined, stronger argument.
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSave)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Write your final synthesis here... How has your thinking evolved? What new insights emerged from the challenges? How do you address the counter-arguments?"
                        className="min-h-[300px] resize-none text-base leading-relaxed sm:min-h-[400px] lg:text-lg"
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                <Button
                  type="submit"
                  variant="outline"
                  disabled={isPending || !hasContent}
                  className="sm:w-auto"
                >
                  <Save className="mr-2 size-4" />
                  {isPending ? "Saving..." : "Save Draft"}
                </Button>

                <Button
                  type="button"
                  onClick={handleComplete}
                  disabled={isPending || !hasContent}
                  className="sm:w-auto"
                >
                  <CheckCircle className="mr-2 size-4" />
                  Complete Synthesis
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Completion Guidelines */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-4 sm:pb-6">
          <CardTitle className="text-base sm:text-lg">
            Synthesis Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Badge variant="outline" className="shrink-0 text-xs">
                ✓
              </Badge>
              <span>Address the challenges directly</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Badge variant="outline" className="shrink-0 text-xs">
                ✓
              </Badge>
              <span>Integrate original and new thinking</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Badge variant="outline" className="shrink-0 text-xs">
                ✓
              </Badge>
              <span>Acknowledge counterarguments</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <Badge variant="outline" className="shrink-0 text-xs">
                ✓
              </Badge>
              <span>Present a cohesive argument</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Help Text */}
      <p className="text-center text-sm text-balance text-muted-foreground">
        Your final synthesis should demonstrate how your thinking has evolved
        through the challenge process. Show how you&apos;ve addressed weaknesses
        and strengthened your argument.
      </p>

      <SynapseIcon className="mx-auto size-12 text-primary" />
    </div>
  );
}

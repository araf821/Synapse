"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Loader2,
  Brain,
  Lightbulb,
  Eye,
  ArrowRight,
  Save,
  Target,
} from "lucide-react";
import { Synthesis, Challenge } from "@/server/db/schema";
import {
  generateChallenges,
  saveChallengeResponse,
  progressToStage3,
} from "@/server/actions/synthesis";
import { useRouter } from "next/navigation";
import { AIProcessingOverlay } from "./ai-processing-overlay";

interface ChallengeInterfaceProps {
  synthesisId: string;
  synthesis: Synthesis;
  challenges: Challenge[];
}

const challengeTypeInfo = {
  "counter-argument": {
    title: "The Counter-Argument",
    icon: <Eye className="size-4" />,
    color: "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400",
    description: "External evidence that challenges your position",
  },
  "hidden-assumption": {
    title: "The Hidden Assumption",
    icon: <Brain className="size-4" />,
    color:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400",
    description: "Questioning your underlying beliefs",
  },
  "devils-advocate": {
    title: "The Devil's Advocate",
    icon: <Lightbulb className="size-4" />,
    color:
      "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400",
    description: "Argue against your own position",
  },
};

export function ChallengeInterface({
  synthesisId,
  synthesis,
  challenges,
}: ChallengeInterfaceProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [responses, setResponses] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    challenges.forEach(challenge => {
      initial[challenge.id] = challenge.userResponse || "";
    });
    return initial;
  });
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const hasNoChallenges = challenges.length === 0;
  const allResponsesComplete =
    challenges.length > 0 &&
    challenges.every(challenge => responses[challenge.id]?.trim().length > 0);

  const handleGenerateChallenges = async () => {
    setIsGenerating(true);
    try {
      await generateChallenges(synthesisId);
      // Refresh the page to show generated challenges
      window.location.reload();
    } catch (error) {
      console.error("Failed to generate challenges:", error);
      setIsGenerating(false);
    }
    // Note: Don't set setIsGenerating(false) on success since we're reloading the page
  };

  const handleSaveResponse = async (challengeId: string) => {
    if (!responses[challengeId]?.trim()) return;

    startTransition(async () => {
      try {
        await saveChallengeResponse(
          synthesisId,
          challengeId,
          responses[challengeId]
        );
      } catch (error) {
        console.error("Failed to save response:", error);
      }
    });
  };

  const handleProgressToStage3 = () => {
    startTransition(async () => {
      try {
        await progressToStage3(synthesisId);
        router.push(`/synthesis/${synthesisId}/stage3`);
      } catch (error) {
        console.error("Failed to progress to stage 3:", error);
      }
    });
  };

  if (hasNoChallenges) {
    return (
      <>
        <AIProcessingOverlay isVisible={isGenerating} />
        <div className="space-y-6">
          {/* Brain Dump Display */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="size-5" />
                Your Brain Dump
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-muted/50 p-4 text-muted-foreground">
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {synthesis.rawText || "No content available"}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Generate Challenges Button */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="space-y-4 text-center">
                <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
                  <Target className="size-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    Ready for the Challenge?
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Our AI will analyze your thinking and generate three
                    targeted challenges to strengthen your argument.
                  </p>
                </div>
                <Button
                  onClick={handleGenerateChallenges}
                  disabled={isGenerating}
                  size="lg"
                  className="mt-4"
                >
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 size-5 animate-spin" />
                      Forging Counter-Arguments...
                    </>
                  ) : (
                    <>
                      <Brain className="mr-2 size-5" />
                      Generate AI Challenges
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <div className="space-y-6">
      {/* Challenges */}
      {challenges.map((challenge, index) => {
        const typeInfo = challengeTypeInfo[challenge.type];
        return (
          <Card
            key={challenge.id}
            className="border-border/50 bg-card/50 backdrop-blur-sm"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className={typeInfo.color}>
                    {typeInfo.icon}
                    <span className="ml-1">Challenge {index + 1}</span>
                  </Badge>
                  <h3 className="font-semibold">{typeInfo.title}</h3>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {typeInfo.description}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* AI Generated Question */}
              <div className="rounded-lg border bg-muted/50 p-4">
                <p className="text-sm leading-relaxed font-medium text-foreground">
                  {challenge.aiGeneratedQuestion}
                </p>
                {challenge.aiGeneratedContext && (
                  <div className="mt-3 border-t border-border/50 pt-3">
                    <p className="text-xs text-muted-foreground">
                      {challenge.aiGeneratedContext}
                    </p>
                  </div>
                )}
              </div>

              {/* User Response */}
              <div className="space-y-3">
                <label className="text-sm font-medium">Your Response</label>
                <Textarea
                  value={responses[challenge.id] || ""}
                  onChange={e =>
                    setResponses(prev => ({
                      ...prev,
                      [challenge.id]: e.target.value,
                    }))
                  }
                  placeholder="Write your thoughtful response to this challenge..."
                  className="min-h-[120px] resize-none"
                  disabled={isPending}
                />
                <div className="flex justify-end">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSaveResponse(challenge.id)}
                    disabled={isPending || !responses[challenge.id]?.trim()}
                  >
                    <Save className="mr-2 size-3" />
                    Save Response
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}

      {/* Progress to Stage 3 */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Challenges completed:</span>
              <Badge variant="outline">
                {
                  challenges.filter(c => responses[c.id]?.trim().length > 0)
                    .length
                }{" "}
                / {challenges.length}
              </Badge>
            </div>
            <Button
              onClick={handleProgressToStage3}
              disabled={isPending || !allResponsesComplete}
              size="lg"
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 size-5 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  Proceed to Final Synthesis
                  <ArrowRight className="ml-2 size-5" />
                </>
              )}
            </Button>
            {!allResponsesComplete && (
              <p className="text-sm text-muted-foreground">
                Complete all challenge responses to proceed
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

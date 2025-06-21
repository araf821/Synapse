"use client";

import { useEffect, useState } from "react";
import { SynapseIcon } from "@/components/ui/synapse-icon";
import { Card, CardContent } from "@/components/ui/card";

interface AIProcessingOverlayProps {
  isVisible: boolean;
}

const processingSteps = [
  {
    id: "analyzing",
    title: "Analyzing Your Thoughts",
    subtitle: "Agent 1: Structural Mapping",
    description:
      "Extracting your core claims, assumptions, and primary thesis...",
    duration: 3000,
  },
  {
    id: "researching",
    title: "Researching Counter-Evidence",
    subtitle: "Agent 2A: External Contradiction",
    description: "Searching for credible opposing arguments and evidence...",
    duration: 4000,
  },
  {
    id: "critiquing",
    title: "Analyzing Internal Logic",
    subtitle: "Agent 2B: Internal Critique",
    description: "Identifying logical fallacies and vulnerable assumptions...",
    duration: 3500,
  },
  {
    id: "generating",
    title: "Forging Challenges",
    subtitle: "Agent 3: Socratic Generator",
    description:
      "Crafting three provocative challenges to test your thinking...",
    duration: 2500,
  },
  {
    id: "finalizing",
    title: "Preparing Your Gauntlet",
    subtitle: "Final Processing",
    description: "Organizing challenges for maximum cognitive impact...",
    duration: 2000,
  },
];

const finalizingMessages = [
  "The AI is working overtime trying to find flaws in your argument...",
  "Your thinking is so solid, our agents are having to dig deeper...",
  "Getting everything ready... This is going to be good! 🔥",
  "The AI is triple-checking its counter-arguments because you're tough to crack...",
  "Almost there! Your challenges are being perfectly calibrated...",
  "The agents are impressed with your reasoning. Preparing the gauntlet...",
  "Final touches being applied to your intellectual sparring partners...",
];

export function AIProcessingOverlay({ isVisible }: AIProcessingOverlayProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFinalizingPhase, setIsFinalizingPhase] = useState(false);
  const [finalizingMessageIndex, setFinalizingMessageIndex] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCurrentStep(0);
      setProgress(0);
      setIsFinalizingPhase(false);
      setFinalizingMessageIndex(0);
      return;
    }

    let stepTimeout: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;
    let messageInterval: NodeJS.Timeout;

    const startStep = (stepIndex: number) => {
      if (stepIndex >= processingSteps.length) {
        // All steps completed, enter finalizing phase
        setIsFinalizingPhase(true);

        // Start cycling through finalizing messages
        messageInterval = setInterval(() => {
          setFinalizingMessageIndex(
            prev => (prev + 1) % finalizingMessages.length
          );
        }, 2000); // Change message every 2 seconds

        return;
      }

      setCurrentStep(stepIndex);
      setProgress(0);

      const step = processingSteps[stepIndex];
      const progressIncrement = 100 / (step.duration / 50); // Update every 50ms

      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + progressIncrement;
        });
      }, 50);

      stepTimeout = setTimeout(() => {
        clearInterval(progressInterval);
        startStep(stepIndex + 1);
      }, step.duration);
    };

    startStep(0);

    return () => {
      clearTimeout(stepTimeout);
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const currentStepData = processingSteps[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <Card className="w-full max-w-md border-border/50 bg-card/90 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          {/* Spinning Synapse Icon */}
          <div className="mb-6 flex justify-center">
            <div className="animate-spin">
              <SynapseIcon size={64} className="text-primary drop-shadow-lg" />
            </div>
          </div>

          {isFinalizingPhase ? (
            /* Finalizing Phase Content */
            <div className="mb-6 space-y-4">
              <div className="text-xs font-medium tracking-wider text-primary uppercase">
                Almost Ready
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Getting Things Ready...
              </h3>
              <p className="text-sm text-muted-foreground">
                {finalizingMessages[finalizingMessageIndex]}
              </p>

              {/* Finalizing Animation - All steps complete */}
              <div className="mt-6 flex justify-center gap-2">
                {processingSteps.map((_, index) => (
                  <div
                    key={index}
                    className="h-2 w-2 animate-pulse rounded-full bg-primary"
                  />
                ))}
              </div>

              <div className="mt-6 text-xs text-muted-foreground">
                <p>The gauntlet is being prepared...</p>
                <p>This is going to be intense! 💪</p>
              </div>
            </div>
          ) : (
            /* Normal Processing Phase Content */
            <>
              {/* Current Step Info */}
              <div className="mb-6 space-y-2">
                <div className="text-xs font-medium tracking-wider text-primary uppercase">
                  {currentStepData?.subtitle}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {currentStepData?.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {currentStepData?.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-4 space-y-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>
                    Step {currentStep + 1} of {processingSteps.length}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-primary transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Step Indicators */}
              <div className="flex justify-center gap-2">
                {processingSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full transition-colors ${
                      index < currentStep
                        ? "bg-primary"
                        : index === currentStep
                          ? "bg-primary/50"
                          : "bg-muted"
                    }`}
                  />
                ))}
              </div>

              {/* Motivational Text */}
              <div className="mt-6 text-xs text-muted-foreground">
                <p>Your ideas are about to be challenged.</p>
                <p>This is where thinking gets stronger.</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface StageHeaderProps {
  stage: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  synthesisId: string;
  synthesisTitle: string;
}

export function StageHeader({
  stage,
  title,
  description,
  icon,
  synthesisId,
  synthesisTitle,
}: StageHeaderProps) {
  return (
    <div className="space-y-6">
      {/* Back to Dashboard */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 size-4" />
            Dashboard
          </Link>
        </Button>
        <span className="text-muted-foreground">/</span>
        <span className="text-sm text-muted-foreground">{synthesisTitle}</span>
      </div>

      {/* Stage Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-xs font-medium">
                Stage {stage} of 3
              </Badge>
            </div>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground">
              {title}
            </h1>
          </div>
        </div>

        <p className="max-w-3xl text-lg text-muted-foreground">{description}</p>
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          {[1, 2, 3].map(stepNumber => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`flex size-8 items-center justify-center rounded-full text-xs font-medium transition-colors ${
                  stepNumber === stage
                    ? "bg-primary text-primary-foreground"
                    : stepNumber < stage
                      ? "bg-primary/20 text-primary"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div
                  className={`mx-2 h-0.5 w-8 transition-colors ${
                    stepNumber < stage ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <span className="ml-3 text-sm text-muted-foreground">
          {stage === 1 && "Brain Dump"}
          {stage === 2 && "AI Gauntlet"}
          {stage === 3 && "Final Synthesis"}
        </span>
      </div>
    </div>
  );
}

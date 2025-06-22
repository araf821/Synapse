import { Badge } from "@/components/ui/badge";
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
  synthesisTitle,
}: StageHeaderProps) {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Back Navigation */}
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <Link
          href="/dashboard"
          className="group flex items-center gap-2 text-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
          <span className="hidden sm:inline">Dashboard</span>
          <span className="sm:hidden">Back</span>
        </Link>
        <span>/</span>
        <span className="max-w-[10rem] truncate sm:max-w-none">
          {synthesisTitle}
        </span>
      </div>

      {/* Main Header Content */}
      <div className="space-y-4 sm:space-y-6">
        {/* Title Section */}
        <div className="flex items-start gap-4 sm:gap-6">
          <div className="flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 shadow-sm sm:size-14 sm:rounded-2xl">
            <div className="text-primary">{icon}</div>
          </div>
          <div className="flex-1 space-y-2 sm:space-y-3">
            <div className="flex items-center gap-3">
              <Badge
                variant="outline"
                className="border-primary/20 bg-primary/5 px-2 py-0.5 text-xs text-primary sm:px-3 sm:py-1 sm:text-sm"
              >
                Stage {stage} of 3
              </Badge>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                {title}
              </h1>
              <p className="max-w-2xl text-sm font-light text-muted-foreground sm:text-base lg:text-lg">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="flex flex-col gap-3 rounded-xl border border-border/50 bg-card/50 p-3 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-4">
          <div className="flex items-center justify-center gap-2 sm:justify-start sm:gap-4">
            {[1, 2, 3].map((stepNumber, index) => (
              <div key={stepNumber} className="flex items-center">
                <div className="relative">
                  <div
                    className={`flex size-8 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 sm:size-10 sm:text-sm ${
                      stepNumber === stage
                        ? "bg-primary text-primary-foreground shadow-md"
                        : stepNumber < stage
                          ? "bg-primary/20 text-primary ring-2 ring-primary/20"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber === stage && (
                    <div className="absolute -inset-1 rounded-full bg-primary/20 blur-sm"></div>
                  )}
                </div>
                {index < 2 && (
                  <div
                    className={`mx-2 h-0.5 w-8 rounded-full transition-all duration-500 sm:mx-4 sm:w-16 ${
                      stepNumber < stage ? "bg-primary" : "bg-muted"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center text-xs font-semibold text-muted-foreground sm:text-left sm:text-sm">
            {stage === 1 && "Brain Dump"}
            {stage === 2 && "AI Gauntlet"}
            {stage === 3 && "Final Synthesis"}
          </div>
        </div>
      </div>
    </div>
  );
}

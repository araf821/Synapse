import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Synthesis } from "@/server/db/schema";
import {
  Calendar,
  Clock,
  ArrowRight,
  Brain,
  Target,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { formatDistanceToNow } from "date-fns";

interface SynthesisCardProps {
  synthesis: Synthesis;
}

function getStageInfo(stage: string) {
  switch (stage) {
    case "brain_dump":
      return {
        label: "Brain Dump",
        color:
          "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400",
        icon: <Brain className="size-3" />,
        description: "Initial thoughts captured",
      };
    case "gauntlet":
      return {
        label: "AI Gauntlet",
        color:
          "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-400",
        icon: <Target className="size-3" />,
        description: "Facing AI challenges",
      };
    case "synthesis":
      return {
        label: "Synthesis",
        color:
          "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400",
        icon: <CheckCircle className="size-3" />,
        description: "Final synthesis complete",
      };
    default:
      return {
        label: "Unknown",
        color:
          "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400",
        icon: <Clock className="size-3" />,
        description: "Status unknown",
      };
  }
}

export function SynthesisCard({ synthesis }: SynthesisCardProps) {
  const stageInfo = getStageInfo(synthesis.stage);
  const timeAgo = formatDistanceToNow(new Date(synthesis.updatedAt), {
    addSuffix: true,
  });

  // Get a preview of the content
  const contentPreview = synthesis.rawText
    ? synthesis.rawText.slice(0, 120) +
      (synthesis.rawText.length > 120 ? "..." : "")
    : "No content yet...";

  // Check if title is long and needs tooltip
  const titleCharLimit = 25;
  const isTitleLong = synthesis.title.length > titleCharLimit;

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-200 hover:border-border hover:bg-card/80 hover:shadow-md">
      <CardHeader>
        <div className="flex gap-4 overflow-hidden">
          <div className="min-w-0 flex-1 overflow-hidden">
            {isTitleLong ? (
              <Tooltip>
                <TooltipTrigger asChild>
                  <h3 className="cursor-help truncate font-semibold text-foreground transition-colors group-hover:text-primary">
                    {synthesis.title}
                  </h3>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p className="text-xs">{synthesis.title}</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <h3 className="truncate font-semibold text-foreground transition-colors group-hover:text-primary">
                {synthesis.title}
              </h3>
            )}
          </div>

          <div className="flex shrink-0 flex-col items-end">
            <Badge
              variant="secondary"
              className={`flex items-center gap-1.5 ${stageInfo.color}`}
            >
              {stageInfo.icon}
              {stageInfo.label}
            </Badge>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="size-3" />
            <span className="truncate max-xl:max-w-32">
              Created{" "}
              {formatDistanceToNow(new Date(synthesis.createdAt), {
                addSuffix: true,
              })}
            </span>
          </div>
          <span className="text-right">{stageInfo.description}</span>
        </div>
      </CardHeader>

      {/* Subtle divider */}
      <div className="h-px bg-border" />

      <CardContent className="flex h-full flex-col">
        {/* Content preview section - takes up all available space */}
        <div className="mb-4 flex-1">
          <p className="line-clamp-4 text-sm leading-relaxed whitespace-pre-wrap text-muted-foreground">
            {contentPreview}
          </p>
        </div>

        {/* Spacer to push footer down */}
        <div className="flex-grow" />

        {/* Divider */}
        <div className="mb-4 h-px bg-border" />

        {/* Footer section with metadata and action - stays at bottom */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="size-3" />
            <span>Updated {timeAgo}</span>
          </div>

          <Button
            size="sm"
            variant="ghost"
            className="h-8 px-3 text-xs transition-colors group-hover:bg-primary/10 group-hover:text-primary"
            asChild
          >
            <Link href={`/synthesis/${synthesis.id}`}>
              Continue
              <ArrowRight className="ml-1 size-3" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

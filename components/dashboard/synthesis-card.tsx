import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-200 hover:border-border hover:bg-card/80 hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="truncate font-semibold text-foreground transition-colors group-hover:text-primary">
              {synthesis.title}
            </h3>
            <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="size-3" />
              <span>
                Created{" "}
                {formatDistanceToNow(new Date(synthesis.createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>

          <Badge
            variant="secondary"
            className={`flex items-center gap-1 ${stageInfo.color}`}
          >
            {stageInfo.icon}
            {stageInfo.label}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
          {contentPreview}
        </p>

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

        <div className="mt-3 text-xs text-muted-foreground">
          {stageInfo.description}
        </div>
      </CardContent>
    </Card>
  );
}

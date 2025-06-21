import { Button } from "@/components/ui/button";
import { Brain, Plus, Sparkles } from "lucide-react";
import Link from "next/link";

export function EmptyState() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-border/50 bg-muted/20 p-8 text-center">
      <div className="mx-auto mb-6 flex size-20 items-center justify-center rounded-full bg-primary/10">
        <Brain className="size-10 text-primary" />
      </div>

      <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
        Welcome to Your Cognitive Gym
      </h3>

      <p className="mb-6 max-w-md text-muted-foreground">
        You haven't started any syntheses yet. Ready to challenge your thinking?
        Create your first synthesis and begin the journey through our
        three-stage gauntlet.
      </p>

      <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-blue-500" />
          <span>Brain Dump</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-amber-500" />
          <span>AI Gauntlet</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="size-2 rounded-full bg-green-500" />
          <span>Synthesis</span>
        </div>
      </div>

      <Link href="/synthesis/new">
        <Button className="h-12 px-8">
          <Plus className="mr-2 size-5" />
          Start Your First Synthesis
          <Sparkles className="ml-2 size-4" />
        </Button>
      </Link>

      <p className="mt-4 text-xs text-muted-foreground">
        Each synthesis takes you through a structured process to refine and
        strengthen your ideas
      </p>
    </div>
  );
}

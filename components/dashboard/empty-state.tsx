import { Button } from "@/components/ui/button";
import { Brain, Plus, Sparkles } from "lucide-react";
import Link from "next/link";

export function EmptyState() {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center rounded-lg border-2 border-dashed border-border/50 bg-muted/50 p-8 text-center sm:p-12 md:min-h-[400px] md:p-16">
      <div className="mx-auto mb-8 flex size-24 items-center justify-center rounded-full bg-primary/10">
        <Brain className="size-12 text-primary" />
      </div>

      <h3 className="mb-4 font-display text-2xl font-semibold text-foreground">
        Welcome to Your Cognitive Gym
      </h3>

      <p className="mb-8 max-w-lg text-muted-foreground">
        You haven&apos;t started any syntheses yet. Ready to challenge your
        thinking? Create your first synthesis and begin the journey through our
        three-stage gauntlet.
      </p>

      <div className="mb-8 flex flex-col items-center gap-4 text-sm text-muted-foreground sm:flex-row sm:gap-6">
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

      <Button asChild className="h-12 px-8">
        <Link href="/synthesis/new">
          <Plus className="mr-2 size-5" />
          Start Your First Synthesis
          <Sparkles className="ml-2 size-4" />
        </Link>
      </Button>

      <p className="mt-8 text-sm text-muted-foreground">
        Each synthesis takes you through a structured process to refine and
        strengthen your ideas
      </p>
    </div>
  );
}

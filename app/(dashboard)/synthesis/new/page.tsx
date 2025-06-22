import { getCurrentUser } from "@/server/lib/auth";
import { redirect } from "next/navigation";
import { NewSynthesisForm } from "@/components/synthesis/new-synthesis-form";
import { Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function NewSynthesisPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10">
          <Brain className="size-8 text-primary" />
        </div>
        <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Start New Synthesis
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Begin your journey through the cognitive gauntlet. Your ideas will be
          challenged, refined, and strengthened.
        </p>
      </div>

      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl">Give your synthesis a title</CardTitle>
          <p className="text-sm text-muted-foreground">
            Choose a meaningful title, or leave blank for &ldquo;Untitled
            Synthesis&rdquo;
          </p>
        </CardHeader>
        <CardContent>
          <NewSynthesisForm />

          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
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
                <span>Final Synthesis</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Save, ArrowRight, FileText, Clock } from "lucide-react";
import { z } from "zod";
import { saveBrainDump, progressToStage2 } from "@/server/actions/synthesis";
import { useRouter } from "next/navigation";

const brainDumpSchema = z.object({
  content: z.string().trim().min(1, "Please write something before saving"),
});

type BrainDumpFormData = z.infer<typeof brainDumpSchema>;

interface BrainDumpEditorProps {
  synthesisId: string;
  initialContent: string;
}

export function BrainDumpEditor({
  synthesisId,
  initialContent,
}: BrainDumpEditorProps) {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<BrainDumpFormData>({
    resolver: zodResolver(brainDumpSchema),
    defaultValues: {
      content: initialContent,
    },
  });

  const content = form.watch("content");
  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const hasContent = content.trim().length > 0;

  const handleSave = (data: BrainDumpFormData) => {
    startTransition(async () => {
      try {
        await saveBrainDump(synthesisId, data.content);
        setLastSaved(new Date());
      } catch (error) {
        console.error("Failed to save:", error);
      }
    });
  };

  const handleProgressToStage2 = () => {
    startTransition(async () => {
      try {
        // Save the content first, then progress to stage 2
        await saveBrainDump(synthesisId, content);
        await progressToStage2(synthesisId);
        router.push(`/synthesis/${synthesisId}/stage2`);
      } catch (error) {
        console.error("Failed to progress to stage 2:", error);
      }
    });
  };

  return (
    <div className="space-y-6">
      {/* Writing Guidelines */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <FileText className="size-5" />
            Writing Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="outline" className="text-xs">
                ✓
              </Badge>
              <span>Your authentic thoughts</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="outline" className="text-xs">
                ✓
              </Badge>
              <span>No external research</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="outline" className="text-xs">
                ✓
              </Badge>
              <span>Stream of consciousness OK</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Badge variant="outline" className="text-xs">
                ✓
              </Badge>
              <span>Arguments and reasoning</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Editor */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Your Brain Dump</CardTitle>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {wordCount > 0 && (
                <span className="flex items-center gap-1">
                  <FileText className="size-3" />
                  {wordCount} words
                </span>
              )}
              {lastSaved && (
                <span className="flex items-center gap-1">
                  <Clock className="size-3" />
                  Saved {lastSaved.toLocaleTimeString()}
                </span>
              )}
            </div>
          </div>
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
                        placeholder="Start writing your thoughts here... What's your take on this topic? What do you believe and why?"
                        className="min-h-[400px] resize-none text-base leading-relaxed lg:text-lg"
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
                  onClick={handleProgressToStage2}
                  disabled={isPending || !hasContent}
                  className="sm:w-auto"
                >
                  Challenge My Thinking
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>

      {/* Help Text */}
      <div className="text-center text-sm text-muted-foreground">
        <p>
          Write freely without self-censoring. The AI will challenge your ideas
          in the next stage, so focus on authentic expression now.
        </p>
      </div>
    </div>
  );
}

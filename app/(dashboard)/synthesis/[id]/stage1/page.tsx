import { getCurrentUser } from "@/server/lib/auth";
import { redirect } from "next/navigation";
import { getSynthesis } from "@/server/actions/synthesis";
import { BrainDumpEditor } from "@/components/synthesis/brain-dump-editor";
import { StageHeader } from "@/components/synthesis/stage-header";
import { Brain } from "lucide-react";

interface Stage1PageProps {
  params: Promise<{ id: string }>;
}

export default async function Stage1Page({ params }: Stage1PageProps) {
  const { id } = await params;
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  try {
    const result = await getSynthesis(id);

    if (!result.success || !result.synthesis) {
      redirect("/dashboard");
    }

    const { synthesis } = result;

    // If synthesis is beyond brain dump stage, redirect to appropriate stage
    if (synthesis.stage === "gauntlet") {
      redirect(`/synthesis/${id}/stage2`);
    }
    if (synthesis.stage === "synthesis") {
      redirect(`/synthesis/${id}/stage3`);
    }

    return (
      <div className="mx-auto max-w-4xl px-6 py-8 sm:px-8 lg:px-10">
        <StageHeader
          stage={1}
          title="Brain Dump"
          description="Write down your thoughts freely. No external sources, no research - just your authentic thinking on the topic."
          icon={<Brain className="size-6" />}
          synthesisId={id}
          synthesisTitle={synthesis.title}
        />

        <div className="mt-8">
          <BrainDumpEditor
            synthesisId={id}
            initialContent={synthesis.rawText || ""}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading Stage 1:", error);
    redirect("/dashboard");
  }
}

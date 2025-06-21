import { getCurrentUser } from "@/server/lib/auth";
import { redirect } from "next/navigation";
import { getSynthesisWithChallenges } from "@/server/actions/synthesis";
import { StageHeader } from "@/components/synthesis/stage-header";
import { FinalSynthesisEditor } from "@/components/synthesis/final-synthesis-editor";
import { CheckCircle } from "lucide-react";

interface Stage3PageProps {
  params: Promise<{ id: string }>;
}

export default async function Stage3Page({ params }: Stage3PageProps) {
  const { id } = await params;
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  const result = await getSynthesisWithChallenges(id);

  if (!result.success || !result.synthesis) {
    redirect("/dashboard");
  }

  const { synthesis, challenges } = result;

  // If synthesis is not at synthesis stage, redirect appropriately
  if (synthesis.stage === "brain_dump") {
    redirect(`/synthesis/${id}/stage1`);
  }
  if (synthesis.stage === "gauntlet") {
    redirect(`/synthesis/${id}/stage2`);
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-8 sm:px-8 lg:px-10">
      <StageHeader
        stage={3}
        title="Final Synthesis"
        description="Craft your refined argument using everything you've learned. Integrate your original thoughts with responses to the challenges."
        icon={<CheckCircle className="size-6" />}
        synthesisId={id}
        synthesisTitle={synthesis.title}
      />

      <div className="mt-8">
        <FinalSynthesisEditor
          synthesisId={id}
          synthesis={synthesis}
          challenges={challenges}
        />
      </div>
    </div>
  );
}

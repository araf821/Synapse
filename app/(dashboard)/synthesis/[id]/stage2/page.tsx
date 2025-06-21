import { getCurrentUser } from "@/server/lib/auth";
import { redirect } from "next/navigation";
import { getSynthesisWithChallenges } from "@/server/actions/synthesis";
import { StageHeader } from "@/components/synthesis/stage-header";
import { ChallengeInterface } from "@/components/synthesis/challenge-interface";
import { Target } from "lucide-react";

interface Stage2PageProps {
  params: Promise<{ id: string }>;
}

export default async function Stage2Page({ params }: Stage2PageProps) {
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

  // If synthesis is not at gauntlet stage, redirect appropriately
  if (synthesis.stage === "brain_dump") {
    redirect(`/synthesis/${id}/stage1`);
  }
  if (synthesis.stage === "synthesis") {
    redirect(`/synthesis/${id}/stage3`);
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-8 sm:px-8 lg:px-10">
      <StageHeader
        stage={2}
        title="AI Gauntlet"
        description="Face three carefully crafted challenges designed to test and strengthen your thinking. Respond thoughtfully to each challenge."
        icon={<Target className="size-6" />}
        synthesisId={id}
        synthesisTitle={synthesis.title}
      />

      <div className="mt-8">
        <ChallengeInterface
          synthesisId={id}
          synthesis={synthesis}
          challenges={challenges}
        />
      </div>
    </div>
  );
}

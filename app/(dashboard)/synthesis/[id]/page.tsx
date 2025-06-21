import { getCurrentUser } from "@/server/lib/auth";
import { redirect } from "next/navigation";
import { getSynthesis } from "@/server/actions/synthesis";

interface SynthesisPageProps {
  params: Promise<{ id: string }>;
}

export default async function SynthesisPage({ params }: SynthesisPageProps) {
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

    // Redirect to the appropriate stage based on synthesis state
    switch (synthesis.stage) {
      case "brain_dump":
        redirect(`/synthesis/${id}/stage1`);
      case "gauntlet":
        redirect(`/synthesis/${id}/stage2`);
      case "synthesis":
        redirect(`/synthesis/${id}/stage3`);
      default:
        redirect(`/synthesis/${id}/stage1`);
    }
  } catch (error) {
    console.error("Error fetching synthesis:", error);
    redirect("/dashboard");
  }
}

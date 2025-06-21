import { User } from "next-auth";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

interface WelcomeSectionProps {
  user: User;
}

export function WelcomeSection({ user }: WelcomeSectionProps) {
  const firstName = user.name?.split(" ")[0] || "there";
  const currentHour = new Date().getHours();

  const getGreeting = () => {
    if (currentHour < 12) return "Good morning";
    if (currentHour < 17) return "Good afternoon";
    return "Good evening";
  };

  return (
    <div className="mb-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {getGreeting()}, {firstName}
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Ready to challenge your thinking? Start a new synthesis or continue
            where you left off.
          </p>
        </div>

        <div className="flex-shrink-0">
          <Button size="lg" asChild>
            <Link href="/synthesis/new">
              <Plus className="mr-2 size-5" />
              New Synthesis
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

import { LoginDialog } from "@/components/auth/login-dialog";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function FinalCTA() {
  return (
    <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Headline */}
        <h2 className="mb-8 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Ready to Build Your Strongest Argument?
        </h2>

        {/* CTA Button */}
        <LoginDialog
          trigger={
            <RainbowButton className="text-lg">
              Start Thinking for Free
            </RainbowButton>
          }
        />
      </div>
    </section>
  );
}

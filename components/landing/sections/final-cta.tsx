import { LoginDialog } from "@/components/auth/login-dialog";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function FinalCTA() {
  return (
    <section className="bg-muted/30 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Headline */}
        <h2 className="mb-12 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Ready to Build Your Strongest Argument?
        </h2>

        {/* CTA Button */}
        <LoginDialog
          trigger={
            <RainbowButton className="px-8 py-4 text-lg">
              Start Thinking for Free
            </RainbowButton>
          }
        />
      </div>
    </section>
  );
}

import { LoginDialog } from "@/components/auth/login-dialog";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Main Headline */}
        <h1 className="mb-8 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Stop Getting Answers. Start Building Arguments.
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mb-12 max-w-2xl font-sans text-xl leading-relaxed text-muted-foreground sm:text-2xl">
          Synapse is an AI-powered sparring partner that challenges your
          thinking, strengthens your ideas, and helps you produce your best,
          most original work. It's the gym for your mind.
        </p>

        {/* CTA Button */}
        <div className="mb-8">
          <LoginDialog
            trigger={
              <RainbowButton className="px-8 py-4 text-lg">
                Start Thinking for Free
              </RainbowButton>
            }
          />
        </div>

        {/* Social Proof */}
        <p className="text-sm text-muted-foreground sm:text-base">
          No credit card required. Join hundreds of thinkers, researchers, and
          founders.
        </p>
      </div>
    </section>
  );
}

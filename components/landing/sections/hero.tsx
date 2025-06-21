import { LoginDialog } from "@/components/auth/login-dialog";
import { RainbowButton } from "@/components/ui/rainbow-button";

export function Hero() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        {/* Main Headline */}
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Stop Getting Answers. Start Building Arguments.
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
          Synapse is an AI-powered sparring partner that challenges your
          thinking, strengthens your ideas, and helps you produce your best,
          most original work. It's the gym for your mind.
        </p>

        {/* CTA Button */}
        <div className="mb-6">
          <LoginDialog
            trigger={
              <RainbowButton className="text-lg">
                Start Thinking for Free
              </RainbowButton>
            }
          />
        </div>

        {/* Social Proof */}
        <p className="text-sm text-muted-foreground">
          No credit card required. Join hundreds of thinkers, researchers, and
          founders.
        </p>
      </div>
    </section>
  );
}

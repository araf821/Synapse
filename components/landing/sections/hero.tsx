import { LoginDialog } from "@/components/auth/login-dialog";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { HeroBackground } from "./hero-background";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* App Name Marquee */}
        <div className="mb-6">
          <span className="font-sans text-sm font-medium tracking-widest text-accent uppercase sm:text-base">
            SYNAPSE
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-8 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Stop Getting Answers. Start Building Arguments.
        </h1>

        {/* Refined Sub-headline */}
        <p className="mx-auto mb-16 max-w-2xl font-sans text-xl leading-relaxed text-balance text-muted-foreground sm:text-2xl">
          Escape the cognitive debt. Forge ideas that are truly yours.
        </p>

        {/* CTA Button with More Space */}
        <div className="mb-12">
          <LoginDialog
            trigger={
              <RainbowButton className="px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
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

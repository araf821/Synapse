import { Card, CardContent } from "@/components/ui/card";

export function Solution() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From Raw Idea to Battle-Tested Argument
          </h2>
        </div>

        {/* Three-Step Process */}
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                1
              </span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              Brain Dump
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Articulate your raw, unfiltered idea in a distraction-free space.
              This is purely your thinking, with no external influence.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                2
              </span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              The Gauntlet
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Our AI agents challenge you with tough questions, find flaws in
              your logic, and present you with powerful counter-arguments.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="mb-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                3
              </span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              Synthesis
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              Forge a new, stronger argument by synthesizing your original
              thoughts with your responses to the AI's challenges. This is the
              creative leap only a human can make.
            </p>
          </div>
        </div>

        {/* Highlighted Box */}
        <Card className="border-accent/20 bg-accent/10">
          <CardContent className="p-8 text-center">
            <h3 className="mb-4 text-2xl font-bold text-foreground">
              This Is Not Another GPT-Wrapper.
            </h3>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-muted-foreground">
              We use AI to create productive friction, not to give you easy
              answers. Synapse is designed to make you think, not to think for
              you.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

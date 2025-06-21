import { Card, CardContent } from "@/components/ui/card";

export function Solution() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            From Raw Idea to Battle-Tested Argument
          </h2>
        </div>

        {/* Three-Step Process */}
        <div className="mb-20 grid gap-12 md:grid-cols-3 lg:gap-16">
          {/* Step 1 */}
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg">
                1
              </span>
            </div>
            <h3 className="mb-4 font-serif text-xl font-semibold text-foreground sm:text-2xl">
              Brain Dump
            </h3>
            <p className="font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
              Articulate your raw, unfiltered idea in a distraction-free space.
              This is purely your thinking, with no external influence.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg">
                2
              </span>
            </div>
            <h3 className="mb-4 font-serif text-xl font-semibold text-foreground sm:text-2xl">
              The Gauntlet
            </h3>
            <p className="font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
              Our AI agents challenge you with tough questions, find flaws in
              your logic, and present you with powerful counter-arguments.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-lg">
                3
              </span>
            </div>
            <h3 className="mb-4 font-serif text-xl font-semibold text-foreground sm:text-2xl">
              Synthesis
            </h3>
            <p className="font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
              Forge a new, stronger argument by synthesizing your original
              thoughts with your responses to the AI's challenges. This is the
              creative leap only a human can make.
            </p>
          </div>
        </div>

        {/* Highlighted Box */}
        <Card className="border-accent/20 bg-accent/10 shadow-lg">
          <CardContent className="p-10 text-center sm:p-12 lg:p-16">
            <h3 className="mb-6 font-serif text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
              This Is Not Another GPT-Wrapper.
            </h3>
            <p className="mx-auto max-w-4xl font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl lg:leading-relaxed">
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

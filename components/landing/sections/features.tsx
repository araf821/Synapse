import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lightbulb, Target, User } from "lucide-react";

export function Features() {
  return (
    <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Result: An Unshakeable Confidence in Your Ideas
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Feature 1 */}
          <Card className="border-border bg-card">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <Shield className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-lg font-semibold text-card-foreground">
                Build Defensible Ideas
              </h3>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                Withstand any scrutiny by anticipating and preparing for every
                counter-argument before it's even made.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="border-border bg-card">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <Lightbulb className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-lg font-semibold text-card-foreground">
                Overcome Mental Blocks
              </h3>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                Use structured, AI-driven friction to break through creative
                ruts and discover novel perspectives.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="border-border bg-card">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-lg font-semibold text-card-foreground">
                Deepen Your Understanding
              </h3>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                Go beyond surface-level knowledge by actively wrestling with
                opposing viewpoints and data.
              </p>
            </CardContent>
          </Card>

          {/* Feature 4 */}
          <Card className="border-border bg-card">
            <CardContent className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <User className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="mb-3 font-serif text-lg font-semibold text-card-foreground">
                Truly Own Your Work
              </h3>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                Produce 100% original arguments that are authentically
                yours—augmented by AI, never authored by it.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

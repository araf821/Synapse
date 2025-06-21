import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/landing/sections/hero";
import { ProblemQuote } from "@/components/landing/sections/problem-quote";
import { Solution } from "@/components/landing/sections/solution";
import { Features } from "@/components/landing/sections/features";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Hero />

      <ProblemQuote />

      <Solution />

      <Features />

      {/* TODO: FAQ Section - Accordion with 5 questions */}
      {/* TODO: Final CTA Section - "Ready to Build Your Strongest Argument?" */}

      <div className="p-8">
        <h1 className="text-2xl font-bold text-foreground">
          Landing page sections coming soon...
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;

import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/landing/sections/hero";
import { ProblemQuote } from "@/components/landing/sections/problem-quote";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <Hero />

      <ProblemQuote />

      {/* TODO: Solution Section - "From Raw Idea to Battle-Tested Argument" with 3 steps */}
      {/* TODO: Features Grid - 4 benefits with icons */}
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

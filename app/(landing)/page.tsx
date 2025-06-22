import { Hero } from "@/components/landing/sections/hero";
import { ProblemQuote } from "@/components/landing/sections/problem-quote";
import { Solution } from "@/components/landing/sections/solution";
import { Features } from "@/components/landing/sections/features";
import { FAQ } from "@/components/landing/sections/faq";
import { FinalCTA } from "@/components/landing/sections/final-cta";
import { generatePageMetadata, generateStructuredData } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata("home");

const LandingPage = () => {
  const organizationData = generateStructuredData("organization");
  const appData = generateStructuredData("softwareApplication");
  const websiteData = generateStructuredData("webSite");

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([organizationData, appData, websiteData]),
        }}
      />

      <Hero />

      <ProblemQuote />

      <section id="solution">
        <Solution />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="faq">
        <FAQ />
      </section>

      <section id="pricing">
        <FinalCTA />
      </section>
    </>
  );
};

export default LandingPage;

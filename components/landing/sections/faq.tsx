import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-left font-medium">
              How is this different from just prompting ChatGPT?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed">
              ChatGPT is a conversational 'answer machine.' Synapse is a
              structured 'thinking workflow.' Our purpose-built interface and
              multi-agent system guide you through a deliberate process of
              critique and synthesis that a simple chat prompt cannot replicate.
              We eliminate the cognitive load of you having to force the AI to
              be a sparring partner.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-left font-medium">
              Who is Synapse for?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed">
              Synapse is for anyone whose work depends on the quality of their
              thinking. This includes PhD students developing a thesis, startup
              founders crafted a market strategy, lawyers building a case,
              consultants writing a report, and any writer or creator looking to
              produce deep, original work.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-left font-medium">
              Is my data private?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed">
              Yes. Your work is your own. We have a strict privacy policy and
              your syntheses are private to your account. We do not use your
              data to train AI models.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left font-medium">
              What AI model do you use?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed">
              We use a proprietary orchestration layer that leverages multiple
              state-of-the-art models, including Google's Gemini, for different
              tasks. Our value is in our unique workflow and how we use these
              models as specialized tools, not in the models themselves.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-left font-medium">
              Is this going to slow me down?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed">
              Yes, and that's the point. For the 90% of your work that requires
              speed, use other tools. For the 10% that requires depth and
              originality, Synapse will save you from the long-term cost of
              shallow thinking. It's a strategic investment of your time.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

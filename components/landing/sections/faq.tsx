"use client";

import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/config/faq";

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-muted/20 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl"></div>
        <div className="absolute bottom-32 left-16 h-24 w-24 rounded-full bg-accent/8 blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 h-16 w-16 rounded-full bg-primary/3 blur-lg"></div>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Section Heading */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl font-sans text-lg text-muted-foreground sm:text-xl">
            Everything you need to know about how Synapse works and what makes
            it different.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className="border-b border-border/30 px-6 py-2 last:border-b-0"
              >
                <AccordionTrigger className="group relative py-6 text-left font-serif text-lg font-semibold text-foreground transition-colors hover:text-primary sm:text-xl [&[data-state=open]]:text-primary">
                  <span className="relative">
                    {faq.question}
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-[width] duration-300 ease-out group-hover:w-full group-data-[state=open]:w-full`}
                    ></div>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 font-sans text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

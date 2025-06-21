"use client";

import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Shield, Zap } from "lucide-react";

export function Solution() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            From Raw Idea to Battle-Tested Argument
          </h2>
        </motion.div>

        {/* Three-Step Process */}
        <div className="mb-20">
          <div className="flex flex-col items-center gap-12 md:flex-row md:justify-center md:gap-8 lg:gap-16">
            {/* Step 1 */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative mb-6">
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-primary/80 text-2xl font-bold text-primary-foreground shadow-xl">
                  <Brain className="h-8 w-8" />
                </span>
                <div className="absolute -top-2 -right-2 h-6 w-6 animate-pulse rounded-full bg-accent"></div>
              </div>
              <h3 className="mb-4 font-serif text-xl font-semibold text-foreground sm:text-2xl">
                Brain Dump
              </h3>
              <p className="max-w-xs font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
                Articulate your raw, unfiltered idea in a distraction-free
                space. This is purely your thinking, with no external influence.
              </p>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
              className="hidden md:block"
            >
              <ArrowRight className="h-8 w-8 text-primary/60" />
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative mb-6">
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-accent to-accent/80 text-2xl font-bold text-accent-foreground shadow-xl">
                  <Shield className="h-8 w-8" />
                </span>
                <div className="absolute -bottom-2 -left-2 h-6 w-6 animate-pulse rounded-full bg-primary"></div>
              </div>
              <h3 className="mb-4 font-serif text-xl font-semibold text-foreground sm:text-2xl">
                The Gauntlet
              </h3>
              <p className="max-w-xs font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
                Our AI agents challenge you with tough questions, find flaws in
                your logic, and present you with powerful counter-arguments.
              </p>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }}
              className="hidden md:block"
            >
              <ArrowRight className="h-8 w-8 text-primary/60" />
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="relative mb-6">
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-foreground shadow-xl">
                  <Zap className="h-8 w-8" />
                </span>
                <div className="absolute -top-2 -left-2 h-6 w-6 animate-pulse rounded-full bg-accent"></div>
                <div className="absolute -right-2 -bottom-2 h-4 w-4 animate-pulse rounded-full bg-primary"></div>
              </div>
              <h3 className="mb-4 font-serif text-xl font-semibold text-foreground sm:text-2xl">
                Synthesis
              </h3>
              <p className="max-w-xs font-sans text-base leading-relaxed text-muted-foreground sm:text-lg">
                Forge a new, stronger argument by synthesizing your original
                thoughts with your responses to the AI's challenges. This is the
                creative leap only a human can make.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Highlighted Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/10 to-primary/5 shadow-2xl backdrop-blur-sm">
            <CardContent className="relative overflow-hidden p-10 text-center sm:p-12 lg:p-16">
              {/* Subtle decoration */}
              <div className="absolute top-4 right-4 h-20 w-20 rounded-full bg-primary/10 blur-xl"></div>
              <div className="absolute bottom-4 left-4 h-16 w-16 rounded-full bg-accent/10 blur-xl"></div>

              <h3 className="relative mb-6 font-serif text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                This Is Not Another GPT-Wrapper.
              </h3>
              <p className="relative mx-auto max-w-4xl font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl lg:leading-relaxed">
                We use AI to create productive friction, not to give you easy
                answers. Synapse is designed to make you think, not to think for
                you.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

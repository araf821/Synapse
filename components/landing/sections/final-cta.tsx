"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { LoginDialog } from "@/components/auth/login-dialog";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, DollarSign } from "lucide-react";

const benefits = [
  "No credit card required",
  "Cancel anytime",
  "Join hundreds of thinkers",
];

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-muted/40 via-muted/20 to-background px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/15 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-2xl"></div>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Pre-headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <CheckCircle className="h-4 w-4" />
            Stop relying on AI for thinking
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h2
          className="mb-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to Build Your{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Strongest Argument?
          </span>
        </motion.h2>

        {/* Sub-headline */}
        <motion.p
          className="mx-auto mb-12 max-w-2xl font-sans text-lg leading-relaxed text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join the thinkers who refuse to let AI do their thinking for them.
          Start forging ideas that are authentically yours.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link href="/pricing">
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/30 px-6 py-4 text-base font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-background hover:text-primary"
            >
              <DollarSign className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              View All Pricing
            </Button>
          </Link>

          <LoginDialog
            trigger={
              <RainbowButton className="group flex items-center px-8 py-4 text-lg font-semibold whitespace-nowrap shadow-xl transition-all duration-300 hover:shadow-2xl">
                Start Thinking for Free
                <ArrowRight className="ml-2 inline size-4 -translate-y-0.5 transition-transform group-hover:translate-x-1" />
              </RainbowButton>
            }
          />
        </motion.div>

        {/* Benefits */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground sm:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
            >
              <CheckCircle className="h-4 w-4 text-primary" />
              {benefit}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

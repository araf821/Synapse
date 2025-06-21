"use client";

import { motion } from "motion/react";
import { LoginDialog } from "@/components/auth/login-dialog";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { HeroBackground } from "./hero-background";

export function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden px-4 py-16 pt-24 sm:px-6 lg:px-8">
      <HeroBackground />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* App Name Marquee */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.span
            className="font-sans text-sm font-medium tracking-widest text-accent uppercase sm:text-base"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            SYNAPSE
          </motion.span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="mb-8 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Stop Getting Answers.
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Start Building Arguments.
          </motion.span>
        </motion.h1>

        {/* Refined Sub-headline */}
        <motion.p
          className="mx-auto mb-16 max-w-2xl font-sans text-xl leading-relaxed text-balance text-muted-foreground sm:text-2xl"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
        >
          Escape the cognitive debt. Forge ideas that are truly yours.
        </motion.p>

        {/* CTA Button with More Space */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 1.6, ease: "easeOut" }}
        >
          <LoginDialog
            trigger={
              <RainbowButton className="px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Thinking for Free
              </RainbowButton>
            }
          />
        </motion.div>

        {/* Social Proof */}
        <motion.p
          className="text-sm text-muted-foreground sm:text-base"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9, ease: "easeOut" }}
        >
          No credit card required. Join hundreds of thinkers, researchers, and
          founders.
        </motion.p>
      </div>
    </section>
  );
}

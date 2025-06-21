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
        {/* App Name Marquee with Neon Effects */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Decorative SVG Lines */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <svg
              className="absolute h-16 w-64 sm:h-20 sm:w-80"
              viewBox="0 0 320 80"
              fill="none"
            >
              {/* Left decorative lines */}
              <motion.path
                d="M20 40 L80 40"
                stroke="currentColor"
                strokeWidth="1"
                className="text-accent/60"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 4px hsl(var(--accent)))",
                }}
              />
              <motion.path
                d="M15 35 L75 35"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-accent/40"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 1.0, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 2px hsl(var(--accent)))",
                }}
              />
              <motion.path
                d="M25 45 L85 45"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-accent/40"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 2px hsl(var(--accent)))",
                }}
              />

              {/* Right decorative lines */}
              <motion.path
                d="M240 40 L300 40"
                stroke="currentColor"
                strokeWidth="1"
                className="text-accent/60"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 4px hsl(var(--accent)))",
                }}
              />
              <motion.path
                d="M245 35 L305 35"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-accent/40"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 1.0, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 2px hsl(var(--accent)))",
                }}
              />
              <motion.path
                d="M235 45 L295 45"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-accent/40"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 2px hsl(var(--accent)))",
                }}
              />

              {/* Corner accent elements */}
              <motion.circle
                cx="90"
                cy="40"
                r="2"
                fill="currentColor"
                className="text-accent"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 6px hsl(var(--accent)))",
                }}
              />
              <motion.circle
                cx="230"
                cy="40"
                r="2"
                fill="currentColor"
                className="text-accent"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
                style={{
                  filter: "drop-shadow(0 0 6px hsl(var(--accent)))",
                }}
              />
            </svg>
          </div>

          <motion.span
            className="relative z-10 font-sans text-sm font-medium tracking-widest text-accent uppercase sm:text-base"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            style={{
              textShadow: `
                0 0 10px hsl(var(--accent)),
                0 0 20px hsl(var(--accent) / 0.5),
                0 0 40px hsl(var(--accent) / 0.3),
                0 0 80px hsl(var(--accent) / 0.1)
              `,
              filter: "drop-shadow(0 0 8px hsl(var(--accent) / 0.8))",
            }}
          >
            <motion.span
              animate={{
                textShadow: [
                  `0 0 10px hsl(var(--accent)),
                   0 0 20px hsl(var(--accent) / 0.5),
                   0 0 40px hsl(var(--accent) / 0.3)`,
                  `0 0 15px hsl(var(--accent)),
                   0 0 30px hsl(var(--accent) / 0.6),
                   0 0 60px hsl(var(--accent) / 0.4)`,
                  `0 0 10px hsl(var(--accent)),
                   0 0 20px hsl(var(--accent) / 0.5),
                   0 0 40px hsl(var(--accent) / 0.3)`,
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              SYNAPSE
            </motion.span>
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

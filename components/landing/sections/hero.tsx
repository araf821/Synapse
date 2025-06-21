"use client";

import { LoginDialog } from "@/components/auth/login-dialog";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/20"></div>
        <motion.div
          className="absolute top-1/4 left-1/4 size-96 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl"
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.6, 0.4, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute right-1/3 bottom-1/3 size-80 rounded-full bg-gradient-to-l from-accent/15 to-primary/25 blur-3xl max-md:hidden"
          animate={{
            scale: [0.7, 1.2, 0.7],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/4 size-64 rounded-full bg-gradient-to-t from-muted/20 to-primary/15 blur-2xl"
          animate={{
            scale: [1.2, 0.5, 1.2],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10,
          }}
        />
      </div>

      {/* Organic SVG Lines */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 h-full w-full opacity-5"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 550 Q200 400 400 450 T750 300"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
            className="text-foreground"
          />
          <path
            d="M-20 580 Q180 420 380 480 T720 330"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            className="text-foreground"
          />
          <path
            d="M20 600 Q250 380 450 430 T800 280"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
            className="text-foreground"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* App Name Marquee */}
        <div className="mb-6">
          <span className="font-sans text-sm font-medium tracking-widest text-accent uppercase sm:text-base">
            SYNAPSE
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-8 font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Stop Getting Answers. Start Building Arguments.
        </h1>

        {/* Refined Sub-headline */}
        <p className="mx-auto mb-16 max-w-2xl font-sans text-xl leading-relaxed text-muted-foreground sm:text-2xl">
          An AI sparring partner to forge battle-tested ideas. This is the gym
          for your mind.
        </p>

        {/* CTA Button with More Space */}
        <div className="mb-12">
          <LoginDialog
            trigger={
              <RainbowButton className="px-8 py-4 text-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Start Thinking for Free
              </RainbowButton>
            }
          />
        </div>

        {/* Social Proof */}
        <p className="text-sm text-muted-foreground sm:text-base">
          No credit card required. Join hundreds of thinkers, researchers, and
          founders.
        </p>
      </div>

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0 -z-5 overflow-hidden">
        <motion.div
          className="absolute left-1/4 h-3 w-3 rounded-full bg-primary/50 shadow-lg"
          animate={{
            y: [0, -100, 0],
            x: [0, 20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
          style={{ top: "75%" }}
        />
        <motion.div
          className="absolute left-3/4 h-2 w-2 rounded-full bg-accent/60 shadow-md"
          animate={{
            y: [0, -120, 0],
            x: [0, -15, 0],
            opacity: [0.4, 0.9, 0.4],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          style={{ top: "50%" }}
        />
        <motion.div
          className="absolute left-1/2 h-2.5 w-2.5 rounded-full bg-primary/40 shadow-sm"
          animate={{
            y: [0, -80, 0],
            x: [0, 25, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [0.9, 1.3, 0.9],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          style={{ top: "25%" }}
        />
        <motion.div
          className="absolute left-1/6 h-1.5 w-1.5 rounded-full bg-accent/50 shadow-sm"
          animate={{
            y: [0, -60, 0],
            x: [0, 10, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1.1, 1.5, 1.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{ top: "33%" }}
        />
        <motion.div
          className="absolute right-1/4 h-2 w-2 rounded-full bg-primary/30 shadow-md"
          animate={{
            y: [0, -90, 0],
            x: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [0.7, 1.1, 0.7],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
          style={{ top: "60%" }}
        />
      </div>
    </section>
  );
}

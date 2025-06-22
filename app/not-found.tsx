"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { SynapseIcon } from "@/components/ui/synapse-icon";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-svh items-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      {/* Background Atmosphere - Similar to Hero */}
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
      </div>

      {/* Animated SVG Lines */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 h-full w-full opacity-10"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M-50 550 Q200 400 400 450 T750 300"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            className="text-foreground"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.path
            d="M-20 580 Q180 420 380 480 T720 330"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            className="text-foreground"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 1.5 }}
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        {/* Synapse Logo with Animation */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <motion.div
            className="text-primary"
            animate={{
              filter: [
                "drop-shadow(0 0 10px hsl(var(--primary) / 0.3))",
                "drop-shadow(0 0 20px hsl(var(--primary) / 0.5))",
                "drop-shadow(0 0 10px hsl(var(--primary) / 0.3))",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <SynapseIcon size={64} />
          </motion.div>
        </motion.div>

        {/* Error Code with Decorative Elements */}
        <motion.div
          className="relative mb-6"
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
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
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            style={{
              textShadow: `
                0 0 10px hsl(var(--accent)),
                0 0 20px hsl(var(--accent) / 0.5),
                0 0 40px hsl(var(--accent) / 0.3)
              `,
              filter: "drop-shadow(0 0 8px hsl(var(--accent) / 0.8))",
            }}
          >
            404 ERROR
          </motion.span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="mb-6 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            Path Not Found.
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            Let{"'"}s Navigate Back.
          </motion.span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          className="mx-auto mb-12 max-w-xl font-sans text-lg leading-relaxed text-balance text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          The page you&apos;re looking for doesn&apos;t exist. But every detour
          is an opportunity to discover something better.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="mb-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
        >
          <Button
            variant="outline"
            asChild
            size="lg"
            className="group border-primary/30 px-6 py-4 text-base font-medium text-foreground transition-all duration-300 hover:border-primary hover:bg-background hover:text-primary"
          >
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Landing
            </Link>
          </Button>

          <Button asChild size="lg">
            <Link href="/dashboard">
              <Home className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Dashboard
            </Link>
          </Button>
        </motion.div>

        {/* Help Text */}
        <motion.p
          className="mt-8 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1, ease: "easeOut" }}
        >
          Still having trouble? Check your URL or explore our cognitive tools.
        </motion.p>
      </div>
    </div>
  );
}

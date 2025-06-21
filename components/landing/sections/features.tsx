"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lightbulb, Target, User } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Shield,
    title: "Build Defensible Ideas",
    description:
      "Withstand any scrutiny by anticipating and preparing for every counter-argument before it's even made.",
  },
  {
    icon: Lightbulb,
    title: "Overcome Mental Blocks",
    description:
      "Use structured, AI-driven friction to break through creative ruts and discover novel perspectives.",
  },
  {
    icon: Target,
    title: "Deepen Your Understanding",
    description:
      "Go beyond surface-level knowledge by actively wrestling with opposing viewpoints and data.",
  },
  {
    icon: User,
    title: "Truly Own Your Work",
    description:
      "Produce 100% original arguments that are authentically yours—augmented by AI, never authored by it.",
  },
];

export function Features() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Result: An Unshakeable Confidence in Your Ideas
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative block h-full w-full"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 block h-full w-full rounded-xl bg-muted/50 dark:bg-slate-800/[0.8]"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <Card
                  className={cn(
                    "relative z-20 h-full border-border bg-card transition-all duration-200",
                    "group-hover:border-primary/20 group-hover:shadow-lg"
                  )}
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary shadow-primary/50 transition-all duration-200 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-primary/90 group-hover:shadow-lg">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="mb-3 font-serif text-lg font-semibold text-card-foreground transition duration-200 group-hover:scale-105 group-hover:text-primary">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-balance text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

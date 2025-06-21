"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Shield, Lightbulb, Target, User } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Shield,
    title: "Build Defensible Ideas",
    description:
      "Withstand any scrutiny by anticipating and preparing for every counter-argument before it's even made.",
    position: "left",
  },
  {
    icon: Lightbulb,
    title: "Overcome Mental Blocks",
    description:
      "Use structured, AI-driven friction to break through creative ruts and discover novel perspectives.",
    position: "right",
  },
  {
    icon: Target,
    title: "Deepen Your Understanding",
    description:
      "Go beyond surface-level knowledge by actively wrestling with opposing viewpoints and data.",
    position: "left",
  },
  {
    icon: User,
    title: "Truly Own Your Work",
    description:
      "Produce 100% original arguments that are authentically yours—augmented by AI, never authored by it.",
    position: "right",
  },
];

export function Features() {
  return (
    <section className="bg-muted/30 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="mb-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            The Result: An Unshakeable Confidence in Your Ideas
          </h2>
        </motion.div>

        {/* Features - Asymmetrical Layout */}
        <div className="relative">
          {/* Central connecting line */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 lg:block"></div>

          {/* Central node */}
          <div className="absolute top-1/2 left-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary shadow-lg lg:block">
            <div className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-primary-foreground"></div>
          </div>

          <div className="-space-y-8 lg:-space-y-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const isLeft = feature.position === "left";

              return (
                <motion.div
                  key={idx}
                  className={`flex flex-col items-center gap-8 lg:flex-row lg:gap-16 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                  transition={{ duration: 0.7, delay: idx * 0.2 }}
                >
                  {/* Feature Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <Card className="border border-primary/10 bg-card/80 backdrop-blur-sm transition hover:border-primary/20">
                      <CardContent className="p-8">
                        <div
                          className={`flex ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col items-start gap-6 lg:items-center`}
                        >
                          <div className="mx-auto flex-shrink-0 lg:mx-0">
                            <div className="relative">
                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/80">
                                <Icon className="size-7 text-primary-foreground" />
                              </div>
                              <div className="absolute -top-1 -right-1 h-3 w-3 animate-pulse rounded-full bg-accent"></div>
                            </div>
                          </div>
                          <div className="flex-1 text-center lg:text-left">
                            <h3 className="mb-3 font-serif text-xl font-bold text-foreground sm:text-2xl">
                              {feature.title}
                            </h3>
                            <p className="font-sans text-base leading-relaxed text-muted-foreground lg:text-lg">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer for centering */}
                  <div className="hidden flex-1 lg:block"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

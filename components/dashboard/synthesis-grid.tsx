"use client";

import { motion, AnimatePresence } from "motion/react";
import { SynthesisCard } from "./synthesis-card";
import { EmptyState } from "./empty-state";
import { Synthesis } from "@/server/db/schema";

interface SynthesisGridProps {
  syntheses: Synthesis[];
}

export function SynthesisGrid({ syntheses }: SynthesisGridProps) {
  if (syntheses.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <EmptyState />
      </motion.div>
    );
  }

  return (
    <motion.div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" layout>
      <AnimatePresence mode="popLayout">
        {syntheses.map((synthesis, index) => (
          <motion.div
            key={synthesis.id}
            layout
            className="h-full"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: -20,
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
              layout: {
                duration: 0.4,
                ease: "easeInOut",
              },
            }}
            whileHover={{
              y: -4,
              transition: {
                duration: 0.2,
              },
            }}
          >
            <SynthesisCard synthesis={synthesis} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

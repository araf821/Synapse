"use client";

import { motion } from "motion/react";

export function ProblemQuote() {
  return (
    <section className="bg-muted/30 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        {/* Quote */}
        <motion.blockquote
          className="mb-8 font-serif text-2xl leading-relaxed font-medium text-foreground sm:text-3xl lg:text-4xl lg:leading-relaxed"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            initial={{ opacity: 0, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            "Brain imaging revealed a decline in cognitive engagement in ChatGPT
            users... a{" "}
          </motion.span>
          <motion.span
            className="inline-block font-semibold text-primary"
            initial={{
              clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            }}
            whileInView={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: "easeOut",
            }}
          >
            'cognitive debt'
          </motion.span>
          <motion.span
            initial={{ opacity: 0, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {" "}
            that compounds over time."
          </motion.span>
        </motion.blockquote>

        {/* Citation */}
        <motion.div
          initial={{
            clipPath: "inset(0 100% 0 0)",
          }}
          whileInView={{
            clipPath: "inset(0 0% 0 0)",
          }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          <cite className="font-sans text-lg font-medium text-muted-foreground sm:text-xl">
            — MIT Technology Review
          </cite>
        </motion.div>
      </div>
    </section>
  );
}

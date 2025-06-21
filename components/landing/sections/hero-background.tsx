"use client";

import { motion } from "motion/react";
import { Star, Sparkles } from "lucide-react";

export function HeroBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.75 } }}
    >
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

      {/* Animated SVG Lines */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 h-full w-full opacity-10"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Primary Lines - Animate on first view */}
          <motion.path
            d="M-50 550 Q200 400 400 450 T750 300"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            className="text-foreground"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut", delay: 1.5 }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M-20 580 Q180 420 380 480 T720 330"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            className="text-foreground"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 3 }}
            viewport={{ once: true }}
          />
          <motion.path
            d="M20 600 Q250 380 450 430 T800 280"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
            className="text-foreground"
            initial={{ pathLength: 0, opacity: 0.5 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 4.5 }}
            viewport={{ once: true }}
          />
        </svg>
      </div>

      {/* Continuously Animating Lines - Spread Across Different Areas */}
      <div className="absolute inset-0">
        {/* Top Left Area */}
        <svg
          className="absolute top-0 left-0 h-1/2 w-1/2 opacity-15"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 250 Q100 150 200 200 T400 100"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            className="text-primary"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </svg>

        {/* Top Right Area */}
        <svg
          className="absolute top-0 right-0 h-1/2 w-1/2 opacity-20"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 80 Q150 180 300 120 T400 220"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
            className="text-primary"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </svg>

        {/* Bottom Left Area */}
        <svg
          className="absolute bottom-0 left-0 h-1/2 w-1/2 opacity-20"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0 150 Q120 50 240 120 T400 80"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-primary"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8,
            }}
          />
        </svg>

        {/* Bottom Right Area */}
        <svg
          className="absolute right-0 bottom-0 h-1/2 w-1/2 opacity-20"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M50 50 Q200 200 350 100 T400 280"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
            className="text-primary"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 10,
            }}
          />
        </svg>

        {/* Vertical Lines - Left Side */}
        <svg
          className="absolute top-0 left-1/6 h-full w-1/4 opacity-15"
          viewBox="0 0 200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M100 600 Q120 450 140 300 T180 0"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-primary"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 12,
            }}
          />
        </svg>

        {/* Vertical Lines - Right Side */}
        <svg
          className="absolute top-0 right-1/6 h-full w-1/4 opacity-20"
          viewBox="0 0 200 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M20 600 Q40 420 60 240 T100 0"
            stroke="currentColor"
            strokeWidth="0.4"
            fill="none"
            className="text-primary"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 14,
            }}
          />
        </svg>
      </div>

      {/* Floating Stars and Sparkles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Large Star */}
        <motion.div
          className="absolute left-1/4 text-primary/40"
          animate={{
            y: [0, -40, 0],
            x: [0, 8, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.1, 0.9],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0,
          }}
          style={{ top: "70%" }}
        >
          <Star size={12} fill="currentColor" />
        </motion.div>

        {/* Medium Sparkles */}
        <motion.div
          className="absolute left-3/4 text-accent/35"
          animate={{
            y: [0, -50, 0],
            x: [0, -10, 0],
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.2, 1],
            rotate: [0, -90, -180],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{ top: "55%" }}
        >
          <Sparkles size={10} fill="currentColor" />
        </motion.div>

        {/* Small Star */}
        <motion.div
          className="absolute left-1/2 text-primary/30"
          animate={{
            y: [0, -30, 0],
            x: [0, 12, 0],
            opacity: [0.4, 0.6, 0.4],
            scale: [0.8, 1.1, 0.8],
            rotate: [0, 270, 540],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8,
          }}
          style={{ top: "30%" }}
        >
          <Star size={8} fill="currentColor" />
        </motion.div>

        {/* Tiny Sparkles */}
        <motion.div
          className="absolute left-1/6 text-accent/40"
          animate={{
            y: [0, -25, 0],
            x: [0, 4, 0],
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{ top: "40%" }}
        >
          <Sparkles size={7} fill="currentColor" />
        </motion.div>

        {/* Right Side Star */}
        <motion.div
          className="absolute right-1/4 text-primary/25"
          animate={{
            y: [0, -35, 0],
            x: [0, -8, 0],
            opacity: [0.3, 0.5, 0.3],
            scale: [0.7, 1, 0.7],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12,
          }}
          style={{ top: "65%" }}
        >
          <Star size={9} fill="currentColor" />
        </motion.div>

        {/* Top Sparkles */}
        <motion.div
          className="absolute right-1/6 text-accent/30"
          animate={{
            y: [0, -45, 0],
            x: [0, -6, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 16,
          }}
          style={{ top: "25%" }}
        >
          <Sparkles size={8} fill="currentColor" />
        </motion.div>

        {/* Additional Small Star */}
        <motion.div
          className="absolute left-1/3 text-primary/35"
          animate={{
            y: [0, -22, 0],
            x: [0, 9, 0],
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.1, 1],
            rotate: [0, 360, 720],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 20,
          }}
          style={{ top: "80%" }}
        >
          <Star size={6} fill="currentColor" />
        </motion.div>

        {/* Final Sparkle */}
        <motion.div
          className="absolute right-2/5 text-accent/25"
          animate={{
            y: [0, -32, 0],
            x: [0, -5, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [0.9, 1.2, 0.9],
            rotate: [0, -270, -540],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
          style={{ top: "45%" }}
        >
          <Sparkles size={7} fill="currentColor" />
        </motion.div>
      </div>
    </motion.div>
  );
}

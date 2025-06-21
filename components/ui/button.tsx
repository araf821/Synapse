// src/components/ui/button.tsx

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * --- Synapse Design Philosophy: "Intentional Interaction" ---
 * Our buttons are designed to feel deliberate and purposeful. They are the primary medium for
 * committing to a thought or an action. We use subtle shadows and transforms to create a
 * tactile, physical feel, reinforcing that every click is a meaningful choice.
 * The animations are quick and non-distracting, serving focus, not flash.
 */

const buttonVariants = cva(
  // --- Base Styles ---
  // All buttons share these core properties for consistency.
  "inline-flex cursor-pointer items-center justify-center rounded-xl font-sans text-sm font-medium whitespace-nowrap ring-offset-background transition-all duration-300 ease-out select-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:transform-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // --- Primary Action Button ---
        // Used for the most important actions: "Start for Free", "Challenge My Thinking".
        // Enhanced with better gradients, shadows, and premium feel.
        default:
          "border border-primary/20 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 active:translate-y-0 active:scale-100 active:shadow-lg",

        // --- Destructive Action Button ---
        // For actions like deleting a project. Enhanced with gradient and better shadows.
        destructive:
          "text-destructive-foreground border border-destructive/20 bg-gradient-to-br from-destructive via-destructive to-destructive/90 shadow-lg shadow-destructive/25 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-xl hover:shadow-destructive/30 active:translate-y-0 active:scale-100 active:shadow-lg",

        // --- Secondary Action Button ---
        // Enhanced with subtle background, better borders, and premium hover effects.
        outline:
          "border-2 border-border/50 bg-background/50 backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary/40 hover:bg-background hover:text-primary hover:shadow-md hover:shadow-primary/10 active:translate-y-0 active:shadow-sm",

        // --- Tertiary Action Button ---
        // Enhanced with subtle gradients and better hover states.
        secondary:
          "border border-secondary/20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground hover:-translate-y-0.5 hover:from-secondary/90 hover:to-secondary/80 hover:shadow-md active:translate-y-0 active:shadow-sm",

        // --- Invisible Button ---
        // Enhanced with smoother transitions and better hover feedback.
        ghost:
          "hover:scale-[1.02] hover:bg-accent hover:text-accent-foreground hover:shadow-sm active:scale-100 active:bg-accent/80",

        // --- Standard Link ---
        // Enhanced with better underline animation.
        link: "text-primary decoration-primary/60 decoration-2 underline-offset-4 transition-all duration-200 hover:underline hover:decoration-primary",

        // --- Premium/Final Action Button ---
        // Enhanced with better gradients and more pronounced effects.
        premium:
          "relative overflow-hidden border border-primary/30 bg-gradient-to-br from-primary via-accent to-primary/80 text-primary-foreground shadow-xl shadow-primary/30 before:absolute before:inset-0 before:-translate-x-full before:-skew-x-12 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-transform before:duration-700 hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/40 hover:before:translate-x-full active:translate-y-0 active:scale-100 active:shadow-xl",
      },
      size: {
        default: "h-11 px-6 py-2.5 text-sm",
        sm: "h-9 rounded-lg px-4 py-2 text-xs font-medium",
        lg: "h-12 rounded-xl px-8 py-3 text-base font-semibold",
        icon: "h-11 w-11",
        xl: "h-14 rounded-2xl px-10 py-4 text-lg font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

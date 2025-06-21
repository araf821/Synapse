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
  "inline-flex cursor-pointer items-center justify-center rounded-lg font-sans text-sm font-medium whitespace-nowrap ring-offset-background transition-all duration-200 ease-in-out focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // --- Primary Action Button ---
        // Used for the most important actions: "Start for Free", "Challenge My Thinking".
        // Has a shadow and "lifts" on hover to feel important and clickable.
        default:
          "bg-primary text-primary-foreground shadow-md hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg active:translate-y-0 active:shadow-sm",

        // --- Destructive Action Button ---
        // For actions like deleting a project. Carries the same weight as the default button.
        destructive:
          "text-destructive-foreground bg-destructive shadow-md hover:-translate-y-0.5 hover:bg-destructive/90 hover:shadow-lg active:translate-y-0 active:shadow-sm",

        // --- Secondary Action Button ---
        // Used for less critical actions, like "Log In" or "Export".
        // Clean, simple, and doesn't compete for attention.
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",

        // --- Tertiary Action Button ---
        // A softer version of the secondary button.
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        // --- Invisible Button ---
        // For actions inside other components (e.g., in a dropdown).
        ghost: "hover:bg-accent hover:text-accent-foreground",

        // --- Standard Link ---
        // For navigational links that should look like text.
        link: "text-primary underline-offset-4 hover:underline",

        // --- NEW: Premium/Final Action Button ---
        // A special variant for the final, rewarding action, like "Finalize & Export".
        // It has a subtle gradient and a more pronounced hover effect to feel celebratory.
        premium:
          "bg-gradient-to-br from-primary to-blue-700 text-primary-foreground shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl active:translate-y-0 active:shadow-md",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-base", // Made lg slightly larger for hero CTAs
        icon: "h-10 w-10",
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

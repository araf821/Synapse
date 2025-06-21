import React from "react";
import { cn } from "@/lib/utils";

/**
 * --- Synapse Design Philosophy: "Intentional Interaction" ---
 * The rainbow button is designed for special moments - celebrating achievements,
 * final actions, or premium features. It maintains the tactile feel of our regular
 * buttons while adding the rainbow animation for emphasis and delight.
 */

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({
  children,
  className,
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        // Base styles - following Synapse button philosophy
        "relative inline-flex h-11 cursor-pointer items-center justify-center rounded-lg border-0 px-8 py-2",
        "text-sm font-medium whitespace-nowrap",
        "transition-all duration-200 ease-in-out",
        "shadow-md hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-sm",

        // Focus and disabled states
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-50",

        // Rainbow animation and background setup
        "animate-rainbow bg-[length:200%]",
        "[background-clip:padding-box,border-box,border-box] [background-origin:border-box]",
        "[border:calc(0.08*1rem)_solid_transparent]",

        // Glow effect (before pseudo-element)
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5",
        "before:-translate-x-1/2 before:animate-rainbow before:bg-[length:200%]",
        "before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        "before:[filter:blur(calc(0.8*1rem))]",

        // Light mode background and text
        "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        "text-white",

        // Dark mode background and text
        "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        "dark:text-black",

        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { LoginDialog } from "@/components/auth/login-dialog";
import { SynapseIcon } from "@/components/ui/synapse-icon";

// Navigation Link with animated underline and entrance animation
function NavLink({
  href,
  children,
  delay = 0,
}: {
  href: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <Link href={href} className="group relative px-1 py-2">
        <span className="font-medium text-muted-foreground transition-colors duration-200 group-hover:scale-105 group-hover:text-foreground">
          {children}
        </span>
        <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
      </Link>
    </motion.div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-300"
      initial={{ backgroundColor: "transparent" }}
      animate={{
        backgroundColor: isScrolled ? "oklch(0.97 0.012 70)" : "transparent",
        boxShadow: isScrolled
          ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
          : "none",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid h-16 grid-cols-3 items-center">
          {/* Logo - Left */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link href="/" className="group flex items-center space-x-3">
              <SynapseIcon className="size-8 text-primary transition-transform duration-200 group-hover:scale-110 group-hover:rotate-1" />
              <span className="font-display text-2xl font-bold tracking-tight text-foreground transition-transform duration-200 group-hover:scale-102">
                Synapse
              </span>
            </Link>
          </motion.div>

          {/* Navigation Links - Center */}
          <nav className="hidden items-center justify-center space-x-8 md:flex">
            <NavLink href="#how-it-works" delay={0.2}>
              How It Works
            </NavLink>
            <NavLink href="#pricing" delay={0.3}>
              Pricing
            </NavLink>
            <NavLink href="#faq" delay={0.4}>
              FAQ
            </NavLink>
          </nav>

          {/* Action Buttons - Right */}
          <motion.div
            className="flex items-center justify-end space-x-3"
            initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <LoginDialog
                triggerText="Log In"
                variant="ghost"
                className="hidden text-muted-foreground transition-colors sm:inline-flex"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <LoginDialog
                triggerText="Start for Free"
                variant="default"
                className="px-6 py-2.5 font-medium shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

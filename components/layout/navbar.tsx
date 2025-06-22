"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { LoginDialog } from "@/components/auth/login-dialog";
import { SynapseIcon } from "@/components/ui/synapse-icon";
import { landingNavigation } from "@/config/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if it's a hash link (section navigation)
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <Link
        href={href}
        onClick={handleClick}
        className="group relative block px-3 py-2"
      >
        <span className="text-sm font-bold text-muted-foreground transition-all duration-200 group-hover:text-foreground">
          {children}
        </span>
        <div className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
      </Link>
    </motion.div>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

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
        <div className="grid h-20 grid-cols-2 items-center lg:grid-cols-3">
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
          <nav className="hidden items-center justify-center space-x-12 lg:flex">
            {landingNavigation.map((link, index) => (
              <NavLink
                key={link.href}
                href={link.href}
                delay={0.2 + index * 0.1}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons - Right */}
          <motion.div
            className="flex items-center justify-end space-x-3"
            initial={{ opacity: 0, x: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            {/* Desktop Login Buttons */}
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
                className="hidden px-6 py-2.5 font-medium shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md sm:inline-flex"
              />
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <button className="flex size-10 items-center justify-center rounded-lg bg-muted/50 transition-colors hover:bg-muted focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:outline-none">
                    <Menu className="size-5 text-muted-foreground" />
                  </button>
                </SheetTrigger>
                <SheetContent
                  side="top"
                  className="h-full w-full border-none p-0"
                >
                  {/* Header with logo and close button */}
                  <SheetHeader className="flex-row items-center justify-between border-b border-border/40 bg-background/80 px-6 py-4 backdrop-blur-sm">
                    <div className="flex items-center space-x-3">
                      <SynapseIcon className="size-7 text-primary" />
                      <span className="font-display text-xl font-bold tracking-tight text-foreground">
                        Synapse
                      </span>
                    </div>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex size-9 items-center justify-center rounded-full bg-muted/50 transition-colors hover:bg-muted focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:outline-none"
                    >
                      <X className="size-5 text-muted-foreground" />
                    </button>
                  </SheetHeader>

                  {/* Navigation content */}
                  <div className="flex h-full flex-col">
                    {/* Navigation links */}
                    <div className="flex-1 overflow-y-auto p-6">
                      <nav className="space-y-4">
                        {landingNavigation.map(link => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={e => {
                              handleMobileLinkClick();
                              // Handle hash navigation
                              if (link.href.startsWith("#")) {
                                e.preventDefault();
                                const targetId = link.href.substring(1);
                                const targetElement =
                                  document.getElementById(targetId);
                                if (targetElement) {
                                  targetElement.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                  });
                                }
                              }
                            }}
                            className="block rounded-lg bg-muted/30 px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-muted"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </nav>
                    </div>

                    {/* Footer with login buttons */}
                    <div className="border-t border-border/40 p-6">
                      <div className="space-y-3">
                        <LoginDialog
                          triggerText="Log In"
                          variant="outline"
                          className="w-full justify-center"
                        />
                        <LoginDialog
                          triggerText="Start for Free"
                          variant="default"
                          className="w-full justify-center"
                        />
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}

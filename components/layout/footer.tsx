"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { SynapseIcon } from "@/components/ui/synapse-icon";

const footerSections = [
  {
    title: "Product",
    links: [
      { href: "#how-it-works", label: "How It Works" },
      { href: "/pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/help", label: "Help Center" },
      { href: "/status", label: "Status" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-muted/20">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-32 w-32 rounded-full bg-primary/3 blur-2xl"></div>
        <div className="absolute right-1/3 bottom-0 h-24 w-24 rounded-full bg-accent/5 blur-xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:gap-16">
          {/* Logo and Description */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="group flex items-center space-x-3">
              <SynapseIcon className="h-8 w-8 text-primary transition-transform duration-200 group-hover:scale-105" />
              <span className="font-display text-2xl font-bold text-foreground">
                Synapse
              </span>
            </Link>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              The AI-powered sparring partner that challenges your thinking and
              helps you build stronger arguments. Think better, not faster.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
            >
              <h3 className="text-base font-semibold text-foreground">
                {section.title}
              </h3>
              <ul className="mt-6 space-y-4">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                    transition={{
                      duration: 0.4,
                      delay: (sectionIndex + 1) * 0.1 + linkIndex * 0.05,
                    }}
                  >
                    <Link
                      href={link.href}
                      className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <span className="relative">
                        {link.label}
                        <div className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"></div>
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 border-t border-border/30 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2025 Synapse. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Built for thinkers who value authentic ideas.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

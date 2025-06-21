"use client";

import Link from "next/link";
import { LoginDialog } from "@/components/auth/login-dialog";

export function Navbar() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-foreground">
            Synapse
          </Link>

          {/* Navigation Links */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="#how-it-works"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <LoginDialog
              triggerText="Log In"
              variant="ghost"
              className="hidden sm:inline-flex"
            />
            <LoginDialog triggerText="Start for Free" variant="default" />
          </div>
        </div>
      </div>
    </header>
  );
}

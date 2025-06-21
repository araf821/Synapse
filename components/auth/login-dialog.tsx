"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SynapseIcon } from "@/components/ui/synapse-icon";
import { SignInGoogle, SignInDiscord } from "@/components/auth/sign-in";

interface LoginDialogProps {
  triggerText?: string;
  variant?: "default" | "ghost" | "outline";
  className?: string;
  trigger?: React.ReactNode;
}

export function LoginDialog({
  triggerText = "Log In",
  variant = "ghost",
  className,
  trigger,
}: LoginDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant={variant} className={className}>
            {triggerText}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent
        autoFocus={false}
        className="border-border/50 bg-card/95 backdrop-blur-sm sm:max-w-md"
      >
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute top-4 right-4 h-16 w-16 rounded-full bg-primary/5 blur-xl"></div>
          <div className="absolute bottom-6 left-6 h-12 w-12 rounded-full bg-accent/8 blur-lg"></div>
        </div>

        <DialogHeader className="relative space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <SynapseIcon className="size-10 text-primary" />
          </div>

          <div className="space-y-2">
            <DialogTitle className="text-center font-serif text-xl font-bold text-card-foreground sm:text-2xl">
              Welcome Back
            </DialogTitle>
            <DialogDescription className="text-center font-sans text-base text-muted-foreground">
              Sign in to continue building stronger arguments with your AI
              sparring partner.
            </DialogDescription>
          </div>
        </DialogHeader>

        <div className="relative flex flex-col gap-3 py-6">
          <SignInGoogle />
          <SignInDiscord />
        </div>

        {/* Footer note */}
        <div className="relative text-center">
          <p className="text-xs text-muted-foreground">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

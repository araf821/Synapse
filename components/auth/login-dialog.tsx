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
import { SignInGoogle, SignInDiscord } from "@/components/auth/sign-in";

interface LoginDialogProps {
  triggerText?: string;
  variant?: "default" | "ghost" | "outline";
  className?: string;
}

export function LoginDialog({
  triggerText = "Log In",
  variant = "ghost",
  className,
}: LoginDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {triggerText}
        </Button>
      </DialogTrigger>
      <DialogContent className="border-border bg-card sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-card-foreground">
            Sign in to Synapse
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Choose your preferred sign-in method to get started.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <SignInGoogle />
          <SignInDiscord />
        </div>
      </DialogContent>
    </Dialog>
  );
}

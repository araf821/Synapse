"use client";

import { User } from "next-auth";
import { User as UserIcon, X } from "lucide-react";
import { SignOut } from "@/components/auth/sign-out";
import { SynapseIcon } from "@/components/ui/synapse-icon";
import { NavigationLinks } from "@/components/ui/navigation-links";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MobileMenuProps {
  user: User;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function MobileMenu({ user, open, onOpenChange }: MobileMenuProps) {
  const handleLinkClick = () => {
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetTrigger asChild>
        <button className="relative flex size-10 items-center justify-center rounded-full bg-muted/50 p-0.5 transition-colors hover:bg-muted focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:outline-none">
          {user.image ? (
            <img
              src={user.image}
              alt={user.name || "User"}
              className="size-8 rounded-full object-cover"
            />
          ) : (
            <UserIcon className="size-5 text-muted-foreground" />
          )}
        </button>
      </SheetTrigger>
      <SheetContent side="top" className="h-full w-full border-none p-0">
        {/* Header with logo and close button */}
        <SheetHeader className="flex-row items-center justify-between border-b border-border/40 bg-background/80 px-6 py-4 backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <SynapseIcon className="size-7 text-primary" />
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              Synapse
            </span>
          </div>
          <button
            onClick={() => onOpenChange(false)}
            className="flex size-9 items-center justify-center rounded-full bg-muted/50 transition-colors hover:bg-muted focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 focus:outline-none"
          >
            <X className="size-5 text-muted-foreground" />
          </button>
        </SheetHeader>

        {/* Scrollable content */}
        <div className="flex h-full flex-col">
          {/* User info section */}
          <div className="border-b border-border/40 bg-muted/20 px-6 py-6">
            <div className="flex items-center space-x-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-background">
                {user.image ? (
                  <img
                    src={user.image}
                    alt={user.name || "User"}
                    className="size-12 rounded-full object-cover"
                  />
                ) : (
                  <UserIcon className="size-6 text-muted-foreground" />
                )}
              </div>
              <div className="flex flex-col space-y-1">
                <p className="leading-none font-medium">{user.name}</p>
                <p className="text-sm leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation links */}
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="space-y-2">
              <NavigationLinks onLinkClick={handleLinkClick} />
            </nav>
          </div>

          {/* Footer with sign out */}
          <div className="border-t border-border/40 p-6">
            <div className="rounded-lg bg-muted/50 p-3">
              <SignOut />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

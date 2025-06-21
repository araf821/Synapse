"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { User } from "next-auth";
import { SynapseIcon } from "@/components/ui/synapse-icon";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { UserButton } from "@/components/ui/user-button";
import { Plus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { dashboardNavigation } from "@/config/navigation";

interface DashboardNavbarProps {
  user: User;
}

function NavLink({
  href,
  children,
  isActive,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <Link href={href} className="group relative px-2 py-2">
      <span
        className={`text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "text-primary"
            : "text-muted-foreground group-hover:text-foreground"
        }`}
      >
        {children}
      </span>
      <div
        className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full transition-all duration-300 ${
          isActive
            ? "w-full bg-primary"
            : "w-0 bg-primary/25 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

export function DashboardNavbar({ user }: DashboardNavbarProps) {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex h-16 items-center">
          {/* Logo - Left */}
          <Link href="/dashboard" className="group flex items-center space-x-3">
            <SynapseIcon className="size-7 text-primary transition-transform duration-200 group-hover:scale-110" />
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              Synapse
            </span>
          </Link>

          {/* Navigation Links - Center */}
          <nav className="mx-auto hidden items-center space-x-8 md:flex">
            {dashboardNavigation.map(link => (
              <NavLink
                key={link.href}
                href={link.href}
                isActive={pathname === link.href}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action Buttons & User - Right */}
          <div className="flex items-center space-x-4">
            {/* New Synthesis CTA */}
            {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/synthesis/new">
                    <RainbowButton className="hidden h-9 px-6 text-sm sm:inline-flex">
                      <Plus className="mr-2 size-4" />
                      New Synthesis
                    </RainbowButton>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Start a new cognitive challenge</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider> */}

            {/* Mobile New Synthesis Button */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="sm"
                    variant="default"
                    className="sm:hidden"
                    asChild
                  >
                    <Link href="/synthesis/new">
                      <Plus className="size-4" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>New Synthesis</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* User Profile Dropdown */}
            <UserButton user={user} />
          </div>
        </div>
      </div>
    </header>
  );
}

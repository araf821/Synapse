"use client";

import { User } from "next-auth";
import {
  User as UserIcon,
  LayoutDashboard,
  CreditCard,
  Settings,
  DollarSign,
  X,
} from "lucide-react";
import { SignOut } from "@/components/auth/sign-out";
import { SynapseIcon } from "@/components/ui/synapse-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

interface UserButtonProps {
  user: User;
}

function NavigationLinks({ onLinkClick }: { onLinkClick?: () => void }) {
  const pathname = usePathname();

  const links = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/pricing",
      label: "Pricing",
      icon: DollarSign,
    },
    {
      href: "/settings",
      label: "Settings",
      icon: Settings,
    },
    {
      href: "/billing",
      label: "Billing",
      icon: CreditCard,
    },
  ];

  return (
    <>
      {links.map(link => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onLinkClick}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
            }`}
          >
            <link.icon className="size-4" />
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

export function UserButton({ user }: UserButtonProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleLinkClick = () => {
    setSheetOpen(false);
  };

  return (
    <>
      {/* Desktop Dropdown (lg and up) */}
      <div className="hidden lg:block">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative flex size-10 cursor-pointer items-center justify-center rounded-full bg-muted/50 p-0.5 transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:outline-none">
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
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm leading-none font-medium">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="p-1">
              <NavigationLinks />
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOut />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Sheet (md and below) */}
      <div className="block lg:hidden">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
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
                onClick={() => setSheetOpen(false)}
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
      </div>
    </>
  );
}

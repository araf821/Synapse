"use client";

import { User } from "next-auth";
import { User as UserIcon } from "lucide-react";
import { SignOut } from "@/components/auth/sign-out";
import { NavigationLinks } from "@/components/ui/navigation-links";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserDropdownProps {
  user: User;
}

export function UserDropdown({ user }: UserDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
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
  );
}

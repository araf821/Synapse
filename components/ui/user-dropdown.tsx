"use client";

import { User } from "next-auth";
import { User as UserIcon } from "lucide-react";
import { SignOut } from "@/components/auth/sign-out";
import { NavigationLinks } from "@/components/ui/navigation-links";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";

interface UserDropdownProps {
  user: User;
}

export function UserDropdown({ user }: UserDropdownProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="relative flex size-10 cursor-pointer items-center justify-center rounded-full bg-muted/50 p-0.5 transition hover:bg-muted focus-visible:scale-110 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:outline-none">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name || "User"}
              className="size-9 rounded-full object-cover"
              width={32}
              height={32}
            />
          ) : (
            <div className="grid size-9 place-items-center rounded-full bg-primary">
              <UserIcon className="size-5 text-background" />
            </div>
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-0" align="end">
        {/* User info header */}
        <div className="border-b border-border/50 px-4 py-3">
          <div className="flex flex-col space-y-1">
            <p className="text-sm leading-none font-medium">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>

        {/* Navigation links */}
        <div className="p-2">
          <NavigationLinks />
        </div>

        {/* Sign out section */}
        <div className="border-t border-border/50 p-2">
          <SignOut />
        </div>
      </PopoverContent>
    </Popover>
  );
}

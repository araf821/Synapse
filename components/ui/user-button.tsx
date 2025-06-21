"use client";

import { User } from "next-auth";
import { User as UserIcon } from "lucide-react";
import { SignOut } from "@/components/auth/sign-out";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserButtonProps {
  user: User;
}

export function UserButton({ user }: UserButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative flex size-10 cursor-pointer items-center justify-center rounded-full border bg-muted/50 p-0.5 transition-colors hover:bg-muted focus:ring-2 focus:ring-primary/50 focus-visible:outline-none">
          {user.image ? (
            <img
              src={user.image}
              alt={user.name || "User"}
              className="size-9 rounded-full object-cover"
            />
          ) : (
            <UserIcon className="size-5 text-muted-foreground" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm leading-none font-medium">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

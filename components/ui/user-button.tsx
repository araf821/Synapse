"use client";

import { User } from "next-auth";
import { useState } from "react";
import { UserDropdown } from "@/components/ui/user-dropdown";
import { MobileMenu } from "@/components/ui/mobile-menu";

interface UserButtonProps {
  user: User;
}

export function UserButton({ user }: UserButtonProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Dropdown (lg and up) */}
      <div className="hidden lg:block">
        <UserDropdown user={user} />
      </div>

      {/* Mobile Menu (md and below) */}
      <div className="block lg:hidden">
        <MobileMenu
          user={user}
          open={mobileMenuOpen}
          onOpenChange={setMobileMenuOpen}
        />
      </div>
    </>
  );
}

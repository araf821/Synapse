"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { dashboardNavigation } from "@/config/navigation";

interface NavigationLinksProps {
  onLinkClick?: () => void;
}

export function NavigationLinks({ onLinkClick }: NavigationLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {dashboardNavigation.map(link => {
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

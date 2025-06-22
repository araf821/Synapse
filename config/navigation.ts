import {
  LayoutDashboard,
  CreditCard,
  Settings,
  DollarSign,
  Palette,
} from "lucide-react";

export interface NavigationLink {
  href: string;
  label: string;
  icon?: any;
}

// Dashboard navigation links (authenticated users)
export const dashboardNavigation: NavigationLink[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/templates",
    label: "Templates",
    icon: Palette,
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

// Landing page navigation links (public)
export const landingNavigation: NavigationLink[] = [
  {
    href: "#solution",
    label: "Solution",
  },
  {
    href: "#features",
    label: "Features",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
];

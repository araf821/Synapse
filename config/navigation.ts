import {
  LayoutDashboard,
  CreditCard,
  Settings,
  DollarSign,
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
    href: "#how-it-works",
    label: "How It Works",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

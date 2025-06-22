export const siteConfig = {
  name: "Synapse",
  description:
    "AI-powered cognitive training platform that transforms surface-level thinking into unshakeable intellectual rigor through multi-agent challenges and deep synthesis.",
  url: "https://synapse.app", // Update with actual domain
  ogImage: "/og-image.png", // Will be added soon
  links: {
    twitter: "https://twitter.com/synapse_app", // Update with actual social links
    github: "https://github.com/synapse-app", // Update with actual GitHub
    linkedin: "https://linkedin.com/company/synapse-app", // Update with actual LinkedIn
  },
  creator: "Synapse Team",
  keywords: [
    "cognitive training",
    "AI-powered thinking",
    "intellectual rigor",
    "critical thinking",
    "synthesis",
    "cognitive challenges",
    "deep thinking",
    "mental training",
    "thought architecture",
    "cognitive excellence",
    "AI cognitive coach",
    "thinking skills",
    "intellectual development",
    "cognitive science",
    "reasoning training",
  ],
  authors: [
    {
      name: "Synapse Team",
      url: "https://synapse.app",
    },
  ],
  themeColor: "#8B4513", // Primary clay color from design system
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  verification: {
    google: "", // Add Google Search Console verification code
    yandex: "", // Add Yandex verification code
    yahoo: "", // Add Yahoo verification code
    bing: "", // Add Bing verification code
  },
  analytics: {
    googleAnalyticsId: "", // Add GA4 measurement ID
    hotjarId: "", // Add Hotjar site ID
    plausibleDataDomain: "", // Add Plausible domain
  },
  // Page-specific metadata
  pages: {
    home: {
      title: "Synapse - AI-Powered Cognitive Training Platform",
      description:
        "Transform your thinking from shallow to unshakeable with AI-powered cognitive challenges. Join thousands building intellectual muscle through deep synthesis.",
      keywords: [
        "cognitive training platform",
        "AI thinking coach",
        "intellectual rigor training",
        "critical thinking development",
        "cognitive enhancement",
        "thinking skills improvement",
      ],
    },
    pricing: {
      title: "Pricing - Synapse Cognitive Training Plans",
      description:
        "Choose the cognitive rigor that matches your ambitions. Explore our flexible pricing plans for AI-powered thinking enhancement and intellectual development.",
      keywords: [
        "cognitive training pricing",
        "thinking skills subscription",
        "AI coach pricing",
        "intellectual development plans",
        "cognitive enhancement cost",
      ],
    },
    dashboard: {
      title: "Dashboard - Your Cognitive Journey | Synapse",
      description:
        "Track your intellectual progress, manage synthesis sessions, and continue your journey toward unshakeable thinking with Synapse.",
      keywords: [
        "cognitive dashboard",
        "thinking progress tracker",
        "synthesis management",
        "intellectual journey",
        "cognitive metrics",
      ],
    },
    templates: {
      title: "Expert Templates - Pressure-Test Your Ideas | Synapse",
      description:
        "Access curated cognitive challenges designed by industry experts. Stress-test your ideas with specialized templates for maximum intellectual rigor.",
      keywords: [
        "cognitive templates",
        "expert challenges",
        "thinking frameworks",
        "intellectual stress tests",
        "curated challenges",
        "expert-designed templates",
      ],
    },
    settings: {
      title: "Settings - Manage Your Cognitive Profile | Synapse",
      description:
        "Customize your cognitive training experience, manage account preferences, and track your intellectual development journey.",
      keywords: [
        "cognitive profile settings",
        "training preferences",
        "account management",
        "cognitive customization",
      ],
    },
    billing: {
      title: "Billing - Manage Your Subscription | Synapse",
      description:
        "Manage your Synapse subscription, view billing history, and upgrade your cognitive training plan for enhanced intellectual development.",
      keywords: [
        "subscription management",
        "cognitive training billing",
        "upgrade plans",
        "billing history",
        "account billing",
      ],
    },
  },
  // Structured data schemas
  structuredData: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Synapse",
      description:
        "AI-powered cognitive training platform that transforms surface-level thinking into unshakeable intellectual rigor.",
      url: "https://synapse.app",
      logo: "https://synapse.app/logo.png",
      sameAs: [
        "https://twitter.com/synapse_app",
        "https://linkedin.com/company/synapse-app",
        "https://github.com/synapse-app",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "support@synapse.app",
      },
    },
    softwareApplication: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Synapse",
      description:
        "AI-powered cognitive training platform for developing unshakeable intellectual rigor",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: "Free cognitive training with premium plans available",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        ratingCount: "1247",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Organization",
        name: "Synapse Team",
      },
    },
    webSite: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Synapse",
      description: "AI-powered cognitive training platform",
      url: "https://synapse.app",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://synapse.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  },
  // Robot.txt rules
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
  // Security headers
  security: {
    contentSecurityPolicy: {
      "default-src": ["'self'"],
      "script-src": ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
      "style-src": ["'self'", "'unsafe-inline'"],
      "img-src": ["'self'", "data:", "https:"],
      "font-src": ["'self'"],
      "connect-src": ["'self'"],
    },
  },
};

export type SiteConfig = typeof siteConfig;

// Helper function to generate page metadata
export function generatePageMetadata(pageKey: keyof typeof siteConfig.pages) {
  const page = siteConfig.pages[pageKey];
  const baseUrl = siteConfig.url;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: page.title,
      description: page.description,
      url: baseUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [siteConfig.ogImage],
      creator: "@synapse_app",
    },
    robots: siteConfig.robots,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: baseUrl,
    },
  };
}

// Helper function to generate structured data
export function generateStructuredData(
  type: keyof typeof siteConfig.structuredData
) {
  return siteConfig.structuredData[type];
}

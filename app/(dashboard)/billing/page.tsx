"use client";

import { useState } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CreditCard,
  Calendar,
  DollarSign,
  Bell,
  Check,
  Zap,
  Crown,
  Rocket,
  Mail,
  AlertCircle,
  Clock,
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react";
import { SynapseIcon } from "@/components/ui/synapse-icon";
import Link from "next/link";

// Mock billing data
const currentPlan = {
  name: "Beta Access",
  price: "$0",
  period: "forever",
  description: "Early access to core cognitive training features",
  features: [
    "Unlimited synthesis sessions",
    "AI-powered challenges",
    "Progress tracking",
    "Export your work",
    "Community access",
  ],
  nextBilling: null,
};

// Future pricing plans (simplified from actual pricing page)
const upcomingPlans = [
  {
    id: "free",
    name: "Cognitive Explorer",
    price: "Free",
    period: "forever",
    description: "Begin your journey of intellectual rigor",
    features: [
      "3 synthesis sessions per month",
      "Basic AI challenge generation",
      "Standard response analysis",
      "Essential cognitive tools",
    ],
    recommended: false,
  },
  {
    id: "pro",
    name: "Thought Architect",
    price: "$7.99",
    period: "month",
    description: "For serious thinkers who demand depth",
    features: [
      "Unlimited synthesis sessions",
      "Advanced multi-agent challenges",
      "Deep reasoning analysis",
      "Custom challenge difficulty",
    ],
    recommended: true,
  },
  {
    id: "enterprise",
    name: "Cognitive Collective",
    price: "Custom",
    period: "per team",
    description: "For organizations building thinking culture",
    features: [
      "Everything in Pro",
      "Team collaboration spaces",
      "Organization-wide analytics",
      "Custom AI model training",
    ],
    recommended: false,
  },
];

function PlanCard({
  plan,
  isCurrent = false,
}: {
  plan: (typeof upcomingPlans)[0];
  isCurrent?: boolean;
}) {
  return (
    <Card
      className={`relative border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${plan.recommended ? "border-primary/50 ring-2 ring-primary/20" : ""}`}
    >
      {plan.recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
            <Star className="mr-1 size-3" />
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader className="text-center">
        <CardTitle className="font-serif text-xl font-semibold">
          {plan.name}
        </CardTitle>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-3xl font-bold text-primary">{plan.price}</span>
          <span className="text-sm text-muted-foreground">/{plan.period}</span>
        </div>
        <p className="text-sm text-muted-foreground">{plan.description}</p>
      </CardHeader>

      <CardContent className="space-y-4">
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <Check className="size-4 flex-shrink-0 text-green-600" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className="w-full"
          variant={plan.recommended ? "default" : "outline"}
          disabled
        >
          {isCurrent ? "Current Plan" : "Coming Soon"}
        </Button>
      </CardContent>
    </Card>
  );
}

function NotificationSignup() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    // Simulate API call with loading
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubscribed(true);
  };

  if (isSubscribed) {
    return (
      <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardContent className="flex items-center gap-4 p-6">
          <div className="flex size-12 items-center justify-center rounded-full bg-green-100">
            <Check className="size-6 text-green-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-green-900">You're all set!</h3>
            <p className="text-green-700">
              We'll notify you as soon as subscription plans are available.
              Thanks for being part of the cognitive revolution!
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Bell className="size-5" />
          </div>
          <div>
            <CardTitle className="font-serif text-lg font-semibold">
              Get Notified
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Be the first to know when subscription plans launch
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="notification-email">Email Address</Label>
            <Input
              id="notification-email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="mt-1"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading || !email}
          >
            {isLoading ? (
              <>
                <div className="mr-2 animate-spin">
                  <SynapseIcon size={16} />
                </div>
                Subscribing...
              </>
            ) : (
              <>
                <Mail className="mr-2 size-4" />
                Notify Me
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground">
            We'll only email you about pricing updates. No spam, ever.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}

export default function BillingPage() {
  // Note: This is a client component, so we can't use auth() directly
  // In a real implementation, you'd use useSession() or similar
  // For now, we'll assume the user is authenticated since they're in the dashboard

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pt-24 pb-16">
      {/* Background Enhancement */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/3 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/3 h-48 w-48 rounded-full bg-accent/5 blur-2xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <CreditCard className="mr-2 size-4" />
            Billing & Subscription
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Billing
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Manage your subscription and access premium cognitive training
            features.
          </p>
        </div>

        {/* Early Access Notice */}
        <div className="mb-12">
          <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex size-12 items-center justify-center rounded-full bg-amber-100">
                <Sparkles className="size-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-amber-900">
                  We're in Early Development
                </h3>
                <p className="text-amber-700">
                  Synapse is currently in beta, and all features are free while
                  we perfect the cognitive training experience. Subscription
                  plans will be introduced once we reach feature completeness.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Plan */}
        <div className="mb-12">
          <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
            Current Plan
          </h2>

          <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Crown className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold">
                      {currentPlan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {currentPlan.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    {currentPlan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentPlan.period}
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="size-4 flex-shrink-0 text-green-600" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Available Plans */}
        <div className="mb-12">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Available Subscription Plans
            </h2>
            <Button variant="outline" asChild>
              <Link href="/pricing">
                View Full Pricing Details
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingPlans.map(plan => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>

        {/* Notification Signup */}
        <div className="mb-12">
          <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
            Stay Updated
          </h2>

          <div className="mx-auto max-w-md">
            <NotificationSignup />
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
            Billing FAQ
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg">
                  When will paid plans launch?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We're targeting Q4 2025 for the launch of subscription plans.
                  Current beta users will receive special early-bird pricing and
                  grandfathered features.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg">
                  Will my data be preserved?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Absolutely! All your synthesis work, progress, and insights
                  will carry over seamlessly when subscription plans launch.
                  Nothing will be lost.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg">
                  What payment methods will you accept?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We'll support all major credit cards, PayPal, and potentially
                  cryptocurrency. Stripe will handle all payment processing for
                  maximum security.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-serif text-lg">
                  Can I cancel anytime?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Yes! We believe in the value we provide. You'll be able to
                  cancel anytime with no hidden fees or complex processes. Just
                  simple, honest billing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

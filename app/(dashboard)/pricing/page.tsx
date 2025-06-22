"use client";

import { motion } from "motion/react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Brain,
  Target,
  Zap,
  Check,
  Crown,
  Sparkles,
  Users,
  Building2,
  ArrowRight,
  Star,
} from "lucide-react";
import { LoginDialog } from "@/components/auth/login-dialog";

const pricingTiers = [
  {
    id: "free",
    name: "Cognitive Explorer",
    price: "Free",
    period: "forever",
    description: "Begin your journey of intellectual rigor",
    icon: <Brain className="size-8" />,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    features: [
      "3 synthesis sessions per month",
      "Basic AI challenge generation",
      "Standard response analysis",
      "Essential cognitive tools",
      "Community access",
      "Progress tracking",
    ],
    cta: "Start Exploring",
    popular: false,
  },
  {
    id: "pro",
    name: "Thought Architect",
    price: "$7.99",
    period: "per month",
    description: "For serious thinkers who demand depth",
    icon: <Target className="size-8" />,
    color: "from-accent/20 to-primary/20",
    borderColor: "border-accent/50",
    features: [
      "Unlimited synthesis sessions",
      "Advanced multi-agent challenges",
      "Deep reasoning analysis",
      "Custom challenge difficulty",
      "Priority AI processing",
      "Export & sharing tools",
      "Advanced analytics",
      "Email support",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Cognitive Collective",
    price: "Custom",
    period: "per team",
    description: "For organizations building thinking culture",
    icon: <Building2 className="size-8" />,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    features: [
      "Everything in Pro",
      "Team collaboration spaces",
      "Organization-wide analytics",
      "Custom AI model training",
      "White-label options",
      "Dedicated account manager",
      "Priority support",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Chen",
    role: "Research Director",
    company: "Stanford AI Lab",
    content:
      "Synapse transformed how I approach complex research questions. My arguments are now unshakeable.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Strategy Consultant",
    company: "McKinsey & Company",
    content:
      "The cognitive rigor Synapse demands has made me a sharper strategic thinker. Essential for high-stakes work.",
    rating: 5,
  },
  {
    name: "Elena Vasquez",
    role: "Founder & CEO",
    company: "TechFlow Ventures",
    content:
      "Every pitch deck I create goes through Synapse now. The depth of thinking it creates is unmatched.",
    rating: 5,
  },
];

export default function PricingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 h-32 w-32 rounded-full bg-primary/5 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-20 h-24 w-24 rounded-full bg-accent/8 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 h-40 w-40 rounded-full bg-purple-500/5 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        {/* Header Section */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          {/* Premium Badge */}
          <motion.div
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-accent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Sparkles className="size-4" />
            <span className="text-sm font-medium">Premium Cognitive Tools</span>
          </motion.div>

          <motion.h1
            className="mb-6 font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Invest in Your{" "}
            <motion.span
              className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              Thinking
            </motion.span>
          </motion.h1>

          <motion.p
            className="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Choose the cognitive rigor that matches your ambitions. Every plan
            is designed to make your thinking unshakeable.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-3"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className="group relative"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: 1.2 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
            >
              {tier.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 z-20 -translate-x-1/2 transform"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 }}
                >
                  <Badge className="bg-accent px-4 py-1 text-sm font-medium text-accent-foreground">
                    <Crown className="mr-1 size-3" />
                    Most Popular
                  </Badge>
                </motion.div>
              )}

              <Card
                className={`relative h-full overflow-hidden transition-all duration-300 ${
                  tier.popular
                    ? "border-accent/50 bg-card/90 shadow-xl shadow-accent/10"
                    : "border-border/30 bg-card/70 hover:border-border/50"
                } backdrop-blur-sm group-hover:shadow-2xl`}
              >
                {/* Animated gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <CardHeader className="relative z-10 pb-8 text-center">
                  <motion.div
                    className="mb-4 flex justify-center"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className={`rounded-2xl border p-4 ${tier.borderColor} ${tier.popular ? "bg-accent/10" : "bg-muted/50"} `}
                    >
                      {tier.icon}
                    </div>
                  </motion.div>

                  <h3 className="mb-2 text-2xl font-bold text-foreground">
                    {tier.name}
                  </h3>

                  <p className="mb-6 text-sm text-muted-foreground">
                    {tier.description}
                  </p>

                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      {tier.price}
                    </span>
                    <span className="text-muted-foreground">
                      /{tier.period}
                    </span>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 pt-0">
                  <ul className="mb-8 space-y-4">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 1.4 + index * 0.1 + featureIndex * 0.05,
                          duration: 0.4,
                        }}
                      >
                        <div className="flex-shrink-0 p-1">
                          <Check className="size-4 text-accent" />
                        </div>
                        <span className="text-sm leading-relaxed text-muted-foreground">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {tier.id === "free" ? (
                      <LoginDialog
                        trigger={
                          <Button
                            className="h-12 w-full text-base font-medium"
                            variant="outline"
                          >
                            {tier.cta}
                            <ArrowRight className="ml-2 size-4" />
                          </Button>
                        }
                      />
                    ) : tier.id === "pro" ? (
                      <RainbowButton className="h-12 w-full text-base font-medium">
                        {tier.cta}
                        <Zap className="ml-2 size-4" />
                      </RainbowButton>
                    ) : (
                      <Button
                        className="h-12 w-full text-base font-medium"
                        variant="outline"
                      >
                        {tier.cta}
                        <Users className="ml-2 size-4" />
                      </Button>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground">
            Trusted by Deep Thinkers
          </h2>
          <p className="mb-12 text-muted-foreground">
            Join hundreds of researchers, consultants, and founders who refuse
            to settle for shallow thinking.
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full border-border/30 bg-card/60 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-primary">
            <Brain className="size-4" />
            <span className="text-sm font-medium">
              Start Building Intellectual Muscle
            </span>
          </div>

          <h3 className="mb-4 font-display text-2xl font-bold text-foreground">
            Ready to Think Differently?
          </h3>

          <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
            Join the cognitive revolution. Your future self will thank you for
            choosing depth over convenience.
          </p>

          <LoginDialog
            trigger={
              <RainbowButton className="px-8 py-4 text-lg">
                Begin Your Transformation
                <ArrowRight className="ml-2 size-5" />
              </RainbowButton>
            }
          />
        </motion.div>
      </div>
    </div>
  );
}

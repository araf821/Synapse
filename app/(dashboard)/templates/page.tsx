import { Suspense } from "react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Star,
  Clock,
  Users,
  Brain,
  Target,
  Lightbulb,
  Scale,
  TrendingUp,
  FileText,
  Zap,
  Award,
} from "lucide-react";

// Template categories with icons
const categories = [
  { id: "all", name: "All Templates", icon: FileText },
  { id: "business", name: "Business Strategy", icon: TrendingUp },
  { id: "research", name: "Research & Analysis", icon: Brain },
  { id: "decision", name: "Decision Making", icon: Scale },
  { id: "creative", name: "Creative Thinking", icon: Lightbulb },
  { id: "personal", name: "Personal Development", icon: Target },
];

// Mock template data following the description provided
const templates = [
  {
    id: "investor-pitch-critique",
    title: "Investor Pitch Critique",
    description:
      "Stress-test your startup pitch with skeptical VC questions. Identifies weak points in your value proposition, market analysis, and financial projections.",
    category: "business",
    difficulty: "Advanced",
    duration: "45-60 min",
    rating: 4.9,
    usageCount: 1247,
    tags: ["Fundraising", "Startup", "Pitch Deck", "VC"],
    featured: true,
    creator: "Ex-VC Partner",
    createdBy: "Sarah Chen",
  },
  {
    id: "research-paper-rebuttal",
    title: "Research Paper Rebuttal",
    description:
      "Find methodological flaws and strengthen your research before peer review. Challenges assumptions, data analysis, and conclusions.",
    category: "research",
    difficulty: "Expert",
    duration: "60-90 min",
    rating: 4.8,
    usageCount: 892,
    tags: ["Academic", "Methodology", "Peer Review", "Research"],
    featured: true,
    creator: "PhD Committee Chair",
    createdBy: "Dr. Michael Torres",
  },
  {
    id: "strategic-decision-framework",
    title: "Strategic Decision Framework",
    description:
      "Navigate complex business decisions with multi-perspective analysis. Uncovers blind spots and evaluates long-term consequences.",
    category: "business",
    difficulty: "Intermediate",
    duration: "30-45 min",
    rating: 4.7,
    usageCount: 2341,
    tags: ["Strategy", "Leadership", "Risk Assessment"],
    featured: false,
    creator: "McKinsey Alum",
    createdBy: "Alex Kumar",
  },
  {
    id: "hypothesis-stress-test",
    title: "Scientific Hypothesis Stress Test",
    description:
      "Challenge your research hypothesis from multiple scientific angles. Tests for confounding variables and alternative explanations.",
    category: "research",
    difficulty: "Advanced",
    duration: "45-75 min",
    rating: 4.6,
    usageCount: 567,
    tags: ["Scientific Method", "Hypothesis", "Variables"],
    featured: false,
    creator: "Research Director",
    createdBy: "Dr. Elena Vasquez",
  },
  {
    id: "creative-concept-validation",
    title: "Creative Concept Validation",
    description:
      "Test innovative ideas against market reality and user needs. Balances creative vision with practical constraints.",
    category: "creative",
    difficulty: "Intermediate",
    duration: "25-40 min",
    rating: 4.5,
    usageCount: 1876,
    tags: ["Innovation", "Product Design", "Market Fit"],
    featured: false,
    creator: "Design Thinking Expert",
    createdBy: "Maya Patel",
  },
  {
    id: "life-decision-compass",
    title: "Life Decision Compass",
    description:
      "Navigate major personal decisions with structured thinking. Weighs values, consequences, and long-term implications.",
    category: "personal",
    difficulty: "Beginner",
    duration: "20-35 min",
    rating: 4.7,
    usageCount: 3492,
    tags: ["Life Choices", "Values", "Personal Growth"],
    featured: false,
    creator: "Executive Coach",
    createdBy: "James Rodriguez",
  },
  {
    id: "investment-thesis-challenge",
    title: "Investment Thesis Challenge",
    description:
      "Stress-test investment ideas with contrarian perspectives. Examines market assumptions and risk factors.",
    category: "business",
    difficulty: "Advanced",
    duration: "40-60 min",
    rating: 4.8,
    usageCount: 743,
    tags: ["Investing", "Risk Analysis", "Market Research"],
    featured: true,
    creator: "Hedge Fund Manager",
    createdBy: "David Kim",
  },
  {
    id: "policy-impact-analysis",
    title: "Policy Impact Analysis",
    description:
      "Evaluate policy proposals from multiple stakeholder perspectives. Uncovers unintended consequences and implementation challenges.",
    category: "research",
    difficulty: "Expert",
    duration: "60-90 min",
    rating: 4.4,
    usageCount: 234,
    tags: ["Public Policy", "Stakeholder Analysis", "Implementation"],
    featured: false,
    creator: "Policy Analyst",
    createdBy: "Dr. Rachel Green",
  },
];

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800 border-green-200";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "Advanced":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "Expert":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
}

function TemplateCard({ template }: { template: (typeof templates)[0] }) {
  const categoryIcon =
    categories.find(cat => cat.id === template.category)?.icon || FileText;
  const IconComponent = categoryIcon;

  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
      {template.featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
            <Star className="mr-1 size-3" />
            Featured
          </Badge>
        </div>
      )}

      <CardHeader className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <IconComponent className="size-6" />
          </div>
          <div className="flex-1">
            <CardTitle className="font-serif text-lg font-semibold transition-colors group-hover:text-primary">
              {template.title}
            </CardTitle>
            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <span>by {template.createdBy}</span>
              <span>•</span>
              <Badge
                variant="outline"
                className={getDifficultyColor(template.difficulty)}
              >
                {template.difficulty}
              </Badge>
            </div>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {template.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-1">
          {template.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="size-4" />
              <span>{template.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="size-4" />
              <span>{template.usageCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="size-4 fill-current text-yellow-500" />
              <span>{template.rating}</span>
            </div>
          </div>
        </div>

        <Button
          className="w-full transition-colors group-hover:bg-primary/90"
          disabled
        >
          <Zap className="mr-2 size-4" />
          Start Challenge
          <span className="ml-2 text-xs opacity-75">(Coming Soon)</span>
        </Button>
      </CardContent>
    </Card>
  );
}

export default async function TemplatesPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pt-24 pb-16">
      {/* Background Enhancement */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/3 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/3 h-48 w-48 rounded-full bg-accent/5 blur-2xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Brain className="mr-2 size-4" />
            Curated by Experts
          </div>
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Pressure-Test Templates
          </h1>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-muted-foreground">
            Pre-built challenges designed by industry experts for specific
            high-value problems. Transform your thinking from general to
            specialized in minutes.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="mb-8">
          <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex size-12 items-center justify-center rounded-full bg-amber-100">
                <Award className="size-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-amber-900">
                  Templates Coming Soon!
                </h3>
                <p className="text-amber-700">
                  We're working with industry experts to create the most
                  effective cognitive challenges. Templates will be available in
                  our next major release.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="relative">
            <Search className="absolute top-1/2 left-3 size-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search templates by topic, industry, or challenge type..."
              className="h-12 pl-10 text-base"
              disabled
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map(category => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={category.id === "all" ? "default" : "outline"}
                  className="flex items-center gap-2"
                  disabled
                >
                  <IconComponent className="size-4" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Featured Templates */}
        <div className="mb-12">
          <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
            Featured Templates
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates
              .filter(t => t.featured)
              .map(template => (
                <TemplateCard key={template.id} template={template} />
              ))}
          </div>
        </div>

        {/* All Templates */}
        <div>
          <h2 className="mb-6 font-serif text-2xl font-semibold text-foreground">
            All Templates
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {templates.map(template => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="inline-block border-border/50 bg-card/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="mb-3 font-serif text-xl font-semibold">
                Want to Create a Template?
              </h3>
              <p className="mb-4 max-w-md text-muted-foreground">
                Are you an expert in your field? Help us build the ultimate
                library of cognitive challenges.
              </p>
              <Button variant="outline" disabled>
                Apply to Become a Creator
                <span className="ml-2 text-xs opacity-75">(Coming Soon)</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

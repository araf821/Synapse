import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, CheckCircle, Clock } from "lucide-react";

interface DashboardStatsProps {
  totalSyntheses: number;
  completedSyntheses: number;
  inProgressSyntheses: number;
}

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  description: string;
}

function StatCard({ title, value, icon, description }: StatCardProps) {
  return (
    <Card className="relative overflow-hidden border-border/50 bg-card/50 py-4 backdrop-blur-sm transition-all duration-200 hover:border-border hover:bg-card/80">
      <CardContent className="p-0 px-4">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              {icon}
              <h3 className="text-sm font-medium text-foreground">{title}</h3>
            </div>
            <p className="text-2xl font-bold tracking-tight text-foreground">
              {value}
            </p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function DashboardStats({
  totalSyntheses,
  completedSyntheses,
  inProgressSyntheses,
}: DashboardStatsProps) {
  const completionRate =
    totalSyntheses > 0
      ? Math.round((completedSyntheses / totalSyntheses) * 100)
      : 0;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Syntheses"
        value={totalSyntheses}
        icon={<Brain className="size-6 text-blue-600" />}
        description="All time"
      />

      <StatCard
        title="Completed"
        value={completedSyntheses}
        icon={<CheckCircle className="size-6 text-green-600" />}
        description="Finished syntheses"
      />

      <StatCard
        title="In Progress"
        value={inProgressSyntheses}
        icon={<Clock className="size-6 text-amber-600" />}
        description="Active syntheses"
      />

      <StatCard
        title="Completion Rate"
        value={completionRate}
        icon={<Target className="size-6 text-purple-600" />}
        description="Success percentage"
      />
    </div>
  );
}

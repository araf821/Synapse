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
  color: string;
}

function StatCard({ title, value, icon, description, color }: StatCardProps) {
  return (
    <Card className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-200 hover:border-border hover:bg-card/80">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold tracking-tight text-foreground">
              {value}
            </p>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
          <div className={`rounded-full p-3 ${color}`}>{icon}</div>
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
        color="bg-blue-100 dark:bg-blue-900/20"
      />

      <StatCard
        title="Completed"
        value={completedSyntheses}
        icon={<CheckCircle className="size-6 text-green-600" />}
        description="Finished syntheses"
        color="bg-green-100 dark:bg-green-900/20"
      />

      <StatCard
        title="In Progress"
        value={inProgressSyntheses}
        icon={<Clock className="size-6 text-amber-600" />}
        description="Active syntheses"
        color="bg-amber-100 dark:bg-amber-900/20"
      />

      <StatCard
        title="Completion Rate"
        value={completionRate}
        icon={<Target className="size-6 text-purple-600" />}
        description="Success percentage"
        color="bg-purple-100 dark:bg-purple-900/20"
      />
    </div>
  );
}

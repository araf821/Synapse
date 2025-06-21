import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      {/* Welcome Section Skeleton */}
      <div className="mb-8">
        <Skeleton className="mb-2 h-8 w-64" />
        <Skeleton className="h-5 w-96" />
      </div>

      {/* Stats Section Skeleton */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
          <Skeleton className="mb-2 h-6 w-32" />
          <Skeleton className="mb-1 h-8 w-16" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
          <Skeleton className="mb-2 h-6 w-32" />
          <Skeleton className="mb-1 h-8 w-16" />
          <Skeleton className="h-4 w-24" />
        </div>
        <div className="rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
          <Skeleton className="mb-2 h-6 w-32" />
          <Skeleton className="mb-1 h-8 w-16" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>

      {/* Syntheses Section Skeleton */}
      <div className="mb-6">
        <div className="mb-6 flex items-center justify-between">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-10 w-32" />
        </div>

        {/* Synthesis Cards Skeleton */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm"
            >
              <Skeleton className="mb-3 h-6 w-3/4" />
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="mb-4 h-4 w-2/3" />

              <div className="mb-4 flex items-center justify-between">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-5 w-16" />
              </div>

              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-8 w-24" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

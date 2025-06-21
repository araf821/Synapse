import { Skeleton } from "@/components/ui/skeleton";

export default function Stage2Loading() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Stage Header Skeleton */}
      <div className="mb-8">
        <div className="mb-4 flex items-center gap-4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-8 w-48" />
        </div>
        <Skeleton className="mb-2 h-5 w-96" />
        <Skeleton className="h-5 w-80" />
      </div>

      {/* Progress Indicator Skeleton */}
      <div className="mb-8 rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Skeleton className="h-6 w-6 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-4 w-16" />
        </div>
        <Skeleton className="mt-4 h-2 w-full" />
      </div>

      {/* AI Processing Status */}
      <div className="mb-8 rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <div>
            <Skeleton className="mb-1 h-5 w-48" />
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
      </div>

      {/* Challenge Cards Skeleton */}
      <div className="space-y-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm"
          >
            {/* Challenge Header */}
            <div className="mb-6">
              <div className="mb-4 flex items-center gap-4">
                <Skeleton className="h-6 w-6 rounded-full" />
                <Skeleton className="h-6 w-40" />
              </div>
              <Skeleton className="mb-2 h-4 w-full" />
              <Skeleton className="mb-2 h-4 w-11/12" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Challenge Content */}
            <div className="mb-6">
              <Skeleton className="mb-4 h-5 w-32" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-10/12" />
                <Skeleton className="h-4 w-11/12" />
              </div>
            </div>

            {/* Response Area */}
            <div className="mb-6">
              <Skeleton className="mb-2 h-5 w-32" />
              <Skeleton className="h-32 w-full rounded-lg" />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-32" />
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Actions */}
      <div className="mt-8 flex items-center justify-between">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  );
}

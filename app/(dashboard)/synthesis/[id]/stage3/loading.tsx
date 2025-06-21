import { Skeleton } from "@/components/ui/skeleton";

export default function Stage3Loading() {
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

      {/* Previous Content Summary */}
      <div className="mb-8 rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
        <Skeleton className="mb-4 h-6 w-40" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Skeleton className="mb-2 h-5 w-24" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-11/12" />
              <Skeleton className="h-3 w-10/12" />
            </div>
          </div>
          <div>
            <Skeleton className="mb-2 h-5 w-32" />
            <div className="space-y-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-9/12" />
              <Skeleton className="h-3 w-11/12" />
            </div>
          </div>
        </div>
      </div>

      {/* Final Synthesis Editor */}
      <div className="rounded-xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm">
        <div className="mb-6">
          <Skeleton className="mb-2 h-6 w-48" />
          <Skeleton className="mb-1 h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>

        {/* Editor Area */}
        <div className="mb-8">
          <Skeleton className="h-80 w-full rounded-lg" />
        </div>

        {/* Editor Tools */}
        <div className="mb-6 flex items-center gap-4">
          <Skeleton className="h-8 w-16" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-24" />
        </div>

        {/* Word Count and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-32" />
          </div>
          <div className="flex items-center gap-4">
            <Skeleton className="h-10 w-20" />
            <Skeleton className="h-10 w-32" />
          </div>
        </div>
      </div>
    </div>
  );
}

import { Skeleton } from "@/components/ui/skeleton";

export default function SynthesisDetailsLoading() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      {/* Header Skeleton */}
      <div className="mb-8">
        <Skeleton className="mb-4 h-8 w-3/4" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-6 w-20" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-6 w-28" />
        </div>
      </div>

      {/* Progress Section Skeleton */}
      <div className="mb-8 rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
        <Skeleton className="mb-4 h-6 w-24" />
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <Skeleton className="mx-auto mb-2 h-12 w-12 rounded-full" />
            <Skeleton className="mx-auto h-4 w-16" />
          </div>
          <div className="text-center">
            <Skeleton className="mx-auto mb-2 h-12 w-12 rounded-full" />
            <Skeleton className="mx-auto h-4 w-16" />
          </div>
          <div className="text-center">
            <Skeleton className="mx-auto mb-2 h-12 w-12 rounded-full" />
            <Skeleton className="mx-auto h-4 w-16" />
          </div>
        </div>
      </div>

      {/* Content Section Skeleton */}
      <div className="rounded-xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm">
        <Skeleton className="mb-6 h-6 w-48" />

        {/* Content blocks */}
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-11/12" />
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-9/12" />
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex items-center gap-4">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-24" />
        </div>
      </div>
    </div>
  );
}

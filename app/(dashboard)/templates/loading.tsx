import { Skeleton } from "@/components/ui/skeleton";

export default function TemplatesLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-12 text-center">
          <Skeleton className="mx-auto mb-4 h-8 w-32" />
          <Skeleton className="mx-auto mb-4 h-12 w-64" />
          <Skeleton className="mx-auto h-6 w-96" />
        </div>

        {/* Coming Soon Notice Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-20 w-full rounded-lg" />
        </div>

        {/* Search and Filters Skeleton */}
        <div className="mb-8 space-y-6">
          <Skeleton className="h-12 w-full rounded-lg" />
          <div className="flex flex-wrap gap-3">
            <Skeleton className="h-10 w-24 rounded-lg" />
            <Skeleton className="h-10 w-32 rounded-lg" />
            <Skeleton className="h-10 w-28 rounded-lg" />
            <Skeleton className="h-10 w-30 rounded-lg" />
            <Skeleton className="h-10 w-26 rounded-lg" />
            <Skeleton className="h-10 w-36 rounded-lg" />
          </div>
        </div>

        {/* Featured Templates Skeleton */}
        <div className="mb-12">
          <Skeleton className="mb-6 h-8 w-40" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Skeleton className="h-96 w-full rounded-lg" />
            <Skeleton className="h-96 w-full rounded-lg" />
            <Skeleton className="h-96 w-full rounded-lg" />
          </div>
        </div>

        {/* All Templates Skeleton */}
        <div className="mb-12">
          <Skeleton className="mb-6 h-8 w-32" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Skeleton className="h-96 w-full rounded-lg" />
            <Skeleton className="h-96 w-full rounded-lg" />
            <Skeleton className="h-96 w-full rounded-lg" />
            <Skeleton className="h-96 w-full rounded-lg" />
            <Skeleton className="h-96 w-full rounded-lg" />
            <Skeleton className="h-96 w-full rounded-lg" />
            <Skeleton className="h-96 w-full rounded-lg" />
            <Skeleton className="h-96 w-full rounded-lg" />
          </div>
        </div>

        {/* Call to Action Skeleton */}
        <div className="mt-16 text-center">
          <Skeleton className="mx-auto h-32 w-80 rounded-lg" />
        </div>
      </div>
    </div>
  );
}

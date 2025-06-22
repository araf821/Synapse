import { Skeleton } from "@/components/ui/skeleton";

export default function BillingLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pt-24 pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-12 text-center">
          <Skeleton className="mx-auto mb-4 h-8 w-32" />
          <Skeleton className="mx-auto mb-4 h-12 w-48" />
          <Skeleton className="mx-auto h-6 w-96" />
        </div>

        {/* Early Access Notice Skeleton */}
        <div className="mb-12">
          <Skeleton className="h-20 w-full rounded-lg" />
        </div>

        {/* Current Plan Skeleton */}
        <div className="mb-12">
          <Skeleton className="mb-6 h-8 w-32" />
          <Skeleton className="h-32 w-full rounded-lg" />
        </div>

        {/* Upcoming Plans Skeleton */}
        <div className="mb-12">
          <Skeleton className="mb-6 h-8 w-48" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Skeleton className="h-80 w-full rounded-lg" />
            <Skeleton className="h-80 w-full rounded-lg" />
            <Skeleton className="h-80 w-full rounded-lg" />
          </div>
        </div>

        {/* Notification Signup Skeleton */}
        <div className="mb-12">
          <Skeleton className="mb-6 h-8 w-32" />
          <div className="mx-auto max-w-md">
            <Skeleton className="h-48 w-full rounded-lg" />
          </div>
        </div>

        {/* FAQ Skeleton */}
        <div>
          <Skeleton className="mb-6 h-8 w-32" />
          <div className="grid gap-6 md:grid-cols-2">
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-32 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

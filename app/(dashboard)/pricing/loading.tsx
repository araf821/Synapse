import { Skeleton } from "@/components/ui/skeleton";

export default function PricingLoading() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <Skeleton className="mx-auto mb-4 h-10 w-64" />
        <Skeleton className="mx-auto mb-2 h-5 w-96" />
        <Skeleton className="mx-auto h-5 w-80" />
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm"
          >
            {/* Plan Header */}
            <div className="mb-6 text-center">
              <Skeleton className="mx-auto mb-2 h-6 w-24" />
              <Skeleton className="mx-auto mb-1 h-8 w-16" />
              <Skeleton className="mx-auto h-4 w-20" />
            </div>

            {/* Features List */}
            <div className="mb-8">
              <Skeleton className="mb-4 h-5 w-20" />
              <div className="space-y-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 flex-1" />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Skeleton className="h-12 w-full" />
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <div className="mb-8 text-center">
          <Skeleton className="mx-auto mb-4 h-8 w-48" />
          <Skeleton className="mx-auto h-5 w-64" />
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

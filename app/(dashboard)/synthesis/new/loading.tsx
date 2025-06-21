import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function NewSynthesisLoading() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:px-8">
      {/* Header Section Skeleton */}
      <div className="mb-8 text-center">
        {/* Brain Icon */}
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-primary/10">
          <Skeleton className="size-8" />
        </div>

        {/* Title */}
        <Skeleton className="mx-auto mb-4 h-9 w-64 sm:h-10 sm:w-80" />

        {/* Description */}
        <div className="mt-4 space-y-2">
          <Skeleton className="mx-auto h-5 w-96" />
          <Skeleton className="mx-auto h-5 w-80" />
        </div>
      </div>

      {/* Form Card */}
      <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <Skeleton className="h-6 w-64" />
          <Skeleton className="h-4 w-80" />
        </CardHeader>
        <CardContent>
          {/* Form Content */}
          <div className="space-y-6">
            {/* Title Input Field */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-12 w-full" />
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Skeleton className="h-12 flex-1" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <Skeleton className="size-2 rounded-full" />
                <Skeleton className="h-4 w-20" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="size-2 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="size-2 rounded-full" />
                <Skeleton className="h-4 w-28" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

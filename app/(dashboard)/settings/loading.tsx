import { Skeleton } from "@/components/ui/skeleton";

export default function SettingsLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="mb-8 text-center">
          <Skeleton className="mx-auto mb-4 h-8 w-32" />
          <Skeleton className="mx-auto mb-4 h-12 w-48" />
          <Skeleton className="mx-auto h-6 w-80" />
        </div>

        <div className="space-y-8">
          {/* Profile Settings Skeleton */}
          <div className="rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <Skeleton className="size-10 rounded-lg" />
              <div>
                <Skeleton className="mb-2 h-6 w-24" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <Skeleton className="size-20 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-6 w-32" />
                  <Skeleton className="h-4 w-48" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-9 w-24" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Skeleton className="mb-1 h-4 w-24" />
                  <Skeleton className="h-9 w-full" />
                </div>
                <div>
                  <Skeleton className="mb-1 h-4 w-28" />
                  <Skeleton className="h-9 w-full" />
                </div>
              </div>

              <div>
                <Skeleton className="mb-1 h-4 w-8" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="mt-1 h-3 w-64" />
              </div>

              <Skeleton className="h-16 w-full rounded-lg" />
            </div>
          </div>

          {/* Security Settings Skeleton */}
          <div className="rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <Skeleton className="size-10 rounded-lg" />
              <div>
                <Skeleton className="mb-2 h-6 w-20" />
                <Skeleton className="h-4 w-56" />
              </div>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div className="flex-1">
                    <Skeleton className="mb-1 h-4 w-32" />
                    <Skeleton className="h-3 w-48" />
                  </div>
                  <Skeleton className="h-8 w-20" />
                </div>
              ))}
              <Skeleton className="h-16 w-full rounded-lg" />
            </div>
          </div>

          {/* Preferences Settings Skeleton */}
          <div className="rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <Skeleton className="size-10 rounded-lg" />
              <div>
                <Skeleton className="mb-2 h-6 w-28" />
                <Skeleton className="h-4 w-44" />
              </div>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div className="flex-1">
                    <Skeleton className="mb-1 h-4 w-24" />
                    <Skeleton className="h-3 w-40" />
                  </div>
                  <Skeleton className="h-6 w-16" />
                </div>
              ))}
              <Skeleton className="h-16 w-full rounded-lg" />
            </div>
          </div>

          {/* Notifications Settings Skeleton */}
          <div className="rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <Skeleton className="size-10 rounded-lg" />
              <div>
                <Skeleton className="mb-2 h-6 w-32" />
                <Skeleton className="h-4 w-52" />
              </div>
            </div>

            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div className="flex-1">
                    <Skeleton className="mb-1 h-4 w-28" />
                    <Skeleton className="h-3 w-44" />
                  </div>
                  <Skeleton className="h-6 w-16" />
                </div>
              ))}
              <Skeleton className="h-16 w-full rounded-lg" />
            </div>
          </div>

          {/* Activity Settings Skeleton */}
          <div className="rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <Skeleton className="size-10 rounded-lg" />
              <div>
                <Skeleton className="mb-2 h-6 w-20" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <Skeleton key={i} className="h-20 w-full rounded-lg" />
              ))}
            </div>
          </div>

          {/* Data & Privacy Settings Skeleton */}
          <div className="rounded-xl border border-border/50 bg-card/80 p-6 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <Skeleton className="size-10 rounded-lg" />
              <div>
                <Skeleton className="mb-2 h-6 w-32" />
                <Skeleton className="h-4 w-56" />
              </div>
            </div>

            <div className="space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center justify-between py-3">
                  <div className="flex-1">
                    <Skeleton className="mb-1 h-4 w-24" />
                    <Skeleton className="h-3 w-48" />
                  </div>
                  <Skeleton className="h-8 w-20" />
                </div>
              ))}
              <Skeleton className="h-16 w-full rounded-lg" />
            </div>
          </div>
        </div>

        {/* Save Button Skeleton */}
        <div className="mt-8 flex justify-center">
          <Skeleton className="h-10 w-32" />
        </div>
      </div>
    </div>
  );
}

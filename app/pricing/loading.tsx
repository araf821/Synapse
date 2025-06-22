import { SynapseIcon } from "@/components/ui/synapse-icon";

export default function PricingLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin">
          <SynapseIcon className="size-12 text-primary" />
        </div>
        <p className="text-sm text-muted-foreground">Synapse</p>
      </div>
    </div>
  );
}

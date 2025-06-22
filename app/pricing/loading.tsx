import { SynapseIcon } from "@/components/ui/synapse-icon";

export default function PricingLoading() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
      {/* Static Background - Similar to Hero but Non-animated */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/20"></div>
        <div className="absolute top-1/4 left-1/4 size-96 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 opacity-60 blur-3xl"></div>
        <div className="absolute right-1/3 bottom-1/3 size-80 rounded-full bg-gradient-to-l from-accent/15 to-primary/25 opacity-50 blur-3xl max-md:hidden"></div>
        <div className="absolute top-2/3 left-1/4 size-64 rounded-full bg-gradient-to-t from-muted/20 to-primary/15 opacity-70 blur-2xl"></div>
      </div>

      {/* Static SVG Lines - No animation */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 left-0 h-full w-full opacity-10"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-50 550 Q200 400 400 450 T750 300"
            stroke="currentColor"
            strokeWidth="1.2"
            fill="none"
            className="text-foreground"
          />
          <path
            d="M-20 580 Q180 420 380 480 T720 330"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            className="text-foreground"
          />
          <path
            d="M20 600 Q250 380 450 430 T800 280"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
            className="text-foreground opacity-50"
          />
        </svg>
      </div>

      {/* Static decorative lines in corners */}
      <div className="absolute inset-0">
        {/* Top Left */}
        <svg
          className="absolute top-0 left-0 h-1/2 w-1/2 opacity-15"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 250 Q100 150 200 200 T400 100"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
            className="text-primary"
          />
        </svg>

        {/* Top Right */}
        <svg
          className="absolute top-0 right-0 h-1/2 w-1/2 opacity-20"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 80 Q150 180 300 120 T400 220"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
            className="text-primary"
          />
        </svg>

        {/* Bottom Left */}
        <svg
          className="absolute bottom-0 left-0 h-1/2 w-1/2 opacity-20"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 150 Q120 50 240 120 T400 80"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="text-primary"
          />
        </svg>

        {/* Bottom Right */}
        <svg
          className="absolute right-0 bottom-0 h-1/2 w-1/2 opacity-20"
          viewBox="0 0 400 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 50 Q200 200 350 100 T400 280"
            stroke="currentColor"
            strokeWidth="0.6"
            fill="none"
            className="text-primary"
          />
        </svg>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Large Synapse Icon with Subtle Pulse */}
        <div
          className="flex animate-pulse items-center justify-center text-primary"
          style={{ animationDuration: "2s" }}
        >
          <SynapseIcon className="size-24" />
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="mb-2 font-display text-2xl font-semibold text-foreground">
            Synapse
          </h2>
          <p className="text-muted-foreground">
            Loading pricing information...
          </p>
        </div>

        {/* Simple Loading Dots */}
        <div className="flex space-x-2">
          <div
            className="size-2 animate-pulse rounded-full bg-primary"
            style={{ animationDelay: "0ms", animationDuration: "1.5s" }}
          ></div>
          <div
            className="size-2 animate-pulse rounded-full bg-primary"
            style={{ animationDelay: "200ms", animationDuration: "1.5s" }}
          ></div>
          <div
            className="size-2 animate-pulse rounded-full bg-primary"
            style={{ animationDelay: "400ms", animationDuration: "1.5s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

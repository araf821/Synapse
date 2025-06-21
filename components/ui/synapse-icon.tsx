"use client";

interface SynapseIconProps {
  className?: string;
  size?: number;
}

export function SynapseIcon({ className, size = 32 }: SynapseIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradient that flows from primary to terracotta accent */}
        <linearGradient id="synapse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <g>
        {/* 
          The synapse flow path - elegant curve representing neural connection
          Adapted from original logo.svg with same beautiful curve
        */}
        <path
          d="M 15 50 C 35 80, 65 20, 85 50"
          stroke="url(#synapse-gradient)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Start Node - fully visible representing input */}
        <circle cx="15" cy="50" r="10" fill="currentColor" stroke="none" />

        {/* End Node - slightly transparent to show flow/output */}
        <circle
          cx="85"
          cy="50"
          r="10"
          fill="currentColor"
          fillOpacity="0.8"
          stroke="none"
        />
      </g>
    </svg>
  );
}

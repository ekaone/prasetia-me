"use client";

import dynamic from "next/dynamic";

const Particles = dynamic(
  () => import("@/components/magicui/particles").then((m) => m.Particles),
  { ssr: false }
);

interface ParticlesWrapperProps {
  className?: string;
  quantity?: number;
  ease?: number;
  color?: string;
  refresh?: boolean;
}

export function ParticlesWrapper({
  className,
  quantity,
  ease,
  color,
  refresh,
}: ParticlesWrapperProps) {
  return (
    <Particles
      className={className}
      quantity={quantity}
      ease={ease}
      color={color}
      refresh={refresh}
    />
  );
}

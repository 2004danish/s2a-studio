"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// Dynamically load to prevent Framer Motion SSR hydration crashes
const TurnkeyWorks = dynamic(() => import("@/components/sections/TurnkeyWorks"), { ssr: false });
const ThreeDVizTeaser = dynamic(() => import("@/components/sections/ThreeDVizTeaser"), { ssr: false });

export default function Home() {
  return (
    // FIXED: Removed "overflow-x-hidden". This was killing the sticky scroll effect!
    <main className="w-full bg-[#F5F5F7]">
      <Hero />
      <TurnkeyWorks />
      <ThreeDVizTeaser />
    </main>
  );
}
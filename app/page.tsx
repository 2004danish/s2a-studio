"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

const ClientMarquee = dynamic(() => import("@/components/sections/ClientMarquee"), { ssr: false });
const Philosophy = dynamic(() => import("@/components/sections/Philosophy"), { ssr: false });
const SelectedWorks = dynamic(() => import("@/components/sections/SelectedWorks"), { ssr: false });
const StudioServicesTeaser = dynamic(() => import("@/components/sections/StudioServicesTeaser"), { ssr: false });
const RecognitionPreview = dynamic(() => import("@/components/sections/Awards"), { ssr: false });

export default function Home() {
  return (
    <main className="w-full bg-[#F5F5F7] min-h-screen selection:bg-[#1D1D1F] selection:text-[#F5F5F7]">
      
      {/* 1. The Hook */}
      <Hero />
      
      {/* 2. Immediate Authority Signal */}
      <ClientMarquee />
      
      {/* 3. Studio Mindset (Moved up to complement the marquee) */}
      <Philosophy />
      
      {/* 4. The Portfolio */}
      <SelectedWorks />
      
      {/* 5. The Services Gallery */}
      <StudioServicesTeaser />
      
      {/* 6. Proof of Excellence */}
      <RecognitionPreview />
      
    </main>
  );
}
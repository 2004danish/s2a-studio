import Hero from "../components/sections/Hero";
// 1. UPDATED IMPORT: Pointing to your newly renamed file
import TurnkeyWorks from "../components/sections/TurnkeyWorks"; 
import ThreeDVizTeaser from "../components/sections/ThreeDVizTeaser";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Hero />
      {/* 2. UPDATED COMPONENT TAG */}
      <TurnkeyWorks />
      <ThreeDVizTeaser />
    </main>
  );
}
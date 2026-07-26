import Hero from "../components/sections/Hero";
import FeaturedProject from "../components/sections/FeaturedProject";
import Philosophy from "../components/sections/Philosophy";
import SelectedWorks from "../components/sections/SelectedWorks";
import Process from "../components/sections/Process";
import Awards from "../components/sections/Awards";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <FeaturedProject />
      <Philosophy />
      <SelectedWorks />
      <Process />
      <Awards />
      <Testimonials />
      <CTA />
    </main>
  );
}
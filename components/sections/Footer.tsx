import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#030303] text-[#FAFAFA] pt-32 font-sans overflow-hidden border-t border-[#333333]">
      <div className="px-6 md:px-12 max-w-[1800px] mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8">
          
          {/* Left CTA */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h2 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter mb-8 leading-[0.85] uppercase text-[#FAFAFA]">
              Initiate <br />
              <span className="text-[#666666]">Project.</span>
            </h2>
            
            {/* Brutalist Button (Sharp edges, solid fill hover) */}
            <button className="group relative px-8 py-5 bg-transparent border border-[#FAFAFA] text-[#FAFAFA] text-xs font-bold uppercase tracking-[0.2em] overflow-hidden mt-4">
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#030303]">Contact Studio</span>
              <div className="absolute inset-0 w-full h-full bg-[#FAFAFA] scale-y-0 origin-bottom transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100 z-0"></div>
            </button>
          </div>

          {/* Right Links Grid */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-8 md:gap-16 pt-4 lg:pt-0">
            
            {/* Column 1: Location & Social */}
            <div className="flex flex-col gap-12">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-[#666666]">Location</h4>
                <p className="text-sm text-[#FAFAFA] font-medium leading-relaxed tracking-wide uppercase">
                  Nagpur, Maharashtra,<br />
                  India
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-[#666666]">Social</h4>
                <div className="grid grid-cols-1 gap-y-3 text-sm text-[#FAFAFA] font-medium uppercase tracking-wide">
                  <a href="#" className="flex items-center gap-3 hover:text-[#666666] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#FAFAFA]" /> Instagram
                  </a>
                  <a href="#" className="flex items-center gap-3 hover:text-[#666666] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#FAFAFA]" /> Twitter/X
                  </a>
                  <a href="#" className="flex items-center gap-3 hover:text-[#666666] transition-colors">
                    <div className="w-1.5 h-1.5 bg-[#FAFAFA]" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Contact & Links */}
            <div className="flex flex-col gap-12 text-left">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-[#666666]">Contact</h4>
                <p className="text-sm text-[#FAFAFA] font-medium leading-relaxed tracking-wide uppercase">
                  +91 98765 43210<br />
                  Hello@s2astudio.com
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-4 text-[#666666]">Index</h4>
                <div className="grid grid-cols-1 gap-y-3 text-sm text-[#FAFAFA] font-medium uppercase tracking-wide">
                  <Link href="/architecture" className="hover:text-[#666666] transition-colors">Architecture</Link>
                  <Link href="/interior-design" className="hover:text-[#666666] transition-colors">Interior Design</Link>
                  <Link href="/3d-viz" className="hover:text-[#666666] transition-colors">3D Visualization</Link>
                  <Link href="/process" className="hover:text-[#666666] transition-colors">Process</Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Thin Divider & Bottom Bar (Strictly Sans-Serif) */}
        <div className="mt-24 py-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-[#666666]">
          <p>© S2A STUDIO 2026</p>
          <p className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 bg-[#666666] inline-block" /> BUILT WITH PRECISION
          </p>
          <p className="flex items-center gap-2">
            SYSTEM ARCHITECTURE BY <span className="text-[#FAFAFA]">S2A</span>
          </p>
        </div>
      </div>

      {/* MASSIVE GRAPHIC BOTTOM BAR - TRUE BRUTALIST SCALE */}
      <div className="relative w-full h-[25vh] md:h-[45vh] mt-8 overflow-hidden select-none pointer-events-none bg-[#030303]">
         
         {/* 1. Monochromatic Atmospheric Gradients */}
         <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-[#030303] z-10" />
         
         {/* 2. The Textured Image Overlay (Monochrome Brutalist Vibe) */}
         <img 
           src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3270&auto=format&fit=crop" 
           className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 grayscale z-0" 
           alt="Concrete Texture" 
         />
         
         {/* 3. Massive Typography 
             - translate-y-[22%] heavily crops the text into the floor, anchoring the website.
             - Completely centered, stretching end-to-end.
         */}
         <h1 className="absolute w-full text-center bottom-0 translate-y-[22%] z-20 text-[26vw] md:text-[23vw] font-bold text-[#FAFAFA] leading-[0.75] tracking-tighter whitespace-nowrap drop-shadow-2xl">
           S2A STUDIO
         </h1>
      </div>
    </footer>
  );
}
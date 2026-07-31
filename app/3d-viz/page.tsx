"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

// 1. The Fullscreen 3D Environment (With Zoom Enabled)
function FullscreenSphere() {
  const texture = useTexture("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/2294472375_24a3b8ef46_o.jpg");
  
  return (
    <>
      <OrbitControls 
        enableZoom={true} // Enabled for the dedicated page so clients can inspect details
        enablePan={false} 
        enableDamping 
        dampingFactor={0.1} 
        autoRotate 
        autoRotateSpeed={0.5} 
      />
      <mesh>
        {/* We bumped the polygons up slightly here since it's the only thing rendering on the page */}
        <sphereGeometry args={[500, 48, 48]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
    </>
  );
}

export default function ThreeDVizPage() {
  return (
    <main className="relative w-full h-screen bg-black overflow-hidden selection:bg-white selection:text-black">
      
      {/* 2. The 3D Canvas Container */}
      <div className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing">
        <Canvas 
          camera={{ position: [0, 0, 0.1], fov: 75 }} 
          dpr={[1, 2]} // Allowed slightly higher resolution for the dedicated page
          gl={{ antialias: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            <FullscreenSphere />
          </Suspense>
        </Canvas>
      </div>

      {/* 3. Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10 pointer-events-none" />

      {/* 4. Cinematic Page UI Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none flex flex-col justify-between p-8 md:p-12 mt-24">
        
        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/70">
            S2A Studio / Core Pillars
          </h1>
        </motion.div>

        {/* Bottom Details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-tight text-white mb-6">
            Immersive <br/> Virtual Reality
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center">
            <p className="text-sm md:text-base text-zinc-300 font-light leading-relaxed max-w-md">
              Experience our architectural designs in full 360-degree panoramic scale before a single brick is laid. 
            </p>
            <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-white/50 bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Drag to pan • Scroll to zoom
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
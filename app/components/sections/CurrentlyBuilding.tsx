"use client";
import BuildingItem from "../ui/BuildingItem";

const CURRENT_WORK = [
  {
    title: "SATELLITA : Orbital Network Simulator",
    date: "Feb 2026 - July 2026 (Est.)",
    location: "Independent / Personal Lab",
    description: [
      "Architecting a high-performance aerospace simulator using Unreal Engine 5.4 and Cesium for Unreal plugin.",
      "Implementing a scalable C++ backend for real-time SGP4 orbital propagation and UTC-synchronized Time Management.",
      "Developing an advanced 'Pawn' navigation system for seamless transition between global Earth views and localized satellite tracking.",
      "Designing a modular subsystem architecture to handle large-scale satellite constellations and space debris datasets."
    ]
  },
  {
    title: "Research : ShapeEmbed & Contour Quantification",
    date: "Jan 2026 - Mai 2026 (Est.)",
    location: "Université Paris Cité",
    description: [
      "Developing a self-supervised representation learning framework based on the ShapeEmbed architecture for 2D contour encoding.",
      "Implementing Euclidean Distance Matrices (EDM) to ensure shape descriptors are invariant to translation, rotation, and scaling.",
      "Training a Variational Auto-Encoder (VAE) to map complex biological and natural shapes into a compact latent space.",
      "Optimizing the reconstruction path to generate synthetic data outlines for AI model training augmentation."
    ]
  }
];

export default function CurrentlyBuilding() {
  const gradientText = "bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-black tracking-tighter uppercase";

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      
      {/* --- TITRE DE SECTION SYNCHRONISÉ --- */}
      <div className="flex items-end gap-4 mb-16 group">
        <div 
          className="flex flex-col animate-slide-right opacity-0"
          style={{ animationDelay: '900ms' }}
        >
          <span className="text-emerald-500 font-mono text-[10px] tracking-[0.3em] mb-2 uppercase">
            Activity
          </span>
          <h2 className={`text-4xl lg:text-5xl tracking-tighter ${gradientText}`}>
            Currently Building
          </h2>
        </div>
        
        <div 
          className="h-[1px] flex-grow bg-zinc-800 mb-3 relative overflow-hidden animate-slide-down opacity-0"
          style={{ animationDelay: '1050ms' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/40 via-emerald-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        </div>

        <div 
          className="flex flex-col items-end mb-2 animate-slide-left opacity-0"
          style={{ animationDelay: '1200ms' }}
        >
          <span className="font-[family-name:var(--font-montserrat)] text-[9px] text-zinc-600 tracking-widest uppercase">
            Last Update
          </span>
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] text-zinc-400 font-bold uppercase">
            04/03/2026
          </span>
        </div>
      </div>

      <div className="relative w-full">
        {CURRENT_WORK.map((work, index) => (
          <BuildingItem key={work.title} {...work} index={index} />
        ))}
      </div>
    </section>
  );
}
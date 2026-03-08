"use client";
import ProjectCard from "../ui/ProjectCard";

const PROJECTS = [
  {
    title: "Euro Coin Detection & Identification",
    description: "End-to-end pipeline designed to detect, classify, and count Euro coins. Achieved 97.48% precision on a dataset of 100+ complex images.",
    bullets: [
      "Hybrid detection system combining Hough Circle Transform, Watershed segmentation, and Contour analysis.",
      "Robust preprocessing with CLAHE and HSV/Lab color space analysis for adaptive background handling.",
      "Classification via KNN and rule-based logic to distinguish between Copper, Gold, and Bimetallic groups.",
      "Optimized performance reducing processing time from 60s to 0.24s per image."
    ],
    tags: ["OpenCV", "Python", "NumPy", "Scikit-Learn"],
    github: "https://github.com/NicolasAdamczyk/M1-Euro-Coin-Detection-Identification",
    image: "/projet_image_pieces.jpg",
  }, 
  {
    title: "Orbital ISS 3D Tracker",
    description: "Real-time 3D tracking platform for the International Space Station. Features dynamic orbit prediction and interactive global visualization.",
    bullets: [
      "High-fidelity 3D Earth rendering using Three.js with custom shaders for day/night cycles.",
      "Real-time orbital calculation using SGP4 propagation models and TLE data fetch.",
      "Interactive UI for live telemetry: altitude, velocity, and geographic coordinates.",
      "Responsive orbital path prediction with dynamic camera transitions and Earth-locked views.",
    ],
    tags: ["Three.js", "React", "SGP4", "WebGL"],
    github: "https://github.com/NicolasAdamczyk/3DWebSite-ISSTracker",
    live: "https://nicolasadamczyk.github.io/3DWebSite-ISSTracker/",
    image: "/projet_iss.jpg",
  }
];

export default function Projects() {
  const gradientText = "bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-black tracking-tighter uppercase";

  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 lg:pt-24 pb-8 lg:pb-6 relative">
      
      {/* --- TITRE DE LA SECTION --- */}
      <div className="flex items-end gap-4 mb-16 group">
        <div 
          className="flex flex-col animate-slide-right opacity-0"
          style={{ animationDelay: '700ms' }}
        >
          <span className="text-emerald-500 font-mono text-[10px] tracking-[0.3em] mb-2 uppercase">Most</span>
          <h2 className={`text-4xl lg:text-5xl tracking-tighter ${gradientText}`}>Recent Projects</h2>
        </div>
        
        <div 
          className="h-[1px] flex-grow bg-zinc-800 mb-3 relative overflow-hidden animate-slide-down opacity-0"
          style={{ animationDelay: '850ms' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/40 via-emerald-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
        </div>

        <div 
          className="flex flex-col items-end mb-2 animate-slide-left opacity-0"
          style={{ animationDelay: '1000ms' }}
        >
          <span className="font-[family-name:var(--font-montserrat)] text-[9px] text-zinc-600 tracking-widest uppercase">Last Update</span>
          <span className="font-[family-name:var(--font-montserrat)] text-[10px] text-zinc-400 font-bold">05/03/2026</span>
        </div>
      </div>

      {/* --- GRILLE DE PROJETS (Staggered avec le Hero) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.title} 
            className="animate-slide-up opacity-0" 
            style={{ animationDelay: `${700 + (index * 200)}ms` }}
          >
            <ProjectCard {...project} index={index} />
          </div>
        ))}
      </div>

      {/* --- FOOTER DE SECTION --- */}
      <div 
        className="mt-16 flex justify-center border-t border-zinc-900 pt-8 animate-slide-up opacity-0" 
        style={{ animationDelay: '1600ms' }}
      >
        <p className="font-[family-name:var(--font-montserrat)] text-[9px] text-zinc-500 tracking-[0.3em] uppercase">
          Check full repository on <a href="https://github.com/NicolasAdamczyk?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-emerald-500 hover:text-emerald-400 transition-colors font-bold">Github</a>
        </p>
      </div>
    </section>
  );
}
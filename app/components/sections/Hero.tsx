"use client";
import { User, Cpu, Globe } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const gradientText = "bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-black tracking-tighter leading-none";
  const fontMontserrat = "font-[family-name:var(--font-montserrat)]";

  return (
    <section className="max-w-7xl mx-auto px-6 pt-12 lg:pt-24 pb-8 lg:pb-6 relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* --- BLOC GAUCHE : PHOTO & NOM (Arrivée de la gauche) --- */}
        <div 
          className="flex flex-col gap-6 opacity-0 animate-slide-right"
          style={{ animationDelay: '600ms' }} // Commence après la Navbar
        >
          <div className="aspect-[3/4] w-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden relative group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 opacity-60" />
            <Image 
              src="/pp.jpg" 
              alt="Nicolas Adamczyk"
              fill
              className="object-cover hover:grayscale-0 transition-all duration-700 ease-in-out scale-105 group-hover:scale-110"
              priority
            />
          </div>
          
          <div>
            <h1 className="text-3xl font-bold tracking-tighter text-zinc-100 uppercase">
              Nicolas <span className={gradientText}>ADAMCZYK</span>
            </h1>
            <div className="mt-3 flex flex-col gap-2">
              <p className="text-emerald-500 font-mono text-[10px] uppercase tracking-[0.2em] leading-tight">
                Computer Vision Student at Université Paris Cité
              </p>
              <div className="flex items-center gap-2 text-zinc-500 font-mono text-[9px] uppercase tracking-[0.2em]">
                <div className="relative flex h-2 w-2 items-center justify-center">
                  <span className="h-1 w-1 rounded-full bg-emerald-500" />
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-40" />
                </div>
                Based in Paris, France
              </div>
            </div>
          </div>
        </div>

        {/* --- BLOC DROITE --- */}
        <div className="md:col-span-2 flex flex-col gap-12">
          
          {/* Texte Principal (Arrivée du haut) */}
          <div 
            className="space-y-6 opacity-0 animate-slide-down"
            style={{ animationDelay: '800ms' }}
          >
            <p className={`text-4xl lg:text-4xl leading-[1.2] text-zinc-100 tracking-tight ${fontMontserrat}`}>
              Leveraging <span className={gradientText}>C++</span>, <span className={gradientText}>Python</span>, and <span className={gradientText}>Unreal Engine 5</span> to bridge the gap between physically-accurate rendering and robust AI models.
            </p>
            
            <p className={`text-zinc-400 text-lg leading-relaxed w-full ${fontMontserrat}`}>
              Self-taught 3D artist since 2023. I leverage my expertise in <span className="text-zinc-100">lighting and realistic rendering</span> to build physically-accurate virtual environments. My focus is training robust AI models using perfectly controlled synthetic datasets.
            </p>
          </div>

          {/* --- BADGES / STATS (Arrivée du bas en cascade) --- */}
          <div className="flex flex-wrap gap-4">
            
            {/* Badge 1 */}
            <div 
              className="flex flex-col gap-1 bg-zinc-900/30 border border-zinc-800/50 p-5 rounded-xl flex-1 min-w-[200px] hover:border-emerald-500/30 transition-all duration-300 group opacity-0 animate-slide-up"
              style={{ animationDelay: '1000ms' }}
            >
              <div className="flex items-center gap-2 text-zinc-500 mb-2">
                <User size={14} className="group-hover:text-emerald-500 transition-colors" />
                <span className={`text-[10px] uppercase tracking-widest ${fontMontserrat}`}>Experience</span>
              </div>
              <p className={`text-[11px] font-bold text-zinc-200 uppercase tracking-tight leading-tight ${fontMontserrat}`}>
                CS Studying <span className="text-zinc-500 font-normal">/ Since 2020</span>
              </p>
              <p className="text-[9px] font-mono text-emerald-500/70 mt-2 uppercase tracking-tighter">
                ▹ 3D Modeling / Since 2022
              </p>
              <p className="text-[9px] font-mono text-emerald-500/70 mt-2 uppercase tracking-tighter">
                ▹ CV & AI / Since 2025
              </p>
            </div>

            {/* Badge 2 */}
            <div 
              className="flex flex-col gap-1 bg-zinc-900/30 border border-zinc-800/50 p-5 rounded-xl flex-1 min-w-[200px] hover:border-emerald-500/30 transition-all duration-300 group opacity-0 animate-slide-up"
              style={{ animationDelay: '1150ms' }} // Un peu plus tard
            >
              <div className="flex items-center gap-2 text-zinc-500 mb-2">
                <Globe size={14} className="group-hover:text-emerald-500 transition-colors" />
                <span className={`text-[10px] uppercase tracking-widest ${fontMontserrat}`}>Communication</span>
              </div>
              <p className={`text-[11px] font-bold text-emerald-500 uppercase ${fontMontserrat}`}> FR / EN / PL </p>
            </div>

            {/* Badge 3 */}
            <div 
              className="flex flex-col gap-1 bg-zinc-900/30 border border-zinc-800/50 p-5 rounded-xl flex-1 min-w-[200px] hover:border-emerald-500/30 transition-all duration-300 group opacity-0 animate-slide-up"
              style={{ animationDelay: '1300ms' }} // Le dernier
            >
              <div className="flex items-center gap-2 text-zinc-500 mb-2">
                <Cpu size={14} className="group-hover:text-emerald-500 transition-colors" />
                <span className={`text-[10px] uppercase tracking-widest ${fontMontserrat}`}>Core Stack</span>
              </div>
              <p className={`text-[11px] font-bold text-zinc-200 uppercase tracking-tight ${fontMontserrat}`}>
                Python, C++, Blender, UE5
              </p>
              <p className="text-[9px] font-mono text-emerald-500/70 mt-2 uppercase tracking-tighter leading-none">
                ▹ PyTorch, OpenCV, CUDA
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
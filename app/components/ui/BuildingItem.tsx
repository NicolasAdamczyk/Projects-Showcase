"use client";

interface BuildingProps {
  title: string;
  date: string;
  location: string;
  description: string[];
  index: number;
}

export default function BuildingItem({ title, date, location, description, index }: BuildingProps) {
const gradientText = "bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-black tracking-tighter";
const titleBase = "text-xl font-black uppercase tracking-tighter transition-opacity duration-500 ease-in-out";

  return (
    <div 
      className="relative pl-12 pb-16 last:pb-0 group animate-slide-up opacity-0"
      style={{ animationDelay: `${700 + (index * 200)}ms` }}
    >
      
      {/* LIGNE VERTICALE */}
      <div className="absolute left-[11px] top-0 h-full w-[1px] bg-zinc-800" />
      
      {/* Indicateur lumineux */}
      <div className="absolute left-0 top-1.5 h-6 w-6 flex items-center justify-center z-10">
        <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)] group-hover:scale-150 transition-transform duration-300" />
      </div>

      {/* CARTE DE CONTENU */}
      <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-500 hover:bg-zinc-900/50">
        
        <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
          <div className="space-y-1">
            {/* Superposition Smooth du Titre */}
            <div className="relative h-7">
              <h3 className={`${titleBase} text-zinc-100 group-hover:opacity-0`}>
                {title}
              </h3>
              <h3 className={`absolute inset-0 ${titleBase} opacity-0 group-hover:opacity-100 ${gradientText}`}>
                {title}
              </h3>
            </div>
            
            <div className="flex items-center gap-2 font-mono text-[9px] text-emerald-500/70 tracking-widest uppercase">
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
              Development Phase
            </div>
          </div>

          <div className="flex gap-3 font-mono text-[9px] tracking-widest uppercase">
            <span className="bg-zinc-950 border border-zinc-800 px-3 py-1.5 rounded text-zinc-400 whitespace-nowrap">{date}</span>
            <span className="bg-zinc-950 border border-zinc-800 px-3 py-1.5 rounded text-zinc-500 whitespace-nowrap">{location}</span>
          </div>
        </div>

        {/* Liste à puces en cascade */}
        <ul className="space-y-4 w-full">
          {description.map((item, i) => (
            <li 
              key={i} 
              className="flex items-start gap-4 text-sm text-zinc-400 leading-relaxed group/item animate-slide-right opacity-0 font-[family-name:var(--font-montserrat)]"
              style={{ animationDelay: `${700 + (index * 200) + (i * 100)}ms` }}
            >
              <div className="flex items-center h-5 shrink-0 translate-y-[1px]">
                <span className="text-emerald-500 select-none text-[10px]">▹</span>
              </div>
              <span className="text-justify">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
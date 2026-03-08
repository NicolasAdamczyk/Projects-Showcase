"use client";
import { Globe, Code2 } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  bullets?: string[]; 
  image?: string;    
  github?: string;  
  live?: string;
  index: number; 
}

export default function ProjectCard({ title, description, tags, bullets, image, github, live, index }: ProjectProps) {
  const gradientText = "bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent font-black tracking-tighter";
  const titleBase = "text-xl font-black tracking-tighter uppercase transition-opacity duration-500 ease-in-out";

  return (
    <div className="group bg-zinc-900/40 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)] flex flex-col h-full cursor-default">
      
      {/* Preview Visuelle */}
      <div className="aspect-video bg-zinc-950 w-full overflow-hidden relative border-b border-zinc-800">
        {image ? (
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 ease-in-out"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-zinc-800 italic text-[10px] font-mono tracking-widest uppercase">// No_Visual_Available</div>
        )}
        <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
      </div>

      {/* Contenu Texte */}
      <div className="p-6 space-y-5 flex flex-col flex-grow font-[family-name:var(--font-montserrat)]">
        <div className="flex-grow">
          <div className="relative">
            <h3 className={`${titleBase} text-zinc-100 group-hover:opacity-0`}>{title}</h3>
            <h3 className={`absolute inset-0 ${titleBase} opacity-0 group-hover:opacity-100 ${gradientText}`}>{title}</h3>
          </div>
          
          <div className="mt-4">
            {bullets && bullets.length > 0 ? (
              <ul className="space-y-3">
                {bullets.map((bullet, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-3 text-[12px] text-zinc-400 leading-relaxed text-justify animate-slide-right opacity-0"
                    style={{ animationDelay: `${1300 + (index * 200) + (i * 100)}ms` }} 
                  >
                    <div className="flex items-center h-5 shrink-0 translate-y-[1px]">
                      <span className="text-emerald-500 select-none text-[10px]">▹</span>
                    </div>
                    {bullet}
                  </li>
                ))}
              </ul>
            ) : (
              <div 
                className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed text-justify animate-slide-right opacity-0" 
                style={{ animationDelay: `${1300 + (index * 200)}ms` }}
              >
                <div className="flex items-center h-5 shrink-0 translate-y-[1px]">
                  <span className="text-emerald-500 select-none text-[10px]">▹</span>
                </div>
                <p className="line-clamp-4">{description}</p>
              </div>
            )}
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-zinc-950/50 border border-zinc-800 rounded text-[9px] font-mono text-zinc-500 transition-colors">
              {tag}
            </span>
          ))}
        </div>

        {/* Liens avec target="_blank" */}
        <div className="flex gap-3 pt-3">
          {live && (
            <a 
              href={live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-800/50 hover:bg-emerald-500 text-zinc-400 hover:text-zinc-950 py-2.5 rounded-lg text-[9px] font-mono uppercase transition-all duration-300 border border-zinc-700/50 active:scale-95"
            >
              <Globe size={12} /> Live
            </a>
          )}
          
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-zinc-800/50 hover:bg-emerald-500 text-zinc-400 hover:text-zinc-950 py-2.5 rounded-lg text-[9px] font-mono uppercase transition-all duration-300 border border-zinc-700/50 active:scale-95"
            >
              <Code2 size={12} /> Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";
import { FileText, X, Download, Check, Languages, Layout, FileCode } from "lucide-react";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lang, setLang] = useState("FR");
  const [type, setType] = useState("Design");
  const fontMontserrat = "font-[family-name:var(--font-montserrat)]";

  const handleDownload = () => {
    const fileName = `CV_Nicolas_ADAMCZYK_${lang}${type === "ATS" ? "_ATS" : ""}.pdf`;
    const filePath = `/project-showcase/cv/CV_Nicolas_Adamczyk_${lang}_${type}.pdf`;
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    link.click();
    setIsModalOpen(false); 
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-16 z-50 pointer-events-none">
        {/* Background - Apparition en fondu */}
        <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_60%,transparent)] animate-slide-down" />

        <div className="relative max-w-screen-2xl mx-auto h-full px-6 flex items-center justify-between pointer-events-auto">
          
          {/* STATUS - Arrivée de la gauche avec délai */}
          <div 
            className="flex items-center gap-3 font-mono text-[10px] tracking-widest opacity-0 animate-slide-right"
            style={{ animationDelay: '300ms' }}
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <p className="text-zinc-400 uppercase">
              STATUS : <span className="text-emerald-500 font-bold">Available for Apprenticeship</span>
            </p>
          </div>

          {/* TRIGGER BUTTON - Arrivée de la droite avec délai */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center justify-center gap-2.5 bg-zinc-100 text-zinc-950 px-5 py-2.5 rounded-sm font-mono text-[10px] font-bold tracking-widest uppercase hover:bg-emerald-500 hover:text-white transition-all duration-300 shadow-lg cursor-pointer active:scale-95 opacity-0 animate-slide-left"
            style={{ animationDelay: '500ms' }}
          >
            <div className="flex items-center h-full">
              <FileText size={14} strokeWidth={2.5} />
            </div>
            
            <span className="leading-none translate-y-[0.5px]">
              <p className={`${fontMontserrat}`}>Get Resume</p>
            </span>
          </button>
        </div>
      </nav>

      {/* MODALE POP-UP */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div 
            className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm cursor-pointer transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl animate-slide-down">
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-950/50">
              <div className="flex items-center gap-3 text-emerald-500 font-[family-name:var(--font-montserrat)]">
                <FileText size={18} />
                <h3 className={`${fontMontserrat} font-mono text-[11px] uppercase tracking-[0.1em] font-bold`}>Resume Configurator</h3>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-zinc-500 hover:text-white transition-colors cursor-pointer"><X size={20} /></button>
            </div>

            <div className="p-8 space-y-8 font-[family-name:var(--font-montserrat)]">
              <div className="space-y-4">
                <label className="flex items-center gap-2 font-mono text-[9px] text-zinc-500 uppercase tracking-widest"><Languages size={12} /> Select Language</label>
                <div className="grid grid-cols-2 gap-3">
                  {["FR", "EN"].map((l) => (
                    <button key={l} onClick={() => setLang(l)} className={`py-3 px-4 rounded-lg border font-mono text-[10px] transition-all flex items-center justify-between cursor-pointer ${lang === l ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" : "bg-zinc-950 border-zinc-800 text-zinc-500"}`}>
                      {l === "FR" ? "Français" : "English"}
                      {lang === l && <Check size={12} />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-2 font-mono text-[9px] text-zinc-500 uppercase tracking-widest"><Layout size={12} /> Select Format</label>
                <div className="grid grid-cols-2 gap-3">
                  {[{ id: "Design", sub: "Visual Design" }, { id: "ATS", sub: "LaTeX / ATS Friendly" }].map((t) => (
                    <button key={t.id} onClick={() => setType(t.id)} className={`py-3 px-4 rounded-lg border font-mono text-[10px] transition-all flex flex-col items-start gap-1 cursor-pointer ${type === t.id ? "bg-emerald-500/10 border-emerald-500 text-emerald-400" : "bg-zinc-950 border-zinc-800 text-zinc-500"}`}>
                      <div className="flex items-center justify-between w-full"><strong>{t.id}</strong>{type === t.id && <Check size={12} />}</div>
                      <span className="text-[8px] opacity-60 lowercase">{t.sub}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button onClick={handleDownload} className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 py-4 rounded-xl font-mono text-[11px] font-bold uppercase tracking-[0.em] transition-all flex items-center justify-center gap-3 group cursor-pointer active:scale-[0.97] shadow-lg">
                <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
                <p className={fontMontserrat}>Download PDF</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
"use client";
import { Cpu, ShieldCheck, Zap } from "lucide-react";

export default function Footer() {
  // Récupération et formatage de la date de build automatique
  // Si la variable n'est pas encore propagée, on garde ta date par défaut
  const rawDate = process.env.NEXT_PUBLIC_BUILD_DATE;
  const buildDate = rawDate 
    ? new Date(rawDate).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
    : "06/03/2026"; 

  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950 pt-16 pb-[5px] relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Grille d'infos technique style "Metadata" */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
          
          {/* Copyright Section */}
          <div className="flex flex-col gap-3">
            <span className="text-zinc-400 font-bold">
              Nicolas Adamczyk 2026
            </span>
            <span className="opacity-60">All rights reserved.</span>
          </div>

          {/* Privacy & Trust */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-emerald-500/80">
              <ShieldCheck size={12} />
              <span className="font-bold">Privacy Focused</span>
            </div>
            <span className="opacity-60">No trackers, zero cookies.</span>
          </div>

          {/* Infrastructure Section */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-emerald-500/80">
              <Zap size={12} />
              <span className="font-bold tracking-widest">Engine : Next.js 15</span>
            </div>
            <div className="flex items-center gap-2 opacity-60">
              <Cpu size={12} />
              <span>Vercel Edge Network</span>
            </div>
          </div>

          {/* System Version & Sync - DYNAMIQUE */}
          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex items-center gap-2">
               <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
               <span className="opacity-60 text-zinc-400">System Synced</span>
            </div>
            <span className="opacity-40 text-zinc-500">
              Last Deploy: {buildDate}
            </span>
          </div>

        </div>

        {/* --- ZONE FINALE --- */}
        <div className="mt-16 flex flex-col items-center">
          {/* Ligne finale décorative */}
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
          
          {/* L'espace critique de 5 pixels exacts */}
          <div className="h-[5px] w-full" />
        </div>
      </div>
    </footer>
  );
}
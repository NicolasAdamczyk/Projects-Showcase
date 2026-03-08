"use client";
import React, { useEffect, useRef } from "react";

export default function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 -z-50 bg-zinc-950 overflow-hidden pointer-events-none"
      style={{
        "--mouse-x": "50%",
        "--mouse-y": "50%",
      } as React.CSSProperties}
    >
      
      {/* 1. COUCHE DE POINTS STATIQUES (Fondation)
          Opacité très basse pour être présent sans s'imposer.
      */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `radial-gradient(circle, #ffffff 0.5px, transparent 0.5px)`,
          backgroundSize: '32px 32px' 
        }} 
      />

      {/* 2. EFFET DE RÉPULSION (Le Roi)
          L'opacité est ici à 0.1 pour que les points soient visibles partout,
          mais le masque radial vient renforcer l'éclat là où se trouve la souris.
      */}
      <div 
        className="absolute inset-0 opacity-[0.1] will-change-transform"
        style={{ 
          backgroundImage: `radial-gradient(circle, #ffffff 0.8px, transparent 0.8px)`,
          backgroundSize: '32px 32px',
          // Masque avec un centre à 100% d'opacité (pour la zone souris) 
          // et un bord qui retombe à 50% pour le reste du fond
          WebkitMaskImage: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), black, rgba(0,0,0,0.5))`,
          maskImage: `radial-gradient(circle 250px at var(--mouse-x) var(--mouse-y), black, rgba(0,0,0,0.5))`,
          transform: `scale(1.02)`, 
          transformOrigin: `var(--mouse-x) var(--mouse-y)`,
          transition: "transform 0.2s ease-out"
        }} 
      />

      {/* 3. LA LUMIÈRE LARGE (Ajustée à 0.02 pour plus de subtilité) */}
      <div 
        className="absolute inset-0 will-change-[background]"
        style={{
          background: `radial-gradient(circle 600px at var(--mouse-x) var(--mouse-y), rgba(59, 130, 246, 0.02), transparent 80%)`
        }}
      />

      {/* 4. LE GRAIN DE FINITION */}
      <div 
        className="absolute inset-0 opacity-[0.015]" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />
    </div>
  );
}
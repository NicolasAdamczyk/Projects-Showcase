"use client";
import { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Check } from "lucide-react";

export default function Sidebars() {
  const { scrollYProgress } = useScroll();
  const [copied, setCopied] = useState(false);

  const offset = 160; 
  const email = "NICOLAS.ADAMCZYK.PRO@GMAIL.COM";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lineHeightLeft = useTransform(scrollYProgress, [0, 1], [120 + offset, 40 + offset]);
  const gapSizeLeft = useTransform(scrollYProgress, [0, 1], ["24px", "8px"]);
  const lineHeightRight = useTransform(scrollYProgress, [0, 1], [40, 120]);
  const gapSizeRight = useTransform(scrollYProgress, [0, 1], ["8px", "24px"]);

  return (
    <>
      {/* --- CÔTÉ GAUCHE (Socials) - Arrivée de la gauche --- */}
      <div 
        className="absolute inset-y-0 z-0 hidden lg:block pointer-events-none opacity-0 animate-slide-right"
        style={{ 
          left: "calc(50vw - 768px + 24px)",
          animationDelay: '800ms' // Synchronisé avec le texte du Hero
        }}
      >
        <div className="sticky top-0 h-screen flex flex-col-reverse items-center">
          <motion.div style={{ height: lineHeightLeft }} className="w-[1px] bg-zinc-800 transition-all duration-75" />
          <motion.div style={{ marginBottom: gapSizeLeft }} className="flex flex-col gap-5 pointer-events-auto">
            <a 
              href="https://github.com/NicolasAdamczyk?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-emerald-500 transition-colors cursor-pointer"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://www.linkedin.com/in/nicolasadamczyk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-emerald-500 transition-colors cursor-pointer"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* --- CÔTÉ DROIT (Email) - Arrivée de la droite --- */}
      <div 
        className="absolute inset-y-0 z-0 hidden lg:block pointer-events-none opacity-0 animate-slide-left"
        style={{ 
          right: "calc(50vw - 768px + 24px)",
          animationDelay: '800ms' // Synchronisé avec le texte du Hero
        }}
      >
        <div className="sticky top-0 h-screen flex flex-col-reverse items-center">
          <motion.div style={{ height: lineHeightRight }} className="w-[1px] bg-zinc-800 transition-all duration-75" />
          
          <div className="relative flex flex-col items-center pointer-events-auto">
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 55 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute bottom-1/2 z-50 flex items-center gap-2 bg-emerald-500 text-zinc-950 px-2 py-1 rounded font-mono text-[9px] font-bold uppercase tracking-tighter shadow-[0_0_15px_rgba(16,185,129,0.4)] whitespace-nowrap"
                >
                  <Check size={10} /> Copied
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button 
              onClick={handleCopy}
              style={{ marginBottom: gapSizeRight }}
              className="font-mono text-[9px] tracking-[0.3em] text-zinc-500 hover:text-emerald-500 transition-colors [writing-mode:vertical-rl] outline-none cursor-pointer active:scale-95"
            >
              {email}
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
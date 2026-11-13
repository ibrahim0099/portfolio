import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { profile } from "../data";
const Scene = lazy(() => import("./Scene"));

function Typer() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((x) => (x + 1) % profile.roles.length), 2200); return () => clearInterval(t); }, []);
  return <span key={i} className="grad-text animate-pulse">{profile.roles[i]}</span>;
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-[55%] md:h-full md:inset-0 md:left-1/2">
        <Suspense fallback={null}><Scene /></Suspense>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-ink via-ink/30 to-transparent pointer-events-none" />
      <div className="relative z-10 min-h-[100svh] max-w-6xl mx-auto px-5 sm:px-6 pt-24 md:pt-0 pb-10 flex flex-col md:justify-center md:max-w-6xl pointer-events-none">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-mono text-neon text-sm mb-4">
          &gt; hello_world — I'm
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl sm:text-7xl md:text-7xl lg:text-8xl font-bold leading-[0.95]">
          Ibrahim<br /><span className="grad-text">Ramzan</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 md:max-w-[46%] lg:max-w-[48%] text-lg sm:text-xl md:text-2xl text-white/80">
          {profile.title} · <Typer />
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }} className="mt-4 max-w-xl md:max-w-[44%] lg:max-w-md text-white/60">
          I build agents, LLM products and AI automations that ship to production — from US healthcare CRMs to generative-video SaaS.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-8 flex flex-wrap gap-3 pointer-events-auto">
          <a href="#projects" className="px-6 py-3 rounded-full bg-gradient-to-r from-neon to-violet text-ink font-semibold hover:scale-105 transition">See my work</a>
          {profile.cvUrl && <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full glass inline-flex items-center gap-2 hover:border-neon/50 transition"><Download size={16} />CV</a>}
        </motion.div>
      </div>
      <a href="#about" className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"><ArrowDown /></a>
    </section>
  );
}

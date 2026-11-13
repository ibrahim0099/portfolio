import { useState } from "react";
import { Menu, X } from "lucide-react";
import Hero from "./components/Hero";
import Logo from "./components/Logo";
import { About, Projects, Experience, Skills, CaseStudies, Contact } from "./components/Sections";

const links = ["about", "projects", "experience", "skills", "contact"];

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 glass">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Logo size={38} />
            <span className="font-bold tracking-tight hidden xs:block sm:block">Ibrahim<span className="text-neon"> Ramzan</span></span>
          </a>
          <div className="hidden md:flex gap-7 text-sm text-white/70">
            {links.map((l) => <a key={l} href={`#${l}`} className="hover:text-neon capitalize">{l}</a>)}
          </div>
          <button className="md:hidden p-2" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <div className="md:hidden px-5 pb-4 flex flex-col gap-1 border-t border-white/10">
            {links.map((l) => <a key={l} href={`#${l}`} onClick={() => setOpen(false)} className="py-3 capitalize text-white/80">{l}</a>)}
          </div>
        )}
      </nav>
      <Hero /><About /><Projects /><Experience /><Skills /><CaseStudies /><Contact />
    </>
  );
}

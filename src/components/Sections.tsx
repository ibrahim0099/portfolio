import { motion } from "framer-motion";
import { ExternalLink, Mail, Link2, Phone, MapPin } from "lucide-react";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { profile, stats, projects, experience, skills, caseStudies } from "../data";

const fade = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

function Section({ id, kicker, title, children }: { id: string; kicker: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <motion.div {...fade}>
        <p className="font-mono text-neon text-sm">{kicker}</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-8 md:mb-12">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}

export function About() {
  return (
    <Section id="about" kicker="01 / about" title="Engineer. Team lead. Product builder.">
      <div className="grid lg:grid-cols-[340px_1fr] gap-10 items-center">
        <motion.div {...fade} className="relative mx-auto w-64 sm:w-80 lg:w-full max-w-[340px]">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-neon via-violet to-pink-300 opacity-40 blur-2xl" />
          <div className="relative rounded-[2rem] overflow-hidden border border-white/15 bg-ink aspect-[4/5]" style={{ animation: "floaty 6s ease-in-out infinite" }}>
            <img src={profile.photoUrl} alt="Ibrahim Ramzan" loading="lazy" className="w-full h-full object-cover object-top scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <span className="absolute bottom-3 left-3 font-mono text-xs glass rounded-full px-3 py-1 text-neon">● open to relocation</span>
          </div>
        </motion.div>
        <div className="space-y-8">
        <motion.p {...fade} className="text-base md:text-lg text-white/70 leading-relaxed">{profile.summary}</motion.p>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...fade} transition={{ delay: i * 0.1 }} className="glass rounded-2xl p-5">
              <div className="text-3xl font-bold grad-text">{s.value}</div>
              <div className="text-sm text-white/60 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </Section>
  );
}

function TiltCard({ children, color }: { children: ReactNode; color: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent) => {
    const el = ref.current!, r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(8px)`;
  };
  const leave = () => (ref.current!.style.transform = "");
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} style={{ boxShadow: `0 0 0 1px ${color}33, 0 20px 60px -30px ${color}` }}
      className="glass rounded-3xl p-5 sm:p-7 h-full transition-transform duration-150 ease-out">{children}</div>
  );
}

export function Projects() {
  return (
    <Section id="projects" kicker="02 / products" title="Things I've built & shipped">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.div key={p.name} {...fade} transition={{ delay: i * 0.08 }}>
            <TiltCard color={p.color}>
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs px-3 py-1 rounded-full" style={{ background: p.color + "22", color: p.color }}>{p.tag}</span>
                <a href={p.url} target="_blank" rel="noreferrer" className="text-white/50 hover:text-white"><ExternalLink size={18} /></a>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mt-5">{p.name}</h3>
              <p className="text-white/65 mt-3 leading-relaxed">{p.desc}</p>
              <p className="mt-4 text-sm font-medium" style={{ color: p.color }}>{p.metric}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {p.stack.map((s) => <span key={s} className="font-mono text-xs text-white/60 border border-white/10 rounded px-2 py-1">{s}</span>)}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" kicker="03 / experience" title="Where I've done the work">
      <div className="relative border-l border-white/10 ml-2 space-y-10">
        {experience.map((e, i) => (
          <motion.div key={e.role} {...fade} transition={{ delay: i * 0.05 }} className="pl-8 relative">
            <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-neon shadow-[0_0_14px_#5eead4]" />
            <p className="font-mono text-xs text-violet">{e.period}</p>
            <h3 className="text-xl font-bold mt-1">{e.role}</h3>
            <p className="text-white/50 text-sm">{e.org}</p>
            <ul className="mt-3 space-y-2 text-white/70 list-disc pl-5 marker:text-neon">
              {e.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" kicker="04 / stack" title="Tools of the trade">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Object.entries(skills).map(([k, v], i) => (
          <motion.div key={k} {...fade} transition={{ delay: i * 0.06 }} className="glass rounded-2xl p-6">
            <h3 className="font-semibold mb-4 grad-text">{k}</h3>
            <div className="flex flex-wrap gap-2">
              {v.map((s) => <span key={s} className="text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 hover:border-neon/60 hover:text-neon transition">{s}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function CaseStudies() {
  return (
    <Section id="cases" kicker="05 / system design" title="AI architecture case studies">
      <div className="grid md:grid-cols-3 gap-5">
        {caseStudies.map((c, i) => (
          <motion.div key={c.title} {...fade} transition={{ delay: i * 0.08 }} className="glass rounded-2xl p-6">
            <h3 className="text-xl font-bold">{c.title}</h3>
            <p className="text-white/65 mt-3">{c.desc}</p>
            <p className="font-mono text-xs text-neon mt-4">{c.stack}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const items: { icon: typeof Mail; text: string; href?: string }[] = [
    profile.email && { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
    profile.linkedin && { icon: Link2, text: profile.linkedin.replace(/^https?:\/\/(www\.)?/, ""), href: profile.linkedin },
    profile.phone && { icon: Phone, text: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: MapPin, text: profile.location },
  ].filter(Boolean) as never;
  return (
    <Section id="contact" kicker="06 / contact" title="Let's build something intelligent">
      <motion.div {...fade} className="glass rounded-3xl p-5 sm:p-8 md:p-12">
        <p className="text-white/70 max-w-2xl mb-8">Available for remote international roles and relocation to the EU, USA, Canada or Australia. Reach out for AI product, agentic and full-stack work.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {items.map(({ icon: I, text, href }) => {
            const inner = <><I className="text-neon shrink-0" size={20} /><span className="break-all sm:break-normal min-w-0">{text}</span></>;
            const cls = "flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10";
            return href ? <a key={text} href={href} target="_blank" rel="noreferrer" className={cls + " hover:border-neon/60 transition"}>{inner}</a> : <div key={text} className={cls}>{inner}</div>;
          })}
        </div>
      </motion.div>
      <p className="text-center text-white/30 text-sm mt-16">© {new Date().getFullYear()} Ibrahim Ramzan</p>
    </Section>
  );
}

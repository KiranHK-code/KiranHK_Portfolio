import { useEffect, useState } from "react";
import { ArrowRight, Download, Mail, Menu, X, FileText } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { btn, GithubIcon, LinkedinIcon } from "./ui";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "glass border-x-0 border-t-0" : "border-b border-transparent"}`}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-widest">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-primary/40 text-[11px] text-primary">KH</span>
          KIRAN H K
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={profile.resume} target="_blank" rel="noreferrer" className={`${btn.primary} hidden sm:inline-flex`}>
            <FileText className="h-4 w-4" /> View Resume
          </a>
          <button className="rounded-md p-2 lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      {open && (
        <ul className="mx-auto flex max-w-6xl flex-col px-5 pb-5 lg:hidden">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block border-b py-3 text-muted-foreground hover:text-foreground">{l.label}</a>
            </li>
          ))}
          <li className="pt-4"><a href={profile.resume} target="_blank" rel="noreferrer" className={`${btn.primary} w-full`}>View Resume</a></li>
        </ul>
      )}
    </header>
  );
}

const lines = [
  { p: "$", t: "whoami" },
  { p: ">", t: "kiran_hk — CSBS '27, AI + full-stack" },
  { p: "$", t: "cat focus.txt" },
  { p: ">", t: "LLM apps · RAG · Node.js · React" },
  { p: "$", t: "git log --oneline | wc -l" },
  { p: ">", t: "420+ contributions, 30+ merged OSS PRs" },
];

function Terminal() {
  const full = lines.map((l) => `${l.p} ${l.t}`).join("\n");
  const [n, setN] = useState(0);
  useEffect(() => {
    if (n >= full.length) return;
    const id = setTimeout(() => setN(n + 1), full[n] === "\n" ? 260 : 22);
    return () => clearTimeout(id);
  }, [n, full]);
  const shown = full.slice(0, n).split("\n");
  return (
    <div className="glass shadow-soft overflow-hidden rounded-xl">
      <div className="flex items-center gap-2 border-b px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">~/kiran — zsh</span>
      </div>
      <pre className="min-h-[220px] whitespace-pre-wrap p-5 font-mono text-[13px] leading-7">
        {shown.map((line, i) => (
          <div key={i} className={line.startsWith(">") ? "text-muted-foreground" : "text-foreground"}>
            {line.startsWith("$") ? <><span className="text-primary">$</span>{line.slice(1)}</> : line}
            {i === shown.length - 1 && <span className="caret ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-primary" />}
          </div>
        ))}
      </pre>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="bg-aurora pointer-events-none absolute inset-0" />
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs text-muted-foreground">
            Computer Science & Business Systems • 2027
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-gradient">Kiran H K.</span>
          </h1>
          <p className="mt-4 text-xl text-foreground/90 sm:text-2xl">I build AI-powered and full-stack applications.</p>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Computer Science & Business Systems student passionate about AI, backend development, and building practical products that solve real-world problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className={btn.primary}>View My Projects <ArrowRight className="h-4 w-4" /></a>
            <a href={profile.resume} download className={btn.ghost}><Download className="h-4 w-4" /> Download Resume</a>
          </div>
          <div className="mt-8 flex items-center gap-5">
            <div className="flex items-center gap-1">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-md p-2 text-muted-foreground hover:text-foreground"><GithubIcon /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-md p-2 text-muted-foreground hover:text-foreground"><LinkedinIcon /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="rounded-md p-2 text-muted-foreground hover:text-foreground"><Mail className="h-5 w-5" /></a>
            </div>
            <span className="h-5 w-px bg-border" />
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="status-dot h-2 w-2 rounded-full bg-success" /> Open to 2027 internships
            </span>
          </div>
        </div>
        <Terminal />
      </div>
    </section>
  );
}

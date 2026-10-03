import { useEffect, useState, type FormEvent } from "react";
import {
  Brain, Layers, Puzzle, Code2, Monitor, Server, Database, Sparkles, Wrench, ArrowUpRight, X, Trophy, GitPullRequest,
  Award, Mail, Send, Star, CheckCircle2, Briefcase,
} from "lucide-react";
import {
  achievements, certifications, experience, learning, profile, projects, skills, stats, type Project,
} from "@/data/portfolio";
import { Badge, btn, GithubIcon, LinkedinIcon, Reveal, Section } from "./ui";

export function About() {
  const cards = [
    { icon: Brain, title: "AI Engineering", text: "LLM apps, RAG pipelines and practical generative AI." },
    { icon: Layers, title: "Full Stack Development", text: "React frontends backed by Node.js APIs and SQL." },
    { icon: Puzzle, title: "Problem Solving", text: "Data structures, algorithms and clean system design." },
  ];
  return (
    <Section id="about" eyebrow="03 / About" title="About Me">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-4 text-muted-foreground">
          <p>
            I'm a Computer Science & Business Systems student at <span className="text-foreground">Maharaja Institute of Technology Mysore</span>, interested in software engineering, AI, backend systems, and product development.
          </p>
          <p>
            I enjoy turning ideas into working applications, experimenting with AI technologies, and contributing to open-source projects. My current focus is strengthening my backend, AI engineering, and problem-solving skills while building real-world projects.
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="glass rounded-xl p-5">
                <div className="font-mono text-2xl font-semibold text-foreground">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <div className="card-lift h-full rounded-xl border bg-card p-6">
              <c.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

const skillIcons = [Code2, Monitor, Server, Database, Sparkles, Wrench];
export function Skills() {
  return (
    <Section id="skills" eyebrow="02 / Skills" title="Tech Stack">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => {
          const Icon = skillIcons[i % skillIcons.length];
          return (
            <Reveal key={g.category} delay={i * 70}>
              <div className="card-lift h-full rounded-xl border bg-card p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent text-accent-foreground"><Icon className="h-4 w-4" /></span>
                  <h3 className="font-medium">{g.category}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">{g.items.map((s) => <Badge key={s}>{s}</Badge>)}</div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function ProjectVisual({ p, large }: { p: Project; large?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-lg border bg-secondary/50 ${large ? "aspect-[16/10]" : "aspect-[16/9]"}`}>
      <div className="bg-grid absolute inset-0" />
      <div className="bg-aurora absolute inset-0 opacity-80" />
      <div className="absolute inset-0 grid place-items-center">
        <div className="glass rounded-lg px-4 py-3 font-mono text-xs text-muted-foreground">
          <span className="text-primary">~/</span>{p.slug}
        </div>
      </div>
      <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{p.tagline}</span>
    </div>
  );
}

function ProjectModal({ p, onClose }: { p: Project; onClose: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-background/70 p-0 backdrop-blur-sm sm:items-center sm:p-6 animate-in fade-in" onClick={onClose} role="dialog" aria-modal="true" aria-label={p.name}>
      <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-2xl border bg-popover p-6 shadow-soft sm:rounded-2xl sm:p-8 animate-in slide-in-from-bottom-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-primary">{p.tagline}</p>
            <h3 className="mt-1 text-2xl font-semibold">{p.name}</h3>
          </div>
          <button onClick={onClose} aria-label="Close" className="rounded-md p-2 text-muted-foreground hover:text-foreground"><X className="h-5 w-5" /></button>
        </div>
        <div className="mt-6"><ProjectVisual p={p} large /></div>
        <p className="mt-2 text-center font-mono text-[11px] text-muted-foreground">Screenshots coming soon</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div><h4 className="text-sm font-medium">Problem</h4><p className="mt-2 text-sm text-muted-foreground">{p.problem}</p></div>
          <div><h4 className="text-sm font-medium">Solution</h4><p className="mt-2 text-sm text-muted-foreground">{p.solution}</p></div>
        </div>
        <h4 className="mt-6 text-sm font-medium">Key features</h4>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {p.features.map((f) => <li key={f} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{f}</li>)}
        </ul>
        <h4 className="mt-6 text-sm font-medium">Architecture</h4>
        <p className="mt-2 rounded-lg border bg-secondary/50 p-3 font-mono text-xs text-muted-foreground">{p.architecture}</p>
        <h4 className="mt-6 text-sm font-medium">Technologies</h4>
        <div className="mt-3 flex flex-wrap gap-2">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={p.github} target="_blank" rel="noreferrer" className={btn.ghost}><GithubIcon className="h-4 w-4" /> GitHub</a>
          {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className={btn.primary}>Live Demo <ArrowUpRight className="h-4 w-4" /></a>}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const [featured, ...rest] = projects;
  return (
    <Section id="projects" eyebrow="01 / Work" title="Featured Projects" intro="Products I've designed and built end-to-end — from AI-powered mobile apps to logistics dashboards.">
      <Reveal>
        <article className="card-lift grid gap-8 rounded-2xl border bg-card p-5 sm:p-7 lg:grid-cols-[1.1fr_1fr]">
          <button onClick={() => setActive(featured)} className="text-left" aria-label={`Open ${featured.name} details`}><ProjectVisual p={featured} large /></button>
          <div className="flex flex-col">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 font-mono text-[11px] text-accent-foreground"><Star className="h-3 w-3" /> Featured</span>
            <h3 className="mt-4 text-2xl font-semibold">{featured.name}</h3>
            <p className="mt-3 text-muted-foreground">{featured.description}</p>
            <ul className="mt-4 space-y-1.5">
              {featured.features.slice(0, 4).map((f) => <li key={f} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{f}</li>)}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">{featured.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
            <div className="mt-auto flex flex-wrap gap-3 pt-6">
              <button onClick={() => setActive(featured)} className={btn.primary}>View details <ArrowUpRight className="h-4 w-4" /></button>
              <a href={featured.github} target="_blank" rel="noreferrer" className={btn.ghost}><GithubIcon className="h-4 w-4" /> GitHub</a>
            </div>
          </div>
        </article>
      </Reveal>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {rest.map((p, i) => (
          <Reveal key={p.slug} delay={i * 90}>
            <article className="card-lift flex h-full flex-col rounded-2xl border bg-card p-5">
              <button onClick={() => setActive(p)} className="text-left" aria-label={`Open ${p.name} details`}><ProjectVisual p={p} /></button>
              <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
              <div className="mt-auto flex flex-wrap gap-3 pt-5">
                <button onClick={() => setActive(p)} className={btn.ghost}>Details <ArrowUpRight className="h-4 w-4" /></button>
                <a href={p.github} target="_blank" rel="noreferrer" className={btn.ghost}><GithubIcon className="h-4 w-4" /> GitHub</a>
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className={btn.primary}>Live Demo</a>}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      {active && <ProjectModal p={active} onClose={() => setActive(null)} />}
    </Section>
  );
}

type Repo = { id: number; name: string; description: string | null; html_url: string; stargazers_count: number; language: string | null };
export function GithubSection() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  useEffect(() => {
    fetch("https://api.github.com/users/KiranHK-code/repos?sort=updated&per_page=6")
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setRepos(Array.isArray(d) ? d : []))
      .catch(() => setRepos([]));
  }, []);
  return (
    <Section id="github" eyebrow="04 / Open Source" title="Building in Public" intro="Active contributor to open-source projects.">
      <Reveal>
        <div className="rounded-2xl border bg-card p-5 sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-6">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}><div className="font-mono text-xl font-semibold">{s.value}</div><div className="text-xs text-muted-foreground">{s.label}</div></div>
              ))}
            </div>
            <a href={profile.github} target="_blank" rel="noreferrer" className={btn.ghost}><GithubIcon className="h-4 w-4" /> @KiranHK-code</a>
          </div>
          <div className="mt-6 overflow-x-auto rounded-lg border bg-secondary/40 p-4">
            <img src="https://ghchart.rshah.org/5fd9bf/KiranHK-code" alt="Kiran's GitHub contribution graph" className="min-w-[680px] w-full" loading="lazy" />
          </div>
        </div>
      </Reveal>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {repos === null && Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-28 animate-pulse rounded-xl border bg-card" />)}
        {repos?.map((r, i) => (
          <Reveal key={r.id} delay={i * 60}>
            <a href={r.html_url} target="_blank" rel="noreferrer" className="card-lift flex h-full flex-col rounded-xl border bg-card p-5">
              <div className="flex items-center justify-between font-mono text-sm"><span className="truncate">{r.name}</span><ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" /></div>
              <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{r.description ?? "No description yet."}</p>
              <div className="mt-auto flex gap-4 pt-4 font-mono text-xs text-muted-foreground">
                {r.language && <span>{r.language}</span>}
                <span className="flex items-center gap-1"><Star className="h-3 w-3" />{r.stargazers_count}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" eyebrow="05 / Experience" title="Experience">
      <ol className="relative ml-3 border-l">
        {experience.map((e, i) => (
          <Reveal key={e.org} delay={i * 100}>
            <li className="relative pb-10 pl-8 last:pb-0">
              <span className={`absolute -left-[9px] top-1.5 grid h-4 w-4 place-items-center rounded-full border ${e.upcoming ? "border-dashed bg-background" : "border-primary bg-background"}`}>
                {!e.upcoming && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
              </span>
              <div className={`rounded-xl border p-6 ${e.upcoming ? "border-dashed" : "bg-card"}`}>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="flex items-center gap-2 font-medium"><Briefcase className="h-4 w-4 text-primary" />{e.role} <span className="text-muted-foreground">· {e.org}</span></h3>
                  <span className="font-mono text-xs text-muted-foreground">{e.period}</span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="06 / Recognition" title="Achievements & Open Source">
      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 80}>
            <div className="card-lift flex h-full items-start gap-4 rounded-xl border bg-card p-6">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                {a.kind === "Hackathon" ? <Trophy className="h-5 w-5" /> : <GitPullRequest className="h-5 w-5" />}
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{a.kind}</p>
                <h3 className="mt-1 font-medium">{a.title}</h3>
                <p className="mt-1 text-sm text-primary">{a.detail}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-xl border bg-secondary/40 px-6 py-4 font-mono text-sm text-muted-foreground">
          <span><span className="text-foreground">30+</span> merged PRs to external projects</span>
          <span><span className="text-foreground">60+</span> pull requests</span>
          <span><span className="text-foreground">420+</span> GitHub contributions</span>
        </div>
      </Reveal>

      <h3 className="mt-16 text-xl font-semibold">Certifications</h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 60}>
            <div className="h-full rounded-xl border bg-card p-5">
              <Award className="h-4 w-4 text-primary" />
              <p className="mt-3 text-sm font-medium">{c.name}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{c.org}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Learning() {
  return (
    <Section id="learning" eyebrow="07 / Now" title="Currently Learning">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="relative mx-auto aspect-square w-full max-w-[320px]">
            <div className="orbit absolute inset-0 rounded-full border border-dashed" />
            <div className="orbit-rev absolute inset-10 rounded-full border" />
            <div className="absolute inset-20 rounded-full border border-primary/30" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="glass rounded-full px-4 py-2 font-mono text-xs text-primary">learning.loop()</span>
            </div>
            <div className="orbit absolute inset-0"><span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary" /></div>
            <div className="orbit-rev absolute inset-10"><span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-foreground/70" /></div>
          </div>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {learning.map((l, i) => (
            <Reveal key={l} delay={i * 70}>
              <div className="flex items-center gap-3 rounded-xl border bg-card px-5 py-4">
                <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm">{l}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").slice(0, 100);
    const email = String(f.get("email") ?? "").slice(0, 255);
    const msg = String(f.get("message") ?? "").slice(0, 2000);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(`Portfolio contact from ${name}`)}&body=${encodeURIComponent(`${msg}\n\n— ${name} (${email})`)}`;
    setSent(true);
  };
  const input = "w-full rounded-lg border bg-secondary/50 px-4 py-3 text-sm placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-ring";
  return (
    <Section id="contact" eyebrow="08 / Contact" title="Let's Build Something">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <p className="text-muted-foreground">I'm always interested in building useful products, collaborating on interesting projects, contributing to open source, and exploring software engineering opportunities.</p>
          <p className="mt-6 text-lg font-medium">Have an idea or opportunity? Let's talk.</p>
          <div className="mt-8 space-y-3">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><Mail className="h-5 w-5" />{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><GithubIcon />github.com/KiranHK-code</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><LinkedinIcon />LinkedIn</a>
          </div>
        </Reveal>
        <Reveal>
          <form onSubmit={submit} className="glass space-y-4 rounded-2xl p-6 sm:p-8">
            <div><label htmlFor="name" className="mb-2 block text-sm">Name</label><input id="name" name="name" required maxLength={100} className={input} placeholder="Your name" /></div>
            <div><label htmlFor="email" className="mb-2 block text-sm">Email</label><input id="email" name="email" type="email" required maxLength={255} className={input} placeholder="you@company.com" /></div>
            <div><label htmlFor="message" className="mb-2 block text-sm">Message</label><textarea id="message" name="message" required maxLength={2000} rows={5} className={input} placeholder="Tell me about your idea or opportunity" /></div>
            <button type="submit" className={`${btn.primary} w-full`}><Send className="h-4 w-4" /> Send Message</button>
            {sent && <p className="text-center text-sm text-muted-foreground">Opening your email app…</p>}
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>Kiran H K © 2026 · <span className="font-mono text-xs">Built with React</span></p>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={`mailto:${profile.email}`} className="hover:text-foreground">Email</a>
        </div>
      </div>
    </footer>
  );
}

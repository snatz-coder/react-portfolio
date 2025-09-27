import { headers } from "next/headers";
import Link from "next/link";
import type { Me, ExperienceItem, EducationItem } from "types/me";

export default async function HomePage() {
  const h = headers();
  const host = h.get("x-forwarded-host") || h.get("host") || "localhost:3000";
  const proto = h.get("x-forwarded-proto") || (host.startsWith("localhost") ? "http" : "https");
  const origin = `${proto}://${host}`;

  const res = await fetch(`${origin}/api/me`, { cache: "no-store" });
  const me = await res.json() as Me;

  return (
    <section className="space-y-10">
      {/* HERO */}
      <div className="mt-8">
        <p className="text-sm opacity-70">Angular → React (Next.js)</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
          Hi, I’m <span className="text-sky-300">{me.name}</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base md:text-lg opacity-90">
          {me.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn" href={`mailto:${me.email}`}>Email</a>
          <a className="btn" href={me.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <Link className="btn" href="/playground">React Demos</Link>
          <a className="btn" href="/Sujane_Natasha_Lopez_CV.pdf" download>Download CV</a>
        </div>
      </div>

      {/* QUICK FACTS */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card">
          <h3 className="text-sm uppercase tracking-wide opacity-70">Location</h3>
          <p className="mt-2">{me.location}</p>
        </div>
        <div className="card">
          <h3 className="text-sm uppercase tracking-wide opacity-70">Contact</h3>
          <p className="mt-2"><a className="underline" href={`mailto:${me.email}`}>{me.email}</a></p>
          <p className="opacity-90">{me.phone}</p>
        </div>
        <div className="card">
          <h3 className="text-sm uppercase tracking-wide opacity-70">Currently</h3>
          <p className="mt-2">Building React/Next.js projects + geospatial POC (maps, tracking, offline queues).</p>
        </div>
      </div>

      {/* SKILLS */}
      <div className="card">
        <h2 className="text-xl font-semibold">Skills</h2>
        <SkillRow label="Languages" items={me.skills.languages} />
        <SkillRow label="Frameworks" items={me.skills.frameworks} />
        <SkillRow label="Data" items={me.skills.data} />
        <SkillRow label="Tools" items={me.skills.tools} />
        <SkillRow label="Other" items={me.skills.other} />
      </div>

      {/* EXPERIENCE */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Experience</h2>
        <ul className="space-y-4">
          {me.experience.map((job: ExperienceItem) => (
            <li key={job.company} className="card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{job.title} — {job.company}</h3>
                  <p className="opacity-80 text-sm">{job.location}</p>
                </div>
                <p className="opacity-70 text-sm">{job.period}</p>
              </div>
              <ul className="mt-3 list-disc list-inside space-y-1 opacity-90">
                {job.highlights.map((h: string, i: number) => <li key={i}>{h}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* EDUCATION */}
      <div className="card">
        <h2 className="text-xl font-semibold">Education</h2>
        <ul className="mt-3 space-y-2">
          {me.education.map((e: EducationItem) => (
            <li key={e.school}>
              <p className="font-medium">{e.school}</p>
              <p className="opacity-80">{e.degree} • {e.years}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SkillRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="mt-3">
      <p className="text-sm uppercase tracking-wide opacity-70">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((tag) => (
          <span key={tag} className="rounded-xl bg-slate-800/70 px-3 py-1 text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

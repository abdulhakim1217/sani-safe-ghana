import { CheckCircle2 } from "lucide-react";

const phases = [
  { phase: "Phase 01", title: "Pilot", year: "2024–2025", schools: "10", desc: "Tamale & Sagnarigu schools. Hardware validation, baseline data, EHO onboarding.", done: true },
  { phase: "Phase 02", title: "Validation", year: "2025–2026", schools: "50", desc: "Northern Region rollout. ML-based overflow prediction, multi-language SMS.", done: true },
  { phase: "Phase 03", title: "Expansion", year: "2026–2027", schools: "500", desc: "All 16 regions of Ghana. Government partnership, GES integration.", done: false },
  { phase: "Phase 04", title: "Pan-African", year: "2027+", schools: "5,000+", desc: "Burkina Faso, Togo, Côte d'Ivoire. Open-source hardware, local manufacturing.", done: false },
];

export function Deployment() {
  return (
    <section id="deploy" className="py-24 bg-secondary/50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-teal font-semibold">Deployment & scaling</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
              From a pilot in Tamale to every school in Africa.
            </h2>
          </div>
          <div className="rounded-2xl glass p-4 text-sm">
            <div className="text-xs text-muted-foreground">Cost per unit</div>
            <div className="font-display text-3xl font-bold text-teal">~$42</div>
            <div className="text-[10px] text-muted-foreground">Hardware + 2-year support</div>
          </div>
        </div>

        <div className="mt-12 relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
          <div className="space-y-8">
            {phases.map((p, i) => (
              <div key={p.phase} className={`relative grid md:grid-cols-2 gap-6 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}>
                <div className={`pl-12 md:pl-0 md:[direction:ltr] ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="rounded-3xl bg-card border border-border p-6 shadow-sm">
                    <div className="flex items-center gap-2 justify-start md:justify-inherit">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{p.phase}</span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-teal">{p.year}</span>
                    </div>
                    <div className="mt-2 font-display text-2xl font-bold">{p.title}</div>
                    <div className="mt-3 text-sm text-muted-foreground">{p.desc}</div>
                    <div className="mt-4 flex items-center gap-2 text-xs">
                      <span className="rounded-full bg-secondary px-3 py-1 font-semibold">{p.schools} schools</span>
                      {p.done && <span className="rounded-full bg-safe/15 text-[oklch(0.40_0.12_155)] px-3 py-1 font-semibold flex items-center gap-1"><CheckCircle2 className="size-3" /> Complete</span>}
                    </div>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2">
                  <div className={`relative size-4 rounded-full border-4 border-background ${p.done ? "bg-teal" : "bg-muted-foreground/40"}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { HeartPulse, GraduationCap, Droplets, Building2, CloudLightning } from "lucide-react";

const sdgs = [
  { n: 3, title: "Good Health", desc: "Prevents cholera & diarrheal disease outbreaks.", icon: HeartPulse, color: "#4C9F38" },
  { n: 4, title: "Quality Education", desc: "Keeps girls in school by ensuring safe sanitation.", icon: GraduationCap, color: "#C5192D" },
  { n: 6, title: "Clean Water & Sanitation", desc: "Stops contamination of nearby wells and streams.", icon: Droplets, color: "#26BDE2" },
  { n: 11, title: "Sustainable Cities", desc: "Builds resilient sanitation infrastructure.", icon: Building2, color: "#FD9D24" },
  { n: 13, title: "Climate Action", desc: "Adapts WASH systems to climate-driven flooding.", icon: CloudLightning, color: "#3F7E44" },
];

export function SdgImpact() {
  return (
    <section id="impact" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-teal font-semibold">SDG impact</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Five Sustainable Development Goals. One smart sensor.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {sdgs.map((s) => (
            <div key={s.n} className="group rounded-3xl border border-border bg-card p-5 hover:shadow-elev transition-all hover:-translate-y-1">
              <div className="size-12 rounded-2xl grid place-items-center text-white font-display font-bold" style={{ background: s.color }}>
                {s.n}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <s.icon className="size-4 text-teal" />
                <div className="font-display font-semibold text-sm">{s.title}</div>
              </div>
              <div className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-4 gap-4">
          {[
            { v: "27", l: "Schools protected" },
            { v: "12,400", l: "People served" },
            { v: "97%", l: "Overflows prevented" },
            { v: "0", l: "Cholera cases in pilot" },
          ].map((m) => (
            <div key={m.l} className="rounded-3xl bg-ink text-white p-6">
              <div className="font-display text-4xl font-bold">{m.v}</div>
              <div className="text-xs text-white/60 mt-1 uppercase tracking-widest">{m.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

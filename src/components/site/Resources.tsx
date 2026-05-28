import { FileText, Download, BookOpen, Cpu, BarChart3 } from "lucide-react";

const resources = [
  { title: "Technical Architecture", type: "PDF · 24 pages", icon: Cpu, tag: "Engineering" },
  { title: "Pilot Impact Report 2025", type: "PDF · 38 pages", icon: BarChart3, tag: "Research" },
  { title: "Climate Resilience Framework", type: "PDF · 16 pages", icon: BookOpen, tag: "Policy" },
  { title: "Case Study: Zogbeli JHS", type: "PDF · 12 pages", icon: FileText, tag: "Field" },
  { title: "WASH x Climate Briefing", type: "PDF · 8 pages", icon: BookOpen, tag: "Policy" },
  { title: "Hardware BOM & Schematics", type: "ZIP · open source", icon: Cpu, tag: "Engineering" },
];

export function Resources() {
  return (
    <section id="resources" className="py-24 bg-secondary/50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-teal font-semibold">Resource & research center</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Open data. Open hardware. Open research.
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {resources.map((r) => (
            <a key={r.title} href="#" className="group rounded-3xl bg-card border border-border p-5 hover:border-teal hover:shadow-elev transition-all">
              <div className="flex items-start justify-between">
                <div className="grid place-items-center size-10 rounded-xl bg-secondary group-hover:bg-teal/10 transition-colors">
                  <r.icon className="size-5 text-teal" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{r.tag}</span>
              </div>
              <div className="mt-4 font-display font-semibold">{r.title}</div>
              <div className="mt-1 text-xs text-muted-foreground">{r.type}</div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-teal">
                <Download className="size-3.5" /> Download
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

import floodImg from "@/assets/flood-ghana.jpg";
import schoolImg from "@/assets/school-children.jpg";
import { CloudRain, GraduationCap, Activity, MapPin } from "lucide-react";

const stats = [
  { value: "3.6M", label: "Ghanaians lack safely managed sanitation", icon: Activity },
  { value: "+62%", label: "Cholera risk during flood season in the North", icon: CloudRain },
  { value: "1 in 4", label: "Girls miss school due to unsafe latrines", icon: GraduationCap },
  { value: "14", label: "High-risk flood districts identified", icon: MapPin },
];

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-teal font-semibold">The problem</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Floods overflow latrines. Communities pay the price.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Across Northern Ghana, heavy rains push pit latrines past capacity. Waste contaminates wells,
            cholera spreads, schools shut down, and girls stop attending. Climate change is making each
            rainy season worse.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-5">
          {/* Big image card */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden relative min-h-[360px] shadow-elev">
            <img src={floodImg} alt="Aerial view of flooding in Northern Ghana" loading="lazy" width={1024} height={768} className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <div className="text-xs uppercase tracking-widest opacity-70">Rainy season · Tamale district</div>
              <div className="text-2xl font-display font-semibold mt-1 max-w-md">
                Flooded compounds overwhelm pit latrines within hours.
              </div>
            </div>
          </div>

          {/* Stats grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-3xl bg-card border border-border p-5 shadow-sm hover:shadow-elev transition-shadow">
                <s.icon className="size-5 text-teal" />
                <div className="mt-4 text-3xl font-display font-bold">{s.value}</div>
                <div className="mt-1 text-xs text-muted-foreground leading-snug">{s.label}</div>
              </div>
            ))}
          </div>

          {/* School card */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden relative min-h-[260px] shadow-elev">
            <img src={schoolImg} alt="Schoolchildren in Northern Ghana" loading="lazy" width={1024} height={768} className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-6 text-white">
              <div className="text-xs uppercase tracking-widest opacity-70">Health & education</div>
              <div className="text-xl font-display font-semibold mt-1 max-w-md">
                When school latrines fail, attendance collapses.
              </div>
            </div>
          </div>

          {/* Quote card */}
          <div className="lg:col-span-7 rounded-3xl bg-ink text-white p-8 md:p-10 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-widest text-mint">Field observation</div>
            <blockquote className="mt-3 text-2xl md:text-3xl font-display leading-snug">
              “By the time someone reports the overflow, the contamination has already happened.
              We need to know <span className="text-mint">before</span> it spills.”
            </blockquote>
            <div className="mt-5 text-sm text-white/70">
              — Environmental Health Officer, Sagnarigu Municipal Assembly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

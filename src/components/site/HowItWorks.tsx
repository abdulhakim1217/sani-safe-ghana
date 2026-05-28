import sensorImg from "@/assets/sensor-device.jpg";
import { Ruler, Wind, Cpu, Radio, Sun, MessageSquare, ArrowRight } from "lucide-react";

const hardware = [
  { name: "Ultrasonic Sensor", model: "JSN-SR04T", desc: "Waterproof depth measurement of waste level inside the pit.", icon: Ruler },
  { name: "Gas Sensor", model: "MQ-2", desc: "Detects methane, hydrogen sulfide and combustible gases.", icon: Wind },
  { name: "Microcontroller", model: "Arduino Nano", desc: "Edge-processes readings and triggers alert logic locally.", icon: Cpu },
  { name: "GSM Module", model: "SIM800L", desc: "Sends SMS alerts even where there's no internet.", icon: Radio },
  { name: "Solar + Battery", model: "5W panel · 18650", desc: "Off-grid, all-weather power for continuous monitoring.", icon: Sun },
];

const flow = [
  { step: "01", title: "Sense", desc: "Ultrasonic + gas sensors sample every 5 min." },
  { step: "02", title: "Process", desc: "Arduino evaluates against thresholds locally." },
  { step: "03", title: "Transmit", desc: "SIM800L pushes data over GSM to the cloud." },
  { step: "04", title: "Alert", desc: "SMS dispatched to officers, head teachers, leaders." },
];

export function HowItWorks() {
  return (
    <section id="how" className="py-24 bg-secondary/50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-teal font-semibold">How Sani Alert works</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
              Solar-powered sensors. SMS alerts. Zero internet required.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            A rugged, off-grid monitoring stack designed for the realities of rural Northern Ghana —
            dust, heat, floods, and patchy connectivity.
          </p>
        </div>

        {/* Hardware bento */}
        <div className="mt-12 grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-5 rounded-3xl overflow-hidden relative min-h-[420px] shadow-elev">
            <img src={sensorImg} alt="Solar-powered IoT sensor on latrine wall" loading="lazy" width={1024} height={768} className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
            <div className="absolute bottom-0 p-6 text-white">
              <div className="text-xs uppercase tracking-widest opacity-70">Field-tested hardware</div>
              <div className="text-xl font-display font-semibold mt-1">~ $42 per unit · 2-year battery life</div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {hardware.map((h) => (
              <div key={h.name} className="group rounded-3xl bg-card border border-border p-5 hover:border-teal hover:shadow-glow transition-all">
                <div className="flex items-start justify-between">
                  <div className="grid place-items-center size-10 rounded-xl bg-secondary group-hover:bg-mint/20 transition-colors">
                    <h.icon className="size-5 text-teal" />
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{h.model}</div>
                </div>
                <div className="mt-4 font-display font-semibold">{h.name}</div>
                <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{h.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Data flow */}
        <div className="mt-16">
          <div className="text-xs uppercase tracking-widest text-teal font-semibold">Data flow</div>
          <div className="mt-5 grid md:grid-cols-4 gap-4 relative">
            {flow.map((f, i) => (
              <div key={f.step} className="relative rounded-2xl bg-card border border-border p-5">
                <div className="text-[10px] font-mono text-muted-foreground">{f.step}</div>
                <div className="mt-2 text-lg font-display font-semibold">{f.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{f.desc}</div>
                {i < flow.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 size-5 text-teal bg-secondary/50 rounded-full" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-ink text-white p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="text-xs uppercase tracking-widest text-mint">Example SMS payload</div>
              <div className="mt-3 font-display text-xl">From the field to the right phone, in under 30 seconds.</div>
            </div>
            <div className="rounded-2xl glass-dark p-5 font-mono text-sm">
              <div className="flex items-center gap-2 text-alert text-xs font-semibold mb-2">
                <MessageSquare className="size-3.5" /> SMS · Inbound
              </div>
              <div className="text-white/90 leading-relaxed">
                <span className="text-alert">⚠ ALERT:</span> Latrine #12 at <span className="text-mint">Zogbeli JHS</span> is <span className="text-warn">85% full</span>. Gas level: <span className="text-warn">elevated</span>. Recommend emptying within 24 hrs.
              </div>
              <div className="mt-2 text-[10px] text-white/40">Unit ID: SA-NR-0042 · Battery 78% · 14:02 GMT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

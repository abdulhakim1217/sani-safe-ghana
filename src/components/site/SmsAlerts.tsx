import { MessageSquare, ShieldCheck, AlertTriangle, AlertOctagon } from "lucide-react";

const levels = [
  { tier: "Green", title: "Safe", desc: "0–55% capacity, gas normal. Routine monitoring only.", icon: ShieldCheck, color: "text-safe", ring: "ring-safe/30", bg: "bg-safe/10" },
  { tier: "Yellow", title: "Near capacity", desc: "55–75% or rising gas. Schedule pump-out this week.", icon: AlertTriangle, color: "text-[oklch(0.55_0.15_70)]", ring: "ring-warn/40", bg: "bg-warn/10" },
  { tier: "Red", title: "Immediate action", desc: "Above 75%, dangerous gas, or flood-imminent. Dispatch now.", icon: AlertOctagon, color: "text-alert", ring: "ring-alert/40", bg: "bg-alert/10" },
];

const recipients = [
  "Environmental Health Officer",
  "School Head Teacher",
  "Community Chief / Assembly Member",
  "District Sanitation Coordinator",
];

export function SmsAlerts() {
  return (
    <section id="alerts" className="py-24 bg-secondary/50 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-teal font-semibold">SMS alert system</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            The right person notified, the moment it matters.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            No smartphones required. No data plans. Sani Alert dispatches tiered SMS notifications to the
            people who can act — instantly, even when the internet is down.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-5">
          {levels.map((l) => (
            <div key={l.tier} className={`rounded-3xl bg-card border border-border p-6 ring-4 ${l.ring}`}>
              <div className={`inline-flex items-center gap-2 ${l.bg} ${l.color} text-xs font-semibold uppercase tracking-widest rounded-full px-3 py-1`}>
                <l.icon className="size-3.5" /> {l.tier}
              </div>
              <div className="mt-4 font-display text-2xl font-semibold">{l.title}</div>
              <div className="mt-2 text-sm text-muted-foreground leading-relaxed">{l.desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-5">
          <div className="lg:col-span-5 rounded-3xl bg-ink text-white p-6 md:p-8">
            <div className="text-xs uppercase tracking-widest text-mint">Recipients</div>
            <div className="mt-2 font-display text-2xl font-semibold">Each unit notifies up to 5 contacts.</div>
            <ul className="mt-6 space-y-3">
              {recipients.map((r) => (
                <li key={r} className="flex items-center gap-3 text-sm">
                  <span className="grid place-items-center size-7 rounded-lg bg-white/10"><MessageSquare className="size-3.5" /></span>
                  {r}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 rounded-3xl bg-card border border-border p-6 md:p-8">
            <div className="text-sm font-semibold mb-4">Response workflow</div>
            <ol className="space-y-4">
              {[
                "Sensor detects threshold breach (fill % or gas ppm).",
                "Edge logic confirms with second reading (filters false positives).",
                "Tiered SMS dispatched based on severity to assigned contacts.",
                "Recipient confirms receipt via reply SMS (\"OK\" or \"DISPATCH\").",
                "Dashboard logs the response time and resolution status.",
              ].map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="shrink-0 grid place-items-center size-7 rounded-full bg-teal/10 text-teal font-mono text-xs font-bold">{i + 1}</span>
                  <span className="text-sm text-muted-foreground pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

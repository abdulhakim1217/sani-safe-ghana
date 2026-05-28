import { Link } from "@tanstack/react-router";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { ArrowUpRight, MapPin, Battery, Wifi, Droplets, Flame } from "lucide-react";

const trend = Array.from({ length: 12 }).map((_, i) => ({
  t: `${i * 2}:00`,
  fill: 30 + Math.round(Math.sin(i / 2) * 12 + i * 4 + Math.random() * 6),
  gas: 8 + Math.round(Math.cos(i / 3) * 5 + Math.random() * 4),
}));

const units = [
  { id: "SA-NR-0042", name: "Zogbeli JHS", fill: 85, gas: 22, status: "critical", battery: 78 },
  { id: "SA-NR-0021", name: "Tamale Central Market", fill: 64, gas: 11, status: "warn", battery: 92 },
  { id: "SA-NR-0033", name: "Bagabaga Primary", fill: 38, gas: 6, status: "ok", battery: 81 },
  { id: "SA-NR-0009", name: "Sagnarigu Clinic", fill: 47, gas: 9, status: "ok", battery: 66 },
];

const statusStyle = {
  critical: "bg-alert/10 text-alert border-alert/20",
  warn: "bg-warn/15 text-[oklch(0.55_0.15_70)] border-warn/30",
  ok: "bg-safe/15 text-[oklch(0.40_0.12_155)] border-safe/30",
} as const;

export function DashboardPreview() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-teal font-semibold">Live monitoring</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
              One dashboard. Every latrine. Real-time.
            </h2>
          </div>
          <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-ink text-white px-5 py-3 text-sm font-semibold hover:opacity-90">
            Open full dashboard <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="rounded-3xl border border-border bg-card shadow-elev overflow-hidden">
          {/* topbar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-secondary/40">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-alert/70" />
                <span className="size-2.5 rounded-full bg-warn/70" />
                <span className="size-2.5 rounded-full bg-safe/70" />
              </div>
              <div className="ml-3 text-xs font-mono text-muted-foreground">dashboard.sanialert.gh / overview</div>
            </div>
            <div className="text-[10px] font-mono text-muted-foreground">Updated 12s ago</div>
          </div>

          <div className="grid lg:grid-cols-12 gap-5 p-5">
            {/* KPI cards */}
            {[
              { l: "Active units", v: "27", sub: "+3 this month", c: "text-teal" },
              { l: "Alerts today", v: "4", sub: "1 critical", c: "text-alert" },
              { l: "Avg fill level", v: "52%", sub: "−8% vs last wk", c: "text-safe" },
              { l: "Battery health", v: "84%", sub: "All solar OK", c: "text-mint" },
            ].map((k) => (
              <div key={k.l} className="lg:col-span-3 rounded-2xl border border-border p-4">
                <div className="text-xs text-muted-foreground">{k.l}</div>
                <div className={`mt-2 font-display text-3xl font-bold ${k.c}`}>{k.v}</div>
                <div className="text-[11px] text-muted-foreground mt-1">{k.sub}</div>
              </div>
            ))}

            {/* Chart */}
            <div className="lg:col-span-8 rounded-2xl border border-border p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">Waste level & gas trends</div>
                  <div className="text-xs text-muted-foreground">Last 24 hours · all units</div>
                </div>
                <div className="flex gap-3 text-xs">
                  <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-teal" /> Fill %</span>
                  <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-alert" /> Gas ppm</span>
                </div>
              </div>
              <div className="h-56 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trend} margin={{ left: -20, right: 0, top: 10 }}>
                    <defs>
                      <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--teal)" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="var(--teal)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--alert)" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="var(--alert)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="t" tick={{ fontSize: 10, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} />
                    <Area type="monotone" dataKey="fill" stroke="var(--teal)" fill="url(#g1)" strokeWidth={2} />
                    <Area type="monotone" dataKey="gas" stroke="var(--alert)" fill="url(#g2)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Risk map placeholder */}
            <div className="lg:col-span-4 rounded-2xl border border-border p-4 relative overflow-hidden">
              <div className="text-sm font-semibold">Northern Region · risk map</div>
              <div className="text-xs text-muted-foreground">3 high-risk zones</div>
              <div className="mt-3 relative h-56 rounded-xl bg-secondary/60 grid-pattern overflow-hidden">
                {[
                  { x: "20%", y: "30%", s: "critical" },
                  { x: "55%", y: "55%", s: "warn" },
                  { x: "75%", y: "25%", s: "ok" },
                  { x: "35%", y: "70%", s: "ok" },
                  { x: "65%", y: "78%", s: "warn" },
                ].map((p, i) => (
                  <div key={i} className="absolute" style={{ left: p.x, top: p.y }}>
                    <div className={`relative size-3 rounded-full ${p.s === "critical" ? "bg-alert pulse-ring" : p.s === "warn" ? "bg-warn" : "bg-safe"}`} />
                  </div>
                ))}
                <MapPin className="absolute right-2 bottom-2 size-3 text-muted-foreground" />
              </div>
            </div>

            {/* Units table */}
            <div className="lg:col-span-12 rounded-2xl border border-border overflow-hidden">
              <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                <div className="text-sm font-semibold">Connected units</div>
                <div className="text-xs text-muted-foreground">{units.length} of 27 shown</div>
              </div>
              <div className="divide-y divide-border">
                {units.map((u) => (
                  <div key={u.id} className="grid grid-cols-12 items-center gap-3 px-4 py-3 text-sm hover:bg-secondary/40">
                    <div className="col-span-4 md:col-span-3">
                      <div className="font-semibold">{u.name}</div>
                      <div className="text-[10px] font-mono text-muted-foreground">{u.id}</div>
                    </div>
                    <div className="col-span-4 md:col-span-4">
                      <div className="flex items-center gap-2 text-xs">
                        <Droplets className="size-3.5 text-teal" />
                        <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                          <div className={`h-full ${u.fill > 75 ? "bg-alert" : u.fill > 55 ? "bg-warn" : "bg-safe"}`} style={{ width: `${u.fill}%` }} />
                        </div>
                        <span className="w-8 text-right tabular-nums">{u.fill}%</span>
                      </div>
                    </div>
                    <div className="hidden md:flex md:col-span-2 items-center gap-1.5 text-xs text-muted-foreground">
                      <Flame className="size-3.5 text-alert" /> {u.gas} ppm
                    </div>
                    <div className="hidden md:flex md:col-span-1 items-center gap-1.5 text-xs text-muted-foreground">
                      <Battery className="size-3.5" /> {u.battery}%
                    </div>
                    <div className="col-span-4 md:col-span-2 flex justify-end">
                      <span className={`text-[10px] uppercase tracking-widest font-semibold border rounded-full px-2 py-1 ${statusStyle[u.status as keyof typeof statusStyle]}`}>
                        {u.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 py-3 border-t border-border text-[11px] text-muted-foreground flex items-center gap-2">
                <Wifi className="size-3" /> Live · MQTT stream healthy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

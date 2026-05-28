import { createFileRoute, Link } from "@tanstack/react-router";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import {
  Activity, AlertOctagon, Battery, Bell, Cpu, Droplets, Flame, Home,
  LayoutDashboard, MapPin, Menu, MessageSquare, Settings, Signal, Sun, Wrench, Users, Search
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Live Dashboard — Sani Alert Ghana" },
      { name: "description", content: "Real-time monitoring of pit latrine fill levels, gas concentration, solar status, and SMS alerts across deployed units in Ghana." },
    ],
  }),
  component: Dashboard,
});

const trend24 = Array.from({ length: 24 }).map((_, i) => ({
  t: `${String(i).padStart(2, "0")}h`,
  fill: 30 + Math.round(Math.sin(i / 3) * 15 + i * 1.5 + Math.random() * 6),
  gas: 6 + Math.round(Math.cos(i / 4) * 4 + Math.random() * 3),
}));

const weekly = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => ({
  d, alerts: Math.round(2 + Math.random() * 6 + (i === 4 ? 4 : 0)),
}));

const distribution = [
  { name: "Safe", value: 18, fill: "var(--safe)" },
  { name: "Near capacity", value: 6, fill: "var(--warn)" },
  { name: "Critical", value: 3, fill: "var(--alert)" },
];

const units = [
  { id: "SA-NR-0042", name: "Zogbeli JHS", loc: "Tamale", fill: 85, gas: 22, batt: 78, status: "critical", last: "2 min ago" },
  { id: "SA-NR-0021", name: "Central Market", loc: "Tamale", fill: 64, gas: 11, batt: 92, status: "warn", last: "5 min ago" },
  { id: "SA-NR-0033", name: "Bagabaga Primary", loc: "Sagnarigu", fill: 38, gas: 6, batt: 81, status: "ok", last: "1 min ago" },
  { id: "SA-NR-0009", name: "Sagnarigu Clinic", loc: "Sagnarigu", fill: 47, gas: 9, batt: 66, status: "ok", last: "3 min ago" },
  { id: "SA-NR-0055", name: "Kalpohin SHS", loc: "Tamale", fill: 72, gas: 14, batt: 88, status: "warn", last: "30 sec ago" },
  { id: "SA-NR-0061", name: "Vitting Community", loc: "Savelugu", fill: 28, gas: 4, batt: 94, status: "ok", last: "1 min ago" },
  { id: "SA-NR-0014", name: "Gbalahi RC School", loc: "Tamale", fill: 91, gas: 28, batt: 71, status: "critical", last: "just now" },
  { id: "SA-NR-0072", name: "Choggu Primary", loc: "Tamale", fill: 53, gas: 8, batt: 83, status: "ok", last: "4 min ago" },
];

const alerts = [
  { sev: "critical", text: "Gbalahi RC School — 91% full, gas 28ppm", time: "just now" },
  { sev: "critical", text: "Zogbeli JHS — 85% full", time: "2 min ago" },
  { sev: "warn", text: "Kalpohin SHS — fill rising fast (+12%/24h)", time: "12 min ago" },
  { sev: "warn", text: "Central Market — battery below 95%, monitor", time: "1 hr ago" },
  { sev: "ok", text: "Choggu Primary — pump-out completed", time: "3 hr ago" },
];

const sevStyle = {
  critical: "bg-alert/10 text-alert border-alert/20",
  warn: "bg-warn/15 text-[oklch(0.55_0.15_70)] border-warn/30",
  ok: "bg-safe/15 text-[oklch(0.40_0.12_155)] border-safe/30",
} as const;

function Dashboard() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-secondary/40">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-ink text-white p-4 flex flex-col transition-transform md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`}>
        <Link to="/" className="flex items-center gap-2 px-2 py-3">
          <span className="grid place-items-center size-9 rounded-xl bg-white/10"><Droplets className="size-4" /></span>
          <div>
            <div className="font-display font-bold text-sm">Sani Alert</div>
            <div className="text-[10px] uppercase tracking-widest text-white/50">Ghana · Console</div>
          </div>
        </Link>
        <nav className="mt-6 space-y-1 text-sm">
          {[
            { icon: LayoutDashboard, label: "Overview", active: true },
            { icon: MapPin, label: "Map" },
            { icon: Cpu, label: "Units" },
            { icon: Bell, label: "Alerts" },
            { icon: MessageSquare, label: "SMS log" },
            { icon: Wrench, label: "Maintenance" },
            { icon: Users, label: "Team" },
            { icon: Settings, label: "Settings" },
          ].map((i) => (
            <a key={i.label} href="#" className={`flex items-center gap-3 px-3 py-2 rounded-lg ${i.active ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"}`}>
              <i.icon className="size-4" />{i.label}
            </a>
          ))}
        </nav>
        <div className="mt-auto rounded-2xl bg-white/5 p-4 text-xs">
          <div className="text-mint font-semibold uppercase tracking-widest">System</div>
          <div className="mt-2 flex items-center gap-2"><span className="size-2 rounded-full bg-safe animate-pulse" /> All systems operational</div>
          <Link to="/" className="mt-3 inline-flex items-center gap-1.5 text-white/70 hover:text-white"><Home className="size-3" /> Back to site</Link>
        </div>
      </aside>

      {/* Main */}
      <div className="md:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur border-b border-border">
          <div className="flex items-center gap-3 px-4 md:px-8 h-16">
            <button onClick={() => setOpen(!open)} className="md:hidden grid place-items-center size-9 rounded-lg hover:bg-secondary"><Menu className="size-5" /></button>
            <div className="flex-1 max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input placeholder="Search units, schools, alerts…" className="w-full rounded-xl bg-secondary border border-transparent pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-teal" />
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs">
              <span className="rounded-full bg-safe/15 text-[oklch(0.40_0.12_155)] px-3 py-1 font-semibold flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-safe animate-pulse" /> Live · MQTT
              </span>
            </div>
            <button className="grid place-items-center size-9 rounded-lg hover:bg-secondary relative">
              <Bell className="size-4" />
              <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-alert" />
            </button>
            <div className="size-9 rounded-full bg-gradient-to-br from-teal to-ink text-white grid place-items-center font-semibold text-xs">AM</div>
          </div>
        </header>

        <main className="p-4 md:p-8 space-y-6">
          {/* Header row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <div>
              <div className="text-xs uppercase tracking-widest text-teal font-semibold">Overview</div>
              <h1 className="mt-1 font-display text-3xl font-bold">Good afternoon, Akosua.</h1>
              <p className="text-sm text-muted-foreground">2 critical alerts need your attention across 27 units.</p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold">Export CSV</button>
              <button className="rounded-xl bg-ink text-white px-4 py-2 text-sm font-semibold">Dispatch crew</button>
            </div>
          </div>

          {/* KPI cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { l: "Active units", v: "27", sub: "+3 this month", icon: Cpu, c: "text-teal" },
              { l: "Critical alerts", v: "2", sub: "1 dispatched", icon: AlertOctagon, c: "text-alert" },
              { l: "Avg fill level", v: "52%", sub: "−8% vs last week", icon: Droplets, c: "text-safe" },
              { l: "Solar health", v: "98%", sub: "All charging", icon: Sun, c: "text-mint" },
            ].map((k) => (
              <div key={k.l} className="rounded-3xl bg-card border border-border p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{k.l}</span>
                  <k.icon className={`size-4 ${k.c}`} />
                </div>
                <div className={`mt-2 font-display text-4xl font-bold ${k.c}`}>{k.v}</div>
                <div className="text-[11px] text-muted-foreground mt-1">{k.sub}</div>
              </div>
            ))}
          </div>

          {/* Charts row */}
          <div className="grid lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8 rounded-3xl bg-card border border-border p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Waste level & gas trends</div>
                  <div className="text-xs text-muted-foreground">Last 24 hours · all units averaged</div>
                </div>
                <div className="flex gap-2 text-xs">
                  {["24H", "7D", "30D", "All"].map((p, i) => (
                    <button key={p} className={`px-2.5 py-1 rounded-md ${i === 0 ? "bg-ink text-white" : "text-muted-foreground hover:bg-secondary"}`}>{p}</button>
                  ))}
                </div>
              </div>
              <div className="h-72 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trend24} margin={{ left: -20, right: 0, top: 10 }}>
                    <defs>
                      <linearGradient id="d1" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--teal)" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="var(--teal)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="d2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--alert)" stopOpacity={0.5} />
                        <stop offset="100%" stopColor="var(--alert)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="t" tick={{ fontSize: 10, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} />
                    <Area type="monotone" dataKey="fill" stroke="var(--teal)" fill="url(#d1)" strokeWidth={2} />
                    <Area type="monotone" dataKey="gas" stroke="var(--alert)" fill="url(#d2)" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-3xl bg-card border border-border p-5">
              <div className="font-semibold">Unit risk distribution</div>
              <div className="text-xs text-muted-foreground">Current status across fleet</div>
              <div className="h-56 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={distribution} dataKey="value" innerRadius={50} outerRadius={80} paddingAngle={4}>
                      {distribution.map((e) => <Cell key={e.name} fill={e.fill} />)}
                    </Pie>
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-1.5 text-xs">
                {distribution.map((d) => (
                  <div key={d.name} className="flex items-center justify-between">
                    <span className="flex items-center gap-2"><span className="size-2 rounded-full" style={{ background: d.fill }} /> {d.name}</span>
                    <span className="font-semibold">{d.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl bg-card border border-border p-5">
              <div className="font-semibold">Alerts this week</div>
              <div className="text-xs text-muted-foreground">Friday saw a flood-driven spike</div>
              <div className="h-56 mt-4">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weekly}>
                    <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="d" tick={{ fontSize: 10, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 10, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)", fontSize: 12 }} />
                    <Bar dataKey="alerts" fill="var(--teal)" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="lg:col-span-7 rounded-3xl bg-card border border-border p-5">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">Northern Region map</div>
                  <div className="text-xs text-muted-foreground">Unit locations & risk halos</div>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground flex items-center gap-1"><Signal className="size-3 text-safe" /> Live</span>
              </div>
              <div className="mt-4 relative h-56 rounded-2xl bg-secondary grid-pattern overflow-hidden">
                {[
                  { x: "18%", y: "26%", s: "critical", l: "Gbalahi" },
                  { x: "32%", y: "42%", s: "critical", l: "Zogbeli" },
                  { x: "48%", y: "30%", s: "warn", l: "Central" },
                  { x: "60%", y: "60%", s: "warn", l: "Kalpohin" },
                  { x: "72%", y: "22%", s: "ok", l: "Choggu" },
                  { x: "26%", y: "70%", s: "ok", l: "Bagabaga" },
                  { x: "78%", y: "62%", s: "ok", l: "Vitting" },
                  { x: "55%", y: "78%", s: "ok", l: "Sagnarigu" },
                ].map((p, i) => (
                  <div key={i} className="absolute group" style={{ left: p.x, top: p.y }}>
                    <div className={`relative size-3 rounded-full ${p.s === "critical" ? "bg-alert pulse-ring" : p.s === "warn" ? "bg-warn" : "bg-safe"}`} />
                    <div className="absolute left-4 top-0 text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-ink text-white px-2 py-0.5 rounded">{p.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Units + alerts */}
          <div className="grid lg:grid-cols-12 gap-4">
            <div className="lg:col-span-8 rounded-3xl bg-card border border-border overflow-hidden">
              <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                <div>
                  <div className="font-semibold">Connected units</div>
                  <div className="text-xs text-muted-foreground">{units.length} of 27 shown · sorted by risk</div>
                </div>
                <button className="text-xs text-teal font-semibold">View all →</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    <tr className="border-b border-border">
                      <th className="text-left px-5 py-2 font-semibold">Unit</th>
                      <th className="text-left px-3 py-2 font-semibold">Fill</th>
                      <th className="text-left px-3 py-2 font-semibold">Gas</th>
                      <th className="text-left px-3 py-2 font-semibold">Battery</th>
                      <th className="text-left px-3 py-2 font-semibold">Last seen</th>
                      <th className="text-right px-5 py-2 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {units.map((u) => (
                      <tr key={u.id} className="hover:bg-secondary/40">
                        <td className="px-5 py-3">
                          <div className="font-semibold">{u.name}</div>
                          <div className="text-[10px] font-mono text-muted-foreground">{u.id} · {u.loc}</div>
                        </td>
                        <td className="px-3 py-3 w-44">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 h-1.5 rounded-full bg-secondary overflow-hidden">
                              <div className={`h-full ${u.fill > 75 ? "bg-alert" : u.fill > 55 ? "bg-warn" : "bg-safe"}`} style={{ width: `${u.fill}%` }} />
                            </div>
                            <span className="tabular-nums text-xs w-8 text-right">{u.fill}%</span>
                          </div>
                        </td>
                        <td className="px-3 py-3 text-xs"><span className="inline-flex items-center gap-1"><Flame className="size-3 text-alert" />{u.gas} ppm</span></td>
                        <td className="px-3 py-3 text-xs"><span className="inline-flex items-center gap-1"><Battery className="size-3" />{u.batt}%</span></td>
                        <td className="px-3 py-3 text-xs text-muted-foreground">{u.last}</td>
                        <td className="px-5 py-3 text-right">
                          <span className={`text-[10px] uppercase tracking-widest font-semibold border rounded-full px-2 py-1 ${sevStyle[u.status as keyof typeof sevStyle]}`}>{u.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-3xl bg-card border border-border overflow-hidden">
              <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                <div className="font-semibold flex items-center gap-2"><Bell className="size-4" /> Recent alerts</div>
                <button className="text-xs text-teal font-semibold">See all</button>
              </div>
              <ul className="divide-y divide-border">
                {alerts.map((a, i) => (
                  <li key={i} className="px-5 py-3 flex items-start gap-3">
                    <span className={`mt-1 size-2 rounded-full shrink-0 ${a.sev === "critical" ? "bg-alert" : a.sev === "warn" ? "bg-warn" : "bg-safe"}`} />
                    <div className="flex-1">
                      <div className="text-sm leading-snug">{a.text}</div>
                      <div className="text-[10px] text-muted-foreground mt-0.5">{a.time}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-5 py-4 border-t border-border bg-secondary/40">
                <div className="flex items-center gap-2 text-xs">
                  <Activity className="size-3 text-teal" />
                  <span className="text-muted-foreground">Overflow prediction model:</span>
                  <span className="font-semibold">2 units at risk in 48h</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

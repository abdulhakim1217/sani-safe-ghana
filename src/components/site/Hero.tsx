import heroImg from "@/assets/hero-sanialert.jpg";
import { ArrowRight, PlayCircle, Activity, Signal, Sun } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-pattern opacity-[0.35] [mask-image:radial-gradient(60%_60%_at_50%_30%,#000,transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs font-medium">
              <span className="relative flex size-2">
                <span className="absolute inset-0 rounded-full bg-alert animate-ping opacity-70" />
                <span className="relative size-2 rounded-full bg-alert" />
              </span>
              Live pilot in Tamale, Northern Region
            </div>

            <h1 className="mt-5 text-balance font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95]">
              Preventing sanitation
              <br />
              <span className="bg-gradient-to-r from-teal to-ink bg-clip-text text-transparent">disasters</span> before they happen.
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              An IoT-powered early warning system that detects pit latrine overflow and dangerous gas
              buildup — before they become public health emergencies.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#deploy" className="group inline-flex items-center gap-2 rounded-xl bg-ink text-white px-5 py-3 text-sm font-semibold hover:opacity-90 transition-opacity shadow-elev">
                Request Deployment
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl bg-white text-ink px-5 py-3 text-sm font-semibold border border-border hover:border-teal transition-colors">
                <Activity className="size-4" /> View Live Dashboard
              </Link>
              <a href="#partners" className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold hover:bg-secondary transition-colors">
                Partner With Us
              </a>
              <a href="#how" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground px-3 py-3">
                <PlayCircle className="size-4" /> Watch demo
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { k: "27", l: "Schools piloted" },
                { k: "4.2k", l: "SMS alerts sent" },
                { k: "97%", l: "Overflow prevented" },
              ].map((s) => (
                <div key={s.l} className="rounded-2xl glass p-4">
                  <dt className="text-2xl font-display font-bold">{s.k}</dt>
                  <dd className="text-xs text-muted-foreground mt-1">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elev border border-border">
              <img src={heroImg} alt="Solar-powered smart sanitation monitoring in Northern Ghana" width={1536} height={1024} className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
            </div>

            <div className="absolute -left-4 top-8 glass rounded-2xl p-3 shadow-elev w-56 float-soft">
              <div className="flex items-center gap-2 text-xs font-semibold text-alert">
                <span className="relative size-2 rounded-full bg-alert" />
                CRITICAL ALERT
              </div>
              <div className="mt-1 text-sm font-medium leading-snug">
                Latrine #12 at Zogbeli JHS is 85% full.
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">Sent via SMS · 2 min ago</div>
            </div>

            <div className="absolute -right-2 bottom-6 glass rounded-2xl p-3 shadow-elev w-52 float-soft" style={{ animationDelay: "1.5s" }}>
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold flex items-center gap-1"><Sun className="size-3" /> Solar</span>
                <span className="text-safe font-semibold">Charging</span>
              </div>
              <div className="flex items-center justify-between text-xs mt-2">
                <span className="font-semibold flex items-center gap-1"><Signal className="size-3" /> GSM</span>
                <span className="text-teal font-semibold">Strong</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full w-[78%] bg-gradient-to-r from-teal to-mint" />
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">Battery 78%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

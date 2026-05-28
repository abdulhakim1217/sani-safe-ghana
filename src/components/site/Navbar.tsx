import { Link } from "@tanstack/react-router";
import { Droplets, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Problem", href: "/#problem" },
  { label: "How it works", href: "/#how" },
  { label: "Impact", href: "/#impact" },
  { label: "Partners", href: "/#partners" },
  { label: "Resources", href: "/#resources" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-3">
        <nav className="glass rounded-2xl flex items-center justify-between px-4 py-2.5 shadow-elev">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="relative grid place-items-center size-9 rounded-xl bg-ink text-white">
              <Droplets className="size-4" />
              <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-alert" />
            </span>
            <div className="leading-tight">
              <div className="font-display font-bold text-sm">Sani Alert</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Ghana</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
            <Link to="/dashboard" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Live Dashboard
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a href="/#contact" className="text-sm font-medium px-3 py-2 rounded-lg hover:bg-secondary transition-colors">Contact</a>
            <a href="/#deploy" className="text-sm font-semibold px-4 py-2 rounded-lg bg-ink text-white hover:opacity-90 transition-opacity">
              Request Deployment
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden grid place-items-center size-9 rounded-lg hover:bg-secondary">
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden glass mt-2 rounded-2xl p-3 shadow-elev">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-secondary">
                {l.label}
              </a>
            ))}
            <Link to="/dashboard" onClick={() => setOpen(false)} className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-secondary">
              Live Dashboard
            </Link>
            <a href="/#deploy" onClick={() => setOpen(false)} className="block mt-1 text-center text-sm font-semibold px-4 py-2.5 rounded-lg bg-ink text-white">
              Request Deployment
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-widest text-teal font-semibold">Get involved</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
              Let's build climate-resilient sanitation together.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Volunteer, sponsor a school, request a deployment, or report a latrine issue in your community.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <div className="flex gap-3"><Mail className="size-4 text-teal shrink-0 mt-0.5" /><div><div className="font-semibold">hello@sanialert.gh</div><div className="text-muted-foreground text-xs">Partnerships & press</div></div></div>
              <div className="flex gap-3"><Phone className="size-4 text-teal shrink-0 mt-0.5" /><div><div className="font-semibold">+233 (0) 24 000 0000</div><div className="text-muted-foreground text-xs">Mon–Fri, 9am–5pm GMT</div></div></div>
              <div className="flex gap-3"><MapPin className="size-4 text-teal shrink-0 mt-0.5" /><div><div className="font-semibold">Tamale, Northern Region</div><div className="text-muted-foreground text-xs">University for Development Studies campus</div></div></div>
            </div>

            <div className="mt-8 rounded-3xl bg-ink text-white p-5">
              <div className="text-xs uppercase tracking-widest text-mint">Newsletter</div>
              <div className="mt-2 font-display text-lg">Quarterly impact reports.</div>
              <form className="mt-3 flex gap-2">
                <input type="email" placeholder="you@org.com" className="flex-1 rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm placeholder:text-white/40 focus:outline-none focus:border-mint" />
                <button type="button" className="rounded-lg bg-mint text-ink font-semibold text-sm px-3 py-2">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="rounded-3xl bg-card border border-border p-6 md:p-8 shadow-elev"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Full name" placeholder="Akosua Mensah" />
                <Field label="Organisation" placeholder="UNICEF Ghana" />
                <Field label="Email" type="email" placeholder="you@org.com" />
                <Field label="Phone" placeholder="+233 ..." />
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">I'm interested in</label>
                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-2">
                  {["Request Deployment", "Partnership", "Sponsorship", "Volunteering", "Research", "Community Report"].map((t) => (
                    <label key={t} className="flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-xs cursor-pointer hover:border-teal">
                      <input type="checkbox" className="accent-teal" />
                      {t}
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Message</label>
                <textarea rows={4} placeholder="Tell us about your school, district, or organisation..." className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-teal" />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-xs text-muted-foreground">We respond within 2 business days.</div>
                <button type="submit" className="inline-flex items-center gap-2 rounded-xl bg-ink text-white px-5 py-3 text-sm font-semibold hover:opacity-90">
                  {sent ? "Thanks — we'll be in touch" : <>Send message <Send className="size-4" /></>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">{label}</label>
      <input {...props} className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:border-teal" />
    </div>
  );
}

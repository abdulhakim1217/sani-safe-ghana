const partners = ["UNICEF Ghana", "WaterAid", "GES", "Ministry of Sanitation", "UDS", "MEST Africa", "GIZ", "Tamale Municipal", "Kosmos Innovation Center", "UNDP"];

const tiers = [
  { name: "Implementation Partner", price: "In-kind", desc: "Co-deploy units in your district or school network.", perks: ["10–100 units co-branded", "Training for EHOs & teachers", "Data dashboard access"] },
  { name: "Sponsor a School", price: "$420", desc: "Fund 10 sensors and 2 years of monitoring for one school.", perks: ["Named recognition on units", "Quarterly impact reports", "Site visit invitation"] },
  { name: "Scaling Partner", price: "Custom", desc: "Multi-region or international expansion partnerships.", perks: ["Joint research publications", "API & data sharing", "Co-development of roadmap"] },
];

export function Partners() {
  return (
    <section id="partners" className="py-24 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-teal font-semibold">Partners & sponsors</div>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-balance">
            Built with governments, NGOs, and communities.
          </h2>
        </div>

        {/* Logo ticker */}
        <div className="mt-10 relative overflow-hidden rounded-3xl border border-border bg-card py-6">
          <div className="flex gap-12 animate-ticker whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <div key={i} className="font-display text-xl font-semibold text-muted-foreground/70 px-4 shrink-0">{p}</div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-card to-transparent" />
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {tiers.map((t, i) => (
            <div key={t.name} className={`rounded-3xl p-6 ${i === 1 ? "bg-ink text-white shadow-elev" : "bg-card border border-border"}`}>
              <div className={`text-xs uppercase tracking-widest ${i === 1 ? "text-mint" : "text-teal"} font-semibold`}>{t.name}</div>
              <div className="mt-3 font-display text-3xl font-bold">{t.price}</div>
              <div className={`mt-2 text-sm ${i === 1 ? "text-white/70" : "text-muted-foreground"}`}>{t.desc}</div>
              <ul className="mt-5 space-y-2 text-sm">
                {t.perks.map((p) => (
                  <li key={p} className="flex gap-2"><span className={i === 1 ? "text-mint" : "text-teal"}>•</span>{p}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full justify-center rounded-xl px-4 py-2.5 text-sm font-semibold ${i === 1 ? "bg-white text-ink" : "bg-ink text-white"}`}>
                Become a Partner
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

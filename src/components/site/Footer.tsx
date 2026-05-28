import { Droplets, Mail, Github, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-ink text-white/90 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center size-10 rounded-xl bg-white/10">
                <Droplets className="size-5" />
              </span>
              <div>
                <div className="font-display font-bold">Sani Alert Ghana</div>
                <div className="text-xs uppercase tracking-widest text-white/50">Climate-Resilient Sanitation</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm text-white/70">
              An IoT-powered early warning system preventing pit latrine overflow and dangerous gas buildup
              in schools and communities across Northern Ghana.
            </p>
            <div className="flex gap-2 mt-6">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="grid place-items-center size-9 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 mb-4">Platform</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/#how" className="hover:text-white">How it works</a></li>
              <li><a href="/dashboard" className="hover:text-white">Live dashboard</a></li>
              <li><a href="/#deploy" className="hover:text-white">Deployment</a></li>
              <li><a href="/#impact" className="hover:text-white">SDG impact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-white/50 mb-4">Organisation</div>
            <ul className="space-y-2 text-sm">
              <li><a href="/#partners" className="hover:text-white">Partners</a></li>
              <li><a href="/#resources" className="hover:text-white">Research</a></li>
              <li><a href="/#contact" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Press kit</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 justify-between text-xs text-white/50">
          <div>© {new Date().getFullYear()} Sani Alert Ghana. Built for Tamale, scaled for Africa.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Data ethics</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

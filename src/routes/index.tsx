import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { ProblemSection } from "@/components/site/ProblemSection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { SmsAlerts } from "@/components/site/SmsAlerts";
import { SdgImpact } from "@/components/site/SdgImpact";
import { Deployment } from "@/components/site/Deployment";
import { Partners } from "@/components/site/Partners";
import { Resources } from "@/components/site/Resources";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sani Alert Ghana — Climate-Resilient Sanitation Monitoring" },
      { name: "description", content: "IoT-powered early warning system preventing pit latrine overflow and dangerous gas buildup in schools and communities across Northern Ghana." },
      { property: "og:title", content: "Sani Alert Ghana" },
      { property: "og:description", content: "Preventing sanitation disasters before they happen — smart, solar-powered IoT monitoring." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <DashboardPreview />
        <SmsAlerts />
        <SdgImpact />
        <Deployment />
        <Partners />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

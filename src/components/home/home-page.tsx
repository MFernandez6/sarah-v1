import { HeroSection } from "@/components/home/hero-sections";
import { DifferentiatorSection } from "@/components/home/differentiator-section";
import { BenefitsSection } from "@/components/home/benefits-section";
import { WhoIHelpSection } from "@/components/home/who-i-help-section";
import { ServicesOverviewSection } from "@/components/home/services-overview-section";
import { AboutSarahSection } from "@/components/home/about-sarah-section";
import { FAQSection } from "@/components/home/faq-section";
import { CTASection } from "@/components/home/cta-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <DifferentiatorSection />
      <BenefitsSection />
      <WhoIHelpSection />
      <ServicesOverviewSection />
      <AboutSarahSection />
      <FAQSection />
      <CTASection />
    </>
  );
}

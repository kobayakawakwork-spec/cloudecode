import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { HeroSection } from "@/components/sections/hero-section";
import { StrengthsSection } from "@/components/sections/strengths-section";
import { ComparisonSection } from "@/components/sections/comparison-section";
import { EmpathySection } from "@/components/sections/empathy-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { JobsSection } from "@/components/sections/jobs-section";
import { CareerSection } from "@/components/sections/career-section";
import { StoriesSection } from "@/components/sections/stories-section";
import { SupportSection } from "@/components/sections/support-section";
import { FlowSection } from "@/components/sections/flow-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <StrengthsSection />
        <ComparisonSection />
        <EmpathySection />
        <BenefitsSection />
        <FeaturesSection />
        <JobsSection />
        <CareerSection />
        <StoriesSection />
        <SupportSection />
        <FlowSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <StickyMobileCta />
    </>
  );
}

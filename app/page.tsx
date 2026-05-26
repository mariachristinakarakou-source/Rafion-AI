import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { HowItWorks } from "@/components/landing/how-it-works";
import { KeyFeatures } from "@/components/landing/key-features";
import { FAQ } from "@/components/landing/faq";
import { Pricing } from "@/components/landing/pricing";
import { CTA } from "@/components/landing/cta";
import { Team } from "@/components/landing/team";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <HowItWorks />
      <KeyFeatures />
      <section id="pricing">
        <Pricing />
      </section>
      <FAQ />
      <CTA />
      <Team />
      <Footer />
    </main>
  );
}

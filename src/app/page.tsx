import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";
import { ValueProp } from "@/components/ValueProp";
import { Differentiators } from "@/components/Differentiators";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Reveal } from "@/components/Reveal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Testimonials />
        <ValueProp />
        <Differentiators />
        <HowItWorks />
        <Features />
        <Pricing />
        <Reveal />
      </main>
      <Footer />
    </>
  );
}

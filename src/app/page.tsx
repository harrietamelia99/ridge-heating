import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Instagram } from "@/components/Instagram";
import { CtaBanner } from "@/components/CtaBanner";
import { Contact } from "@/components/Contact";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider from="#000000" to="#ffffff" flip />
        <Services />
        <SectionDivider from="#ffffff" to="#000000" />
        <WhyUs />
        <SectionDivider from="#000000" to="#ffffff" flip />
        <About />
        <SectionDivider from="#ffffff" to="#000000" />
        <Gallery />
        <SectionDivider from="#000000" to="#ffffff" flip />
        <Testimonials />
        <SectionDivider from="#ffffff" to="#000000" />
        <Instagram />
        <CtaBanner />
        <SectionDivider from="#000000" to="#ffffff" flip />
        <Contact />
        <SectionDivider from="#ffffff" to="#000000" />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

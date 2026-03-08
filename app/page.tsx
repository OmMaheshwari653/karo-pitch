import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import HowItWorks from "@/components/sections/HowItWorks";
import WhoCanApply from "@/components/sections/WhoCanApply";
import InvestorsSection from "@/components/sections/InvestorsSection";
import StartupDiscovery from "@/components/sections/StartupDiscovery";
import BharatMap from "@/components/sections/BharatMap";
import StartupStories from "@/components/sections/StartupStories";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#07070a]">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <HowItWorks />
        <WhoCanApply />
        <InvestorsSection />
        <StartupDiscovery />
        <BharatMap />
        <StartupStories />
        <Testimonials />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

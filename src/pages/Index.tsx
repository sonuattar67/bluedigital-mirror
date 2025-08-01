import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import BrandLogos from "@/components/BrandLogos";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ClientLogos from "@/components/ClientLogos";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import MarketingSection from "@/components/MarketingSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <BrandLogos />
      <ServicesSection />
      <AboutSection />
      <ClientLogos />
      <TestimonialsSection />
      <CaseStudiesSection />
      <MarketingSection />
      <BlogSection />
      <CTASection />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;

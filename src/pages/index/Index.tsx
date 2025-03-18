
import { useEffect } from "react";
import Hero from "@/pages/index/components/Hero";
import CertifiedSection from "@/pages/index/components/CertifiedSection";
import VideoSection from "@/pages/index/components/VideoSection";
import Services from "@/pages/index/components/Services";
import Projects from "@/pages/index/components/Projects";
import Testimonials from "@/pages/index/components/Testimonials";
import Trust from "@/pages/index/components/Trust";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

/**
 * Index page
 * Shows the home page of the website
 */
const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Trigger animations immediately for hero section
    const animatedElements = document.querySelectorAll('.staggered-fade-in');
    animatedElements.forEach(element => {
      element.classList.add('visible');
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <Hero />
      <CertifiedSection />
      <VideoSection />
      <Services />
      <Projects />
      <Testimonials />
      <Trust />
      <Contact />
    </div>
  );
};

export default Index;

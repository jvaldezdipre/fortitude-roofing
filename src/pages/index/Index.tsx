
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
    
    // Trigger animations immediately for all home page sections
    const animatedElements = document.querySelectorAll('.staggered-fade-in, .animate-on-scroll, .home-entrance-animation');
    animatedElements.forEach((element, index) => {
      // Add a slight delay to create a cascading effect
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 150); // 150ms delay between each element
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <div className="home-entrance-animation">
        <Hero />
      </div>
      <div className="home-entrance-animation">
        <CertifiedSection />
      </div>
      <div className="home-entrance-animation">
        <VideoSection />
      </div>
      <div className="home-entrance-animation">
        <Services />
      </div>
      <div className="home-entrance-animation">
        <Projects />
      </div>
      <div className="home-entrance-animation">
        <Testimonials />
      </div>
      <div className="home-entrance-animation">
        <Trust />
      </div>
      <div className="home-entrance-animation">
        <Contact />
      </div>
    </div>
  );
};

export default Index;

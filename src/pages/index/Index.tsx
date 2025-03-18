import Hero from "@/pages/index/components/Hero";
import CertifiedSection from "@/pages/index/components/CertifiedSection";
import VideoSection from "@/pages/index/components/VideoSection";
import Services from "@/pages/index/components/Services";
import Projects from "@/pages/index/components/Projects";
import Testimonials from "@/pages/index/components/Testimonials";
import Trust from "@/pages/index/components/Trust";
import Contact from "@/components/Contact";

/**
 * Index page
 * Shows the home page of the website
 */
const Index = () => {
  return (
    <div className="overflow-x-hidden">
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

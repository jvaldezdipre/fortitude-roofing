
import { useEffect } from "react";
import AboutHero from "@/pages/about/components/AboutHero";
import OurStory from "@/pages/about/components/OurStory";
import OurValues from "@/pages/about/components/OurValues";
import OurCharities from "@/pages/about/components/OurCharities";
import ScrollToTop from "@/components/ScrollToTop";

const About = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <AboutHero />
      <OurStory />
      <OurValues />
      <OurCharities />
    </div>
  );
};

export default About;

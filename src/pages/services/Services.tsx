
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ServiceHero from "./components/ServiceHero";
import ServicesList from "./components/ServicesList";
import ServiceProcess from "./components/ServiceProcess";
import ServiceGuarantee from "./components/ServiceGuarantee";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

const Services = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <ServiceHero />
      <ServicesList />
      <ServiceProcess />
      <ServiceGuarantee />
      <Contact />
    </div>
  );
};

export default Services;

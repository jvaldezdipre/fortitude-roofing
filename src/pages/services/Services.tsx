
import { ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import ServiceHero from "./components/ServiceHero";
import ServicesList from "./components/ServicesList";
import ServiceProcess from "./components/ServiceProcess";
import ServiceGuarantee from "./components/ServiceGuarantee";
import Contact from "@/components/Contact";

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <ServiceHero />
      <ServicesList />
      <ServiceProcess />
      <ServiceGuarantee />
      <Contact />
    </div>
  );
};

export default Services;

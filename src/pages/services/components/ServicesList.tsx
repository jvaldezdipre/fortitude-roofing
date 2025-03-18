
import { Building2, Shield, Home, Tool, CloudLightning, FileCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Standing Seam Metal Roof",
    description:
      "Premium standing seam metal roofing systems that offer superior durability, energy efficiency, and a sleek modern appearance for residential and commercial properties.",
    image: "/lovable-uploads/hero-img.jpeg",
  },
  {
    icon: Home,
    title: "Shingle Roof Replacement",
    description:
      "Complete replacement services for asphalt shingle roofs with high-quality materials, expert installation, and comprehensive warranties.",
    image: "/lovable-uploads/featured-image-roof.jpg",
  },
  {
    icon: Shield,
    title: "Fortified Roof Systems",
    description:
      "FORTIFIED Roof™ certified installations that exceed building codes and provide superior protection against severe weather and natural disasters.",
    image: "/lovable-uploads/FORTIFIED-Banner.jpg",
  },
  {
    icon: Tool,
    title: "Roof Repair & Maintenance",
    description:
      "Professional repair services for leaks, damaged shingles, flashing issues, and other common roofing problems to extend the life of your roof.",
    image: "/lovable-uploads/Shingle+Roof+Replacement.jpg",
  },
  {
    icon: CloudLightning,
    title: "Storm Damage Restoration",
    description:
      "Comprehensive storm damage assessment, emergency repairs, and complete restoration services, including assistance with insurance claims.",
    image: "/lovable-uploads/hero-img.jpeg",
  },
  {
    icon: FileCheck,
    title: "Roof Inspections & Certifications",
    description:
      "Thorough roof inspections to identify potential issues, assess roof condition, and provide documentation for real estate transactions or insurance purposes.",
    image: "/lovable-uploads/featured-image-roof.jpg",
  },
];

const ServicesList = () => {
  return (
    <section id="services-list" className="py-20 bg-roofing-lightgray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Professional Services
          </h2>
          <p className="text-roofing-darkgray max-w-2xl mx-auto">
            We offer a comprehensive range of high-quality roofing solutions to meet all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-lg relative min-h-[380px] border-0 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 w-full h-full">
                <div
                  className="absolute inset-0 bg-cover bg-center z-0 transform transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-black/50 z-10 group-hover:bg-black/60 transition-colors duration-300" />
              </div>

              <div className="relative z-20 h-full flex flex-col p-8 text-white">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-roofing-teal/20 text-white mb-6">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
                <div className="mt-auto pt-6">
                  <button className="text-white font-medium flex items-center hover:underline">
                    Learn More
                    <ArrowRight className="h-5 w-5 ml-1" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;

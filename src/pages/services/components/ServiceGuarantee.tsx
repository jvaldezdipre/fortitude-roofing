
import { Button } from "@/components/ui/button";
import { Shield, Award, ThumbsUp } from "lucide-react";

const guarantees = [
  {
    icon: Shield,
    title: "5-Year Workmanship Warranty",
    description: "We stand behind our craft with a comprehensive 5-year warranty on all workmanship."
  },
  {
    icon: Award,
    title: "Manufacturer Warranties",
    description: "As certified installers, we provide full manufacturer warranties on all materials."
  },
  {
    icon: ThumbsUp,
    title: "100% Satisfaction Guarantee",
    description: "We're not satisfied until you are, with a commitment to addressing any concerns promptly."
  }
];

const ServiceGuarantee = () => {
  return (
    <section className="py-20 bg-roofing-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/featured-image-roof.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Service Guarantee
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            We're committed to quality, reliability, and your complete satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-roofing-teal/20 text-roofing-teal mb-6">
                <guarantee.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{guarantee.title}</h3>
              <p className="text-white/70">{guarantee.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-roofing-teal hover:bg-roofing-teal/90 text-white px-8 tracking-wide"
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceGuarantee;

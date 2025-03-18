
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ServiceHero = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-roofing-charcoal/90 to-roofing-charcoal/70 z-10"></div>
        <img
          src="/lovable-uploads/featured-image-roof.jpg"
          alt="Professional roofing services"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 tracking-wide">
            Professional Roofing Services
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-8 tracking-wide">
            From complete roof installations to emergency repairs, our expert team delivers quality craftsmanship and exceptional results for both residential and commercial properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-roofing-teal hover:bg-roofing-teal/90 text-white px-8 tracking-wide"
            >
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 tracking-wide"
            >
              View Our Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;

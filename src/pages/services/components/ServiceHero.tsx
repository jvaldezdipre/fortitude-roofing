
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const ServiceHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
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
        <div 
          ref={heroRef} 
          className="max-w-4xl mx-auto text-center staggered-fade-in"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-8 tracking-wide">
            Professional Roofing Services
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto tracking-wide">
            From complete roof installations to emergency repairs, our expert team delivers quality craftsmanship and exceptional results for both residential and commercial properties.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-roofing-teal hover:bg-roofing-teal/90 text-white px-10 py-7 text-lg tracking-wide"
            >
              Get a Free Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 px-10 py-7 text-lg tracking-wide"
            >
              View Our Projects <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;

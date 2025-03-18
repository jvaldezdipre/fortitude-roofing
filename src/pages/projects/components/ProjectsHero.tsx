
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const ProjectsHero = () => {
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
    <section className="relative py-32 md:py-40 bg-roofing-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-roofing-charcoal/90 to-roofing-charcoal/70 z-10"></div>
        <img
          src="/lovable-uploads/featured-image-roof.jpg"
          alt="Roofing Projects"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={heroRef} className="max-w-4xl mx-auto text-center staggered-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-wide">
            Our Roofing Projects
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto tracking-wide">
            Explore our completed projects across the region. Click on the map markers to view details about each project.
          </p>
          <Button 
            className="bg-roofing-teal hover:bg-roofing-teal/90 text-white px-10 py-7 text-lg tracking-wide"
            onClick={() => {
              const mapSection = document.getElementById('projects-map');
              if (mapSection) {
                mapSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View Project Map <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;


import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsHero = () => {
  return (
    <div className="relative bg-roofing-charcoal py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/featured-image-roof.jpg')" }}
      ></div>
      <div className="container relative z-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Roofing Projects
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Explore our completed projects across the region. Click on the map markers to view details about each project.
          </p>
          <Button 
            className="bg-roofing-teal hover:bg-roofing-teal/90 text-white"
            onClick={() => {
              const mapSection = document.getElementById('projects-map');
              if (mapSection) {
                mapSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            View Project Map <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsHero;

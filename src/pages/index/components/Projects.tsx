
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Residential Roof Installation',
    location: 'Portland, OR',
    description: 'Complete tear-off and installation of a new architectural shingle roof system with improved ventilation.',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Residential', 'Installation', 'Shingles']
  },
  {
    id: 2,
    title: 'Commercial Building Roof Replacement',
    location: 'Seattle, WA',
    description: 'Full commercial roof replacement with energy-efficient materials, improving insulation and reducing heating costs.',
    image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Commercial', 'Replacement', 'Energy-Efficient']
  },
  {
    id: 3,
    title: 'Custom Metal Roof Installation',
    location: 'Denver, CO',
    description: 'Installation of a premium standing seam metal roof with custom color and snow guards for a mountain property.',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Residential', 'Metal Roof', 'Custom']
  },
  {
    id: 4,
    title: 'Storm Damage Repair',
    location: 'Austin, TX',
    description: 'Emergency repair after severe hail damage, including replacement of damaged sections and reinforcement.',
    image: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    tags: ['Residential', 'Repair', 'Emergency']
  }
];

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    setCurrentProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
          <p className="text-roofing-darkgray max-w-2xl mx-auto">
            Browse our portfolio of recent roofing projects that showcase our commitment to quality and craftsmanship.
          </p>
        </div>

        <div ref={sectionRef} className="animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-2">
                {projects[currentProject].title}
              </h3>
              <p className="text-roofing-teal font-medium mb-4">
                {projects[currentProject].location}
              </p>
              <p className="text-roofing-darkgray mb-6">
                {projects[currentProject].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {projects[currentProject].tags.map((tag, index) => (
                  <span key={index} className="bg-roofing-lightgray px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={prevProject}
                  className="rounded-full border-roofing-charcoal/20 hover:bg-roofing-teal hover:text-white hover:border-transparent"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={nextProject}
                  className="rounded-full border-roofing-charcoal/20 hover:bg-roofing-teal hover:text-white hover:border-transparent"
                >
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <span className="text-sm text-roofing-darkgray">
                  {currentProject + 1} of {projects.length}
                </span>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={projects[currentProject].image} 
                  alt={projects[currentProject].title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          {/* View All Projects Button */}
          <div className="mt-12">
            <Button 
              className="bg-roofing-teal hover:bg-roofing-teal/90 text-white"
              onClick={() => window.open('#', '_blank')}
            >
              View All Projects <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

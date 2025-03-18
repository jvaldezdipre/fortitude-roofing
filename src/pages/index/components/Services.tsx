
import { 
  Home, 
  Building2, 
  Hammer, 
  ShieldCheck, 
  Wrench, 
  Clock 
} from 'lucide-react';
import { useEffect, useRef } from 'react';

const services = [
  {
    icon: Home,
    title: 'Residential Roofing',
    description: 'Complete roofing solutions for homes of all sizes, from traditional asphalt shingles to modern metal roofing systems.'
  },
  {
    icon: Building2,
    title: 'Commercial Roofing',
    description: 'Specialized commercial roofing services designed for durability, energy efficiency, and minimal business disruption.'
  },
  {
    icon: Hammer,
    title: 'New Installations',
    description: 'Expert installation of new roofing systems with premium materials and superior craftsmanship.'
  },
  {
    icon: Wrench,
    title: 'Repairs & Maintenance',
    description: 'Prompt and reliable repair services to fix leaks, damage, and extend the life of your existing roof.'
  },
  {
    icon: ShieldCheck,
    title: 'Roof Inspections',
    description: 'Comprehensive inspections to identify potential issues before they become costly problems.'
  },
  {
    icon: Clock,
    title: 'Emergency Services',
    description: '24/7 emergency response for unexpected roof damage from storms, fallen trees, or other disasters.'
  }
];

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="services" className="py-20 bg-roofing-lightgray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Roofing Services</h2>
          <p className="text-roofing-darkgray max-w-2xl mx-auto">
            We offer a comprehensive range of professional roofing services tailored to meet the unique needs of each project.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-fade-in">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-roofing-darkgray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

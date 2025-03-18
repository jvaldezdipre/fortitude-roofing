
import { 
  Building2, 
  Shield, 
  Home
} from 'lucide-react';
import { useEffect, useRef } from 'react';

const services = [
  {
    icon: Building2,
    title: 'Standing Seam Metal Roof',
    description: 'Premium standing seam metal roofing systems that offer superior durability, energy efficiency, and a sleek modern appearance for residential and commercial properties.'
  },
  {
    icon: Home,
    title: 'Shingle Roof Replacement',
    description: 'Complete replacement services for asphalt shingle roofs with high-quality materials, expert installation, and comprehensive warranties.'
  },
  {
    icon: Shield,
    title: 'Fortified Roof Systems',
    description: 'FORTIFIED Roof™ certified installations that exceed building codes and provide superior protection against severe weather and natural disasters.'
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
            We specialize in high-quality roofing solutions designed to protect your property and increase its value.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-fade-in">
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

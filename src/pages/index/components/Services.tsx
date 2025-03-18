
import { 
  Building2, 
  Shield, 
  Home
} from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

const services = [
  {
    icon: Building2,
    title: 'Standing Seam Metal Roof',
    description: 'Premium standing seam metal roofing systems that offer superior durability, energy efficiency, and a sleek modern appearance for residential and commercial properties.',
    image: '/lovable-uploads/a76239ff-86f7-4e6c-b085-e96d3d4c24b8.png'
  },
  {
    icon: Home,
    title: 'Shingle Roof Replacement',
    description: 'Complete replacement services for asphalt shingle roofs with high-quality materials, expert installation, and comprehensive warranties.',
    image: '/lovable-uploads/83eefe0b-60d9-4d16-bca4-9173e0981fa5.jpg'
  },
  {
    icon: Shield,
    title: 'Fortified Roof Systems',
    description: 'FORTIFIED Roof™ certified installations that exceed building codes and provide superior protection against severe weather and natural disasters.',
    image: '/lovable-uploads/4c958005-65a7-4538-98ab-7734ea63df68.png'
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
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

export default Services;

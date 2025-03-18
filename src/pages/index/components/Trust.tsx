
import { useRef, useEffect } from 'react';
import { 
  Award, 
  ShieldCheck, 
  FileCheck, 
  Badge, 
  Users
} from 'lucide-react';

const Trust = () => {
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-roofing-darkgray max-w-2xl mx-auto">
            PeakRoof is committed to excellence in every aspect of our business, from safety and quality to customer service.
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-on-scroll">
          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-roofing-teal/10 text-roofing-teal">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fully Insured & Licensed</h3>
                <p className="text-roofing-darkgray">
                  We carry comprehensive liability insurance and all required licenses for your complete protection and peace of mind.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-roofing-teal/10 text-roofing-teal">
                  <Badge className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Industry Certifications</h3>
                <p className="text-roofing-darkgray">
                  Our team maintains certifications from leading manufacturers and industry organizations, ensuring the highest quality standards.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-roofing-teal/10 text-roofing-teal">
                  <Award className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Award-Winning Service</h3>
                <p className="text-roofing-darkgray">
                  Recognized for excellence with industry awards and consistently high ratings from satisfied customers.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-roofing-teal/10 text-roofing-teal">
                  <FileCheck className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Written Warranty</h3>
                <p className="text-roofing-darkgray">
                  We stand behind our work with comprehensive warranties on both materials and workmanship for your long-term satisfaction.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-roofing-teal/10 text-roofing-teal">
                  <Users className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                <p className="text-roofing-darkgray">
                  Our skilled professionals have decades of combined experience in all types of roofing projects and challenging conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-roofing-teal/10 text-roofing-teal">
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Safety Standards</h3>
                <p className="text-roofing-darkgray">
                  We maintain rigorous safety protocols that exceed industry standards to protect our team and your property.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-roofing-lightgray rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Commitment to Excellence</h3>
              <p className="text-roofing-darkgray mb-4">
                At PeakRoof, we believe that quality craftsmanship and exceptional service are the foundation of a successful roofing company. Our team is committed to delivering the highest standards in every project we undertake.
              </p>
              <p className="text-roofing-darkgray">
                From the initial consultation to the final inspection, we ensure clear communication, attention to detail, and a clean, safe work environment. Our goal is to exceed your expectations and provide a roofing solution that offers lasting protection and value for your property.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-roofing-teal mb-1">20+</div>
                <div className="text-sm text-roofing-darkgray">Years in Business</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-roofing-teal mb-1">50+</div>
                <div className="text-sm text-roofing-darkgray">Team Members</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-roofing-teal mb-1">1,500+</div>
                <div className="text-sm text-roofing-darkgray">Projects Completed</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-roofing-teal mb-1">98%</div>
                <div className="text-sm text-roofing-darkgray">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;

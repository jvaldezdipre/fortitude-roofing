
import { useRef, useEffect } from 'react';
import { 
  Award, 
  ShieldCheck, 
  FileCheck, 
  Badge, 
  Users,
  Heart,
  Percent,
  Building
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
                  <Building className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Over 60 Years Of Roofing Experience</h3>
                <p className="text-roofing-darkgray">
                  Our decades of experience in the roofing industry ensure that we have the expertise to handle any project with precision and skill.
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
                <h3 className="text-xl font-semibold mb-2">Over 400 5-Star Reviews</h3>
                <p className="text-roofing-darkgray">
                  Our satisfied customers have shared their positive experiences, reflecting our commitment to excellence and customer satisfaction.
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
                <h3 className="text-xl font-semibold mb-2">100% Satisfaction Guarantee</h3>
                <p className="text-roofing-darkgray">
                  We stand behind our work with a full satisfaction guarantee, ensuring your complete confidence in our services.
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
                <h3 className="text-xl font-semibold mb-2">Premier Quality Materials</h3>
                <p className="text-roofing-darkgray">
                  We only use the highest quality roofing materials, ensuring durability, performance, and long-lasting protection for your property.
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
                <h3 className="text-xl font-semibold mb-2">Local And Vested In Our Community</h3>
                <p className="text-roofing-darkgray">
                  As a local business, we're committed to serving and investing in our community, building relationships that extend beyond just business.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-roofing-teal/10 text-roofing-teal">
                  <Heart className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Supporting Autism Society Of NC</h3>
                <p className="text-roofing-darkgray">
                  A portion of all our proceeds goes to the Autism Society of North Carolina, supporting vital services and advocacy in our community.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-roofing-teal/10 text-roofing-teal">
                  <Percent className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Affordable Financing Options</h3>
                <p className="text-roofing-darkgray">
                  Financing available from as low as 2.99% for 60 months, making quality roofing services accessible for every budget.
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
                <h3 className="text-xl font-semibold mb-2">Fully Insured</h3>
                <p className="text-roofing-darkgray">
                  We carry comprehensive liability insurance for your complete protection and peace of mind throughout the entire roofing project.
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
                We promise to lead our industry through continuous improvement in employee development, installing exemplary products, and offering the best customer experience a Roofing Company can provide.
              </p>
              <p className="text-roofing-darkgray">
                At PeakRoof, we believe that our success begins with our dedicated team. We invest in ongoing training and certification for our staff, ensuring that every project benefits from the latest industry knowledge and techniques. This commitment to quality extends to every aspect of our service - from the materials we select to our installation procedures and customer communication.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-roofing-teal mb-1">60+</div>
                <div className="text-sm text-roofing-darkgray">Years Experience</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-roofing-teal mb-1">400+</div>
                <div className="text-sm text-roofing-darkgray">5-Star Reviews</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-roofing-teal mb-1">100%</div>
                <div className="text-sm text-roofing-darkgray">Satisfaction Guarantee</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-roofing-teal mb-1">2.99%</div>
                <div className="text-sm text-roofing-darkgray">Financing Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;

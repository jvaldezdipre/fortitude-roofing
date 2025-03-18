
import { useRef, useEffect } from "react";
import { Award, Users, Heart, Recycle, Shield, Zap } from "lucide-react";

const OurValues = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section className="py-20 bg-roofing-lightgray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-roofing-darkgray">
            The principles that guide everything we do
          </p>
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-fade-in"
        >
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 mx-auto">
              <Users className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Develop Leaders</h3>
            <p className="text-roofing-darkgray text-center mb-4">
              Everyone has a different path and purpose in life. It is our duty to develop our employees into their best version of themselves.
            </p>
            <ul className="text-sm text-roofing-darkgray list-disc pl-5 space-y-1">
              <li>We own our tasks, hold ourselves accountable, and admit mistakes</li>
              <li>We work as a team and value each other</li>
              <li>We lead with a positive, uplifting attitude</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 mx-auto">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Unmatched Customer Experience</h3>
            <p className="text-roofing-darkgray text-center mb-4">
              Customer experience is everything to us. Our promise is to differentiate through superior customer service and superior craftsmanship.
            </p>
            <ul className="text-sm text-roofing-darkgray list-disc pl-5 space-y-1">
              <li>We go the extra mile without being asked</li>
              <li>We do the right thing, even if it means operating at a loss</li>
              <li>We educate - we don't sell</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 mx-auto">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Impact Our Community</h3>
            <p className="text-roofing-darkgray text-center mb-4">
              Fortitude is more than just a roofing company. We will better our communities through the work we do, and we will look for ways to give back each & every day.
            </p>
            <ul className="text-sm text-roofing-darkgray list-disc pl-5 space-y-1">
              <li>Portions of job proceeds get donated regularly to charity</li>
              <li>We volunteer our time to community service</li>
              <li>We leave our community better than we find it</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 mx-auto">
              <Shield className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Quality & Integrity</h3>
            <p className="text-roofing-darkgray text-center">
              We never compromise on quality and always operate with complete transparency and honesty in every aspect of our business.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 mx-auto">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Innovation</h3>
            <p className="text-roofing-darkgray text-center">
              We continually seek to improve our methods and services by staying at the forefront of industry advancements and technologies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 mx-auto">
              <Recycle className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Sustainability</h3>
            <p className="text-roofing-darkgray text-center">
              We're committed to environmentally responsible practices, including proper disposal of old materials and offering energy-efficient roofing solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;

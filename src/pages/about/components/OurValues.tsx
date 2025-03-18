
import { useRef, useEffect } from "react";
import { Award, Users, Heart } from "lucide-react";

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
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 mx-auto">
              <Award className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Unmatched Customer Experience</h3>
            <p className="text-roofing-darkgray text-center mb-4">
              Customer experience is everything to us. Our promise is to differentiate through superior customer service and superior craftsmanship.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 mx-auto">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">Impact Our Community</h3>
            <p className="text-roofing-darkgray text-center mb-4">
              Fortitude is more than just a roofing company. We will better our communities through the work we do, and we will look for ways to give back each & every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;

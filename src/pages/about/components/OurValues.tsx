
import { useRef, useEffect } from "react";
import { Users, Heart, Star } from "lucide-react";

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
          className="grid grid-cols-1 gap-12 staggered-fade-in"
        >
          {/* Develop Leaders */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 mx-auto">
              <Users className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-center">Develop Leaders</h3>
            <p className="text-roofing-darkgray mb-6 text-center">
              Everyone has a different path and purpose in life. As such, it is our duty to develop our employees into their best version of themselves. Our goal is to put the right people in the right positions so that they utilize their natural talents and find success in their endeavors.
            </p>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-start">
                <div className="bg-roofing-teal/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-roofing-teal rounded-full"></div>
                </div>
                <p className="text-roofing-darkgray">We own our tasks, hold ourselves accountable, and admit mistakes.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-roofing-teal/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-roofing-teal rounded-full"></div>
                </div>
                <p className="text-roofing-darkgray">We work as a team and value each other.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-roofing-teal/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-roofing-teal rounded-full"></div>
                </div>
                <p className="text-roofing-darkgray">We lead with a positive, uplifting attitude at every minute of every day.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-roofing-teal/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-roofing-teal rounded-full"></div>
                </div>
                <p className="text-roofing-darkgray">We find a silver lining when faced with a challenge.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-roofing-teal/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-roofing-teal rounded-full"></div>
                </div>
                <p className="text-roofing-darkgray">We don't accept mediocrity.</p>
              </div>
            </div>
          </div>

          {/* Provide an Unmatched Customer Experience */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 mx-auto">
              <Star className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-center">Provide an Unmatched Customer Experience</h3>
            <p className="text-roofing-darkgray mb-6 text-center">
              Customer experience is everything to us. The roofing industry is crowded and customers have a slew of choices when vetting contractors. We don't take their decision to use us for granted and we will continue to earn their business at every customer touchpoint.
            </p>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-start">
                <div className="bg-roofing-teal/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-roofing-teal rounded-full"></div>
                </div>
                <p className="text-roofing-darkgray">We go the extra mile without being asked.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-roofing-teal/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-roofing-teal rounded-full"></div>
                </div>
                <p className="text-roofing-darkgray">We do the right thing, even if it means operating at a loss.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-roofing-teal/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-roofing-teal rounded-full"></div>
                </div>
                <p className="text-roofing-darkgray">If we can't do it right, we don't do it at all.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-roofing-teal/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-roofing-teal rounded-full"></div>
                </div>
                <p className="text-roofing-darkgray">We educate - we don't sell.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-roofing-teal/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-roofing-teal rounded-full"></div>
                </div>
                <p className="text-roofing-darkgray">We set proper expectations, and we deliver on our promises.</p>
              </div>
            </div>
          </div>

          {/* Impact our Community */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 mx-auto">
              <Heart className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-center">Impact our Community</h3>
            <p className="text-roofing-darkgray mb-6 text-center">
              We are more than just a roofing company. We will better our communities through the work we do, and we will look for ways to give back each & every day. Our service area is our backyard. This is where our children go to school.
            </p>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-start">
                <div className="bg-roofing-teal/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-roofing-teal rounded-full"></div>
                </div>
                <p className="text-roofing-darkgray">Portions of job proceeds get donated regularly to charity and community endeavors.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-roofing-teal/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-roofing-teal rounded-full"></div>
                </div>
                <p className="text-roofing-darkgray">We volunteer our time to community service.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-roofing-teal/10 p-2 rounded-full mr-3 mt-1">
                  <div className="w-2 h-2 bg-roofing-teal rounded-full"></div>
                </div>
                <p className="text-roofing-darkgray">Our service area is our backyard. This is where our children go to school. It is our responsibility to leave it better than we find it.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;

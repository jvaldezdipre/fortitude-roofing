
import { useRef, useEffect } from "react";
import { Users, Award, Heart, CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

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
    <section className="py-20 bg-roofing-lightgray overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
          <p className="text-roofing-darkgray">
            The principles that guide everything we do
          </p>
        </div>

        <div ref={sectionRef} className="space-y-16 staggered-fade-in">
          {/* Develop Leaders Section */}
          <Card className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="flex flex-col lg:flex-row">
              {/* Left side - Paragraph */}
              <div className="p-8 lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 lg:hidden">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 lg:hidden">Develop Leaders</h3>
                <p className="text-roofing-darkgray mb-6">
                  Everyone has a different path and purpose in life. Employees have a choice of where they work. As such, it is our duty to develop our employees into their best version of themselves. Our goal is to put the right people in the right positions so that they utilize their natural talents and find success in their endeavors. We will invest in them with the intention of developing them into the person they desire to be.
                </p>
              </div>
              
              {/* Right side - Header and Bullets */}
              <div className="bg-roofing-lightgray p-8 lg:w-1/2 flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mr-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="hidden lg:block text-2xl font-semibold">Develop Leaders</h3>
                </div>
                <Separator className="mb-6 hidden lg:block" />
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-roofing-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>We own our tasks, hold ourselves accountable, and admit mistakes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-roofing-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>We work as a team and value each other</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-roofing-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>We lead with a positive, uplifting attitude at every minute of every day</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-roofing-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>We find a silver lining when faced with a challenge</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-roofing-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>We don't accept mediocrity</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Unmatched Customer Experience Section */}
          <Card className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="flex flex-col lg:flex-row">
              {/* Left side - Paragraph */}
              <div className="p-8 lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 lg:hidden">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 lg:hidden">Provide an Unmatched Customer Experience</h3>
                <p className="text-roofing-darkgray mb-6">
                  Customer experience is everything to us. The roofing industry is crowded and customers have a slew of choices when vetting contractors. We don't take their decision to use Fortitude Roofing for granted and we will continue to earn their business at every customer touchpoint. Our promise is to differentiate through superior customer service and superior craftsmanship.
                </p>
              </div>
              
              {/* Right side - Header and Bullets */}
              <div className="bg-roofing-lightgray p-8 lg:w-1/2 flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mr-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h3 className="hidden lg:block text-2xl font-semibold">Provide an Unmatched Customer Experience</h3>
                </div>
                <Separator className="mb-6 hidden lg:block" />
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-roofing-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>We go the extra mile without being asked</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-roofing-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>We do the right thing, even if it means operating at a loss</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-roofing-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>If we can't do it right, we don't do it at all</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-roofing-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>We educate - we don't sell</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-roofing-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>We set proper expectations, and we deliver on our promises</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Impact Our Community Section */}
          <Card className="overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="flex flex-col lg:flex-row">
              {/* Left side - Paragraph */}
              <div className="p-8 lg:w-1/2 flex flex-col justify-center">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mb-6 lg:hidden">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 lg:hidden">Impact Our Community</h3>
                <p className="text-roofing-darkgray mb-6">
                  Fortitude is more than just a roofing company. We will better our communities through the work we do, and we will look for ways to give back each & every day. Our service area is our backyard. This is where our children go to school. It is our responsibility to leave it better than we find it.
                </p>
              </div>
              
              {/* Right side - Header and Bullets */}
              <div className="bg-roofing-lightgray p-8 lg:w-1/2 flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-roofing-teal/10 text-roofing-teal mr-4">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="hidden lg:block text-2xl font-semibold">Impact Our Community</h3>
                </div>
                <Separator className="mb-6 hidden lg:block" />
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-roofing-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>Portions of job proceeds get donated regularly to charity and community endeavors</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-roofing-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>We volunteer our time to community service</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurValues;

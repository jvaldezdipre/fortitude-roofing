
import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";

const charities = [
  {
    name: "North Carolina Sheriff's Association",
    description: "The North Carolina Sheriffs' Association is the statewide organization of our state's 100 Sheriffs. Through their Association, the Sheriffs work to strengthen the professional law enforcement services their offices provide to the people of North Carolina.",
    image: "https://images.unsplash.com/photo-1608159477202-8a0e27f807b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Autism Society of North Carolina",
    description: "The Autism Society of North Carolina improves the lives of individuals with autism, supports their families, and educates communities.",
    image: "https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Alzheimer's Association of Eastern North Carolina",
    description: "The Alzheimer's Association leads the way to end Alzheimer's and all other dementia — by accelerating global research, driving risk reduction and early detection, and maximizing quality care and support.",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

const OurCharities = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Charities</h2>
          <p className="text-roofing-darkgray">
            Fortitude Roofing is on a mission to be MORE than just another Roofing Company. 
            We feel it's imperative to impact our communities. As such, we have decided to 
            partner with the following charities. The more we grow, the more we will give.
          </p>
        </div>

        <div ref={sectionRef} className="space-y-16 staggered-fade-in">
          {/* First charity - text left, image right */}
          <div className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
            <div className="lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-4">{charities[0].name}</h3>
              <p className="text-roofing-darkgray mb-6">
                {charities[0].description}
              </p>
              <div>
                <Button variant="outline" className="border-roofing-teal text-roofing-teal hover:bg-roofing-teal hover:text-white">
                  Donate
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={charities[0].image} 
                  alt={charities[0].name} 
                  className="w-full h-72 object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Second charity - image left, text right */}
          <div className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
            <div className="lg:w-1/2 order-1">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={charities[1].image} 
                  alt={charities[1].name} 
                  className="w-full h-72 object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center order-2">
              <h3 className="text-2xl font-semibold mb-4">{charities[1].name}</h3>
              <p className="text-roofing-darkgray mb-6">
                {charities[1].description}
              </p>
              <div>
                <Button variant="outline" className="border-roofing-teal text-roofing-teal hover:bg-roofing-teal hover:text-white">
                  Donate
                </Button>
              </div>
            </div>
          </div>

          {/* Third charity - text left, image right */}
          <div className="flex flex-col lg:flex-row items-center gap-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
            <div className="lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-2xl font-semibold mb-4">{charities[2].name}</h3>
              <p className="text-roofing-darkgray mb-6">
                {charities[2].description}
              </p>
              <div>
                <Button variant="outline" className="border-roofing-teal text-roofing-teal hover:bg-roofing-teal hover:text-white">
                  Donate
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={charities[2].image} 
                  alt={charities[2].name} 
                  className="w-full h-72 object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCharities;

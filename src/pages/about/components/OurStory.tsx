
import { useRef, useEffect } from "react";

const OurStory = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-roofing-darkgray">
            How we became the leading roofing experts in the region
          </p>
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll"
        >
          <div>
            <div className="relative">
              <img
                src="/lovable-uploads/featured-image-roof.jpg"
                alt="PeakRoof team at work"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-roofing-teal text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">Est. 2003</p>
                <p>Providing Quality Service for 20+ Years</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              From Humble Beginnings to Industry Leadership
            </h3>
            <p className="text-roofing-darkgray mb-6">
              Founded in 2003 by the Johnson family, PeakRoof began as a small residential roofing company with just three employees. Our dedication to quality craftsmanship and exceptional customer service quickly earned us a reputation as the most reliable roofing contractor in the area.
            </p>
            <p className="text-roofing-darkgray mb-6">
              As our reputation grew, so did our team and capabilities. Today, we're proud to be a full-service roofing company with over 50 skilled professionals serving both residential and commercial clients throughout the region.
            </p>
            <p className="text-roofing-darkgray">
              Despite our growth, we've never lost sight of our founding principles: quality workmanship, honest business practices, and putting our customers first. These values continue to guide us as we look toward the future.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <h4 className="text-xl font-semibold mb-3">Our Beginnings</h4>
            <p className="text-roofing-darkgray">
              Started as a family business in 2003 with a focus on residential roofing repair and maintenance.
            </p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <h4 className="text-xl font-semibold mb-3">Growth Years</h4>
            <p className="text-roofing-darkgray">
              Expanded services to include commercial roofing and specialized in storm damage restoration from 2010-2015.
            </p>
          </div>
          <div className="p-6 border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
            <h4 className="text-xl font-semibold mb-3">Today</h4>
            <p className="text-roofing-darkgray">
              A comprehensive roofing company with expert teams dedicated to both residential and commercial projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;


import { useEffect, useRef } from "react";

const AboutHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="relative pt-20 pb-24 bg-roofing-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/lovable-uploads/featured-image-roof.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-roofing-charcoal/90 to-roofing-charcoal" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={heroRef} className="max-w-3xl mx-auto text-center staggered-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            About PeakRoof
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            A team of dedicated professionals committed to excellence in roofing since 2003.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center bg-white/10 px-5 py-3 rounded-lg">
              <span className="text-3xl font-bold text-roofing-teal mr-2">60+</span>
              <span className="text-white/80">Years of Experience</span>
            </div>
            <div className="flex items-center bg-white/10 px-5 py-3 rounded-lg">
              <span className="text-3xl font-bold text-roofing-teal mr-2">400+</span>
              <span className="text-white/80">Projects Completed</span>
            </div>
            <div className="flex items-center bg-white/10 px-5 py-3 rounded-lg">
              <span className="text-3xl font-bold text-roofing-teal mr-2">100%</span>
              <span className="text-white/80">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

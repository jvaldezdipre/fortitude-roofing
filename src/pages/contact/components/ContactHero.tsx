
import { useEffect, useRef } from "react";

const ContactHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = heroRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="bg-roofing-charcoal text-white py-32 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-roofing-charcoal z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/lovable-uploads/featured-image-roof.jpg')" }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div
          ref={heroRef}
          className="text-center max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto">
            Have questions or ready to get started? Reach out to our team for a free consultation and estimate.
          </p>
          <div className="w-24 h-1.5 bg-roofing-teal mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;

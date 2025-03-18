
import { useEffect, useRef } from "react";

const ContactHero = () => {
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
    <section className="relative pt-48 pb-32 bg-roofing-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('/lovable-uploads/featured-image-roof.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-roofing-charcoal/90 to-roofing-charcoal" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10 mt-12">
        <div ref={heroRef} className="max-w-4xl mx-auto text-center staggered-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-wide">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto tracking-wide">
            Have questions or ready to get started? Reach out to our team for a free consultation and estimate.
          </p>
          <div className="w-24 h-1.5 bg-roofing-teal mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

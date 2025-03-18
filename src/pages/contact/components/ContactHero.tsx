
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
    <div className="bg-roofing-charcoal text-white py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          ref={heroRef}
          className="text-center max-w-3xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Have questions or ready to get started? Reach out to our team for a free consultation and estimate.
          </p>
          <div className="w-20 h-1 bg-roofing-teal mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;


import { useEffect, useRef } from "react";

const ReviewsHero = () => {
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
    <section className="relative py-32 md:py-40 bg-roofing-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-roofing-charcoal/90 to-roofing-charcoal/70 z-10"></div>
        <img
          src="/lovable-uploads/featured-image-roof.jpg"
          alt="Customer Reviews"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div ref={heroRef} className="max-w-4xl mx-auto text-center staggered-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-wide">
            Our Customer Reviews
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto tracking-wide">
            Don't just take our word for it. See what our satisfied customers have to say about our roofing services.
          </p>
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className="w-8 h-8 text-roofing-teal fill-current" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold">4.9/5</span>
            <span className="text-white/80 text-lg">based on 150+ reviews</span>
          </div>
          <div className="w-24 h-1.5 bg-roofing-teal mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsHero;

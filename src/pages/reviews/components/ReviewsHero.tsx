
import { useEffect, useRef } from "react";

const ReviewsHero = () => {
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
    <div className="bg-roofing-charcoal text-white py-32 md:py-40">
      <div className="container mx-auto px-4">
        <div
          ref={heroRef}
          className="text-center max-w-4xl mx-auto opacity-0 translate-y-10 transition-all duration-1000 ease-out"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            Our Customer Reviews
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
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
            <span className="text-gray-300 text-lg">based on 150+ reviews</span>
          </div>
          <div className="w-24 h-1.5 bg-roofing-teal mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsHero;

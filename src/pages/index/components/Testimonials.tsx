import { useRef, useEffect } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Martinez",
    role: "Homeowner",
    quote:
      "PeakRoof transformed our home with a beautiful new roof. The team was professional, efficient, and cleaned up thoroughly after the job. Couldn't be happier with the results!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Business Owner",
    quote:
      "As a business owner, I needed a roofing company that could work around our schedule. PeakRoof did just that, completing our commercial roof replacement with minimal disruption to our operations.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Property Manager",
    quote:
      "We've used PeakRoof for multiple properties in our management portfolio. Their consistent quality, fair pricing, and attention to detail make them our go-to roofing contractor.",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
  },
];

const Testimonials = () => {
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
    <section id="testimonials" className="py-20 bg-roofing-charcoal text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied customers
            about their experience with PeakRoof.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-fade-in"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-lg relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-roofing-teal/20" />

              <div className="flex items-center mb-4">
                <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-white/60 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 mr-1 ${
                      i < testimonial.rating
                        ? "text-roofing-teal fill-roofing-teal"
                        : "text-white/20"
                    }`}
                  />
                ))}
              </div>

              <p className="text-white/80">{testimonial.quote}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl font-medium mb-6">
            Our customers have rated us:
          </p>
          <div className="flex items-center justify-center mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-8 w-8 mr-2 text-roofing-teal fill-roofing-teal"
                />
              ))}
            </div>
            <span className="text-3xl font-bold ml-4">5.0</span>
          </div>
          <p className="text-white/80">Based on 150+ verified reviews</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

// Featured testimonials for the carousel
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
  {
    id: 4,
    name: "Robert Davis",
    role: "Homeowner",
    quote:
      "After a severe storm damaged our roof, PeakRoof came quickly to assess the damage and provided a detailed quote. Their team was professional and completed the repairs ahead of schedule. Excellent service!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Testimonials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our customers have to say about their experience with us.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <Card className="h-full border border-gray-200 shadow-sm">
                  <CardContent className="p-6 flex flex-col h-full">
                    <Quote className="h-8 w-8 text-roofing-teal opacity-20 mb-4" />
                    <p className="text-gray-700 flex-grow mb-4">{testimonial.quote}</p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-500 text-sm">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={14}
                              className={`h-4 w-4 mr-1 ${
                                i < testimonial.rating
                                  ? "text-roofing-teal fill-roofing-teal"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="static transform-none" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

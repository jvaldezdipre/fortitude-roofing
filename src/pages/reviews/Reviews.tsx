
import { useEffect } from "react";
import ReviewsHero from "./components/ReviewsHero";
import ReviewsList from "./components/ReviewsList";
import TestimonialCarousel from "./components/TestimonialCarousel";

const Reviews = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ReviewsHero />
      <TestimonialCarousel />
      <ReviewsList />
    </div>
  );
};

export default Reviews;

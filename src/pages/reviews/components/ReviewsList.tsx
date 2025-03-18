
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";
import ReviewsFilter from "./ReviewsFilter";

type ReviewSource = "all" | "google" | "facebook" | "site";

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  source: "google" | "facebook" | "site";
  avatarUrl?: string;
}

// Sample reviews data - this would be replaced with API data
const sampleReviews: Review[] = [
  {
    id: 1,
    name: "Jennifer Martinez",
    date: "2023-08-15",
    rating: 5,
    comment: "PeakRoof transformed our home with a beautiful new roof. The team was professional, efficient, and cleaned up thoroughly after the job. Couldn't be happier with the results!",
    source: "google",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    name: "Michael Thompson",
    date: "2023-07-22",
    rating: 5,
    comment: "As a business owner, I needed a roofing company that could work around our schedule. PeakRoof did just that, completing our commercial roof replacement with minimal disruption to our operations.",
    source: "facebook",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    date: "2023-09-05",
    rating: 4,
    comment: "We've used PeakRoof for multiple properties in our management portfolio. Their consistent quality, fair pricing, and attention to detail make them our go-to roofing contractor.",
    source: "site",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
  },
  {
    id: 4,
    name: "Robert Davis",
    date: "2023-06-18",
    rating: 5,
    comment: "After a severe storm damaged our roof, PeakRoof came quickly to assess the damage and provided a detailed quote. Their team was professional and completed the repairs ahead of schedule. Excellent service!",
    source: "google",
  },
  {
    id: 5,
    name: "Emily Wilson",
    date: "2023-08-30",
    rating: 5,
    comment: "We had our roof replaced last month and the experience was fantastic from start to finish. The crew was respectful of our property, worked efficiently, and left everything spotless. Highly recommend!",
    source: "facebook",
  },
  {
    id: 6,
    name: "Daniel Brown",
    date: "2023-07-10",
    rating: 4,
    comment: "Good quality work at a fair price. The team was knowledgeable and answered all my questions. Only reason for 4 stars instead of 5 was a slight delay in starting the project.",
    source: "site",
  },
];

const ReviewsList = () => {
  const [currentFilter, setCurrentFilter] = useState<ReviewSource>("all");
  
  const filteredReviews = sampleReviews.filter(review => 
    currentFilter === "all" || review.source === currentFilter
  );

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const getSourceIcon = (source: string) => {
    switch(source) {
      case 'google':
        return <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">Google</span>;
      case 'facebook':
        return <span className="text-sm px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">Facebook</span>;
      case 'site':
        return <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">Website</span>;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Are Saying
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read honest reviews from our customers about their experience with our roofing services.
          </p>
        </div>

        <ReviewsFilter onFilterChange={setCurrentFilter} currentFilter={currentFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="h-full">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <div className="mr-3">
                      {review.avatarUrl ? (
                        <img 
                          src={review.avatarUrl} 
                          alt={review.name} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-roofing-teal text-white flex items-center justify-center text-lg font-semibold">
                          {review.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium">{review.name}</h3>
                      <p className="text-sm text-gray-500">{formatDate(review.date)}</p>
                    </div>
                  </div>
                  {getSourceIcon(review.source)}
                </div>
                <div className="flex mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < review.rating ? "text-roofing-teal fill-roofing-teal" : "text-gray-300"}
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Leave us a review on Google or Facebook
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://g.page/r/your-google-review-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-white border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.8055 10.0415H12V14.0415H17.6515C17.2571 15.9813 15.9291 17.2545 14 17.8951V20.8951H17.3999C19.3599 19.1396 20.4999 16.7701 20.4999 14.0415C20.4999 12.7113 20.4087 11.8691 19.9144 10.8168L21.8055 10.0415Z" fill="#4285F4"/>
                <path d="M5.38383 14.3684C5.12383 13.6684 4.98828 12.918 4.98828 12.1445C4.98828 11.3711 5.12383 10.6207 5.38383 9.92066L5.38106 9.91723L2.19044 7.45935L2.14045 7.58069C1.41638 9.43126 1 11.4557 1 12.5C1 13.5443 1.41638 15.5687 2.14045 17.4193L5.38383 14.3684Z" fill="#FBBC05"/>
                <path d="M12.0025 5.54834C13.6185 5.54834 14.9613 6.14328 15.9183 7.02631L18.9272 4.08C16.9591 2.27 14.6345 1.09091 12.0025 1.09091C8.09641 1.09091 4.70987 3.4664 2.81641 7.06728L6.06092 9.86637C6.98454 7.37003 9.29905 5.54834 12.0025 5.54834Z" fill="#EA4335"/>
                <path d="M12.0025 21.9091C14.6345 21.9091 16.9591 20.73 18.9272 18.92L15.9183 15.9736C14.9613 16.8567 13.6185 17.4517 12.0025 17.4517C9.31729 17.4517 7.01563 15.6584 6.07977 13.1976L2.8169 15.9693C4.71121 19.5775 8.09641 21.9091 12.0025 21.9091Z" fill="#34A853"/>
              </svg>
              Google Review
            </a>
            <a 
              href="https://facebook.com/your-page/reviews" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 bg-white border border-gray-300 rounded-lg flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#1877F2"/>
                <path d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.7359 23.9501 11.3621 24 12 24C12.6379 24 13.2641 23.9501 13.875 23.8542V15.4688H16.6711Z" fill="white"/>
              </svg>
              Facebook Review
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsList;

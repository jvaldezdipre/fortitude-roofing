
import { useRef, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Award } from "lucide-react";

const OurStory = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-roofing-darkgray">
            How we became the leading roofing experts in the region
          </p>
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-on-scroll"
        >
          <div>
            <div className="relative">
              <img
                src="/lovable-uploads/featured-image-roof.jpg"
                alt="PeakRoof team at work"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-roofing-teal text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">Est. 2003</p>
                <p>Providing Quality Service for 20+ Years</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              From Humble Beginnings to Industry Leadership
            </h3>
            <p className="text-roofing-darkgray mb-6">
              Founded in 2003 by the Johnson family, PeakRoof began as a small residential roofing company with just three employees. Our dedication to quality craftsmanship and exceptional customer service quickly earned us a reputation as the most reliable roofing contractor in the area.
            </p>
            <p className="text-roofing-darkgray mb-6">
              As our reputation grew, so did our team and capabilities. Today, we're proud to be a full-service roofing company with over 50 skilled professionals serving both residential and commercial clients throughout the region.
            </p>
            <p className="text-roofing-darkgray">
              Despite our growth, we've never lost sight of our founding principles: quality workmanship, honest business practices, and putting our customers first. These values continue to guide us as we look toward the future.
            </p>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/FORTIFIED-Banner.jpg" 
                alt="FORTIFIED Certification" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <CardHeader className="flex flex-row items-center gap-2">
              <Award className="text-roofing-teal" />
              <h4 className="text-xl font-semibold">FORTIFIED Certified</h4>
            </CardHeader>
            <CardContent>
              <p className="text-roofing-darkgray">
                Our FORTIFIED certification ensures we build roofs that meet the highest standards for weather resistance and durability.
              </p>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              Certified since 2010
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/83eefe0b-60d9-4d16-bca4-9173e0981fa5.jpg" 
                alt="GAF Master Elite Certification" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <CardHeader className="flex flex-row items-center gap-2">
              <Award className="text-roofing-teal" />
              <h4 className="text-xl font-semibold">GAF Master Elite</h4>
            </CardHeader>
            <CardContent>
              <p className="text-roofing-darkgray">
                As GAF Master Elite contractors, we represent the top 2% of roofing contractors nationwide for quality and expertise.
              </p>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              Awarded in 2015
            </CardFooter>
          </Card>
          
          <Card className="overflow-hidden transition-all hover:shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="/lovable-uploads/Shingle+Roof+Replacement.jpg" 
                alt="Owens Corning Platinum Certification" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <CardHeader className="flex flex-row items-center gap-2">
              <Award className="text-roofing-teal" />
              <h4 className="text-xl font-semibold">Owens Corning Platinum</h4>
            </CardHeader>
            <CardContent>
              <p className="text-roofing-darkgray">
                Our Owens Corning Platinum Preferred status means we can offer the industry's best warranties and highest quality materials.
              </p>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              Platinum status since 2018
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

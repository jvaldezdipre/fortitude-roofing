
import { Button } from "@/components/ui/button";
import { ArrowRight, User, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, useRef } from "react";

/**
 * Hero component
 * Shows the hero section of the home page
 */
const Hero = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make the hero visible immediately on mount
    if (heroRef.current) {
      heroRef.current.classList.add('visible');
    }
    
    // Add animation observer for scrolling behavior
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would submit the form data to your backend here
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pb-12 md:pb-0 hero-section animate-fade-in">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-roofing-charcoal/90 to-roofing-charcoal/70 z-10"></div>
        <img
          src="/lovable-uploads/Shingle+Roof+Replacement.jpg"
          alt="Aerial view of modern white roof with pool"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Main Hero Content */}
          <div className="mt-16 md:mt-8 lg:mt-0 animate-[fade-in_0.6s_ease-out,slide-in-right_0.5s_ease-out]" ref={heroRef}>
            <div className="staggered-fade-in visible">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight mb-4 tracking-wide">
                Quality Roofing Solutions You Can Trust
              </h1>
              <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl tracking-wide">
                With over 20 years of experience, we deliver exceptional roofing
                services for residential and commercial properties across the
                region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">
                <Button
                  size="lg"
                  className="bg-roofing-teal hover:bg-roofing-teal/90 text-white px-8 tracking-wide"
                >
                  Get a Free Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10 tracking-wide"
                >
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 mb-8 md:mb-0">
                <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-3 py-3 rounded-md">
                  <span className="text-[#D3E4FD] font-bold text-2xl md:text-3xl tracking-wide">
                    20+
                  </span>
                  <span className="text-white text-xs md:text-sm text-center tracking-wide">
                    Years Experience
                  </span>
                </div>
                <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-3 py-3 rounded-md">
                  <span className="text-[#D3E4FD] font-bold text-2xl md:text-3xl tracking-wide">
                    1,500+
                  </span>
                  <span className="text-white text-xs md:text-sm text-center tracking-wide">
                    Projects Completed
                  </span>
                </div>
                <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-3 py-3 rounded-md">
                  <span className="text-[#D3E4FD] font-bold text-2xl md:text-3xl tracking-wide">
                    100%
                  </span>
                  <span className="text-white text-xs md:text-sm text-center tracking-wide">
                    Satisfaction
                  </span>
                </div>
                <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-3 py-3 rounded-md">
                  <span className="text-[#D3E4FD] font-bold text-2xl md:text-3xl tracking-wide">
                    5-Year
                  </span>
                  <span className="text-white text-xs md:text-sm text-center tracking-wide">
                    Warranty
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-5 md:p-6 rounded-lg border border-white/20 max-w-md mx-auto lg:ml-auto w-full mt-8 md:mt-12 lg:mt-0 animate-[fade-in_0.8s_ease-out,scale-in_0.6s_ease-out]">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-wide">
              Request a Free Quote
            </h2>
            {formSubmitted ? (
              <div className="bg-roofing-teal/20 border border-roofing-teal text-white p-4 rounded-md mb-4">
                <p className="font-medium tracking-wide">
                  Thanks for your request!
                </p>
                <p className="text-sm mt-1 tracking-wide">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            ) : null}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 h-4 w-4" />
                  <Input
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-roofing-teal tracking-wide"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 h-4 w-4" />
                  <Input
                    type="email"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-roofing-teal tracking-wide"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 h-4 w-4" />
                  <Input
                    type="tel"
                    className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-roofing-teal tracking-wide"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
              <div>
                <Textarea
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-roofing-teal tracking-wide"
                  placeholder="Tell us about your project..."
                  rows={4}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-roofing-teal hover:bg-roofing-teal/90 text-white tracking-wide"
              >
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden py-16 lg:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-roofing-charcoal/90 to-roofing-charcoal/70 z-10"></div>
        <img 
          src="/lovable-uploads/c104633a-88cc-4061-b41e-60e84bb24f63.png" 
          alt="Aerial view of modern white roof with pool" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-4">
            Quality Roofing Solutions You Can Trust
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            With over 20 years of experience, we deliver exceptional roofing services 
            for residential and commercial properties across the region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-roofing-teal hover:bg-roofing-teal/90 text-white px-8">
              Get a Free Quote
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Our Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-md">
              <span className="text-roofing-teal font-bold text-3xl">20+</span>
              <span className="text-white text-sm">Years Experience</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-md">
              <span className="text-roofing-teal font-bold text-3xl">1,500+</span>
              <span className="text-white text-sm">Projects Completed</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-md">
              <span className="text-roofing-teal font-bold text-3xl">100%</span>
              <span className="text-white text-sm">Satisfaction</span>
            </div>
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-md">
              <span className="text-roofing-teal font-bold text-3xl">5-Year</span>
              <span className="text-white text-sm">Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

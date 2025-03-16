
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { ExternalLink } from 'lucide-react';

const VideoSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-roofing-charcoal mb-6 uppercase tracking-wide">
              Eastern North Carolina's Most Trusted Roofing Contractor
            </h2>
            
            <p className="text-roofing-darkgray mb-6 leading-relaxed">
              Fortitude Roofing services the coastal communities of TopSail Beach, Emerald Isle, Morehead City, & 
              Atlantic Beach, North Carolina. We're on a mission to give back to our communities. A portion of all 
              proceeds are donated to <a href="#" className="text-roofing-teal hover:underline">charities</a> we're passionate about.
            </p>
            
            <p className="text-roofing-darkgray mb-6 leading-relaxed">
              The <span className="font-bold">MORE</span> we grow the <span className="font-bold">MORE</span> we give. 
              Fortitude Roofing strives to educate the homeowners we work with on every aspect of their roof, in order to 
              provide an unmatched customer experience.
            </p>
            
            <Button className="bg-roofing-teal hover:bg-roofing-teal/90 text-white mt-2">
              Learn More <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Video Section */}
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/2mVJOFMHbFQ" 
              title="Roofing Contractor Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

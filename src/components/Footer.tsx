
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-roofing-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">PeakRoof</h3>
            <p className="text-white/70 mb-4">
              Professional roofing services for residential and commercial properties. Quality workmanship and exceptional customer service since 2003.
            </p>
            <div className="flex items-center">
              <span className="text-white/70 text-sm">BBB Accredited Business</span>
              <span className="mx-2 text-white/30">•</span>
              <span className="text-white/70 text-sm">A+ Rating</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/70 hover:text-roofing-teal transition-colors">Residential Roofing</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-roofing-teal transition-colors">Commercial Roofing</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-roofing-teal transition-colors">Roof Repairs</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-roofing-teal transition-colors">New Installations</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-roofing-teal transition-colors">Roof Inspections</a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-roofing-teal transition-colors">Emergency Services</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/70 hover:text-roofing-teal transition-colors">About Us</a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-roofing-teal transition-colors">Our Projects</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-roofing-teal transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-roofing-teal transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-roofing-teal transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-roofing-teal transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                1234 Roofing Avenue
              </li>
              <li className="text-white/70">
                Portland, OR 97205
              </li>
              <li>
                <a href="tel:+18005551234" className="text-white/70 hover:text-roofing-teal transition-colors">(800) 555-1234</a>
              </li>
              <li>
                <a href="mailto:info@peakroof.com" className="text-white/70 hover:text-roofing-teal transition-colors">info@peakroof.com</a>
              </li>
              <li className="text-white/70">
                Monday - Friday: 8:00 AM - 6:00 PM
              </li>
              <li className="text-white/70">
                Saturday: 9:00 AM - 2:00 PM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            © 2025 PeakRoof. All rights reserved.
          </div>
          <button 
            onClick={scrollToTop}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-roofing-teal/10 text-roofing-teal hover:bg-roofing-teal hover:text-white transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

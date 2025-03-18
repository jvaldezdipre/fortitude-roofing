
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/fc68ab70-f495-400c-9e90-5e99d06d73b1.png" 
                alt="Fortitude Roofing Company" 
                className={`h-16 transition-all duration-300 ${
                  isScrolled 
                    ? 'opacity-100 brightness-100 contrast-100' 
                    : 'opacity-90 brightness-0 invert contrast-200'
                }`}
              />
            </Link>
          </div>

          {/* Desktop Navigation - Only visible on large screens (lg) */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`font-medium transition-colors ${isScrolled ? 'text-roofing-charcoal hover:text-roofing-teal' : 'text-white hover:text-roofing-teal'}`}>Home</Link>
            <Link to="/services" className={`font-medium transition-colors ${isScrolled ? 'text-roofing-charcoal hover:text-roofing-teal' : 'text-white hover:text-roofing-teal'}`}>Services</Link>
            <Link to="/reviews" className={`font-medium transition-colors ${isScrolled ? 'text-roofing-charcoal hover:text-roofing-teal' : 'text-white hover:text-roofing-teal'}`}>Reviews</Link>
            <Link to="/about" className={`font-medium transition-colors ${isScrolled ? 'text-roofing-charcoal hover:text-roofing-teal' : 'text-white hover:text-roofing-teal'}`}>About</Link>
            <Link to="/charities" className={`font-medium transition-colors ${isScrolled ? 'text-roofing-charcoal hover:text-roofing-teal' : 'text-white hover:text-roofing-teal'}`}>Charities</Link>
            <Link to="/contact" className={`font-medium transition-colors ${isScrolled ? 'text-roofing-charcoal hover:text-roofing-teal' : 'text-white hover:text-roofing-teal'}`}>Contact</Link>
          </nav>

          {/* Contact Button - Only visible on large screens (lg) */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+18005551234" className={`flex items-center ${isScrolled ? 'text-roofing-charcoal' : 'text-white'}`}>
              <Phone className="h-4 w-4 mr-2" />
              <span className="font-medium">1-800-555-1234</span>
            </a>
            <Button variant="default" className="bg-roofing-teal hover:bg-roofing-teal/90 text-white">
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile/Tablet Menu Button - Visible on all screens below lg breakpoint */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-roofing-charcoal' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu - Visible on all screens below lg breakpoint when menu is open */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
            <div className="px-4 py-5 space-y-4">
              <Link to="/" className="block text-roofing-charcoal hover:text-roofing-teal font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link to="/services" className="block text-roofing-charcoal hover:text-roofing-teal font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link to="/reviews" className="block text-roofing-charcoal hover:text-roofing-teal font-medium" onClick={() => setMobileMenuOpen(false)}>Reviews</Link>
              <Link to="/about" className="block text-roofing-charcoal hover:text-roofing-teal font-medium" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/charities" className="block text-roofing-charcoal hover:text-roofing-teal font-medium" onClick={() => setMobileMenuOpen(false)}>Charities</Link>
              <Link to="/contact" className="block text-roofing-charcoal hover:text-roofing-teal font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <div className="pt-2 border-t">
                <a href="tel:+18005551234" className="flex items-center text-roofing-charcoal py-2">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>1-800-555-1234</span>
                </a>
                <Button variant="default" className="w-full bg-roofing-teal hover:bg-roofing-teal/90 text-white mt-2">
                  Get a Free Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

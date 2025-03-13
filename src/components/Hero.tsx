
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, User } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const Hero = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleConsentChange = (checked: boolean) => {
    setFormState(prev => ({ ...prev, consent: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    // Here you would typically send the form data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormState({
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
    });
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Hero Text */}
          <div>
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

          {/* Right Column - Contact Form */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-6">Get a Free Estimate</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <div className="flex items-center bg-white/20 rounded-md px-3 mb-4">
                  <User className="h-5 w-5 text-white mr-2" />
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="border-0 bg-transparent text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="flex items-center bg-white/20 rounded-md px-3 mb-4">
                  <Mail className="h-5 w-5 text-white mr-2" />
                  <Input 
                    name="email"
                    type="email" 
                    placeholder="Email Address" 
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="border-0 bg-transparent text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <div className="flex items-center bg-white/20 rounded-md px-3 mb-4">
                  <Phone className="h-5 w-5 text-white mr-2" />
                  <Input 
                    name="phone"
                    type="tel" 
                    placeholder="Phone Number" 
                    value={formState.phone}
                    onChange={handleChange}
                    className="border-0 bg-transparent text-white placeholder:text-white/70 focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
                <Textarea 
                  name="message"
                  placeholder="Tell us about your project..." 
                  value={formState.message}
                  onChange={handleChange}
                  className="bg-white/20 border-0 text-white placeholder:text-white/70 min-h-[100px] focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="consent" 
                  checked={formState.consent}
                  onCheckedChange={handleConsentChange}
                  className="border-white data-[state=checked]:bg-roofing-teal data-[state=checked]:border-roofing-teal" 
                />
                <Label htmlFor="consent" className="text-sm text-white">
                  I agree to be contacted about my roofing project
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-roofing-teal hover:bg-roofing-teal/90 text-white"
              >
                Request Free Estimate
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

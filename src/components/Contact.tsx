import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useRef, useEffect, useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Check,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);

    // Show success toast
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });

    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

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

    const currentElement = sectionRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-roofing-lightgray">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-roofing-darkgray max-w-2xl mx-auto">
            Have a roofing project or emergency? Contact us today for a free
            consultation and estimate.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-on-scroll"
        >
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(123) 456-7890"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project or issue..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      aria-describedby="terms-description"
                      name="terms"
                      type="checkbox"
                      required
                      className="h-4 w-4 rounded border-gray-300 text-roofing-teal focus:ring-roofing-teal"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="terms"
                      className="font-medium text-gray-900"
                    >
                      I agree to the terms and privacy policy
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-roofing-teal hover:bg-roofing-teal/90 text-white"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-roofing-teal/10 text-roofing-teal mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-roofing-darkgray">
                      Main: (800) 555-1234
                    </p>
                    <p className="text-roofing-darkgray">
                      Emergency: (800) 555-5678
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-roofing-teal/10 text-roofing-teal mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-roofing-darkgray">info@peakroof.com</p>
                    <p className="text-roofing-darkgray">
                      support@peakroof.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-roofing-teal/10 text-roofing-teal mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Business Hours</h4>
                    <p className="text-roofing-darkgray">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-roofing-darkgray">
                      Saturday: 9:00 AM - 2:00 PM
                    </p>
                    <p className="text-roofing-darkgray">Sunday: Closed</p>
                    <p className="text-roofing-teal font-medium mt-1">
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-roofing-teal/10 text-roofing-teal mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-roofing-darkgray">1234 Roofing Avenue</p>
                    <p className="text-roofing-darkgray">Portland, OR 97205</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-3">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-roofing-teal/10 text-roofing-teal hover:bg-roofing-teal hover:text-white transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-roofing-teal/10 text-roofing-teal hover:bg-roofing-teal hover:text-white transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-roofing-teal/10 text-roofing-teal hover:bg-roofing-teal hover:text-white transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-roofing-teal/10 text-roofing-teal hover:bg-roofing-teal hover:text-white transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-3">Service Areas</h3>
              <p className="text-roofing-darkgray mb-4">
                We provide roofing services throughout the greater Portland
                metropolitan area and surrounding counties.
              </p>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-roofing-teal mr-2" />
                  <span className="text-sm">Portland</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-roofing-teal mr-2" />
                  <span className="text-sm">Beaverton</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-roofing-teal mr-2" />
                  <span className="text-sm">Hillsboro</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-roofing-teal mr-2" />
                  <span className="text-sm">Gresham</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-roofing-teal mr-2" />
                  <span className="text-sm">Lake Oswego</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-roofing-teal mr-2" />
                  <span className="text-sm">Tigard</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-roofing-teal mr-2" />
                  <span className="text-sm">Oregon City</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-4 w-4 text-roofing-teal mr-2" />
                  <span className="text-sm">West Linn</span>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm">
                  Not sure if we service your area?{" "}
                  <a href="#" className="text-roofing-teal hover:underline">
                    Contact us
                  </a>{" "}
                  to find out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

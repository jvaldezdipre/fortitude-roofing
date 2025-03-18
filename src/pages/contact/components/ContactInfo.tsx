
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-roofing-teal/10 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-roofing-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                <p className="text-gray-500 mb-1">Main: (800) 555-1234</p>
                <p className="text-gray-500">Emergency: (800) 555-5678</p>
                <p className="text-roofing-teal font-medium mt-2 text-sm">
                  24/7 Emergency Service Available
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-roofing-teal/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-roofing-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-gray-500 mb-1">info@peakroof.com</p>
                <p className="text-gray-500">support@peakroof.com</p>
                <p className="text-roofing-teal font-medium mt-2 text-sm">
                  We'll respond within 24 hours
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm md:col-span-2 lg:col-span-1">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-roofing-teal/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-roofing-teal" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                <p className="text-gray-500 mb-1">1234 Roofing Avenue</p>
                <p className="text-gray-500">Portland, OR 97205</p>
                <p className="text-roofing-teal font-medium mt-2 text-sm">
                  Get Directions
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Business Hours</h3>
            <div className="bg-roofing-lightgray rounded-lg p-6">
              <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-roofing-teal mr-3" />
                    <span className="font-medium">Monday - Friday</span>
                  </div>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-roofing-teal mr-3" />
                    <span className="font-medium">Saturday</span>
                  </div>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-roofing-teal mr-3" />
                    <span className="font-medium">Sunday</span>
                  </div>
                  <span>Closed</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-roofing-teal mr-3" />
                  <span className="font-medium text-roofing-teal">
                    24/7 Emergency Service Available
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-roofing-teal/10 text-roofing-teal hover:bg-roofing-teal hover:text-white transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-roofing-teal/10 text-roofing-teal hover:bg-roofing-teal hover:text-white transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-roofing-teal/10 text-roofing-teal hover:bg-roofing-teal hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-roofing-teal/10 text-roofing-teal hover:bg-roofing-teal hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Service Areas</h3>
            <div className="bg-roofing-lightgray rounded-lg p-6">
              <p className="mb-6">
                We provide roofing services throughout the greater Portland
                metropolitan area and surrounding counties.
              </p>

              <div className="grid grid-cols-2 gap-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-roofing-teal mr-2"></div>
                  <span>Portland</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-roofing-teal mr-2"></div>
                  <span>Beaverton</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-roofing-teal mr-2"></div>
                  <span>Hillsboro</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-roofing-teal mr-2"></div>
                  <span>Gresham</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-roofing-teal mr-2"></div>
                  <span>Lake Oswego</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-roofing-teal mr-2"></div>
                  <span>Tigard</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-roofing-teal mr-2"></div>
                  <span>Oregon City</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-roofing-teal mr-2"></div>
                  <span>West Linn</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm">
                  Not sure if we service your area?{" "}
                  <a href="#contact-form" className="text-roofing-teal hover:underline">
                    Contact us
                  </a>{" "}
                  to find out.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
          <div className="rounded-lg overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178781.72337071867!2d-122.7886971!3d45.545397299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b0b7da97427%3A0x1c36b9e6f6d18591!2sPortland%2C%20OR!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map of Portland"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

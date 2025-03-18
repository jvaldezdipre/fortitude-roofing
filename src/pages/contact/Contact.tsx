
import { useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
import ContactHero from "./components/ContactHero";

const Contact = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ContactHero />
      <div className="flex-grow">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;

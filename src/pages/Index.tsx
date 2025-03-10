
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <ScrollToTop />
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Trust />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;

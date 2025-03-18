
import AboutHero from "@/pages/about/components/AboutHero";
import OurStory from "@/pages/about/components/OurStory";
import OurValues from "@/pages/about/components/OurValues";
import OurCharities from "@/pages/about/components/OurCharities";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <AboutHero />
      <OurStory />
      <OurValues />
      <OurCharities />
    </div>
  );
};

export default About;

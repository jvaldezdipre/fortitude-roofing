
import AboutHero from "@/pages/about/components/AboutHero";
import OurStory from "@/pages/about/components/OurStory";
import OurTeam from "@/pages/about/components/OurTeam";
import OurValues from "@/pages/about/components/OurValues";

const About = () => {
  return (
    <div className="mt-20 overflow-x-hidden">
      <AboutHero />
      <OurStory />
      <OurValues />
      <OurTeam />
    </div>
  );
};

export default About;

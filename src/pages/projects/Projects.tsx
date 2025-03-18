
import { useEffect } from "react";
import ProjectsHero from "./components/ProjectsHero";
import ProjectsMap from "./components/ProjectsMap";

const Projects = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <ProjectsHero />
      <ProjectsMap />
    </div>
  );
};

export default Projects;

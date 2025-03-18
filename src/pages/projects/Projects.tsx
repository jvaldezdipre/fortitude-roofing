
import { useEffect, useState } from "react";
import ProjectsHero from "./components/ProjectsHero";
import ProjectsMap from "./components/ProjectsMap";
import { Skeleton } from "@/components/ui/skeleton";

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Simulate loading to ensure components mount properly
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <ProjectsHero />
        <div className="container py-12 md:py-16">
          <Skeleton className="h-[600px] w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ProjectsHero />
      <ProjectsMap />
    </div>
  );
};

export default Projects;

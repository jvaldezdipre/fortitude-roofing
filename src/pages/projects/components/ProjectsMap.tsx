
import { useState, useCallback, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import ProjectDetail from "./ProjectDetail";
import ProjectsList from "./ProjectsList";
import { projectsData } from "../data/projectsData";
import { Project } from "../types/project";
import { Skeleton } from "@/components/ui/skeleton";

// Default map container style
const containerStyle = {
  width: '100%',
  height: '600px'
};

// Default center position (can be adjusted based on your service area)
const defaultCenter = {
  lat: 33.7488, // Atlanta, GA coordinates
  lng: -84.3877
};

const ProjectsMap = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeInfoWindow, setActiveInfoWindow] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Use the useLoadScript hook instead of LoadScript component
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
    // Note: Replace with actual API key in production
  });

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // Center map on selected project
  const mapRef = useCallback((map: google.maps.Map) => {
    if (map && selectedProject) {
      map.panTo({ 
        lat: selectedProject.location.lat, 
        lng: selectedProject.location.lng 
      });
    }
  }, [selectedProject]);

  const handleMarkerClick = (project: Project) => {
    setSelectedProject(project);
    setActiveInfoWindow(project.id);
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

  // Render loading state
  if (!isLoaded) {
    return (
      <section id="projects-map" className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Project Locations</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3">
            <Skeleton className="h-[600px] w-full" />
          </div>
          <div className="w-full lg:w-2/3">
            <Skeleton className="h-[600px] w-full" />
          </div>
        </div>
      </section>
    );
  }

  // Render error state
  if (loadError) {
    return (
      <section id="projects-map" className="container py-12 md:py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Project Locations</h2>
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600">Error loading map. Please check your connection and try again.</p>
        </div>
        
        {/* Still show the project list even if map fails to load */}
        <div className="mt-8">
          <ProjectsList 
            projects={projectsData} 
            selectedProject={selectedProject}
            onProjectSelect={handleProjectSelect}
          />
        </div>
      </section>
    );
  }

  return (
    <section id="projects-map" className="container py-12 md:py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Project Locations</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Projects list on the left for desktop, or on top for mobile */}
        <div className={`${isMobile ? 'order-2 mt-8' : 'order-1'} w-full lg:w-1/3`}>
          <ProjectsList 
            projects={projectsData} 
            selectedProject={selectedProject}
            onProjectSelect={handleProjectSelect}
          />
        </div>
        
        {/* Google Map on the right for desktop, or below for mobile */}
        <div className={`${isMobile ? 'order-1' : 'order-2'} w-full lg:w-2/3`}>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={defaultCenter}
              zoom={10}
              onLoad={mapRef}
            >
              {projectsData.map((project) => (
                <Marker
                  key={project.id}
                  position={project.location}
                  onClick={() => handleMarkerClick(project)}
                  icon={{
                    url: '/lovable-uploads/4c958005-65a7-4538-98ab-7734ea63df68.png',
                    scaledSize: new window.google.maps.Size(40, 40)
                  }}
                >
                  {activeInfoWindow === project.id && (
                    <InfoWindow
                      position={project.location}
                      onCloseClick={() => setActiveInfoWindow(null)}
                    >
                      <div className="p-2">
                        <h3 className="font-semibold text-sm">{project.title}</h3>
                        <p className="text-xs text-gray-600">{project.address}</p>
                      </div>
                    </InfoWindow>
                  )}
                </Marker>
              ))}
            </GoogleMap>
          </div>
        </div>
      </div>
      
      {/* Project details section */}
      {selectedProject && (
        <div className="mt-12">
          <ProjectDetail project={selectedProject} />
        </div>
      )}
    </section>
  );
};

export default ProjectsMap;

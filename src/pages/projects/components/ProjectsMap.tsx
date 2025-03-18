
import { useState, useCallback, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import ProjectDetail from "./ProjectDetail";
import ProjectsList from "./ProjectsList";
import { projectsData } from "../data/projectsData";
import { Project } from "../types/project";

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
  const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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
  useEffect(() => {
    if (selectedProject && mapInstance) {
      mapInstance.panTo({ 
        lat: selectedProject.location.lat, 
        lng: selectedProject.location.lng 
      });
      setActiveInfoWindow(selectedProject.id);
    }
  }, [selectedProject, mapInstance]);

  const onLoad = useCallback((map: google.maps.Map) => {
    setMapInstance(map);
  }, []);

  const handleMarkerClick = (project: Project) => {
    setSelectedProject(project);
    setActiveInfoWindow(project.id);
  };

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
  };

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
            <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                zoom={10}
                onLoad={onLoad}
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
            </LoadScript>
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

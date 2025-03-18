
import { Project } from "../types/project";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface ProjectsListProps {
  projects: Project[];
  selectedProject: Project | null;
  onProjectSelect: (project: Project) => void;
}

const ProjectsList = ({ projects, selectedProject, onProjectSelect }: ProjectsListProps) => {
  return (
    <div className="space-y-4 overflow-auto max-h-[600px] pr-2">
      <h3 className="text-xl font-semibold mb-4">Recent Projects</h3>
      
      {projects.map((project) => (
        <Card 
          key={project.id} 
          className={`cursor-pointer transition-colors hover:border-roofing-teal ${
            selectedProject?.id === project.id 
              ? 'border-roofing-teal bg-roofing-lightgray' 
              : ''
          }`}
          onClick={() => onProjectSelect(project)}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <CardDescription className="flex items-center text-sm">
              <MapPin className="h-3 w-3 mr-1" />
              {project.address}
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between items-center w-full">
              <span className="text-sm font-medium">
                {project.services.join(', ')}
              </span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-roofing-teal hover:text-roofing-teal/80"
                onClick={(e) => {
                  e.stopPropagation();
                  onProjectSelect(project);
                }}
              >
                Details
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProjectsList;

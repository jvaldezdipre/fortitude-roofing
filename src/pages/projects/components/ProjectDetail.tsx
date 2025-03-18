
import { Project } from "../types/project";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { MapPin, Calendar, Check } from "lucide-react";

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <Card className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <CardHeader className="bg-roofing-charcoal text-white">
        <CardTitle className="text-2xl">{project.title}</CardTitle>
        <CardDescription className="text-white/80 flex items-center">
          <MapPin className="h-4 w-4 mr-2" />
          {project.address}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Image */}
          <div className="overflow-hidden rounded-lg">
            <img 
              src={project.imageUrl || '/lovable-uploads/Shingle+Roof+Replacement.jpg'} 
              alt={project.title}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Details</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Completion Date</h3>
              <div className="flex items-center text-gray-700">
                <Calendar className="h-4 w-4 mr-2 text-roofing-teal" />
                {project.completionDate}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Services Provided</h3>
              <ul className="space-y-2">
                {project.services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 mr-2 text-roofing-teal mt-1" />
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {project.testimonial && (
              <div className="bg-roofing-lightgray p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Customer Testimonial</h3>
                <p className="text-gray-700 italic">"{project.testimonial.text}"</p>
                <p className="text-gray-600 font-medium mt-2">- {project.testimonial.author}</p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDetail;

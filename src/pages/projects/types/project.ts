
export interface Project {
  id: number;
  title: string;
  address: string;
  description: string;
  services: string[];
  location: {
    lat: number;
    lng: number;
  };
  imageUrl?: string;
  completionDate: string;
  testimonial?: {
    text: string;
    author: string;
  };
}

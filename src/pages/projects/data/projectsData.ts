
import { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Residential Roof Replacement",
    address: "123 Oak Street, Atlanta, GA",
    description: "Complete roof replacement for a 2,500 sq ft residential property using high-quality architectural shingles with a 50-year warranty. The project included removal of old roofing, inspection and repair of the roof deck, and installation of new underlayment and flashing.",
    services: ["Roof Replacement", "Gutter Installation"],
    location: {
      lat: 33.749,
      lng: -84.388
    },
    imageUrl: "/lovable-uploads/Shingle+Roof+Replacement.jpg",
    completionDate: "June 12, 2023",
    testimonial: {
      text: "The team did an amazing job with our roof replacement. They were professional, efficient, and left our property cleaner than they found it. Highly recommend!",
      author: "Michael Johnson"
    }
  },
  {
    id: 2,
    title: "Commercial Building Repair",
    address: "456 Pine Avenue, Marietta, GA",
    description: "Emergency repair and reinforcement of a commercial flat roof system after storm damage. The project included water damage assessment, structural repairs, and application of a new waterproof membrane coating.",
    services: ["Emergency Repair", "Waterproofing"],
    location: {
      lat: 33.9526,
      lng: -84.5499
    },
    imageUrl: "/lovable-uploads/featured-image-roof.jpg",
    completionDate: "August 3, 2023"
  },
  {
    id: 3,
    title: "Multi-Family Housing Roofing",
    address: "789 Maple Court, Decatur, GA",
    description: "Complete roof replacement for a 12-unit apartment complex. This large-scale project included coordination with residents, weather-proofing during the process, and installation of new ventilation systems for improved energy efficiency.",
    services: ["Roof Replacement", "Ventilation Installation", "Insulation"],
    location: {
      lat: 33.7748,
      lng: -84.2963
    },
    completionDate: "October 15, 2023",
    testimonial: {
      text: "Professional, timely, and excellent quality work. Our apartment complex has never looked better, and the energy savings are already noticeable.",
      author: "Sarah Thompson, Property Manager"
    }
  },
  {
    id: 4,
    title: "Storm Damage Restoration",
    address: "101 Elm Drive, Alpharetta, GA",
    description: "Comprehensive storm damage restoration including roof repair, siding replacement, and gutter system upgrade. We worked directly with the insurance company to ensure all damage was properly documented and covered.",
    services: ["Storm Damage Repair", "Insurance Claims", "Siding Replacement"],
    location: {
      lat: 34.0754,
      lng: -84.2941
    },
    completionDate: "July 21, 2023"
  },
  {
    id: 5,
    title: "Historic Home Restoration",
    address: "222 Heritage Lane, Roswell, GA",
    description: "Specialized roof restoration for a historic 1920s home. We matched the original slate tile design while upgrading the underlying structure with modern weather protection systems.",
    services: ["Historic Restoration", "Slate Roofing", "Custom Fabrication"],
    location: {
      lat: 34.0232,
      lng: -84.3616
    },
    imageUrl: "/lovable-uploads/featured-image-roof.jpg",
    completionDate: "September 5, 2023",
    testimonial: {
      text: "Their attention to historical accuracy while providing modern protection was impressive. Our home's character was preserved beautifully.",
      author: "Robert & Elizabeth Winters"
    }
  },
  {
    id: 6,
    title: "New Construction Project",
    address: "333 New Development Way, Smyrna, GA",
    description: "Complete roofing installation for a new residential development with 8 custom homes. We coordinated with the general contractor to ensure perfect timing and integration with other construction elements.",
    services: ["New Construction", "Architectural Design", "Multiple Properties"],
    location: {
      lat: 33.8839,
      lng: -84.5144
    },
    completionDate: "November 10, 2023"
  },
  {
    id: 7,
    title: "Solar Roof Integration",
    address: "444 Sunshine Blvd, Dunwoody, GA",
    description: "Installation of a new roof system designed to integrate with solar panels. This project included special reinforcement, custom flashing, and coordination with the solar installation team.",
    services: ["Solar Ready Roofing", "Energy Efficiency", "Custom Installation"],
    location: {
      lat: 33.9462,
      lng: -84.3349
    },
    completionDate: "August 28, 2023"
  },
  {
    id: 8,
    title: "Church Steeple Repair",
    address: "555 Faith Street, Sandy Springs, GA",
    description: "Specialized repair and restoration of a church steeple damaged by lightning. Our team used custom fabrication techniques to match the original architectural elements while improving weather resistance.",
    services: ["Steeple Repair", "Lightning Protection", "Custom Metalwork"],
    location: {
      lat: 33.9304,
      lng: -84.3733
    },
    completionDate: "October 3, 2023",
    testimonial: {
      text: "The craftsmanship shown in restoring our historic steeple was remarkable. The team showed great respect for our building and its significance to our community.",
      author: "Pastor James Wilson"
    }
  }
];


import { useRef, useEffect } from "react";

const teamMembers = [
  {
    name: "Michael Johnson",
    position: "Founder & CEO",
    bio: "With over 35 years in the roofing industry, Michael founded PeakRoof with a vision to deliver exceptional quality roofing services.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    name: "Sarah Williams",
    position: "Operations Director",
    bio: "Sarah ensures that every project runs smoothly from estimation to completion, with a keen eye for detail and logistics.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
  },
  {
    name: "Robert Martinez",
    position: "Lead Roofing Technician",
    bio: "With 20+ years of hands-on experience, Robert leads our technical team, ensuring the highest standards of installation and repair.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Jennifer Parker",
    position: "Customer Relations Manager",
    bio: "Jennifer is dedicated to ensuring every client receives exceptional service and support throughout their roofing project.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];

const OurTeam = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-roofing-darkgray">
            The dedicated professionals behind our exceptional service
          </p>
        </div>

        <div
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 staggered-fade-in"
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                  <p className="text-white/80 text-sm">{member.position}</p>
                </div>
              </div>
              <p className="text-roofing-darkgray">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-roofing-darkgray mb-8">
            Our team includes over 50 certified professionals dedicated to providing top-quality roofing services. From expert technicians to helpful office staff, we work together to ensure your complete satisfaction.
          </p>
          <div className="inline-flex items-center justify-center px-6 py-3 border border-roofing-teal text-roofing-teal rounded-md hover:bg-roofing-teal hover:text-white transition-colors">
            Join Our Team
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;

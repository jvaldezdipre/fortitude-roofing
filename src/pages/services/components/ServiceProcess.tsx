
import { CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "We start with a thorough assessment of your roofing needs, providing expert recommendations and a detailed quote at no cost."
  },
  {
    number: "02",
    title: "Custom Plan",
    description: "Our team creates a customized roofing plan tailored to your property, preferences, and budget with clear timelines."
  },
  {
    number: "03",
    title: "Professional Installation",
    description: "Our certified technicians execute the plan with precision, using premium materials and adhering to the highest industry standards."
  },
  {
    number: "04",
    title: "Final Inspection",
    description: "Upon completion, we conduct a comprehensive quality check to ensure every detail meets our rigorous standards."
  },
];

const ServiceProcess = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Service Process
          </h2>
          <p className="text-roofing-darkgray max-w-2xl mx-auto">
            We follow a streamlined process to ensure exceptional results for every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-roofing-lightgray rounded-lg p-8 relative hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-roofing-teal text-white text-xl font-bold py-2 px-4 rounded-bl-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-4 pt-6">{step.title}</h3>
              <p className="text-roofing-darkgray mb-6">{step.description}</p>
              <CheckCircle className="h-6 w-6 text-roofing-teal" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;

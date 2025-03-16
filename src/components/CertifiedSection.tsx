import { Separator } from "@/components/ui/separator";
const CertifiedSection = () => {
  return <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-roofing-charcoal mb-8 uppercase tracking-wide">
          The Certified Roofing Contractor You Can Rely On
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 items-center justify-items-center">
          <div className="flex items-center justify-center w-full h-full">
            <img alt="Fortified Roofing Certification" className="max-h-24 object-contain" src="/lovable-uploads/3adbd21d-5b3b-4fca-8613-325d1f2ca259.jpg" />
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <img src="/placeholder.svg" alt="Union MetalPro Contractor" className="max-h-24 object-contain" />
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <img src="/placeholder.svg" alt="Metal Roofing Alliance" className="max-h-24 object-contain" />
          </div>
          <div className="flex items-center justify-center w-full h-full">
            <img src="/placeholder.svg" alt="Shingle Master Company" className="max-h-24 object-contain" />
          </div>
        </div>
        
        <Separator className="bg-gray-200" />
      </div>
    </section>;
};
export default CertifiedSection;
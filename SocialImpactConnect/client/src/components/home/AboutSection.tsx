import { Shield, Users, Gift, Heart } from "lucide-react";
import { coreValues } from "@/lib/data";

const AboutSection = () => {
  // Map of core value icons
  const icons = {
    Shield: <Shield className="h-6 w-6 text-primary-600" />,
    Users: <Users className="h-6 w-6 text-primary-600" />,
    Gift: <Gift className="h-6 w-6 text-primary-600" />,
    Heart: <Heart className="h-6 w-6 text-primary-600" />
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Manav Ekata Sudhar Samiti</h2>
            <p className="text-lg text-gray-600 mb-6">
              Manav Ekata Sudhar Kendra is a social welfare organization dedicated to improving the lives of vulnerable communities through sustainable development initiatives and immediate assistance during times of need.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to provide comprehensive support across four key areas: educational assistance, agricultural development, disaster relief, and medical support. We believe in empowering individuals and communities to build resilience and achieve self-sufficiency.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 2010, we have grown from a small local initiative to an organization with nationwide impact, thanks to our dedicated volunteers, donors, and partners.
            </p>
            <div className="flex flex-wrap gap-4">
              {coreValues.map((value, index) => (
                <div key={index} className="flex items-center">
                  {icons[value.icon as keyof typeof icons]}
                  <span className="ml-2 text-gray-700">{value.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6647025/pexels-photo-6647025.jpeg" 
                alt="Volunteers working together" 
                className="rounded-lg shadow-lg w-full h-auto" 
              />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-500 rounded-lg hidden md:block"></div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-amber-500 rounded-lg hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

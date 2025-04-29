import { Shield, Users, Gift, Heart } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { coreValues } from "@/lib/data";
import CallToAction from "@/components/home/CallToAction";

const AboutPage = () => {
  // Map of core value icons
  const icons = {
    Shield: <Shield className="h-12 w-12 text-primary-600" />,
    Users: <Users className="h-12 w-12 text-primary-600" />,
    Gift: <Gift className="h-12 w-12 text-primary-600" />,
    Heart: <Heart className="h-12 w-12 text-primary-600" />
  };
  
  return (
    <>
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">About Manav Ekata Sudhar Kendra</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our mission, vision, and the impact we're making in communities around the world.
            </p>
          </div>
          
          <div className="md:flex md:items-center md:justify-between md:space-x-10 mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600">
                  Founded in 2010, Manav Ekata Sudhar Kendra began as a small group of volunteers committed to addressing the educational needs of underprivileged children in local communities. What started as a simple school supplies drive quickly evolved as we recognized the interconnected challenges facing vulnerable populations.
                </p>
                <p className="text-gray-600">
                  Over the years, we expanded our focus to include agricultural support for rural farmers, emergency response during natural disasters, and healthcare assistance for those without access to medical services. This holistic approach has allowed us to create meaningful and lasting change.
                </p>
                <p className="text-gray-600">
                  Today, Manav Ekata Sudhar Kendra operates nationwide with a network of dedicated volunteers, partners, and donors who share our commitment to empowering communities and building a more equitable society for all.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/6647025/pexels-photo-6647025.jpeg" 
                alt="Volunteers working together" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
                  <div className="flex justify-center mb-4">
                    {icons[value.icon as keyof typeof icons]}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.label}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Education</h3>
                <p className="text-gray-600 mb-4">
                  Our educational initiatives have reached over 5,000 students, providing them with essential learning materials, tutoring support, and scholarships. We've partnered with 50+ schools to improve educational infrastructure and teaching methodologies.
                </p>
                <Link href="/programs/educational-support">
                  <Button variant="outline">Learn About Our Education Program</Button>
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Agriculture</h3>
                <p className="text-gray-600 mb-4">
                  We've supported more than 2,500 farming families with seeds, tools, and training on sustainable farming practices. Our agricultural programs have helped increase crop yields by an average of 30% while promoting environmental conservation.
                </p>
                <Link href="/programs/farming-assistance">
                  <Button variant="outline">Learn About Our Agriculture Program</Button>
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Disaster Relief</h3>
                <p className="text-gray-600 mb-4">
                  Through 15+ disaster relief missions, we've provided emergency assistance to thousands of individuals affected by natural disasters. Our rapid response teams deliver food, clean water, shelter, and medical aid within 48 hours of a disaster.
                </p>
                <Link href="/programs/emergency-response">
                  <Button variant="outline">Learn About Our Disaster Relief Program</Button>
                </Link>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  Our medical assistance programs have served over 10,000 individuals without access to regular healthcare. Through medical camps, medicine distribution, and health education, we're working to improve community health outcomes.
                </p>
                <Link href="/programs/healthcare-assistance">
                  <Button variant="outline">Learn About Our Healthcare Program</Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Our Team</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
              Manav Ekata Sudhar Kendra is powered by a dedicated team of staff and volunteers committed to our mission of creating positive change in communities.
            </p>
            <div className="flex justify-center">
              <Link href="/volunteer">
                <Button size="lg">Join Our Team</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <CallToAction />
    </>
  );
};

export default AboutPage;

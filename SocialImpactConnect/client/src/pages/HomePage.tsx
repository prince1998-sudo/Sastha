import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import ProgramsOverview from "@/components/home/ProgramsOverview";
import NewsHighlights from "@/components/home/NewsHighlights";
import GalleryPreview from "@/components/home/GalleryPreview";
import AboutSection from "@/components/home/AboutSection";
import CallToAction from "@/components/home/CallToAction";
import ContactForm from "@/components/shared/ContactForm";
import { contactInfo } from "@/lib/data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ImpactStats />
      <ProgramsOverview />
      <NewsHighlights />
      <GalleryPreview />
      <AboutSection />
      <CallToAction />
      
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions or want to get involved? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <ContactForm />
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-gray-900">Address</h4>
                    <p className="mt-1 text-gray-600">{contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-gray-900">Phone</h4>
                    <p className="mt-1 text-gray-600">{contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-gray-900">Email</h4>
                    <p className="mt-1 text-gray-600">{contactInfo.email}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary-600 mt-1" />
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-gray-900">Office Hours</h4>
                    {contactInfo.officeHours.map((hours, index) => (
                      <p key={index} className={index === 0 ? "mt-1 text-gray-600" : "text-gray-600"}>
                        {hours}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

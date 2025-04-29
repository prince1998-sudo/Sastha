import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/shared/ContactForm";
import { contactInfo, socialLinks } from "@/lib/data";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const ContactPage = () => {
  // Map for social icons
  const socialIcons: Record<string, React.ReactNode> = {
    Facebook: <Facebook className="h-6 w-6" />,
    Twitter: <Twitter className="h-6 w-6" />,
    Instagram: <Instagram className="h-6 w-6" />,
    Youtube: <Youtube className="h-6 w-6" />
  };
  
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
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

            <div className="mt-8">
              <h4 className="text-base font-medium text-gray-900 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <a 
                    key={social.platform} 
                    href={social.href} 
                    className="text-gray-600 hover:text-primary-600"
                    aria-label={social.platform}
                  >
                    {socialIcons[social.icon]}
                  </a>
                ))}
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-base font-medium text-gray-900 mb-4">Volunteer Opportunities</h4>
              <p className="text-gray-600 mb-4">
                We're always looking for passionate individuals to join our volunteer team. Whether you have specific skills to contribute or simply want to help, there's a place for you at HelpingHands.
              </p>
              <p className="text-gray-600">
                For volunteer inquiries, please email <span className="text-primary-600">volunteer@helpinghands.org</span> or call our volunteer coordinator at <span className="text-primary-600">+1 (555) 987-6543</span>.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-base font-medium text-gray-900">How can I donate to HelpingHands?</h4>
                <p className="text-gray-600">
                  You can donate online through our secure donation page, mail a check to our office address, or contact us about in-kind donations.
                </p>
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-900">How is my donation used?</h4>
                <p className="text-gray-600">
                  We ensure that at least 85% of all donations go directly to our programs. The remaining 15% covers administrative costs and fundraising efforts.
                </p>
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-900">Can I sponsor a specific program?</h4>
                <p className="text-gray-600">
                  Yes, you can designate your donation to support a specific program area such as education, agriculture, disaster relief, or healthcare.
                </p>
              </div>
              <div>
                <h4 className="text-base font-medium text-gray-900">How can businesses partner with HelpingHands?</h4>
                <p className="text-gray-600">
                  We offer various corporate partnership opportunities including sponsorships, matching gift programs, and employee volunteer initiatives. Contact us for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

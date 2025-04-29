import React from "react";
import { Link } from "wouter";
import Logo from "@/components/ui/logo";
import { footerLinks, socialLinks } from "@/lib/data";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  // Map for social icons
  const socialIcons: Record<string, React.ReactNode> = {
    Facebook: <Facebook className="h-5 w-5" />,
    Twitter: <Twitter className="h-5 w-5" />,
    Instagram: <Instagram className="h-5 w-5" />,
    Youtube: <Youtube className="h-5 w-5" />
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-1">
            <Link href="/">
              <a>
                <Logo color="white" />
              </a>
            </Link>
            <p className="mt-4 text-gray-400">
              Empowering communities through education, agriculture, relief, and healthcare support.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(social => (
                <a 
                  key={social.platform} 
                  href={social.href} 
                  className="text-gray-400 hover:text-white"
                  aria-label={social.platform}
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </div>
          
          {/* Programs links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Programs</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="text-gray-400 hover:text-white">{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Get Involved links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Get Involved</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.getInvolved.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="text-gray-400 hover:text-white">{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="text-gray-400 hover:text-white">{link.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            &copy; {new Date().getFullYear()} HelpingHands. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Program, Article, GalleryImage } from "@shared/schema";

// Impact statistics for homepage
export const impactStats = [
  { value: '5,000+', label: 'Students Supported' },
  { value: '2,500+', label: 'Farmer Families Helped' },
  { value: '15+', label: 'Disaster Relief Missions' },
  { value: '10,000+', label: 'Medical Assistance Cases' }
];

// Core values for about section
export const coreValues = [
  { 
    icon: 'Shield', 
    label: 'Transparency',
    description: 'We believe in complete transparency in all our operations and financial matters.'
  },
  { 
    icon: 'Users', 
    label: 'Community Focus',
    description: 'Our work is always centered around the needs and priorities of the communities we serve.'
  },
  { 
    icon: 'Gift', 
    label: 'Sustainability',
    description: 'We develop programs that create lasting impact and can be maintained by communities.'
  },
  { 
    icon: 'Heart', 
    label: 'Compassion',
    description: 'We approach every individual and situation with empathy and understanding.'
  }
];

// Contact information
export const contactInfo = {
  address: '123 Community Lane, Helping City, HC 12345',
  phone: '+1 (555) 123-4567',
  email: 'info@helpinghands.org',
  officeHours: [
    'Monday - Friday: 9:00 AM - 5:00 PM',
    'Saturday: 10:00 AM - 2:00 PM'
  ]
};

// Footer links
export const footerLinks = {
  programs: [
    { label: 'Educational Support', href: '/programs/educational-support' },
    { label: 'Farming Assistance', href: '/programs/farming-assistance' },
    { label: 'Disaster Relief', href: '/programs/emergency-response' },
    { label: 'Medical Assistance', href: '/programs/healthcare-assistance' },
    { label: 'Community Development', href: '/programs' }
  ],
  getInvolved: [
    { label: 'Donate', href: '/donate' },
    { label: 'Volunteer', href: '/volunteer' },
    { label: 'Partner With Us', href: '/partner' },
    { label: 'Fundraise', href: '/fundraise' },
    { label: 'Corporate Sponsorships', href: '/sponsor' }
  ],
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'News', href: '/news' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' }
  ]
};

// Social media links
export const socialLinks = [
  { platform: 'Facebook', href: '#', icon: 'Facebook' },
  { platform: 'Twitter', href: '#', icon: 'Twitter' },
  { platform: 'Instagram', href: '#', icon: 'Instagram' },
  { platform: 'YouTube', href: '#', icon: 'Youtube' }
];

// Get tag color for program category
export function getCategoryColor(category: string): string {
  switch (category.toLowerCase()) {
    case 'education':
      return 'blue';
    case 'agriculture':
      return 'green';
    case 'disaster relief':
      return 'amber';
    case 'medical':
      return 'red';
    default:
      return 'gray';
  }
}

// Format date for display
export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

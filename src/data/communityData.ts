import { Trash2, Calendar, Phone, Wrench, Zap, Paintbrush, Hammer, Trees as Tree, Car, Heart, ShowerHead, Laptop } from 'lucide-react';

export interface CommunityInfo {
  id: number;
  title: string;
  category: string;
  keywords: string[];
  content: string;
  icon: any;
  description?: string;
}

export interface ServiceProvider {
  id: number;
  name: string;
  category: string;
  phone: string;
  rating: number;
  reviews: number;
}

export const communityInfo: CommunityInfo[] = [
  {
    id: 1,
    title: 'Trash Collection',
    category: 'Services',
    keywords: ['trash', 'garbage', 'waste', 'collection'],
    content: 'Trash pickup occurs every Tuesday morning. Please have bins out by 7 AM.',
    icon: Trash2,
    description: 'Detailed information about our community waste management services, including recycling guidelines and special pickup requests.'
  },
  {
    id: 2,
    title: 'Community Events',
    category: 'Events',
    keywords: ['events', 'activities', 'calendar', 'schedule'],
    content: 'Check our calendar for upcoming community events and activities.',
    icon: Calendar,
    description: 'Full calendar of community events, including festivals, meetings, and recreational activities.'
  },
  {
    id: 3,
    title: 'Emergency Contacts',
    category: 'Important',
    keywords: ['emergency', 'contact', 'phone', 'numbers'],
    content: 'Emergency: 911\nPolice (non-emergency): 555-0123\nFire Department: 555-0124',
    icon: Phone,
    description: 'Complete list of emergency and non-emergency contact numbers for community services.'
  }
];

export const serviceProviders = [
  {
    id: 1,
    name: "Mike's Mechanical",
    category: "Mechanic",
    phone: "555-0101",
    rating: 4.8,
    reviews: 127,
    icon: Wrench
  },
  {
    id: 2,
    name: "Yane Electrician",
    description: "Commercial & Residential",
    category: "Electrician",
    phone: "720-277-7622/ Yonas",
    rating: 4.9,
    reviews: 93,
    icon: Zap
  },
  {
    id: 3,
    name: "Perfect Paint",
    category: "Painter",
    phone: "555-0103",
    rating: 4.7,
    reviews: 84,
    icon: Paintbrush
  },
  {
    id: 4,
    name: "Handy Home Repairs",
    category: "Handyman",
    phone: "555-0104",
    rating: 4.6,
    reviews: 156,
    icon: Hammer
  },
  {
    id: 5,
    name: "Green Thumb Gardens",
    category: "Landscaping",
    phone: "555-0105",
    rating: 4.8,
    reviews: 112,
    icon: Tree
  },
  {
    id: 6,
    name: "Quick Car Care",
    category: "Auto Service",
    phone: "555-0106",
    rating: 4.7,
    reviews: 203,
    icon: Car
  },
  {
    id: 7,
    name: "Wellness Center",
    category: "Healthcare",
    phone: "555-0107",
    rating: 4.9,
    reviews: 167,
    icon: Heart
  },
  {
    id: 8,
    name: "Premier Plumbing",
    category: "Plumber",
    phone: "555-0108",
    rating: 4.8,
    reviews: 142,
    icon: ShowerHead
  },
  {
    id: 9,
    name: "Web Innovative Tech",
    category: "IT Services",
    phone: "970-716-0877 / Israel B.",
    web: "https://https://webinnovativetechnology.com/",
    description: "Web development, IT support, and digital marketing services.",
    rating: 4.7,
    reviews: 2,
    icon: Laptop
  }
];
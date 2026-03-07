import type { Service, Testimonial, FAQItem, NavItem, Stat, WhyChooseItem } from '../types';

export const COMPANY = {
  name: 'Huron Electrical',
  tagline: 'Powering Kitchener–Waterloo & Cambridge with Expert Electrical Solutions',
  phone: '+1 647-770-9825',
  email: 'info@huronelectrical.ca',
  address: '142 Goderich St, Goderich, ON N7A 1M9',
  license: 'ESA Lic. #7024913',
  hours: 'Mon–Fri: 7am–6pm | Emergency: 24/7',
  founded: '2021',
  facebook: 'https://facebook.com/huronelectrical',
  instagram: 'https://instagram.com/huronelectrical',
  linkedin: 'https://linkedin.com/company/huronelectrical',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const STATS: Stat[] = [
  { value: '4', suffix: '+', label: 'Years Experience', description: 'Serving Kitchener–Waterloo & Cambridge since 2021' },
  { value: '50', suffix: '+', label: 'Projects Completed', description: 'Residential & commercial jobs' },
  { value: '100', suffix: '%', label: 'Licensed & Insured', description: 'ESA certified professionals' },
  { value: '24', suffix: '/7', label: 'Emergency Service', description: 'Available when you need us most' },
];

export const SERVICES: Service[] = [
  {
    id: 'residential',
    icon: 'Home',
    title: 'Residential Electrical',
    description: 'Complete home electrical services — from panel upgrades and outlet installation to full rewiring and safety inspections.',
    features: ['Panel upgrades & replacements', 'Outlet & switch installation', 'Full home rewiring', 'Electrical safety inspections'],
  },
  {
    id: 'commercial',
    icon: 'Building2',
    title: 'Commercial Electrical',
    description: 'Reliable electrical solutions for offices, retail spaces, restaurants, and multi-unit buildings across Kitchener–Waterloo & Cambridge.',
    features: ['Commercial panel upgrades', 'Lighting systems & controls', 'Data & communication cabling', 'Code compliance work'],
    highlight: true,
  },
  {
    id: 'industrial',
    icon: 'Factory',
    title: 'Industrial Electrical',
    description: 'Heavy-duty electrical contracting for manufacturing plants, agricultural facilities, and industrial operations.',
    features: ['Motor controls & automation', '3-phase power systems', 'Machine wiring & installation', 'Preventive maintenance'],
  },
  {
    id: 'ev-charging',
    icon: 'Zap',
    title: 'EV Charger Installation',
    description: 'Level 1 and Level 2 EV charging station installation for homes and commercial properties. Future-proof your property.',
    features: ['Level 2 home chargers', 'Commercial EV stations', 'Load management systems', 'Utility rebate assistance'],
  },
  {
    id: 'lighting',
    icon: 'Lightbulb',
    title: 'Lighting Installation',
    description: 'Energy-efficient LED upgrades, pot lights, landscape lighting, and smart lighting systems for any space.',
    features: ['LED retrofit & upgrades', 'Pot light installation', 'Outdoor & landscape lighting', 'Smart home lighting'],
  },
  {
    id: 'emergency',
    icon: 'ShieldAlert',
    title: '24/7 Emergency Service',
    description: 'Electrical emergencies don\'t wait for business hours — and neither do we. Fast, reliable emergency response across Kitchener–Waterloo & Cambridge.',
    features: ['24/7 availability', 'Rapid response dispatch', 'Power outage restoration', 'Hazard identification & repair'],
  },
];

export const WHY_CHOOSE: WhyChooseItem[] = [
  { icon: 'BadgeCheck', title: 'Licensed & Certified', description: 'ESA-licensed electricians with up-to-date training. We follow all Ontario Electrical Safety Code requirements.' },
  { icon: 'MapPin', title: 'Locally Rooted', description: 'Born and raised in Kitchener–Waterloo & Cambridge. We know this community and take pride in keeping it safe and powered.' },
  { icon: 'DollarSign', title: 'Transparent Pricing', description: 'Upfront quotes with no hidden fees. You know the cost before any work begins — guaranteed.' },
  { icon: 'Clock', title: '24/7 Emergency Response', description: 'Electrical emergencies can\'t wait. Our on-call team is always ready to respond fast when you need us most.' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Margaret Fowler',
    location: 'Goderich, ON',
    rating: 5,
    text: 'Huron Electrical upgraded our entire panel and rewired half our home. The crew was professional, clean, and finished ahead of schedule. I felt completely safe and informed throughout the whole process.',
    service: 'Panel Upgrade & Rewiring',
    initials: 'MF',
  },
  {
    id: '2',
    name: 'Derek Kowalski',
    location: 'Clinton, ON',
    rating: 5,
    text: 'Called them at 10pm for a tripped breaker that wouldn\'t reset. A technician was at my door within 45 minutes. Fixed the issue quickly and safely. Worth every penny for the peace of mind.',
    service: 'Emergency Service',
    initials: 'DK',
  },
  {
    id: '3',
    name: 'Sunrise Bakery & Cafe',
    location: 'Seaforth, ON',
    rating: 5,
    text: 'We hired Huron Electrical to handle all the electrical for our new commercial kitchen. They coordinated perfectly with our contractors, passed inspection on the first visit, and stayed on budget.',
    service: 'Commercial Installation',
    initials: 'SB',
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: '1',
    question: 'How do I know if I need a panel upgrade?',
    answer: 'If your breakers trip frequently, you have a fuse box instead of a breaker panel, lights flicker when appliances run, or your panel is 25+ years old — it\'s time for an upgrade. We offer free assessments to determine if an upgrade is right for your home.',
  },
  {
    id: '2',
    question: 'Do I need a permit for electrical work in Ontario?',
    answer: 'Yes — most electrical work in Ontario requires an ESA permit. As licensed electrical contractors, we handle all permit applications and inspections on your behalf, so you don\'t have to worry about compliance.',
  },
  {
    id: '3',
    question: 'How much does it cost to install an EV charger at home?',
    answer: 'A typical Level 2 home EV charger installation in Ontario ranges from $800–$1,500 depending on your panel capacity and where the charger will be installed. We provide free quotes and can advise on available utility rebates to offset the cost.',
  },
  {
    id: '4',
    question: 'Why should I hire a licensed electrician instead of doing it myself?',
    answer: 'DIY electrical work is illegal for most projects in Ontario and voids homeowner insurance in the event of a fire or accident. Licensed electricians ensure your wiring is safe, up to code, and will pass inspection — protecting your home and your family.',
  },
  {
    id: '5',
    question: 'How quickly can you respond to electrical emergencies?',
    answer: 'We have on-call electricians available 24/7. For emergencies in Kitchener–Waterloo & Cambridge, we typically respond within 30–60 minutes. Your safety is our top priority — don\'t wait to call.',
  },
];


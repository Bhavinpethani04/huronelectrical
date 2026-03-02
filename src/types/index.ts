export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  initials: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  suffix: string;
  label: string;
  description: string;
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}


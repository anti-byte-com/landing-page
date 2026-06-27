export interface NavLink {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  description: string;
  status: 'active' | 'validation' | 'archived' | 'growth';
  id?: string;
  imageUrl?: string;
  technology?: string;
  link?: string;
}

export interface HeroStat {
  value: string | number;
  label: string;
}

export interface HeroStats {
  value: string | number;
  label: string;
}

export interface HeroData {
  title: string;
  description: string;
  stats: HeroStats[];
  cta?: string;
}

export interface MethodStep {
  number: string;
  label: string;
  title: string;
  description: string;
  icon?: string;
}

export interface PhilosophyPrinciple {
  title: string;
  description: string;
  icon?: string;
}

export interface MissionBelief {
  id: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl?: string;
  linkedin?: string;
}

export interface CompanyHistory {
  year: string;
  title: string;
  description: string;
}

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'address' | 'social';
  label: string;
  value: string;
  link?: string;
}

export interface AboutUsSectionProps {
  mission?: MissionBelief[];
  teams?: TeamMember[];
  history?: CompanyHistory[];
  values?: CompanyValue[];
  contact?: ContactInfo[];
}

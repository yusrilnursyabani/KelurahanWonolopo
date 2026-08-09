export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface StatisticItem {
  label: string;
  value: string;
  description: string;
}

export type ServiceCategoryKey =
  | "all"
  | "administrasi-kependudukan"
  | "perpajakan-perizinan"
  | "kesehatan-sosial"
  | "pengaduan-informasi"
  | "portal-smartcity";

export interface ServiceItem {
  id: string;
  title: string;
  slug?: string;
  url?: string;
  description: string;
  category: Exclude<ServiceCategoryKey, "all">;
  isExternal?: boolean;
  iconName?: string;
  badgeText?: string;
}

export interface ServiceRequirement {
  id: string;
  label: string;
}

export interface ServiceStep {
  step: number;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: ServiceItem["slug"];
  summary: string;
  requirements: ServiceRequirement[];
  steps: ServiceStep[];
  duration: string;
  cost: string;
  location: string;
  notes?: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  image: string;
}

export interface NewsDetail extends NewsItem {
  body: string[];
  tags?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption?: string;
}

export interface ProfileSection {
  id: string;
  title: string;
  content: string[];
}

export interface EmpowermentProgramItem {
  id: string;
  title: string;
  description: string;
  targetGroup: string;
  schedule: string;
}

export interface InstitutionItem {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: "pemberdayaan" | "ekonomi" | "sosial";
}

export interface InstitutionMember {
  id: string;
  name: string;
  role: string;
}

export interface InstitutionProgram {
  id: string;
  title: string;
  description: string;
}

export interface InstitutionDetail {
  slug: InstitutionItem["slug"];
  fullName: string;
  summary: string;
  vision?: string;
  mission?: string[];
  members: InstitutionMember[];
  programs: InstitutionProgram[];
  contactInfo?: string;
  meetingSchedule?: string;
}

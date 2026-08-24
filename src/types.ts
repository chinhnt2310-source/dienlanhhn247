export interface CompanyInfo {
  name: string;
  tagline: string;
  subtagline: string;
  description: string;
  heroImage?: string;
  hotline1: string;
  hotline1Display: string;
  hotline2: string;
  hotline2Display: string;
  zaloUrl: string;
  zaloDisplay: string;
  branch1: string;
  branch2: string;
  coverage: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface QuickBenefit {
  icon: string;
  title: string;
  desc: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  image?: string;
  details: string[];
}

export interface QuickLookupItem {
  id: string;
  icon: string;
  title: string;
  desc: string;
  details: string[];
}

export interface PriceRow {
  name: string;
  price: string;
  note: string;
}

export interface PriceTable {
  category: string;
  target: string;
  items: PriceRow[];
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface GalleryItem {
  title: string;
  tag: string;
  desc: string;
  image?: string;
}

export interface ReviewItem {
  text: string;
  author: string;
  rating: number;
}

export interface ProjectItem {
  thumb: string;
  title: string;
  desc: string;
  image?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PolicyItem {
  title: string;
  content: string[];
}

export interface ContentData {
  company: CompanyInfo;
  navLinks: NavLink[];
  trustPills: string[];
  quickBenefits: QuickBenefit[];
  services: ServiceItem[];
  quickLookups: QuickLookupItem[];
  priceTables: PriceTable[];
  processSteps: ProcessStep[];
  serviceAreas: string[];
  gallery: GalleryItem[];
  reviews: ReviewItem[];
  projects: ProjectItem[];
  faqs: FaqItem[];
  policies: PolicyItem[];
}

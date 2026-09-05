import { client } from '@/lib/sanity';

export interface SanityProcessStep {
  title: string;
  description: string;
  icon: string;
}

export interface SanityDeliverable {
  title: string;
  description: string;
}

export interface SanityFaqItem {
  question: string;
  answer: string;
}

export interface SanityService {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  shortDescription: string;
  description?: string;
  longDescription?: string;
  icon?: string;
  bgColor?: string;
  features?: string[];
  process?: SanityProcessStep[];
  deliverables?: SanityDeliverable[];
  faq?: SanityFaqItem[];
  bannerImage?: any;
  iconImage?: any;
  order?: number;
  featured?: boolean;
}

const SERVICE_PROJECTION = `
  _id,
  title,
  slug,
  shortDescription,
  description,
  longDescription,
  icon,
  bgColor,
  features,
  process,
  deliverables,
  faq,
  bannerImage,
  iconImage,
  order,
  featured
`;

export async function getServices(): Promise<SanityService[]> {
  return client.fetch(`
    *[_type == "service"] | order(order asc) {
      ${SERVICE_PROJECTION}
    }
  `);
}

export async function getFeaturedServices(): Promise<SanityService[]> {
  return client.fetch(`
    *[_type == "service" && featured == true] | order(order asc) {
      ${SERVICE_PROJECTION}
    }
  `);
}

export async function getServiceBySlug(slug: string): Promise<SanityService | null> {
  return client.fetch(`
    *[_type == "service" && slug.current == $slug][0] {
      ${SERVICE_PROJECTION}
    }
  `, { slug });
}
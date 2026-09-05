import { client } from '@/lib/sanity';
import type { SanitySocialLink } from '@/lib/social';

export interface SanityTestimonial {
  _id: string;
  name: string;
  role: string;
  company: string;
  message: string;
  image?: any;
  socialLinks?: SanitySocialLink[];
  order?: number;
}

export async function getTestimonials(): Promise<SanityTestimonial[]> {
  return client.fetch(`
    *[_type == "testimonial"] | order(order asc) {
      _id,
      name,
      role,
      company,
      message,
      image,
      socialLinks,
      order
    }
  `);
}
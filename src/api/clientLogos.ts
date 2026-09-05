import { client } from '@/lib/sanity';

export interface SanityClientLogo {
  _id: string;
  name: string;
  image?: any;
  link?: string;
  order?: number;
}

export async function getClientLogos(): Promise<SanityClientLogo[]> {
  return client.fetch(`
    *[_type == "clientLogo"] | order(order asc) {
      _id,
      name,
      image,
      link,
      order
    }
  `);
}
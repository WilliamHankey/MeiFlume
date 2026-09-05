import { client } from '@/lib/sanity';

export interface SanityPortfolioCategory {
  _id: string;
  name: string;
  slug: {
    current: string;
  };
  order?: number;
}

export async function getPortfolioCategories(): Promise<SanityPortfolioCategory[]> {
  return client.fetch(`
    *[_type == "portfolioCategory"] | order(order asc) {
      _id,
      name,
      slug,
      order
    }
  `);
}
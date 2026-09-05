import { client } from '@/lib/sanity';

export interface SanityProject {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  category: string;
  image: any;
  link?: string;
  description: string;
  client: string;
  challenge: string;
  solution: string;
  timeline: string;
  date: string;
  results: {
    stat: string;
    description: string;
  }[];
  services: string[];
  technologies: string[];
  gallery: string[];
  comingSoon?: boolean;
  featured?: boolean;
}

const PROJECT_PROJECTION = `
  _id,
  title,
  slug,
  category,
  image,
  link,
  description,
  client,
  challenge,
  solution,
  timeline,
  date,
  results,
  services,
  technologies,
  comingSoon,
  featured,
  "gallery": gallery[].asset->url
`;

export async function getProjects(): Promise<SanityProject[]> {
  return client.fetch(`
    *[_type == "project"] {
      ${PROJECT_PROJECTION}
    }
  `);
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  return client.fetch(`
    *[_type == "project" && slug.current == $slug][0] {
      ${PROJECT_PROJECTION}
    }
  `, { slug });
} 
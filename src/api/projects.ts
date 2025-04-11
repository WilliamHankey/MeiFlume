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
}

export async function getProjects(): Promise<SanityProject[]> {
  return client.fetch(`
    *[_type == "project"] {
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
      "gallery": gallery[].asset->url
    }
  `);
}

export async function getProjectBySlug(slug: string): Promise<SanityProject | null> {
  return client.fetch(`
    *[_type == "project" && slug.current == $slug][0] {
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
      "gallery": gallery[].asset->url
    }
  `, { slug });
} 
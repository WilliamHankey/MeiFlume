import { client } from '@/lib/sanity';

export interface SanityPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  content: any[];
  author: string;
  mainImage: any;
  categories: string[];
  publishedAt: string;
  tags: string[];
  relatedService?: string;
}

export async function getPosts(): Promise<SanityPost[]> {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      content,
      author,
      mainImage,
      categories,
      publishedAt,
      tags,
      relatedService
    }
  `);
}

export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      author,
      mainImage,
      categories,
      publishedAt,
      tags,
      relatedService
    }
  `, { slug });
}

export async function getRelatedPosts(serviceId: string, currentPostId: string): Promise<SanityPost[]> {
  return client.fetch(`
    *[_type == "post" && relatedService == $serviceId && _id != $currentPostId] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt
    }
  `, { serviceId, currentPostId });
}

export async function getLatestPosts(count: number = 3): Promise<SanityPost[]> {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0...${count}] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt
    }
  `);
} 
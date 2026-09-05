import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize the Sanity client
// Falls back to the public project defaults so the app works even when the
// VITE_ vars are absent (misconfigured deploys, stale dev servers, etc.).
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'ykv73jdw',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'meiflume',
  apiVersion: '2023-05-03',
  useCdn: true,
  token: import.meta.env.VITE_SANITY_TOKEN,
  perspective: 'published',
  stega: false
});

// Initialize the image URL builder
const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export const urlFor = (source: any) => builder.image(source);

// Resolve an image that may be a Sanity asset object OR a plain URL string
// (e.g. fallback content). URL strings are returned as-is; asset objects are
// transformed via the URL builder. Returns '' when the source is empty.
export const imageSrc = (
  source: string | { asset?: { _ref?: string } } | null | undefined,
  width = 1600,
  quality = 80,
): string => {
  if (!source) return '';
  if (typeof source === 'string') return source;
  if (source.asset && source.asset._ref) {
    try {
      return urlFor(source).width(width).quality(quality).url();
    } catch {
      return String(source.asset._ref);
    }
  }
  return '';
};

// Interface for blog post data
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

// Function to fetch all blog posts
export const getPosts = async (): Promise<BlogPost[]> => {
  try {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      "id": _id,
      title,
      excerpt,
      mainImage,
      "date": publishedAt,
      author,
      "category": categories[0],
      "slug": slug.current
    }`;

    const posts = await client.fetch(query);
    return posts.map((post: any) => ({
      ...post,
      content: '', // Content is not needed in the list view
      image: post.mainImage ? urlFor(post.mainImage).width(800).quality(80).url() : null
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

// Function to fetch a single blog post by slug
export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      "id": _id,
      title,
      excerpt,
      content,
      mainImage,
      "date": publishedAt,
      author,
      "category": categories[0],
      "slug": slug.current
    }`;

    const post = await client.fetch(query, { slug });
    if (!post) return null;

    return {
      ...post,
      image: post.mainImage ? urlFor(post.mainImage).width(1200).quality(90).url() : null,
      content: post.content || post.excerpt // Fallback to excerpt if no content
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}; 
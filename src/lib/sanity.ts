import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize the Sanity client
export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
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

// Interface for blog post data
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
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
      "image": mainImage.asset->url,
      "date": publishedAt,
      author,
      "category": categories[0],
      "slug": slug.current
    }`;

    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}; 
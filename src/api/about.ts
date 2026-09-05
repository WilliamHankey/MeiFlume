import { client } from '@/lib/sanity';

export interface SanityCoreValue {
  title: string;
  description: string;
}

export interface SanityAboutSection {
  title: string;
  content: string;
}

export interface SanityAbout {
  _id: string;
  heroTitle?: string;
  heroDescription?: string;
  heroImage?: any;
  mission?: string;
  vision?: string;
  coreValues?: SanityCoreValue[];
  additionalSections?: SanityAboutSection[];
}

export async function getAbout(): Promise<SanityAbout | null> {
  return client.fetch(`
    *[_type == "about"][0] {
      _id,
      heroTitle,
      heroDescription,
      heroImage,
      mission,
      vision,
      coreValues,
      additionalSections
    }
  `);
}
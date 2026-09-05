import { client } from '@/lib/sanity';

export interface SanitySocialLink {
  platform: string;
  url: string;
}

const social = {
  Instagram: 'Instagram',
  Linkedin: 'Linkedin',
  LinkedIn: 'Linkedin',
  'Twitter / X': 'Twitter',
  Twitter: 'Twitter',
  Facebook: 'Facebook',
  YouTube: 'Youtube',
  Youtube: 'Youtube',
  TikTok: 'Music2',
  Website: 'Link',
};

// Returns the lucide icon name for a given platform label
export const socialIconName = (platform: string): string => {
  if (!platform) return 'Link';
  return social[platform.trim() as keyof typeof social] || 'Link';
};

export const websiteIconNames = ['Instagram', 'Linkedin', 'Twitter', 'Facebook', 'Youtube', 'Music2', 'Link'];

export const socialPlatformLabel = (platform: string): string => {
  if (!platform) return 'Website';
  const label = platform.trim();
  return label.charAt(0).toUpperCase() + label.slice(1).replace(/\s*\/\s*X$/, '');
};
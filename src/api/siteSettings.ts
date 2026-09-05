import { client } from '@/lib/sanity';
import type { SanitySocialLink } from '@/lib/social';

export interface SanitySiteSettings {
  _id: string;
  companyName?: string;
  email?: string;
  phone?: string;
  phoneRaw?: string;
  whatsappNumber?: string;
  address?: string;
  footerDescription?: string;
  socialLinks?: SanitySocialLink[];
}

export const FALLBACK_SITE_SETTINGS: SanitySiteSettings = {
  _id: 'fallback',
  companyName: 'MeiFlume',
  email: 'info@meiflume.com',
  phone: '+27 (72) 030-2071',
  phoneRaw: '27720302071',
  whatsappNumber: '27720302071',
  address: 'Paarl, Western Cape, 7646, South Africa',
  footerDescription:
    'Web development, software development and web app development for businesses in Paarl, Cape Town and the Winelands.',
  socialLinks: [
    { platform: 'Instagram', url: 'https://www.instagram.com/meiflumedev/' },
    { platform: 'LinkedIn', url: 'https://www.linkedin.com/company/meiflume' },
    { platform: 'YouTube', url: 'https://www.youtube.com/@MeiFlume' },
  ],
};

export async function getSiteSettings(): Promise<SanitySiteSettings> {
  try {
    const settings = await client.fetch(`
      *[_type == "siteSettings"][0] {
        _id,
        companyName,
        email,
        phone,
        phoneRaw,
        whatsappNumber,
        address,
        footerDescription,
        socialLinks
      }
    `);
    return settings || FALLBACK_SITE_SETTINGS;
  } catch (error) {
    console.error('Error fetching site settings:', error);
    return FALLBACK_SITE_SETTINGS;
  }
}

// Build a WhatsApp Web link from a phone number (accepts local or international formats)
export const whatsappLink = (number: string | undefined): string => {
  const digits = (number || '').replace(/\D/g, '');
  if (!digits) return 'https://wa.me';
  const normalized = digits.startsWith('0') ? `27${digits.slice(1)}` : digits;
  return `https://wa.me/${normalized}`;
};
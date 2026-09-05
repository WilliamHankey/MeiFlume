import { client } from '@/lib/sanity';

export interface SanityNewsletterSettings {
  _id: string;
  title?: string;
  description?: string;
  buttonText?: string;
  placeholder?: string;
  successMessage?: string;
  enabled?: boolean;
}

export const FALLBACK_NEWSLETTER_SETTINGS: SanityNewsletterSettings = {
  _id: 'fallback',
  title: 'Stay Updated',
  description: 'Subscribe to our newsletter for the latest insights and updates.',
  buttonText: 'Subscribe',
  placeholder: 'Enter your email',
  successMessage: "Thanks for subscribing! We'll be in touch with the latest updates.",
  enabled: true,
};

export async function getNewsletterSettings(): Promise<SanityNewsletterSettings> {
  try {
    const settings = await client.fetch(`
      *[_type == "newsletter"][0] {
        _id,
        title,
        description,
        buttonText,
        placeholder,
        successMessage,
        enabled
      }
    `);
    return settings || FALLBACK_NEWSLETTER_SETTINGS;
  } catch (error) {
    console.error('Error fetching newsletter settings:', error);
    return FALLBACK_NEWSLETTER_SETTINGS;
  }
}

export async function subscribeToNewsletter(input: {
  email: string;
  name?: string;
}): Promise<{ success: boolean; error?: unknown }> {
  try {
    await client.create({
      _type: 'newsletterSubscriber',
      email: input.email,
      name: input.name || '',
      subscribedAt: new Date().toISOString(),
      status: 'active',
      source: 'footer',
    });
    return { success: true };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { success: false, error };
  }
}
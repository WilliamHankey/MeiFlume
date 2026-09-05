import { client } from '@/lib/sanity';

export type PolicyType = 'privacy' | 'terms' | 'cookie';

export interface SanityPolicy {
  _id: string;
  type: PolicyType;
  title?: string;
  lastUpdated?: string;
  intro?: string;
  content?: string;
  contactEmail?: string;
}

export async function getPolicy(type: PolicyType): Promise<SanityPolicy | null> {
  return client.fetch(`
    *[_type == "policy" && type == $type][0] {
      _id,
      type,
      title,
      lastUpdated,
      intro,
      content,
      contactEmail
    }
  `, { type });
}

// Parse plain text that uses one blank line between paragraphs and "- " for bullets
export function parseText(text: string): { paragraphs: string[]; lists: { items: string[] }[] } {
  const blocks: { paragraphs: string[]; lists: { items: string[] }[] } = {
    paragraphs: [],
    lists: [],
  };

  if (!text) return blocks;

  const rawBlocks = text.split(/\n\s*\n/);

  for (const raw of rawBlocks) {
    const lines = raw
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean);

    if (lines.length === 0) continue;

    const bulletLines = lines.filter((l) => l.startsWith('- '));
    if (bulletLines.length === lines.length && bulletLines.length > 0) {
      blocks.lists.push({ items: bulletLines.map((l) => l.replace(/^-\s+/, '')) });
    } else {
      blocks.paragraphs.push(lines.join(' '));
    }
  }

  return blocks;
}
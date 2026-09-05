import { Instagram, Linkedin, Twitter, Facebook, Youtube, Music2, Link as LinkIcon, type LucideIcon } from 'lucide-react';
import { socialIconName } from '@/lib/social';

const iconMap: Record<string, LucideIcon> = {
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Music2,
  Link: LinkIcon,
};

interface SocialIconProps {
  platform?: string;
  url?: string;
  size?: number;
  className?: string;
  ariaLabel?: string;
}

export const SocialIcon = ({ platform, url, size = 20, className, ariaLabel }: SocialIconProps) => {
  const iconName = socialIconName(platform || '');
  const Icon = iconMap[iconName] || LinkIcon;
  const label = ariaLabel || platform || 'Website';

  if (!url) {
    return (
      <span className={className} aria-label={label}>
        <Icon size={size} />
      </span>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className}
    >
      <Icon size={size} />
    </a>
  );
};
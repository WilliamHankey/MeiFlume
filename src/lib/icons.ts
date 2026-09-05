import {
  Code,
  Globe,
  PenTool,
  BrainCircuit,
  MessageSquare,
  Palette,
  Smartphone,
  Rocket,
  Search,
  Database,
  Layers,
  Sparkles,
  ShoppingCart,
  Megaphone,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Code,
  Globe,
  PenTool,
  BrainCircuit,
  MessageSquare,
  Palette,
  Smartphone,
  Rocket,
  Search,
  Database,
  Layers,
  Sparkles,
  ShoppingCart,
  Megaphone,
};

export const getServiceIcon = (name?: string): LucideIcon => {
  if (name && iconMap[name]) return iconMap[name];
  return Code;
};
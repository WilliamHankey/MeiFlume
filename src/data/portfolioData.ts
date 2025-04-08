export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  slug: string;
  image: string;
  link?: string;
  description: string;
  client: string;
  challenge: string;
  solution: string;
  timeline: string;
  date: string;
  results: {
    stat: string;
    description: string;
  }[];
  services: string[];
  technologies: string[];
  gallery: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "ui-printing",
    title: "U&I Printing Website Redesign",
    category: "Web Development",
    slug: "ui-printing",
    image: "/assets/U&IPrinting/Cover.png",
    link: "https://www.uandiprinting.com/",
    description: "A modern, responsive website redesign for U&I Printing, focusing on user experience and conversion optimization.",
    client: "U&I Printing",
    challenge: "Create a modern, user-friendly website that showcases printing services effectively.",
    solution: "Developed a responsive design with clear service categorization and an intuitive quote request system.",
    timeline: "3 months",
    date: "2024-03-01",
    results: [
      {
        stat: "40%",
        description: "Increase in online quote requests"
      },
      {
        stat: "25%",
        description: "Improvement in user engagement"
      }
    ],
    services: ["Web Development", "UI/UX Design", "Content Strategy"],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    gallery: [
      "/assets/U%26IPrinting/Home.png",
      "/assets/U%26IPrinting/Services.png",
      "/assets/U%26IPrinting/Contact.png"
    ]
  },
  {
    id: "innovate-solutions-website",
    title: "New-U Welness & Beauty Website",
    category: "Web Development",
    slug: "innovate-solutions-website",
    image: "assets/NewU/Cover.png",
    link: "https://new-u-pi.vercel.app/",
    description: "A modern, responsive website for a consulting firm featuring a custom CMS, interactive elements, and optimized performance.",
    client: "Innovate Solutions",
    challenge: "Innovate Solutions needed a complete website redesign that would showcase their consulting services, improve user engagement, and incorporate a content management system for easy updates. The site needed to be fast, mobile-responsive, and optimized for search engines.",
    solution: "We designed and developed a modern, responsive website with a clean aesthetic and intuitive navigation. The site features interactive elements, case studies, team profiles, and a custom CMS for content management. We implemented performance optimizations and SEO best practices throughout the site.",
    timeline: "3 months",
    date: "2024-02-15",
    results: [
      {
        stat: "155%",
        description: "Increase in organic traffic"
      },
      {
        stat: "89%",
        description: "Improvement in page load time"
      },
      {
        stat: "3x",
        description: "Increase in lead generation"
      }
    ],
    services: [
      "Web Design",
      "Front-end Development",
      "Back-end Development",
      "CMS Integration",
      "SEO Optimization"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Strapi CMS", "Vercel"],
    gallery: [
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=3269&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=3543&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=4076&auto=format&fit=crop"
    ]
  },
  {
    id: "global-connect-brand-identity",
    title: "Alenor's Catering Brand Indentity",
    category: "Brand Design",
    slug: "global-connect-brand-identity",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=3271&auto=format&fit=crop",
    description: "A complete brand identity package including logo design, color palette, typography, and brand guidelines.",
    client: "Global Connect",
    challenge: "Global Connect, a telecommunications company, needed a complete brand overhaul to reposition themselves in the market. They needed a modern, cohesive brand identity that would resonate with their target audience and differentiate them from competitors.",
    solution: "We developed a comprehensive brand identity system including a distinctive logo, a vibrant color palette, custom typography, and detailed brand guidelines. The new identity was designed to be flexible across all digital and physical touchpoints while conveying reliability, innovation, and global reach.",
    timeline: "2 months",
    date: "2024-01-15",
    results: [
      {
        stat: "94%",
        description: "Brand recognition improvement"
      },
      {
        stat: "67%",
        description: "Increase in customer engagement"
      },
      {
        stat: "45%",
        description: "Growth in market share"
      }
    ],
    services: [
      "Brand Strategy",
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Marketing Collateral"
    ],
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy", "Market Research"],
    gallery: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=3271&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=3270&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=3271&auto=format&fit=crop"
    ]
  },
  {
    id: "alenor-catering-website-development",
    title: "Alenor's Catering Website",
    category: "Website Development",
    slug: "alenor-catering-website-development",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=3271&auto=format&fit=crop",
    link: "https://alenorscatering.co.za/",
    description: "A complete brand identity package including logo design, color palette, typography, and brand guidelines.",
    client: "Global Connect",
    challenge: "Global Connect, a telecommunications company, needed a complete brand overhaul to reposition themselves in the market. They needed a modern, cohesive brand identity that would resonate with their target audience and differentiate them from competitors.",
    solution: "We developed a comprehensive brand identity system including a distinctive logo, a vibrant color palette, custom typography, and detailed brand guidelines. The new identity was designed to be flexible across all digital and physical touchpoints while conveying reliability, innovation, and global reach.",
    timeline: "2 months",
    date: "2024-01-15",
    results: [
      {
        stat: "94%",
        description: "Brand recognition improvement"
      },
      {
        stat: "67%",
        description: "Increase in customer engagement"
      },
      {
        stat: "45%",
        description: "Growth in market share"
      }
    ],
    services: [
      "Brand Strategy",
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Marketing Collateral"
    ],
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy", "Market Research"],
    gallery: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=3271&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=3270&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=3271&auto=format&fit=crop"
    ]
  },
  {
    id: "meer-consulting-website-development",
    title: "Meer Consulting Website",
    category: "Website Development",
    slug: "meer-consulting-website-development",
    image: "assets/MeerConsulting/Cover.png",
    link: "https://meerconsulting.co.za/",
    description: "A complete brand identity package including logo design, color palette, typography, and brand guidelines.",
    client: "Global Connect",
    challenge: "Global Connect, a telecommunications company, needed a complete brand overhaul to reposition themselves in the market. They needed a modern, cohesive brand identity that would resonate with their target audience and differentiate them from competitors.",
    solution: "We developed a comprehensive brand identity system including a distinctive logo, a vibrant color palette, custom typography, and detailed brand guidelines. The new identity was designed to be flexible across all digital and physical touchpoints while conveying reliability, innovation, and global reach.",
    timeline: "2 months",
    date: "2024-01-15",
    results: [
      {
        stat: "94%",
        description: "Brand recognition improvement"
      },
      {
        stat: "67%",
        description: "Increase in customer engagement"
      },
      {
        stat: "45%",
        description: "Growth in market share"
      }
    ],
    services: [
      "Brand Strategy",
      "Logo Design",
      "Visual Identity",
      "Brand Guidelines",
      "Marketing Collateral"
    ],
    technologies: ["Adobe Creative Suite", "Figma", "Brand Strategy", "Market Research"],
    gallery: [
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=3271&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=3270&auto=format&fit=crop", 
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=3271&auto=format&fit=crop"
    ]
  }
];

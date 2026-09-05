import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@sanity/client';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ---- Load .env (no dotenv dependency) ----
function loadEnv() {
  const env = {};
  const envPath = path.join(ROOT, '.env');
  if (fs.existsSync(envPath)) {
    for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
      const match = line.match(/^\s*([\w.]+)\s*=\s*(.*?)\s*$/);
      if (match) {
        env[match[1]] = match[2].replace(/^["']|["']$/g, '');
      }
    }
  }
  return env;
}

const env = loadEnv();
const token = process.env.SANITY_TOKEN || env.VITE_SANITY_TOKEN;

if (!token) {
  console.error(
    'Missing Sanity token. Set VITE_SANITY_TOKEN in .env or export SANITY_TOKEN before running.'
  );
  process.exit(1);
}

const client = createClient({
  projectId: 'ykv73jdw',
  dataset: 'meiflume',
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
});

const log = (label, id) => console.log(`  ${label.padEnd(20)} ${id}`);
const warn = (msg) => console.warn(`  ! ${msg}`);

// ---- Image upload helpers ----
async function uploadRemote(url, contentType) {
  const res = await fetch(url, { redirect: 'follow' });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  return client.assets.upload('image', buffer, {
    contentType: res.headers.get('content-type') || contentType || 'image/jpeg',
  });
}

async function uploadLocal(filePath, contentType) {
  const buffer = fs.readFileSync(filePath);
  return client.assets.upload('image', buffer, { contentType: contentType || 'image/png' });
}

async function uploadImage(urlOrPath, label, contentType) {
  try {
    if (/^https?:\/\//.test(urlOrPath)) {
      const asset = await uploadRemote(urlOrPath, contentType);
      return { _type: 'image', asset: { _ref: asset._id } };
    }
    const asset = await uploadLocal(urlOrPath, contentType);
    return { _type: 'image', asset: { _ref: asset._id } };
  } catch (err) {
    warn(`Could not upload image for ${label}: ${err.message}`);
    return undefined;
  }
}

// ---- Data ----
const SERVICES = [

  {
    _type: 'service',
    _id: 'service.software',
    title: 'Software Development',
    slug: { current: 'software' },
    shortDescription:
      'Custom software solutions, from mobile apps to enterprise platforms, tailored to your business needs.',
    description:
      'Custom software solutions tailored to your specific business needs, from mobile apps to enterprise platforms.',
    longDescription:
      'Our software development service delivers tailored solutions that address your unique business challenges. We combine industry best practices, cutting-edge technologies, and agile methodologies to create robust, scalable, and secure software applications that drive your business forward.',
    icon: 'Code',
    bgColor: 'bg-blue-500',
    features: [
      'Custom mobile app development (iOS & Android)',
      'Enterprise software solutions',
      'Legacy system modernization',
      'Cloud application development',
      'API development and integration',
    ],
    bannerImageUrl:
      'https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    process: [
      {
        title: 'Discovery & Analysis',
        description:
          'We begin by understanding your business objectives, target users, and technical requirements to define the scope and goals of your software project.',
        icon: '🔍',
      },
      {
        title: 'Design & Architecture',
        description:
          'Our team creates detailed technical specifications, system architecture, and UI/UX designs that serve as the blueprint for development.',
        icon: '📐',
      },
      {
        title: 'Development & Testing',
        description:
          'Using agile methodologies, we develop your software in iterative cycles, with continuous testing and quality assurance at each stage.',
        icon: '💻',
      },
      {
        title: 'Deployment & Integration',
        description:
          'We ensure smooth deployment of your software and seamless integration with existing systems and third-party services.',
        icon: '🚀',
      },
      {
        title: 'Support & Maintenance',
        description:
          'Our relationship continues after launch with ongoing support, monitoring, updates, and enhancements to keep your software performing optimally.',
        icon: '🛠️',
      },
    ],
    deliverables: [
      {
        title: 'Functional Software Application',
        description:
          'A fully tested, secure, and scalable software solution that meets your business requirements and user needs.',
      },
      {
        title: 'Source Code & Documentation',
        description:
          'Complete source code ownership along with comprehensive documentation for future reference and maintenance.',
      },
      {
        title: 'User Training',
        description:
          'Training sessions for your team to ensure they can effectively use and manage the new software.',
      },
      {
        title: 'Support Package',
        description:
          'A tailored support and maintenance plan to address issues, implement updates, and optimize performance.',
      },
    ],
    faq: [
      {
        question: 'How long does it take to develop custom software?',
        answer:
          'Development timelines vary based on complexity, features, and scope. Simple applications may take 3-4 months, while complex enterprise solutions can take 6-12 months or more. We provide detailed timelines during the discovery phase.',
      },
      {
        question: 'Do you offer ongoing maintenance after the software is launched?',
        answer:
          'Yes, we offer flexible maintenance packages that include bug fixes, security updates, performance optimization, and feature enhancements to keep your software running smoothly and efficiently.',
      },
      {
        question: 'Can you help migrate data from our existing systems?',
        answer:
          'Absolutely. We have extensive experience in data migration and can help transfer your data from legacy systems to your new software, ensuring data integrity and minimal disruption to your operations.',
      },
    ],
    order: 1,
    featured: true,
  },

  {
    _type: 'service',
    _id: 'service.web',
    title: 'Web Development',
    slug: { current: 'web' },
    shortDescription:
      'Responsive, fast-loading websites and web applications built with cutting-edge technologies.',
    description:
      'Responsive, fast-loading websites and web applications built with cutting-edge technologies.',
    longDescription:
      'We create modern, responsive websites and web applications that deliver exceptional user experiences across all devices. Our web development approach emphasizes performance, accessibility, and search engine optimization to ensure your digital presence effectively serves your business goals.',
    icon: 'Globe',
    bgColor: 'bg-indigo-500',
    features: [
      'Responsive website design & development',
      'E-commerce solutions',
      'CMS implementation (WordPress, Shopify, etc.)',
      'Progressive Web Apps (PWAs)',
      'Performance optimization & SEO',
    ],
    bannerImageUrl:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    process: [
      {
        title: 'Strategy & Planning',
        description:
          'We establish your website goals, target audience, content strategy, and technical requirements to create a comprehensive project plan.',
        icon: '📋',
      },
      {
        title: 'Wireframing & Design',
        description:
          'Our design team creates wireframes and visual designs that align with your brand identity and optimize user experience.',
        icon: '🎨',
      },
      {
        title: 'Development',
        description:
          'We build your website or web application using modern frameworks and best practices for performance, security, and maintainability.',
        icon: '⚙️',
      },
      {
        title: 'Content Integration & Testing',
        description:
          'We integrate your content, perform cross-browser and cross-device testing, and conduct thorough quality assurance.',
        icon: '🔄',
      },
      {
        title: 'Launch & Post-Launch Support',
        description:
          'After a successful launch, we provide ongoing support, monitoring, and optimization to ensure your website continues to perform effectively.',
        icon: '📈',
      },
    ],
    deliverables: [
      {
        title: 'Responsive Website/Web Application',
        description:
          'A fully functional, mobile-responsive website or web application that provides an exceptional user experience across all devices.',
      },
      {
        title: 'Content Management System',
        description:
          'If applicable, a user-friendly CMS that allows you to easily update and manage your website content.',
      },
      {
        title: 'SEO Foundation',
        description:
          'On-page SEO elements including optimized site structure, meta tags, schema markup, and performance optimization for better search visibility.',
      },
      {
        title: 'Analytics Setup',
        description:
          'Implementation of analytics tools to track visitor behavior, conversion rates, and other key performance indicators.',
      },
    ],
    faq: [
      {
        question: 'What technologies do you use for web development?',
        answer:
          'We use modern technologies like React, Next.js, Vue.js, and Node.js, along with content management systems like WordPress when appropriate. Our technology choices are guided by your specific requirements and what will best serve your project goals.',
      },
      {
        question: 'How do you ensure websites are secure?',
        answer:
          'We implement security best practices including SSL encryption, secure authentication methods, regular security updates, input validation, and protection against common vulnerabilities like cross-site scripting and SQL injection.',
      },
      {
        question: 'Can you redesign our existing website?',
        answer:
          "Yes, we offer website redesign services that can modernize your existing site's appearance, improve functionality, enhance user experience, and optimize performance while preserving or improving your SEO rankings.",
      },
    ],
    order: 2,
    featured: true,
  },

  {
    _type: 'service',
    _id: 'service.design',
    title: 'Graphic Design',
    slug: { current: 'design' },
    shortDescription:
      "Brand identity, UI/UX design, and visual assets that communicate your brand's unique value.",
    description: "Brand identity, UI/UX design, and visual assets that communicate your brand's unique value.",
    longDescription:
      "Our graphic design services help you communicate effectively through compelling visuals that resonate with your audience. From brand identity systems to marketing materials, we create cohesive, professional designs that elevate your brand and drive engagement.",
    icon: 'PenTool',
    bgColor: 'bg-purple-500',
    features: [
      'Brand identity design',
      'UI/UX design for web & mobile',
      'Print & digital marketing materials',
      'Illustration & iconography',
      'Motion graphics & animation',
    ],
    bannerImageUrl:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    process: [
      {
        title: 'Creative Brief & Research',
        description:
          'We begin by understanding your brand, target audience, competitors, and design objectives to inform our creative direction.',
        icon: '📝',
      },
      {
        title: 'Concept Development',
        description:
          'Our designers create initial concepts and design directions based on research insights and creative strategy.',
        icon: '💡',
      },
      {
        title: 'Design Refinement',
        description:
          "Working from your feedback, we refine and iterate on the selected design direction to perfect every detail.",
        icon: '✏️',
      },
      {
        title: 'Finalization',
        description:
          'We prepare final design assets in appropriate formats for different applications and use cases.',
        icon: '✅',
      },
      {
        title: 'Implementation Support',
        description:
          'We provide guidance on how to effectively implement and maintain design consistency across various touchpoints.',
        icon: '🔄',
      },
    ],
    deliverables: [
      {
        title: 'Brand Identity System',
        description:
          'Logo, color palette, typography, and visual elements that form a cohesive brand identity system.',
      },
      {
        title: 'Design Assets',
        description:
          'High-quality design files in various formats suitable for print, digital, and other applications.',
      },
      {
        title: 'Brand Guidelines',
        description:
          'A comprehensive guide documenting how to consistently apply your visual identity across all materials.',
      },
      {
        title: 'Marketing Materials',
        description:
          'Designs for business cards, letterheads, brochures, social media graphics, and other marketing collateral as needed.',
      },
    ],
    faq: [
      {
        question: 'What makes a good logo design?',
        answer:
          'A good logo should be simple, memorable, timeless, versatile, and appropriate for your industry and target audience. It should work well at different sizes and in both color and black and white versions.',
      },
      {
        question: 'How long does a typical branding project take?',
        answer:
          'A comprehensive branding project typically takes 4-8 weeks, depending on the scope. This includes research, concept development, refinement, and finalization of the brand identity system and guidelines.',
      },
      {
        question: 'Do you provide editable source files?',
        answer:
          'Yes, we provide editable source files for all design work, giving you full ownership of your brand assets. We can also provide files in various formats to suit different applications and vendors.',
      },
    ],
    order: 3,
    featured: true,
  },

  {
    _type: 'service',
    _id: 'service.brand',
    title: 'Brand Strategy',
    slug: { current: 'brand' },
    shortDescription:
      "Strategic positioning and messaging that helps your brand stand out in a crowded marketplace.",
    description: "Strategic positioning and messaging that helps your brand stand out in a crowded marketplace.",
    longDescription:
      "Our brand strategy service helps you define your brand's unique position in the market and develop compelling messaging that resonates with your target audience. We create the strategic foundation that guides all your marketing and communication efforts for consistent, effective brand building.",
    icon: 'BrainCircuit',
    bgColor: 'bg-pink-500',
    features: [
      'Brand positioning & messaging',
      'Competitive analysis',
      'Customer persona development',
      'Brand voice & tone guidelines',
      'Marketing strategy development',
    ],
    bannerImageUrl:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    process: [
      {
        title: 'Brand Audit & Research',
        description:
          'We analyze your current brand positioning, audience perceptions, competitive landscape, and market opportunities.',
        icon: '🔍',
      },
      {
        title: 'Strategy Development',
        description:
          'Based on research insights, we develop your brand positioning, value proposition, messaging framework, and brand architecture.',
        icon: '📊',
      },
      {
        title: 'Brand Storytelling',
        description:
          'We craft your brand narrative, including your origin story, mission, vision, and the unique value you bring to customers.',
        icon: '📖',
      },
      {
        title: 'Implementation Planning',
        description:
          'We create a roadmap for implementing your brand strategy across all touchpoints and communication channels.',
        icon: '🗺️',
      },
      {
        title: 'Measurement Framework',
        description:
          'We establish metrics and KPIs to track the effectiveness of your brand strategy and guide future refinements.',
        icon: '📈',
      },
    ],
    deliverables: [
      {
        title: 'Brand Strategy Document',
        description:
          'A comprehensive strategy that defines your brand positioning, target audience, value proposition, and competitive differentiation.',
      },
      {
        title: 'Messaging Framework',
        description:
          'Core messages, taglines, elevator pitch, and communication guidelines for consistent brand voice across all channels.',
      },
      {
        title: 'Brand Story',
        description:
          "A compelling narrative that communicates your brand's purpose, values, and unique perspective in a way that resonates with your audience.",
      },
      {
        title: 'Implementation Roadmap',
        description:
          'A strategic plan for bringing your brand to life across all customer touchpoints and internal culture.',
      },
    ],
    faq: [
      {
        question: "What's the difference between brand strategy and marketing strategy?",
        answer:
          "Brand strategy defines who you are as a company—your purpose, values, positioning, and personality. Marketing strategy focuses on how you promote your products or services to achieve specific business goals. Brand strategy is long-term and foundational, while marketing strategy is more tactical and campaign-oriented.",
      },
      {
        question: 'How often should we revisit our brand strategy?',
        answer:
          'While core brand elements should remain relatively consistent, we recommend reviewing your brand strategy every 3-5 years or during significant business changes like mergers, new product categories, or major market shifts to ensure it remains relevant and effective.',
      },
      {
        question: 'How do you measure the success of a brand strategy?',
        answer:
          'We use both qualitative and quantitative metrics, including brand awareness, perception studies, sentiment analysis, customer acquisition costs, retention rates, and overall business growth to measure the effectiveness of your brand strategy.',
      },
    ],
    order: 4,
    featured: false,
  },

  {
    _type: 'service',
    _id: 'service.social',
    title: 'Social Media Services',
    slug: { current: 'social' },
    shortDescription:
      'Content creation, community management, and growth strategies for major social platforms.',
    description:
      'Content creation, community management, and growth strategies for major social platforms.',
    longDescription:
      'Our social media services help you build meaningful connections with your audience across key platforms. We develop and execute strategic content plans, manage online communities, and implement growth tactics that increase engagement and drive conversions.',
    icon: 'MessageSquare',
    bgColor: 'bg-rose-500',
    features: [
      'Social media strategy development',
      'Content creation & curation',
      'Community management',
      'Paid social advertising',
      'Analytics & performance reporting',
    ],
    bannerImageUrl:
      'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    process: [
      {
        title: 'Social Media Audit',
        description:
          'We assess your current social presence, content performance, audience demographics, and competitive landscape.',
        icon: '📊',
      },
      {
        title: 'Strategy Development',
        description:
          'We create a tailored social media strategy that aligns with your business goals, target audience, and brand voice.',
        icon: '🎯',
      },
      {
        title: 'Content Planning & Creation',
        description:
          'Our team develops engaging content calendars and creates high-quality posts tailored to each platform.',
        icon: '📝',
      },
      {
        title: 'Community Management',
        description:
          'We actively engage with your audience, respond to comments and messages, and foster a positive community around your brand.',
        icon: '💬',
      },
      {
        title: 'Analysis & Optimization',
        description:
          'We continuously monitor performance metrics and refine our approach to maximize engagement and ROI.',
        icon: '📈',
      },
    ],
    deliverables: [
      {
        title: 'Social Media Strategy',
        description:
          'A comprehensive strategy document outlining platform selection, content pillars, posting frequency, and growth tactics.',
      },
      {
        title: 'Content Calendar',
        description:
          'A detailed schedule of planned content, including topics, formats, and optimal posting times.',
      },
      {
        title: 'Original Content',
        description:
          "High-quality posts, graphics, captions, and hashtags tailored to each platform's best practices.",
      },
      {
        title: 'Performance Reports',
        description:
          'Regular analytics reports tracking key metrics, audience growth, engagement rates, and recommendations for optimization.',
      },
    ],
    faq: [
      {
        question: 'Which social media platforms should my business be on?',
        answer:
          'Platform selection depends on your business goals, target audience, industry, and content capabilities. We help you identify the most effective platforms for reaching your specific audience rather than spreading resources too thin across too many channels.',
      },
      {
        question: 'How often should we post on social media?',
        answer:
          'Posting frequency varies by platform and audience, but consistency is more important than volume. We develop a sustainable posting schedule that maintains audience engagement without sacrificing content quality.',
      },
      {
        question: 'How do you handle negative comments or feedback?',
        answer:
          "We address negative feedback promptly and professionally, following your brand's communication guidelines. We view criticism as an opportunity to demonstrate excellent customer service and gather valuable insights for improvement.",
      },
    ],
    order: 5,
    featured: false,
  },
];

const CLIENT_LOGOS = [
  {
    _type: 'clientLogo',
    _id: 'clientLogo.fivelens',
    name: 'FiveLens',
    url: 'https://fivelens.co.za/wp-content/uploads/2021/08/Asset-2FL-logo-300x109.png',
    link: 'https://fivelens.co.za',
    order: 1,
  },
  { _type: 'clientLogo', _id: 'clientLogo.new-u', name: 'New-U', file: 'NewULogo.png', order: 2 },
  { _type: 'clientLogo', _id: 'clientLogo.meer-consulting', name: 'Meer Consulting', file: 'MeerConsultingLogo.png', order: 3 },
  {
    _type: 'clientLogo',
    _id: 'clientLogo.jeanne-meer',
    name: 'Jeanne Meer Consulting',
    file: 'JeanneMeerConsultingLogo.png',
    order: 4,
  },
  { _type: 'clientLogo', _id: 'clientLogo.ui-printing', name: 'U&IPrinting', file: 'U&IPrintingLogo.png', order: 5 },
  { _type: 'clientLogo', _id: 'clientLogo.alenors-catering', name: 'Alenors Catering', file: 'AlenorsCateringLogo.png', order: 6 },
];

const TESTIMONIALS = [
  {
    _type: 'testimonial',
    _id: 'testimonial.t1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    message:
      "MeiFlume transformed our digital presence completely. Their team's expertise in software development and brand strategy helped us increase our online visibility by 200%.",
    order: 1,
  },
  {
    _type: 'testimonial',
    _id: 'testimonial.t2',
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'Innovate Solutions',
    message:
      "Working with MeiFlume has been a game-changer for our business. Their web development team created a stunning, high-performance site that has significantly improved our conversion rates.",
    order: 2,
  },
  {
    _type: 'testimonial',
    _id: 'testimonial.t3',
    name: 'Emily Rodriguez',
    role: 'Brand Manager',
    company: 'Global Connect',
    message:
      "The brand identity MeiFlume crafted for us perfectly captures our company's values and vision. Their attention to detail and creative approach exceeded our expectations.",
    order: 3,
  },
];

const PORTFOLIO_CATEGORIES = [
  { _type: 'portfolioCategory', _id: 'portfolioCategory.website', name: 'Website', slug: { current: 'website' }, order: 1 },
  {
    _type: 'portfolioCategory',
    _id: 'portfolioCategory.webapp',
    name: 'Web App Development',
    slug: { current: 'web-app-development' },
    order: 2,
  },
  { _type: 'portfolioCategory', _id: 'portfolioCategory.brand', name: 'Brand Design', slug: { current: 'brand-design' }, order: 3 },
  { _type: 'portfolioCategory', _id: 'portfolioCategory.uiux', name: 'UI/UX Design', slug: { current: 'ui-ux-design' }, order: 4 },
  { _type: 'portfolioCategory', _id: 'portfolioCategory.ecommerce', name: 'E-commerce', slug: { current: 'ecommerce' }, order: 5 },
  { _type: 'portfolioCategory', _id: 'portfolioCategory.social', name: 'Social Media', slug: { current: 'social-media' }, order: 6 },
];

const ABOUT = {
  _type: 'about',
  _id: 'about.default',
  heroTitle: 'About MeiFlume',
  heroDescription:
    "We're a team of passionate digital transformation experts dedicated to helping businesses thrive in the digital age. From our home in Paarl, we serve clients across Cape Town, the Winelands, and beyond.",
  mission:
    "To empower businesses with innovative digital solutions that drive growth, enhance customer experiences, and create lasting value in an ever-evolving digital landscape.",
  vision:
    "To be the leading digital transformation partner in the Western Cape that helps organizations navigate technological change and achieve sustainable success in the digital age.",
  coreValues: [
    {
      title: 'Innovation',
      description: 'We embrace new technologies and approaches to solve complex problems.',
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we deliver.',
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients to achieve shared success.',
    },
    {
      title: 'Integrity',
      description: 'We uphold honesty and transparency in all our interactions.',
    },
    {
      title: 'Adaptability',
      description: 'We remain flexible and responsive to changing needs and circumstances.',
    },
    {
      title: 'Client Focus',
      description: "We prioritize understanding and meeting our clients' unique needs.",
    },
  ],
  additionalSections: [
    {
      title: 'Local Expertise, Global Standards',
      content:
        'Based in Paarl, MeiFlume brings world-class web development, software development, and web app development to businesses throughout the Western Cape. Being close to our clients means we understand the local market, build lasting relationships, and deliver solutions that work for South African businesses. While our roots are local, the standards we build to are global — your project benefits from modern technologies, proven methodologies, and a team that genuinely cares about your success.',
    },
    {
      title: 'Why Choose MeiFlume',
      content:
        'Clients across Paarl, Cape Town, and the Winelands choose MeiFlume because we combine technical excellence with a personal approach.\n\n- A dedicated team that treats your business like our own\n- Transparent communication and honest advice throughout your project\n- Solutions built to scale as your business grows\n- Ongoing support long after launch\n\nWe measure our success by the success of the businesses we help build.',
    },
  ],
};

const SITE_SETTINGS = {
  _type: 'siteSettings',
  _id: 'siteSettings.default',
  companyName: 'MeiFlume',
  email: 'info@meiflume.com',
  phone: '+27 (72) 030-2071',
  phoneRaw: '27720302071',
  whatsappNumber: '27720302071',
  address: 'Paarl, Western Cape, 7646, South Africa',
  footerDescription:
    'Web development, software development and web app development for businesses in Paarl, Cape Town and the Winelands.',
  socialLinks: [
    { _key: 'ig', platform: 'Instagram', url: 'https://www.instagram.com/meiflumedev/' },
    { _key: 'li', platform: 'LinkedIn', url: 'https://www.linkedin.com/company/meiflume' },
    { _key: 'yt', platform: 'YouTube', url: 'https://www.youtube.com/@MeiFlume' },
  ],
};

const NEWSLETTER = {
  _type: 'newsletter',
  _id: 'newsletter.default',
  title: 'Stay Updated',
  description: 'Subscribe to our newsletter for the latest insights and updates.',
  buttonText: 'Subscribe',
  placeholder: 'Enter your email',
  successMessage: "Thanks for subscribing! We'll be in touch with the latest updates.",
  enabled: true,
};

const POLICIES = [
  {
    _type: 'policy',
    _id: 'policy.privacy',
    type: 'privacy',
    title: 'Privacy Policy',
    lastUpdated: '2026-09-05',
    contactEmail: 'info@meiflume.com',
    intro:
      'At MeiFlume, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (meiflume.com) or use our services. Please read this policy carefully. If you do not agree with its terms, please do not access the website.',
    content: `
1. Information We Collect

We collect information that you provide directly to us, as well as information collected automatically when you use our website.

Information you provide includes:

- Contact information, such as your name, email address, and phone number
- Business information, such as your company name, role, and project details
- Communication preferences and any messages you send to us
- Any other information you choose to share with us through forms or enquiries

Information collected automatically includes:

- Device and browser information, including IP address and operating system
- Usage data, such as pages visited, time spent, and referral sources
- Cookies and similar technologies, as described in our Cookie Policy

2. How We Use Your Information

We use the information we collect to provide and improve our services. This includes:

- Providing and maintaining our website and services
- Responding to your requests, enquiries, and project requirements
- Sending you marketing communications, where you have consented
- Analysing usage patterns to improve our website and user experience
- Complying with legal and regulatory obligations
- Protecting the security and integrity of our website and services

3. Legal Basis for Processing

We process personal information in accordance with the Protection of Personal Information Act (POPIA) and other applicable South African data protection laws.

Our legal bases for processing include your consent, the performance of a contract where you engage us for services, our legitimate interests in operating and improving our business, and compliance with legal obligations.

4. Sharing Your Information

We do not sell your personal information. We may share your information with trusted third parties only where necessary to provide our services, including:

- Service providers who help us operate our website and business
- Professional advisers, such as accountants and lawyers
- Authorities where required by law

Where we share information, we require recipients to protect it and only use it for the purposes we have specified.

5. Cookies and Analytics

We use cookies and similar technologies to improve your experience and understand how our website is used. This includes Google Analytics and our analytics tools. For full details, please read our Cookie Policy.

6. Data Retention

We retain your personal information only for as long as necessary to fulfil the purposes described in this policy, comply with legal obligations, or exercise and defend legal claims.

7. Your Rights

Under POPIA, you have the right to:

- Request access to the personal information we hold about you
- Request correction of inaccurate or incomplete information
- Request deletion of your information, subject to legal requirements
- Object to certain processing activities
- Withdraw consent at any time where processing is based on consent

To exercise any of these rights, please contact us using the details below.

8. Security

We implement appropriate technical and organisational measures to protect your personal information against loss, misuse, unauthorised access, alteration, and disclosure.

9. Children's Privacy

Our website and services are not directed to children under the age of 13, and we do not knowingly collect personal information from children.

10. Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the revised policy on this page with an updated date.

11. Contact Us

If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at info@meiflume.com or write to us at MeiFlume, Paarl, Western Cape, 7646, South Africa.
`.trim(),
  },
  {
    _type: 'policy',
    _id: 'policy.terms',
    type: 'terms',
    title: 'Terms of Service',
    lastUpdated: '2026-09-05',
    contactEmail: 'info@meiflume.com',
    intro:
      'These Terms of Service ("Terms") govern your access to and use of the MeiFlume website at meiflume.com and the services we provide. By accessing our website or engaging us for services, you agree to be bound by these Terms.',
    content: `
1. Agreement to Terms

By accessing or using MeiFlume's website and services, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our website.

2. Our Services

MeiFlume provides digital services including web development, software development, web app development, graphic design, brand strategy, and social media services. Specific deliverables, timelines, and fees are agreed in a separate proposal or contract for each engagement.

3. Intellectual Property

Unless otherwise agreed in writing:

- All intellectual property in materials we create for you, such as source code, designs, and brand assets, is transferred to you upon full payment for the relevant project.
- We retain the right to display completed work in our portfolio unless you have opted out in writing.

You grant us permission to use content you provide (such as logos, text, and images) for the purpose of delivering our services.

4. Client Responsibilities

You agree to:

- Provide accurate and complete information needed to deliver our services
- Make decisions and provide feedback within agreed timeframes
- Obtain all necessary rights and permissions for content you supply
- Ensure compliance with laws applicable to your business and content

Delays in providing required information or feedback may affect project timelines and fees.

5. Quotes, Payment, and Fees

Quotes are provided for specific scopes of work and are valid for the stated period. Payment terms are detailed in your proposal or contract. Unless otherwise agreed, projects require a deposit before work begins, with the balance due on completion.

Late payments may result in suspension of work. Either party may terminate the agreement in accordance with the terms of your contract.

6. Revisions and Change Requests

Our proposals include a defined number of revisions. Change requests or work outside the agreed scope may incur additional charges. We will always provide a quote before commencing out-of-scope work.

7. Third-Party Services

Our work may involve third-party services, platforms, or hosting providers. We are not responsible for the availability, reliability, or terms of third-party services. Any third-party subscriptions or licences you require are your responsibility.

8. Confidentiality

We treat your business information as confidential and do not disclose it to third parties except as necessary to deliver our services or as required by law. We also expect that information we share with you, including proprietary methods and pricing, will be kept confidential.

9. Warranties and Disclaimer

We provide services with reasonable skill and care. To the maximum extent permitted by law, our website and services are provided "as is" without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement.

10. Limitation of Liability

To the maximum extent permitted by law, MeiFlume shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of our website or services. Our total liability for any claim shall not exceed the amount you paid us for the services giving rise to the claim.

11. Termination

We may suspend or terminate access to our website or services if you breach these Terms. On termination, you remain responsible for amounts due and the return of any confidential information. Sections of these Terms that should reasonably survive termination will continue to apply.

12. Governing Law

These Terms are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes will be subject to the jurisdiction of the courts of the Western Cape.

13. Changes to These Terms

We may update these Terms from time to time. Changes take effect when posted on this page. Your continued use of our website and services after changes are posted constitutes acceptance of the revised Terms.

14. Contact Us

If you have any questions about these Terms of Service, please contact us at info@meiflume.com or write to us at MeiFlume, Paarl, Western Cape, 7646, South Africa.
`.trim(),
  },
  {
    _type: 'policy',
    _id: 'policy.cookie',
    type: 'cookie',
    title: 'Cookie Policy',
    lastUpdated: '2026-09-05',
    contactEmail: 'info@meiflume.com',
    intro:
      "This Cookie Policy explains how MeiFlume uses cookies and similar technologies on our website at meiflume.com. It explains what cookies are, how we use them, and how you can control them.",
    content: `
1. What Are Cookies

Cookies are small text files placed on your device when you visit a website. They help websites recognise your device, remember your preferences, and understand how visitors use the site. We also use similar technologies such as tracking pixels.

2. How We Use Cookies

We use cookies to make our website work correctly, improve your experience, and learn how visitors use our site.

We use the following types of cookies:

- Essential cookies, which are required for the website to function
- Analytics cookies, which help us understand how visitors use our site
- Preference cookies, which remember your settings and choices
- Marketing cookies, which help us measure the effectiveness of our advertising

3. Cookies We Use

We use the following cookies and analytics tools:

- Google Analytics, to measure website traffic and usage patterns
- Hotjar, to understand how visitors interact with our pages and improve usability

These tools may collect information such as pages visited, time on site, device type, and approximate location. This information is aggregated and does not directly identify you.

4. Managing Cookies

Most web browsers let you control cookies through their settings. You can choose to block or delete cookies, though limiting cookies may affect how our website works for you.

- For guidance on managing cookies, visit www.allaboutcookies.org
- To opt out of Google Analytics tracking, use the Google Analytics opt-out browser add-on at tools.google.com/dlpage/gaoptout

5. Changes to This Policy

We may update this Cookie Policy from time to time to reflect changes in technology or the law. Updates will be posted on this page with an updated date.

6. Contact Us

If you have any questions about our Cookie Policy, please contact us at info@meiflume.com or write to us at MeiFlume, Paarl, Western Cape, 7646, South Africa.
`.trim(),
  },
];

// ---- Main ----

async function run() {
  console.log('Seeding Sanity dataset "meiflume"...\n');

  console.log('Services');
  for (const service of SERVICES) {
    const { bannerImageUrl, ...doc } = service;
    let bannerImage;
    if (bannerImageUrl) {
      bannerImage = await uploadImage(bannerImageUrl, doc.title, 'image/jpeg');
    }
    await client.createOrReplace({ ...doc, ...(bannerImage ? { bannerImage } : {}) });
    log('upserted', doc._id);
  }

  console.log('\nClient logos');
  for (const item of CLIENT_LOGOS) {
    const doc = { _type: 'clientLogo', _id: item._id, name: item.name, order: item.order };
    if (item.link) doc.link = item.link;
    if (item.file) {
      const filePath = path.join(ROOT, 'public', 'lovable-uploads', item.file);
      if (fs.existsSync(filePath)) {
        const image = await uploadImage(filePath, item.name, 'image/png');
        if (image) doc.image = image;
      }
    } else if (item.url) {
      const image = await uploadImage(item.url, item.name, 'image/png');
      if (image) doc.image = image;
    }
    await client.createOrReplace(doc);
    log('upserted', doc._id);
  }

  console.log('\nTestimonials');
  for (const t of TESTIMONIALS) {
    await client.createOrReplace(t);
    log('upserted', t._id);
  }

  console.log('\nPortfolio categories');
  for (const c of PORTFOLIO_CATEGORIES) {
    await client.createOrReplace(c);
    log('upserted', c._id);
  }

  console.log('\nAbout');
  await client.createOrReplace(ABOUT);
  log('upserted', ABOUT._id);

  console.log('\nSite settings');
  await client.createOrReplace(SITE_SETTINGS);
  log('upserted', SITE_SETTINGS._id);

  console.log('\nNewsletter');
  await client.createOrReplace(NEWSLETTER);
  log('upserted', NEWSLETTER._id);

  console.log('\nPolicies');
  for (const p of POLICIES) {
    await client.createOrReplace(p);
    log('upserted', p._id);
  }

  console.log('\nDone.');
}

run().catch((err) => {
  console.error('\nSeed failed:', err.message || err);
  process.exit(1);
});
import type { SanityService } from '@/api/services';

// Fallback content used until Sanity has been seeded with service documents.
export const fallbackServices: SanityService[] = [
  {
    _id: 'fallback-software',
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
    bannerImage:
      'https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    iconImage: 'https://cdn-icons-png.flaticon.com/512/6213/6213731.png',
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
    _id: 'fallback-web',
    title: 'Web Development',
    slug: { current: 'web' },
    shortDescription:
      'Responsive, fast-loading websites and web applications built with cutting-edge technologies.',
    description: 'Responsive, fast-loading websites and web applications built with cutting-edge technologies.',
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
    bannerImage:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    iconImage: 'https://cdn-icons-png.flaticon.com/512/2282/2282188.png',
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
          'Yes, we offer website redesign services that can modernize your existing site\'s appearance, improve functionality, enhance user experience, and optimize performance while preserving or improving your SEO rankings.',
      },
    ],
    order: 2,
    featured: true,
  },
  {
    _id: 'fallback-design',
    title: 'Graphic Design',
    slug: { current: 'design' },
    shortDescription:
      "Brand identity, UI/UX design, and visual assets that communicate your brand's unique value.",
    description:
      "Brand identity, UI/UX design, and visual assets that communicate your brand's unique value.",
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
    bannerImage:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    iconImage: 'https://cdn-icons-png.flaticon.com/512/2909/2909808.png',
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
    _id: 'fallback-brand',
    title: 'Brand Strategy',
    slug: { current: 'brand' },
    shortDescription:
      "Strategic positioning and messaging that helps your brand stand out in a crowded marketplace.",
    description:
      "Strategic positioning and messaging that helps your brand stand out in a crowded marketplace.",
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
    bannerImage:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    iconImage: 'https://cdn-icons-png.flaticon.com/512/3281/3281303.png',
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
    _id: 'fallback-social',
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
    bannerImage:
      'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    iconImage: 'https://cdn-icons-png.flaticon.com/512/2065/2065157.png',
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
          'High-quality posts, graphics, captions, and hashtags tailored to each platform\'s best practices.',
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
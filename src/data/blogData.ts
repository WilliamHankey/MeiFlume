
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  tags: string[];
  relatedService?: string; // ID of related service
}

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "10 Essential Features Every Business Website Needs in 2024",
    excerpt: "Discover the key elements that make a business website effective and engaging in today's digital landscape.",
    content: `
      <p>A well-designed website is crucial for business success in the digital age. Here are the essential features your website should include:</p>
      <h3>1. Mobile Responsiveness</h3>
      <p>With over 60% of web traffic coming from mobile devices, your website must perform flawlessly across all screen sizes.</p>
      <h3>2. Fast Loading Speed</h3>
      <p>Users expect websites to load within 2 seconds. Optimize images, leverage browser caching, and minimize HTTP requests to improve loading times.</p>
      <h3>3. Clear Navigation</h3>
      <p>Intuitive navigation helps visitors find what they're looking for quickly, reducing bounce rates and improving user experience.</p>
      <h3>4. Call-to-Action Buttons</h3>
      <p>Strategic CTAs guide visitors toward conversion points, whether that's making a purchase, signing up for a newsletter, or requesting a quote.</p>
      <h3>5. Contact Information</h3>
      <p>Make it easy for potential customers to reach you by prominently displaying contact details and including a contact form.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-03-10",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    category: "Web Development",
    tags: ["website design", "business", "UX/UI"],
    relatedService: "web"
  },
  {
    id: "blog-2",
    title: "How AI is Revolutionizing Custom Software Development",
    excerpt: "Explore how artificial intelligence is transforming the way custom software solutions are designed, developed, and deployed.",
    content: `
      <p>Artificial intelligence is reshaping the software development landscape in profound ways:</p>
      <h3>Automated Code Generation</h3>
      <p>AI-powered tools can now generate code snippets or even entire functions based on natural language descriptions, significantly accelerating development time.</p>
      <h3>Intelligent Testing</h3>
      <p>AI can identify potential bugs and vulnerabilities by analyzing code patterns, reducing the time spent on quality assurance while improving software reliability.</p>
      <h3>Personalized User Experiences</h3>
      <p>Machine learning algorithms can help software adapt to individual user preferences and behaviors, creating more engaging and efficient user experiences.</p>
      <h3>Predictive Maintenance</h3>
      <p>AI can anticipate when software systems might fail or require updates, allowing for proactive maintenance rather than reactive troubleshooting.</p>
    `,
    author: "Michael Chen",
    date: "2024-02-28",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2340&auto=format&fit=crop",
    category: "Software Development",
    tags: ["AI", "machine learning", "custom software"],
    relatedService: "software"
  },
  {
    id: "blog-3",
    title: "Effective Brand Storytelling in the Digital Age",
    excerpt: "Learn how to craft compelling brand narratives that resonate with today's digital-savvy consumers.",
    content: `
      <p>Brand storytelling has evolved significantly in the digital era:</p>
      <h3>Authenticity is Key</h3>
      <p>Modern consumers value transparency and authenticity over polished marketing messages. Sharing your brand's genuine journey, including challenges overcome, can build stronger connections with your audience.</p>
      <h3>Multi-platform Storytelling</h3>
      <p>Your brand story should adapt seamlessly across different channels while maintaining consistency in core messaging and values.</p>
      <h3>User-Generated Content</h3>
      <p>Incorporating customer stories and testimonials into your brand narrative creates social proof and builds community around your brand.</p>
      <h3>Visual Storytelling</h3>
      <p>Compelling visuals, from photography to infographics to video, can communicate your brand story more effectively than text alone.</p>
    `,
    author: "Emily Rodriguez",
    date: "2024-03-05",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=2340&auto=format&fit=crop",
    category: "Brand Strategy",
    tags: ["branding", "storytelling", "marketing"],
    relatedService: "brand"
  },
  {
    id: "blog-4",
    title: "The Psychology of Color in Graphic Design",
    excerpt: "Understand how color choices influence consumer perception and behavior in visual branding and design.",
    content: `
      <p>Colors evoke specific emotions and associations that can significantly impact how your brand is perceived:</p>
      <h3>Blue: Trust and Reliability</h3>
      <p>Blue is widely used by financial institutions and tech companies to convey security, stability, and professionalism.</p>
      <h3>Red: Energy and Urgency</h3>
      <p>Red stimulates excitement and can create a sense of urgency, making it effective for calls-to-action and sale announcements.</p>
      <h3>Green: Growth and Health</h3>
      <p>Green is associated with nature, renewal, and wellness, making it ideal for eco-friendly brands and health products.</p>
      <h3>Color Harmony and Contrast</h3>
      <p>The relationships between colors in your palette are as important as the individual colors themselves. Proper contrast ensures readability and visual hierarchy.</p>
    `,
    author: "David Park",
    date: "2024-02-15",
    image: "https://images.unsplash.com/photo-1560830889-3abe577e4fe3?q=80&w=2340&auto=format&fit=crop",
    category: "Graphic Design",
    tags: ["color theory", "design", "branding"],
    relatedService: "design"
  },
  {
    id: "blog-5",
    title: "Maximizing ROI with Strategic Social Media Campaigns",
    excerpt: "Discover proven strategies to measure and improve the return on investment from your social media marketing efforts.",
    content: `
      <p>Strategic social media marketing can deliver measurable business results:</p>
      <h3>Defining Clear Objectives</h3>
      <p>Each social media campaign should have specific, measurable goals aligned with broader business objectives, whether that's increasing website traffic, generating leads, or boosting sales.</p>
      <h3>Audience Segmentation</h3>
      <p>Different audience segments respond to different types of content and messaging. Tailor your campaigns to address the specific needs and interests of each segment.</p>
      <h3>Content Calendar Planning</h3>
      <p>A well-structured content calendar ensures consistent posting and allows you to coordinate content with product launches, seasonal trends, and industry events.</p>
      <h3>Analytics and Iteration</h3>
      <p>Regularly analyzing performance metrics allows you to identify what's working, what isn't, and how to optimize future campaigns for better results.</p>
    `,
    author: "Alex Morgan",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=2340&auto=format&fit=crop",
    category: "Social Media",
    tags: ["social media", "ROI", "digital marketing"],
    relatedService: "social"
  }
];

export const getRelatedBlogs = (serviceId: string): BlogPost[] => {
  return blogPosts.filter(post => post.relatedService === serviceId);
};

export const getLatestBlogs = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

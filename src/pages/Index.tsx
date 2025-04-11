import { motion } from 'framer-motion';
import { Code, Globe, PenTool, BrainCircuit, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import ClientLogos from '@/components/ClientLogos';
import ServiceCard from '@/components/ServiceCard';
import { PortfolioItem } from '@/components/PortfolioItem';
import TestimonialSlider from '@/components/TestimonialSlider';
import BlogSection from '@/components/BlogSection';
import ContactCTA from '@/components/ContactCTA';
import { Button } from '@/components/ui/button';
import { getPosts } from '@/lib/sanity';
import { getProjects, type SanityProject } from '@/api/projects';
import { type BlogPost } from '@/data/blogData';
import { useState, useEffect } from 'react';

const serviceItems = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions, from mobile apps to enterprise platforms, tailored to your business needs.",
    link: "/services#software",
    color: "bg-brand-teal"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Responsive, fast-loading websites and web applications built with cutting-edge technologies.",
    link: "/services#web",
    color: "bg-brand-dark"
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description: "Brand identity, UI/UX design, and visual assets that communicate your brand's unique value.",
    link: "/services#design",
    color: "bg-brand-teal"
  },
  {
    icon: BrainCircuit,
    title: "Brand Strategy",
    description: "Strategic positioning and messaging that helps your brand stand out in a crowded marketplace.",
    link: "/services#brand",
    color: "bg-brand-dark"
  },
  {
    icon: MessageSquare,
    title: "Social Media Services",
    description: "Content creation, community management, and growth strategies for major social platforms.",
    link: "/services#social",
    color: "bg-brand-teal"
  }
];

const features = [
  {
    title: "Proven Results",
    description: "Our strategies and solutions have consistently delivered measurable outcomes for our clients.",
    icon: CheckCircle
  },
  {
    title: "Innovative Approach",
    description: "We leverage cutting-edge technologies and methodologies to solve complex business challenges.",
    icon: CheckCircle
  },
  {
    title: "Dedicated Team",
    description: "Our team of experts is committed to your success from concept to implementation and beyond.",
    icon: CheckCircle
  }
];

const Index = () => {
  const [featuredProjects, setFeaturedProjects] = useState<SanityProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [latestBlogs, setLatestBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch first 3 projects
        const projectsData = await getProjects();
        setFeaturedProjects(projectsData.slice(0, 3));
        
        // Fetch latest blog posts and transform to match BlogPost type
        const blogsData = await getPosts();
        const transformedBlogs = blogsData.slice(0, 3).map(post => ({
          id: post.id,
          title: post.title,
          excerpt: post.excerpt,
          content: `<p>${post.excerpt}</p>`, // Use excerpt as content for preview
          image: post.image || '/images/placeholder-blog.jpg', // Fallback image
          date: new Date(post.date).toISOString().split('T')[0], // Format as YYYY-MM-DD
          author: post.author || 'MeiFlume Team', // Default author
          category: post.category || 'General', // Default category
          slug: post.slug,
          tags: post.category ? [post.category] : ['General'], // Use category as tag
          relatedService: undefined
        })) satisfies BlogPost[];
        setLatestBlogs(transformedBlogs);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero />

      {/* Client Logos */}
      <ClientLogos />

      {/* Features Section */}
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">Elevate Your Digital Presence</h2>
            <p className="section-subtitle">
              We combine strategic thinking with technical expertise to create solutions that drive growth and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center glass-card p-8"
              >
                <div className="bg-brand-teal/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">Our Services Are<br />Customized To Your Needs</h2>
            <p className="section-subtitle">
              We offer a comprehensive range of digital transformation services tailored to help your business thrive in today's competitive landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((service, index) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                link={service.link}
                color={service.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-teal text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your digital strategy?</h2>
              <p className="text-lg text-blue-200">
                Schedule a free consultation with our experts to discuss your project requirements.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="bg-white text-brand-teal hover:bg-white/90" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              Explore our portfolio of successful projects that have helped businesses achieve their digital transformation goals.
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-[16/9] bg-gray-200 rounded-2xl mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <PortfolioItem
                  key={project._id}
                  title={project.title}
                  category={project.category}
                  image={project.image ? project.image : ''}
                  slug={project.slug.current}
                  index={index}
                />
              ))}
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <Link to="/portfolio">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <BlogSection blogs={latestBlogs} />

      {/* Testimonials Section */}
      <section className="section-padding bg-brand-gray">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it – hear from some of our satisfied clients about their experience working with us.
            </p>
          </motion.div>

          <TestimonialSlider />
        </div>
      </section>

      {/* Contact Section */}
      <ContactCTA />

      {/* Quick Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Great Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-10 border"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="quick-name" className="block text-sm font-medium mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="quick-name"
                  type="text"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="quick-email" className="block text-sm font-medium mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="quick-email"
                  type="email"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-8">
              <label htmlFor="quick-message" className="block text-sm font-medium mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="quick-message"
                rows={4}
                className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all"
                placeholder="Tell us about your project"
              ></textarea>
            </div>
            <div className="flex justify-center md:justify-end">
              <Button size="lg" className="bg-brand-teal hover:bg-brand-teal/90 text-white">
                Get a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '@/components/Breadcrumb';
import { TextContent } from '@/components/TextContent';
import { getAbout, type SanityAbout } from '@/api/about';
import { urlFor } from '@/lib/sanity';

const DEFAULT_ABOUT: Partial<SanityAbout> = {
  heroTitle: 'About MeiFlume',
  heroDescription:
    "We're a team of passionate digital transformation experts dedicated to helping businesses thrive in the digital age.",
  mission:
    "To empower businesses with innovative digital solutions that drive growth, enhance customer experiences, and create lasting value in an ever-evolving digital landscape.",
  vision:
    "To be the leading digital transformation partner that helps organizations navigate technological change and achieve sustainable success in the digital age.",
  coreValues: [
    {
      title: "Innovation",
      description: "We embrace new technologies and approaches to solve complex problems.",
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we deliver.",
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to achieve shared success.",
    },
    {
      title: "Integrity",
      description: "We uphold honesty and transparency in all our interactions.",
    },
    {
      title: "Adaptability",
      description: "We remain flexible and responsive to changing needs and circumstances.",
    },
    {
      title: "Client Focus",
      description: "We prioritize understanding and meeting our clients' unique needs.",
    },
  ],
  heroImage:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
};

const About = () => {
  const [about, setAbout] = useState<SanityAbout | null>(null);

  useEffect(() => {
    let cancelled = false;

    getAbout()
      .then((data) => {
        if (!cancelled) setAbout(data);
      })
      .catch((error) => {
        console.error('Error fetching about content:', error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const content = about || (DEFAULT_ABOUT as SanityAbout);

  const heroTitle = content.heroTitle || DEFAULT_ABOUT.heroTitle;
  const heroDescription = content.heroDescription || DEFAULT_ABOUT.heroDescription;
  const heroImage = content.heroImage
    ? urlFor(content.heroImage).width(1200).quality(85).url()
    : DEFAULT_ABOUT.heroImage;
  const coreValues =
    content.coreValues && content.coreValues.length > 0
      ? content.coreValues
      : DEFAULT_ABOUT.coreValues || [];
  const additionalSections = content.additionalSections || [];

  return (
    <>
      <Helmet>
        <title>About MeiFlume - Web & Software Development Company in Paarl & Cape Town</title>
        <meta name="description" content="Learn about MeiFlume's mission, vision, and values. We're a team of passionate digital transformation experts serving businesses across Paarl, Cape Town, and the Winelands with web development, software development, and app development services." />
        <meta name="keywords" content="web development Paarl, software development Paarl, web app development Cape Town, digital transformation, MeiFlume about, digital solutions" />
        <link rel="canonical" href="https://meiflume.com/about" />
        <meta property="og:title" content="About MeiFlume - Web & Software Development Company in Paarl & Cape Town" />
        <meta property="og:description" content="Learn about MeiFlume's mission, vision, and values. Digital transformation experts serving Paarl, Cape Town, and the Winelands." />
        <meta property="og:url" content="https://meiflume.com/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="pt-28 bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-brand-gray">
          <div className="container mx-auto px-4 md:px-6">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'About', href: '/about' }
              ]}
            />
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 order-2 lg:order-1"
              >
                <h1 className="section-title">{heroTitle}</h1>
                <p className="section-subtitle">
                  {heroDescription}
                </p>
                <Button className="bg-brand-teal hover:bg-brand-teal/90 text-white" asChild>
                  <Link to="/services">
                    Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full lg:w-1/2 order-1 lg:order-2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-teal/20 rounded-2xl transform rotate-3" />
                  <OptimizedImage 
                    src={heroImage} 
                    alt="MeiFlume Team" 
                    className="rounded-2xl shadow-xl relative z-10"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card p-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground">
                  {content.mission || DEFAULT_ABOUT.mission}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground">
                  {content.vision || DEFAULT_ABOUT.vision}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="section-padding bg-brand-gray">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="section-title">Our Core Values</h2>
              <p className="section-subtitle">
                These principles guide everything we do and define how we work with our clients and each other.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 hover-lift"
                >
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info from Sanity */}
        {additionalSections.length > 0 && (
          <section className="section-padding">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
              {additionalSections.map((section, index) => (
                <motion.div
                  key={section.title || `section-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="mb-12 last:mb-0"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">{section.title}</h2>
                  <div className="prose prose-lg max-w-none text-lg text-muted-foreground">
                    <TextContent text={section.content} />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="section-padding bg-brand-teal text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="section-title text-white">Ready to Work With Us?</h2>
              <p className="section-subtitle text-white/90">
                Whether you're in Paarl, Cape Town, or anywhere in the Winelands, let's discuss how we
                can help transform your digital presence and achieve your business goals.
              </p>
              <Button size="lg" className="bg-white text-brand-teal hover:bg-white/90" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
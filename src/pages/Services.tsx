import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ServiceSchema, WebSiteSchema } from '../components/StructuredData';
import { OptimizedImage } from '@/components/OptimizedImage';
import { getServices, type SanityService } from '@/api/services';
import { getServiceIcon } from '@/lib/icons';
import { urlFor } from '@/lib/sanity';
import { fallbackServices } from '@/data/services';

const Services = () => {
  const [services, setServices] = useState<SanityService[]>(fallbackServices);

  useEffect(() => {
    let cancelled = false;

    getServices()
      .then((data) => {
        if (!cancelled && data && data.length > 0) setServices(data);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services | Web Development & Software in Paarl, Cape Town | MeiFlume</title>
        <meta name="description" content="Web development, software development, web app development, branding and design services for businesses in Paarl, Cape Town and the Western Cape." />
        <meta property="og:title" content="Our Services | MeiFlume - Paarl & Cape Town" />
        <meta property="og:description" content="Web development, software development, web app development, branding and design services for businesses in Paarl, Cape Town and the Western Cape." />
        <meta property="og:url" content="https://meiflume.com/services" />
      </Helmet>
      <ServiceSchema
        data={{
          name: "Web & Software Development Services in Paarl & Cape Town",
          description: "Comprehensive web development, software development, and web app development solutions for businesses in Paarl, Cape Town, and the Winelands.",
          provider: {
            '@type': 'Organization',
            name: 'MeiFlume'
          }
        }}
      />
      <WebSiteSchema
        data={{
          name: "MeiFlume Services - Paarl & Cape Town",
          url: "https://meiflume.com/services",
          description: "Explore MeiFlume's comprehensive digital services including web development, software development, web app development, brand strategy, and more — available across Paarl, Cape Town, and the Winelands."
        }}
      />
      <div className="pt-28 bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-brand-gray">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground">
                Web development, software development, and web app services for businesses across
                Paarl, Cape Town, and the wider Winelands — tailored to meet your objectives and
                drive growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Individual Services */}
        {services.map((service, index) => {
          const Icon = getServiceIcon(service.icon);
          const imageSrc = service.bannerImage
            ? typeof service.bannerImage === 'string'
              ? service.bannerImage
              : urlFor(service.bannerImage).width(1200).quality(85).url()
            : '';
          return (
          <section
            key={service._id}
            id={service.slug.current}
            className={`py-20 ${index % 2 === 1 ? 'bg-brand-gray' : ''}`}
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
                >
                  <div className={`${service.bgColor || 'bg-brand-teal'} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {service.description || service.shortDescription}
                  </p>
                  {service.features && service.features.length > 0 && (
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-6 w-6 text-brand-teal shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button className="bg-brand-teal hover:bg-brand-teal/90" asChild>
                    <Link to={`/services/${service.slug.current}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-teal/20 rounded-2xl transform rotate-2" />
                    <OptimizedImage
                      src={imageSrc}
                      alt={`${service.title} in Paarl & Cape Town`}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={index < 2}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
          );
        })}

        {/* CTA Section */}
        <section className="py-20 bg-brand-teal text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-xl text-white/80 mb-8">
                From Paarl to Cape Town, contact us today to discuss your project requirements and
                learn how we can help you achieve your business goals.
              </p>
              <Button size="lg" className="bg-white text-brand-teal hover:bg-white/90" asChild>
                <Link to="/contact">
                  Get a Free Consultation
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

export default Services;
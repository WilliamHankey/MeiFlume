import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RelatedBlogs from '@/components/RelatedBlogs';
import { getRelatedBlogs } from '@/data/blogData';
import { getServiceBySlug, type SanityService } from '@/api/services';
import { getServiceIcon } from '@/lib/icons';
import { urlFor } from '@/lib/sanity';
import { fallbackServices } from '@/data/services';

// Resolve a Sanity image (asset object) or a plain URL string back to a usable URL
type SanityImageLike = string | { asset?: { _ref?: string } } | null | undefined;

const resolveImage = (image: SanityImageLike, width = 1600, quality = 80): string => {
  if (!image) return '';
  if (typeof image === 'string') return image;
  if (image.asset && image.asset._ref) {
    return urlFor(image).width(width).quality(quality).url();
  }
  return '';
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<SanityService | null>(() => {
    if (!serviceId) return null;
    return fallbackServices.find((s) => s.slug.current === serviceId) || null;
  });
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  useEffect(() => {
    let cancelled = false;
    if (!serviceId) return;

    getServiceBySlug(serviceId)
      .then((data) => {
        if (cancelled) return;
        setResolved(true);
        if (data) setService(data);
      })
      .catch((error) => {
        console.error('Error fetching service:', error);
        setResolved(true);
      });

    return () => {
      cancelled = true;
    };
  }, [serviceId]);

  useEffect(() => {
    if (resolved && !service && serviceId) {
      navigate('/services', { replace: true });
    }
  }, [resolved, service, serviceId, navigate]);

  if (!service) return null;

  const serviceTitle = service.title;
  const bannerSrc = resolveImage(service.bannerImage, 1600, 80);
  const iconSrc = resolveImage(service.iconImage, 200, 80);
  const Icon = getServiceIcon(service.icon);
  const bgColor = service.bgColor || 'bg-blue-500';
  const longDescription =
    service.longDescription || service.description || service.shortDescription;
  const process = service.process || [];
  const deliverables = service.deliverables || [];
  const faq = service.faq || [];

  const relatedBlogs = serviceId ? getRelatedBlogs(serviceId) : [];

  return (
    <div className="pt-28">
      <Helmet>
        <title>{serviceTitle} in Paarl & Cape Town | MeiFlume</title>
        <meta name="description" content={`${serviceTitle} services from MeiFlume, serving businesses in Paarl, Cape Town and the Western Cape. ${longDescription.split('.')[0]}.`} />
        <meta property="og:title" content={`${serviceTitle} In Paarl & Cape Town | MeiFlume`} />
        <meta property="og:description" content={`${serviceTitle} services from MeiFlume, serving businesses in Paarl, Cape Town and the Western Cape.`} />
        <meta property="og:url" content={`https://meiflume.com/services/${serviceId}`} />
      </Helmet>

      {/* Hero Banner */}
      <section
        className={`py-20 ${bannerSrc ? '' : bgColor} text-white relative overflow-hidden`}
        style={bannerSrc ? {
          backgroundImage: `linear-gradient(to right, rgba(43, 43, 62, 0.8), rgba(27, 95, 109, 0.8)), url(${bannerSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : {}}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                {iconSrc ? (
                  <img src={iconSrc} alt="" className="w-12 h-12" />
                ) : (
                  <Icon className="h-12 w-12" />
                )}
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">{serviceTitle}</h1>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 max-w-3xl"
            >
              {service.shortDescription}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-lg text-white/80 max-w-3xl mt-4"
            >
              {longDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10"
            >
              <Button size="lg" className="bg-white text-[#1B5F6D] hover:bg-white/90" asChild>
                <Link to="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      {process.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
              <p className="text-xl text-muted-foreground">
                How we approach {serviceTitle.toLowerCase()} to ensure exceptional results for your business
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.title || `step-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="glass-card p-8 h-full border relative z-10">
                    <div className="text-4xl mb-4">{step.icon || Icon}</div>
                    <div className="absolute -top-4 -left-4 bg-brand-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gray-200 transform translate-x-4"></div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What You'll Get */}
      {deliverables.length > 0 && (
        <section className="py-20 bg-brand-gray">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What You'll Get</h2>
              <p className="text-xl text-muted-foreground">
                Deliverables and outcomes you can expect from our {serviceTitle.toLowerCase()} service
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {deliverables.map((deliverable, index) => (
                <motion.div
                  key={deliverable.title || `deliverable-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 border"
                >
                  <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                    <Check className="h-6 w-6 text-brand-teal shrink-0 mt-1" />
                    <span>{deliverable.title}</span>
                  </h3>
                  <p className="text-muted-foreground ml-9">{deliverable.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faq.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground">
                Common questions about our {serviceTitle.toLowerCase()} service
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {faq.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="mb-6 last:mb-0"
                >
                  <div className="glass-card p-8 border">
                    <h3 className="text-xl font-bold mb-4">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-[#1B5F6D] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your {serviceTitle} Project?</h2>
            <p className="text-xl text-blue-100 mb-10">
              From Paarl to Cape Town, contact us today to discuss your requirements and learn
              how we can help you achieve your business goals.
            </p>
            <Button size="lg" className="bg-white text-[#1B5F6D] hover:bg-white/90" asChild>
              <Link to="/contact">
                Request a Proposal
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <RelatedBlogs blogs={relatedBlogs} />
    </div>
  );
};

export default ServiceDetail;
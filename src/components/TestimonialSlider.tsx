import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import { getTestimonials, type SanityTestimonial } from '@/api/testimonials';
import { urlFor } from '@/lib/sanity';
import { SocialIcon } from '@/components/SocialIcon';

const fallbackTestimonials: SanityTestimonial[] = [
  {
    _id: 't1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    message: "MeiFlume transformed our digital presence completely. Their team's expertise in software development and brand strategy helped us increase our online visibility by 200%.",
  },
  {
    _id: 't2',
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'Innovate Solutions',
    message: "Working with MeiFlume has been a game-changer for our business. Their web development team created a stunning, high-performance site that has significantly improved our conversion rates.",
  },
  {
    _id: 't3',
    name: 'Emily Rodriguez',
    role: 'Brand Manager',
    company: 'Global Connect',
    message: "The brand identity MeiFlume crafted for us perfectly captures our company's values and vision. Their attention to detail and creative approach exceeded our expectations.",
  },
];

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState<SanityTestimonial[]>(fallbackTestimonials);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    let cancelled = false;

    getTestimonials()
      .then((data) => {
        if (!cancelled && data && data.length > 0) {
          setTestimonials(data);
        }
      })
      .catch((error) => {
        console.error('Error fetching testimonials:', error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (testimonials.length === 0) return;
    const timer = setTimeout(handleNext, 8000);
    return () => clearTimeout(timer);
  }, [current, testimonials.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  if (testimonials.length === 0) return null;

  const testimonial = testimonials[current];

  return (
    <div className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute top-10 left-0 text-brand-teal/10 z-0">
        <Quote size={180} strokeWidth={1} />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="w-full max-w-4xl mx-auto px-6"
            >
              <Quote className="text-brand-teal h-12 w-12 mx-auto mb-6" />
              <p className="text-xl md:text-2xl lg:text-3xl font-medium italic mb-8 text-balance">
                "{testimonial.message}"
              </p>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                  {testimonial.image ? (
                    <img
                      src={urlFor(testimonial.image).width(120).height(120).crop('crop').fit('crop').auto('format').url()}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-brand-teal"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-brand-teal/10 border-2 border-brand-teal flex items-center justify-center text-brand-teal font-bold text-xl">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div className="text-left">
                    <h3 className="text-lg font-bold">{testimonial.name}</h3>
                    <p className="text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>

                {testimonial.socialLinks && testimonial.socialLinks.length > 0 && (
                  <div className="flex gap-3">
                    {testimonial.socialLinks.map((link, index) => (
                      <SocialIcon
                        key={index}
                        platform={link.platform}
                        url={link.url}
                        size={20}
                        ariaLabel={`${testimonial.name} on ${link.platform}`}
                        className="text-gray-500 hover:text-brand-teal transition-colors"
                      />
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex gap-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > current ? 1 : -1);
                  setCurrent(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? "bg-brand-teal w-8" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
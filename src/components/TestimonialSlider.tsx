
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "MeiFlume transformed our digital presence completely. Their team's expertise in software development and brand strategy helped us increase our online visibility by 200%.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "TechStart Inc."
  },
  {
    id: 2,
    quote: "Working with MeiFlume has been a game-changer for our business. Their web development team created a stunning, high-performance site that has significantly improved our conversion rates.",
    author: "Michael Chen",
    position: "Marketing Director",
    company: "Innovate Solutions"
  },
  {
    id: 3,
    quote: "The brand identity MeiFlume crafted for us perfectly captures our company's values and vision. Their attention to detail and creative approach exceeded our expectations.",
    author: "Emily Rodriguez",
    position: "Brand Manager",
    company: "Global Connect"
  }
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(handleNext, 8000);
    return () => clearTimeout(timer);
  }, [current]);

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
                "{testimonials[current].quote}"
              </p>
              <div>
                <h3 className="text-lg font-bold">{testimonials[current].author}</h3>
                <p className="text-muted-foreground">
                  {testimonials[current].position}, {testimonials[current].company}
                </p>
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


import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const logos = [
  { name: 'FiveLens', src: 'https://fivelens.co.za/wp-content/uploads/2021/08/Asset-2FL-logo-300x109.png' },
  { name: 'New-U', src: '/lovable-uploads/NewULogo.png' },
  { name: 'Meer Consulting', src: '/lovable-uploads/MeerConsultingLogo.png' },
  { name: 'Jeanne Meer Consulting', src: '/lovable-uploads/JeanneMeerConsultingLogo.png' },
  { name: 'U&IPrinting', src: '/lovable-uploads/U&IPrintingLogo.png' },
  { name: 'Alenors Catering', src: '/lovable-uploads/AlenorsCateringLogo.png' },
];

// Duplicate logos for seamless scrolling
const scrollLogos = [...logos, ...logos];

const ClientLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 30; // pixels per second

  useEffect(() => {
    let animationId: number;
    let lastTimestamp: number;

    const step = (timestamp: number) => {
      if (!isPaused && scrollRef.current) {
        if (!lastTimestamp) lastTimestamp = timestamp;
        const elapsed = timestamp - lastTimestamp;
        
        // Calculate new scroll position
        const pixelsToScroll = (elapsed / 1000) * scrollSpeed;
        setScrollPosition(prev => {
          const newPosition = prev + pixelsToScroll;
          
          // Reset position when we've scrolled through the first set of logos
          const containerWidth = scrollRef.current?.firstElementChild?.clientWidth || 0;
          return newPosition >= containerWidth ? 0 : newPosition;
        });
        
        lastTimestamp = timestamp;
      } else if (isPaused) {
        lastTimestamp = timestamp;
      }
      
      animationId = requestAnimationFrame(step);
    };
    
    animationId = requestAnimationFrame(step);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  return (
    <section 
      className="py-12 md:py-16 border-y border-gray-200 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-xl text-muted-foreground">Trusted by industry-leading companies</p>
        </motion.div>
        
        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            className="flex whitespace-nowrap"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
          >
            {scrollLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="inline-block mx-8 w-32 h-12 md:w-40 md:h-16 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

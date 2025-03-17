import { useEffect, useRef, useState } from "react";

const logos = [
  { name: "FiveLens", src: "https://fivelens.co.za/wp-content/uploads/2021/08/Asset-2FL-logo-300x109.png" },
  { name: "New-U", src: "/lovable-uploads/NewULogo.png" },
  { name: "Meer Consulting", src: "/lovable-uploads/MeerConsultingLogo.png" },
  { name: "Jeanne Meer Consulting", src: "/lovable-uploads/JeanneMeerConsultingLogo.png" },
  { name: "U&IPrinting", src: "/lovable-uploads/U&IPrintingLogo.png" },
  { name: "Alenors Catering", src: "/lovable-uploads/AlenorsCateringLogo.png" },
];

// Duplicate logos for seamless scrolling
const scrollLogos = [...logos, ...logos];

const ClientLogos = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollX, setScrollX] = useState(0);
  const scrollSpeed = 0.1; // Slower speed for smooth scrolling

  useEffect(() => {
    let animationFrameId: number;
    let lastTimestamp: number | null = null;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused && containerRef.current) {
        setScrollX((prev) => {
          const newX = prev - (deltaTime * scrollSpeed);
          const containerWidth = containerRef.current.scrollWidth / 2;
          return newX <= -containerWidth ? 0 : newX;
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <section
      className="py-12 md:py-16 border-y border-gray-200 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <p className="text-xl text-muted-foreground">Trusted by industry-leading companies</p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            ref={containerRef}
            className="flex min-w-max"
            style={{ transform: `translateX(${scrollX}px)` }}
          >
            {scrollLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex items-center justify-center mx-8 h-16 md:h-24 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="h-full w-auto max-w-[120px] md:max-w-[160px] object-contain"
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


import { motion } from 'framer-motion';

const logos = [
  { name: 'FiveLens', src: 'https://fivelens.co.za/wp-content/uploads/2021/08/Asset-2FL-logo-300x109.png' },
  { name: 'New-U', src: '/lovable-uploads/NewULogo.png' },
  { name: 'Meer Consulting', src: '/lovable-uploads/MeerConsultingLogo.png' },
  { name: 'Jeanne Meer Consulting', src: '/lovable-uploads/JeanneMeerConsultingLogo.png' },
  { name: 'U&IPrinting', src: 'https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png' },
  { name: 'Alenors Catering', src: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png' },
];

const ClientLogos = () => {
  return (
    <section className="py-12 md:py-16 border-y border-gray-200 overflow-hidden">
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
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-32 h-12 md:w-40 md:h-16 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={`${logo.name} logo`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

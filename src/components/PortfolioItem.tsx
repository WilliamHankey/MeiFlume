import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  slug: string;
  index: number;
  link?: string;
  description?: string;
  gallery?: string[];
  technologies?: string[];
  features?: string[];
}

export const PortfolioItem = ({ 
  title, 
  category, 
  image, 
  slug, 
  index,
  link,
  description,
  gallery,
  technologies,
  features 
}: PortfolioItemProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // If we're in the portfolio list view (index is provided)
  if (typeof index === 'number') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="group relative overflow-hidden rounded-2xl"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <OptimizedImage
            src={image} 
            alt={title}
            className="transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <p className="text-white text-sm font-medium mb-2">{category}</p>
            <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
            
            <Link
              to={`/portfolio/${slug}`}
              className="inline-flex items-center text-white hover:text-white/80 transition-colors"
            >
              View project <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    );
  }

  // If we're in the portfolio detail view
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <OptimizedImage
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">{description}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-brand-teal text-white rounded-full hover:bg-brand-teal/90 transition-colors gap-2"
              >
                Visit Website
                <ArrowUpRight className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Back to Portfolio and Visit Links */}
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <Link
          to="/portfolio"
          className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-brand-teal hover:text-brand-teal/80 transition-colors"
          >
            Visit Website
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </a>
        )}
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Gallery */}
          {gallery && gallery.length > 0 && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Project Gallery</h2>
              <div className="grid grid-cols-2 gap-4">
                {gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="relative aspect-square cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => setSelectedImage(image)}
                  >
                    <OptimizedImage
                      src={image}
                      alt={`${title} gallery image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Right Column - Details */}
          <div className="space-y-8">
            {technologies && technologies.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-brand-teal/10 text-brand-teal rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {features && features.length > 0 && (
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-teal mr-2">•</span>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          <div className="relative aspect-video">
            {selectedImage && (
              <OptimizedImage
                src={selectedImage}
                alt="Selected gallery image"
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

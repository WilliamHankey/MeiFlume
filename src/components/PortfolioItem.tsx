import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { urlFor } from '@/lib/sanity';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: any;
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
            src={urlFor(image).url()} 
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

  // If we're in the project detail view
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-lg text-muted-foreground mb-6">{description}</p>
          )}
          
          {link && (
            <Button className="mb-6" asChild>
              <a href={link} target="_blank" rel="noopener noreferrer">
                Visit Website <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          )}
          
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
        
        <div className="space-y-6">
          <div className="aspect-[16/9] overflow-hidden rounded-2xl">
            <OptimizedImage
              src={urlFor(image).url()}
              alt={title}
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {gallery && gallery.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className="aspect-[16/9] overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
                >
                  <OptimizedImage
                    src={img}
                    alt={`${title} gallery image ${index + 1}`}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </button>
              ))}
            </div>
          )}
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

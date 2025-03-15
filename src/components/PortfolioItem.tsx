
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  slug: string;
  index: number;
}

const PortfolioItem = ({ title, category, image, slug, index }: PortfolioItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
};

export default PortfolioItem;

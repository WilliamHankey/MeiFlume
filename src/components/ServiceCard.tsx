
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  color: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, link, color, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="group"
    >
      <div className={cn(
        "glass-card p-8 h-full transition-all duration-300 border",
        "hover:shadow-lg hover:border-brand-teal/20 hover:-translate-y-1",
      )}>
        <div 
          className={cn(
            "rounded-2xl w-14 h-14 flex items-center justify-center mb-6",
            color
          )}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        
        <p className="text-muted-foreground mb-6">
          {description}
        </p>
        
        <Link 
          to={link} 
          className="flex items-center text-brand-teal font-medium hover:underline"
        >
          Learn more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceCard;

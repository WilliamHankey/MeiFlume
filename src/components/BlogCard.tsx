import { motion } from 'framer-motion';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { OptimizedImage } from '@/components/OptimizedImage';

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author: string;
    category: string;
    slug: string;
  };
  index: number;
}

const BlogCard = ({ blog, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden rounded-2xl shadow-lg bg-white hover-lift"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <OptimizedImage 
          src={blog.image} 
          alt={blog.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center mb-3 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4 mr-2" />
          <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 group-hover:text-brand-teal transition-colors duration-300">
          {blog.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 flex-1">{blog.excerpt}</p>
        
        <Link
          to={`/blog/${blog.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80"
        >
          Read more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;

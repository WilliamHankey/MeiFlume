import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { BlogPost } from '@/data/blogData';
import { OptimizedImage } from '@/components/OptimizedImage';

interface BlogCardProps {
  blog: BlogPost;
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
          to={`/blog/${blog.id}`} 
          className="text-brand-teal font-medium hover:underline mt-auto inline-flex items-center"
        >
          Read more
          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;

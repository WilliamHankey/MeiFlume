import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/BlogCard';
import { BlogPost } from '@/lib/sanity';

interface RelatedBlogsProps {
  blogs: BlogPost[];
}

const RelatedBlogs = ({ blogs }: RelatedBlogsProps) => {
  if (!blogs || blogs.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Related Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover more insights and knowledge in our related articles
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="/blog">View All Articles</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;


import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/data/blogData';
import RelatedBlogs from '@/components/RelatedBlogs';

const BlogDetail = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const blog = blogPosts.find(post => post.id === blogId);
  
  if (!blog) {
    return <Navigate to="/blog" replace />;
  }
  
  // Get related blogs from the same category, excluding the current blog
  const relatedBlogs = blogPosts
    .filter(post => post.category === blog.category && post.id !== blog.id)
    .slice(0, 3);

  return (
    <div className="pt-28 pb-20">
      {/* Blog Header */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link 
            to="/blog"
            className="inline-flex items-center text-brand-teal mb-8 hover:underline font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">{blog.title}</h1>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-300 text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-brand-teal" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-brand-teal" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2 text-brand-teal" />
                <span>{blog.category}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-10 rounded-xl overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
                
                <div className="mt-10 pt-10 border-t flex flex-wrap gap-2">
                  {blog.tags.map(tag => (
                    <span key={tag} className="bg-gray-100 text-sm py-1 px-3 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-28">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-xl mb-8"
                >
                  <h3 className="text-xl font-bold mb-4">About the Author</h3>
                  <p className="text-muted-foreground mb-4">
                    {blog.author} is an expert in {blog.category.toLowerCase()} with years of experience in the field.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-xl"
                >
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <p className="text-muted-foreground mb-6">
                    Interested in learning more about our services? Contact us today!
                  </p>
                  <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white" asChild>
                    <Link to="/contact">
                      Contact Us
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <RelatedBlogs blogs={relatedBlogs} serviceTitle={blog.category} />
      )}
    </div>
  );
};

export default BlogDetail;

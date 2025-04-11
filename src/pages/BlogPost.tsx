import { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDays, User, Tag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { OptimizedImage } from '@/components/OptimizedImage';
import { getPostBySlug } from '@/lib/sanity';
import type { BlogPost } from '@/lib/sanity';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      try {
        const postData = await getPostBySlug(slug);
        setPost(postData);
      } catch (error) {
        console.error('Error fetching post:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [slug]);

  if (!loading && !post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-28 pb-20">
      {/* Blog Header */}
      <div className="container mx-auto px-4 md:px-6">
        <Link 
          to="/blog"
          className="inline-flex items-center text-brand-teal mb-8 hover:underline font-medium"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>

        {loading ? (
          <div className="animate-pulse">
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          </div>
        ) : post && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">{post.title}</h1>
            
            <div className="flex flex-wrap gap-6 text-muted-foreground text-sm mb-12">
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-2 text-brand-teal" />
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-brand-teal" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2 text-brand-teal" />
                <span>{post.category}</span>
              </div>
            </div>

            <div className="mb-12 rounded-xl overflow-hidden">
              <OptimizedImage 
                src={post.image} 
                alt={post.title}
                className="w-full h-[400px] md:h-[500px]"
                priority
              />
            </div>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default BlogPost; 
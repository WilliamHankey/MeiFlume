import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ContactCTA from '@/components/ContactCTA';
import { portfolioItems } from '@/data/portfolioData';
import { PortfolioItemSchema, WebSiteSchema } from '../components/StructuredData';
import { OptimizedImage } from '@/components/OptimizedImage';

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "Brand Design",
  "UI/UX Design"
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      <WebSiteSchema
        data={{
          name: "MeiFlume Portfolio",
          url: "https://meiflume.com/portfolio",
          description: "Explore our portfolio of successful digital transformation projects, including web development, brand identity, and software solutions."
        }}
      />
      {portfolioItems.map((item) => (
        <PortfolioItemSchema
          key={item.id}
          data={{
            name: item.title,
            description: item.description,
            image: item.image,
            client: item.client,
            datePublished: item.date
          }}
        />
      ))}
      <div className="pt-28 bg-white">
        {/* Hero Section */}
        <section className="py-20 bg-brand-dark text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
              <p className="text-xl text-gray-300">
                Explore our work and see how we've helped businesses across industries achieve their digital transformation goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Portfolio Filter */}
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-brand-teal text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group overflow-hidden rounded-2xl shadow-lg bg-white hover-lift"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <OptimizedImage 
                      src={item.image} 
                      alt={item.title}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  
                  <div className="p-6">
                    <span className="text-sm text-brand-teal font-medium">{item.category}</span>
                    <h3 className="text-xl font-bold mt-1 mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Client: {item.client}</span>
                      <Link 
                        to={`/portfolio/${item.slug}`} 
                        className="text-brand-teal flex items-center gap-1 text-sm font-medium hover:underline"
                      >
                        View Details
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <ContactCTA hideViewWork={true} />
      </div>
    </>
  );
};

export default Portfolio;

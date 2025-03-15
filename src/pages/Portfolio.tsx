
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PortfolioItemProps {
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  link: string;
}

const portfolioItems: PortfolioItemProps[] = [
  {
    title: "TechStart Mobile App",
    category: "Mobile Development",
    image: "https://cdn.dribbble.com/userupload/12020927/file/original-edaa5fcf8b9eee35c1e8b9a0b4ed5c9a.png?resize=752x",
    description: "A comprehensive mobile application for a tech startup that helps users track their productivity and manage their tasks effectively.",
    client: "TechStart Inc.",
    link: "/portfolio/techstart"
  },
  {
    title: "Innovate Solutions Website",
    category: "Web Development",
    image: "https://cdn.dribbble.com/userupload/12044576/file/original-f96ab42de51e6ad11a3e88c4ab28cd12.png?resize=752x",
    description: "A modern, responsive website for a consulting firm featuring a custom CMS, interactive elements, and optimized performance.",
    client: "Innovate Solutions",
    link: "/portfolio/innovate"
  },
  {
    title: "Global Connect Brand Identity",
    category: "Brand Design",
    image: "https://cdn.dribbble.com/userupload/12040309/file/original-e38a53fa99e6a0dacce98c444f4ff0f1.png?resize=752x",
    description: "A complete brand identity package including logo design, color palette, typography, and brand guidelines.",
    client: "Global Connect",
    link: "/portfolio/globalconnect"
  },
  {
    title: "Wellness App UI/UX",
    category: "UI/UX Design",
    image: "https://cdn.dribbble.com/userupload/12024202/file/original-53d25a7fe2ddb92fe3cf02052bee1e48.png?resize=752x",
    description: "User interface and experience design for a wellness app focused on meditation, sleep tracking, and health monitoring.",
    client: "Mindful Living",
    link: "/portfolio/wellness"
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://cdn.dribbble.com/userupload/11993674/file/original-18fa2e3d2f52dc16fe9f2affe9bbd7d4.png?resize=752x",
    description: "A fully-featured e-commerce platform with inventory management, payment processing, and customer analytics.",
    client: "Urban Outfitters",
    link: "/portfolio/ecommerce"
  },
  {
    title: "Social Media Campaign",
    category: "Social Media",
    image: "https://cdn.dribbble.com/userupload/12051879/file/original-52a64afadac1e3cc46d3b10a5a61c7fa.jpg?resize=752x",
    description: "A multi-platform social media campaign that increased brand awareness by 45% and engagement by 78%.",
    client: "FreshBite Foods",
    link: "/portfolio/socialmedia"
  }
];

const categories = [
  "All",
  "Web Development",
  "Mobile Development",
  "UI/UX Design",
  "Brand Design",
  "Social Media"
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-28 bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-muted-foreground">
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
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                    <a 
                      href={item.link} 
                      className="text-brand-teal flex items-center gap-1 text-sm font-medium hover:underline"
                    >
                      View Details
                      <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-brand-blue text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Something Amazing Together</h2>
            <p className="text-xl text-blue-200 mb-8">
              Ready to start your next project? Contact us to discuss how we can help bring your vision to life.
            </p>
            <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

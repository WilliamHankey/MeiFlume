
import { motion } from 'framer-motion';
import { Code, Globe, PenTool, BrainCircuit, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceProps {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  bgColor: string;
}

const services: ServiceProps[] = [
  {
    id: "software",
    icon: Code,
    title: "Software Development",
    description: "Custom software solutions tailored to your specific business needs, from mobile apps to enterprise platforms.",
    features: [
      "Custom mobile app development (iOS & Android)",
      "Enterprise software solutions",
      "Legacy system modernization",
      "Cloud application development",
      "API development and integration"
    ],
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    bgColor: "bg-blue-500"
  },
  {
    id: "web",
    icon: Globe,
    title: "Web Development",
    description: "Responsive, fast-loading websites and web applications built with cutting-edge technologies.",
    features: [
      "Responsive website design & development",
      "E-commerce solutions",
      "CMS implementation (WordPress, Shopify, etc.)",
      "Progressive Web Apps (PWAs)",
      "Performance optimization & SEO"
    ],
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    bgColor: "bg-indigo-500"
  },
  {
    id: "design",
    icon: PenTool,
    title: "Graphic Design",
    description: "Brand identity, UI/UX design, and visual assets that communicate your brand's unique value.",
    features: [
      "Brand identity design",
      "UI/UX design for web & mobile",
      "Print & digital marketing materials",
      "Illustration & iconography",
      "Motion graphics & animation"
    ],
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    bgColor: "bg-purple-500"
  },
  {
    id: "brand",
    icon: BrainCircuit,
    title: "Brand Strategy",
    description: "Strategic positioning and messaging that helps your brand stand out in a crowded marketplace.",
    features: [
      "Brand positioning & messaging",
      "Competitive analysis",
      "Customer persona development",
      "Brand voice & tone guidelines",
      "Marketing strategy development"
    ],
    imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    bgColor: "bg-pink-500"
  },
  {
    id: "social",
    icon: MessageSquare,
    title: "Social Media Services",
    description: "Content creation, community management, and growth strategies for major social platforms.",
    features: [
      "Social media strategy development",
      "Content creation & curation",
      "Community management",
      "Paid social advertising",
      "Analytics & performance reporting"
    ],
    imageUrl: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    bgColor: "bg-rose-500"
  }
];

const Services = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive digital transformation solutions tailored to meet your business objectives and drive growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Individual Services */}
      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-20 ${index % 2 === 1 ? 'bg-brand-gray' : ''}`}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className={`${service.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-brand-teal shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-brand-teal hover:bg-brand-teal/90" asChild>
                  <Link to={`/services/${service.id}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-teal/20 rounded-2xl transform rotate-2" />
                  <img 
                    src={service.imageUrl} 
                    alt={service.title} 
                    className="rounded-2xl shadow-xl relative z-10"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
      
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-blue-200 mb-8">
              Contact us today to discuss your project requirements and learn how we can help you achieve your business goals.
            </p>
            <Button size="lg" className="bg-white text-brand-blue hover:bg-white/90" asChild>
              <Link to="/contact">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

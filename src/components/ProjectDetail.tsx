
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle, Users, Calendar, Clock } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { portfolioItems } from '@/data/portfolioData';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = portfolioItems.find(item => item.slug === slug);
  
  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const { title, category, image, description, client, challenge, solution, results, gallery, technologies } = project;

  return (
    <div className="pt-28 pb-20">
      {/* Project Header */}
      <section className="bg-brand-dark text-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link 
            to="/portfolio"
            className="inline-flex items-center text-brand-teal mb-8 hover:underline font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
              <p className="text-xl text-gray-300 mb-6">{description}</p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {technologies.map((tech) => (
                  <span key={tech} className="bg-brand-teal/20 text-brand-teal py-1 px-3 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-gray-400 text-sm">Client</p>
                  <p className="font-medium flex items-center">
                    <Users className="mr-2 h-4 w-4 text-brand-teal" />
                    {client}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Category</p>
                  <p className="font-medium flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-brand-teal" />
                    {category}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Timeline</p>
                  <p className="font-medium flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-brand-teal" />
                    {project.timeline}
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
                <p className="text-muted-foreground mb-8">{challenge}</p>
                
                <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
                <p className="text-muted-foreground mb-8">{solution}</p>
                
                <h2 className="text-3xl font-bold mb-6">Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 p-6 rounded-xl text-center"
                    >
                      <h3 className="text-brand-teal text-3xl font-bold mb-2">{result.stat}</h3>
                      <p className="text-muted-foreground">{result.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold mb-4">Project Services</h3>
                <ul className="space-y-3 mb-8">
                  {project.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-brand-teal mr-3 mt-0.5 flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white" asChild>
                  <Link to="/contact">
                    Start a Similar Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Project Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore the visual elements and design of this project
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl overflow-hidden shadow-md hover-lift"
              >
                <img 
                  src={image} 
                  alt={`${title} gallery image ${index + 1}`} 
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-brand-teal text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/80 mb-8">
              Get in touch with our team to discuss how we can help bring your vision to life.
            </p>
            <Button size="lg" className="bg-white text-brand-teal hover:bg-white/90" asChild>
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;

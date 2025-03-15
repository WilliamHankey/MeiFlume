
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RelatedBlogs from '@/components/RelatedBlogs';
import { getRelatedBlogs } from '@/data/blogData';

// Define the service detail data structure
interface ServiceProcess {
  title: string;
  description: string;
  icon: string;
}

interface ServiceDeliverable {
  title: string;
  description: string;
}

interface ServiceDetailData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  bannerImage: string;
  iconImage: string;
  process: ServiceProcess[];
  deliverables: ServiceDeliverable[];
  faq: { question: string; answer: string }[];
  bgColor: string;
}

// Service detail data
const serviceDetails: ServiceDetailData[] = [
  {
    id: "software",
    title: "Software Development",
    description: "Custom software solutions tailored to your specific business needs, from mobile apps to enterprise platforms.",
    longDescription: "Our software development service delivers tailored solutions that address your unique business challenges. We combine industry best practices, cutting-edge technologies, and agile methodologies to create robust, scalable, and secure software applications that drive your business forward.",
    bannerImage: "https://images.unsplash.com/photo-1573496773905-f5b17e717f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    iconImage: "https://cdn-icons-png.flaticon.com/512/6213/6213731.png",
    process: [
      {
        title: "Discovery & Analysis",
        description: "We begin by understanding your business objectives, target users, and technical requirements to define the scope and goals of your software project.",
        icon: "🔍"
      },
      {
        title: "Design & Architecture",
        description: "Our team creates detailed technical specifications, system architecture, and UI/UX designs that serve as the blueprint for development.",
        icon: "📐"
      },
      {
        title: "Development & Testing",
        description: "Using agile methodologies, we develop your software in iterative cycles, with continuous testing and quality assurance at each stage.",
        icon: "💻"
      },
      {
        title: "Deployment & Integration",
        description: "We ensure smooth deployment of your software and seamless integration with existing systems and third-party services.",
        icon: "🚀"
      },
      {
        title: "Support & Maintenance",
        description: "Our relationship continues after launch with ongoing support, monitoring, updates, and enhancements to keep your software performing optimally.",
        icon: "🛠️"
      }
    ],
    deliverables: [
      {
        title: "Functional Software Application",
        description: "A fully tested, secure, and scalable software solution that meets your business requirements and user needs."
      },
      {
        title: "Source Code & Documentation",
        description: "Complete source code ownership along with comprehensive documentation for future reference and maintenance."
      },
      {
        title: "User Training",
        description: "Training sessions for your team to ensure they can effectively use and manage the new software."
      },
      {
        title: "Support Package",
        description: "A tailored support and maintenance plan to address issues, implement updates, and optimize performance."
      }
    ],
    faq: [
      {
        question: "How long does it take to develop custom software?",
        answer: "Development timelines vary based on complexity, features, and scope. Simple applications may take 3-4 months, while complex enterprise solutions can take 6-12 months or more. We provide detailed timelines during the discovery phase."
      },
      {
        question: "Do you offer ongoing maintenance after the software is launched?",
        answer: "Yes, we offer flexible maintenance packages that include bug fixes, security updates, performance optimization, and feature enhancements to keep your software running smoothly and efficiently."
      },
      {
        question: "Can you help migrate data from our existing systems?",
        answer: "Absolutely. We have extensive experience in data migration and can help transfer your data from legacy systems to your new software, ensuring data integrity and minimal disruption to your operations."
      }
    ],
    bgColor: "bg-blue-500"
  },
  {
    id: "web",
    title: "Web Development",
    description: "Responsive, fast-loading websites and web applications built with cutting-edge technologies.",
    longDescription: "We create modern, responsive websites and web applications that deliver exceptional user experiences across all devices. Our web development approach emphasizes performance, accessibility, and search engine optimization to ensure your digital presence effectively serves your business goals.",
    bannerImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    iconImage: "https://cdn-icons-png.flaticon.com/512/2282/2282188.png",
    process: [
      {
        title: "Strategy & Planning",
        description: "We establish your website goals, target audience, content strategy, and technical requirements to create a comprehensive project plan.",
        icon: "📋"
      },
      {
        title: "Wireframing & Design",
        description: "Our design team creates wireframes and visual designs that align with your brand identity and optimize user experience.",
        icon: "🎨"
      },
      {
        title: "Development",
        description: "We build your website or web application using modern frameworks and best practices for performance, security, and maintainability.",
        icon: "⚙️"
      },
      {
        title: "Content Integration & Testing",
        description: "We integrate your content, perform cross-browser and cross-device testing, and conduct thorough quality assurance.",
        icon: "🔄"
      },
      {
        title: "Launch & Post-Launch Support",
        description: "After a successful launch, we provide ongoing support, monitoring, and optimization to ensure your website continues to perform effectively.",
        icon: "📈"
      }
    ],
    deliverables: [
      {
        title: "Responsive Website/Web Application",
        description: "A fully functional, mobile-responsive website or web application that provides an exceptional user experience across all devices."
      },
      {
        title: "Content Management System",
        description: "If applicable, a user-friendly CMS that allows you to easily update and manage your website content."
      },
      {
        title: "SEO Foundation",
        description: "On-page SEO elements including optimized site structure, meta tags, schema markup, and performance optimization for better search visibility."
      },
      {
        title: "Analytics Setup",
        description: "Implementation of analytics tools to track visitor behavior, conversion rates, and other key performance indicators."
      }
    ],
    faq: [
      {
        question: "What technologies do you use for web development?",
        answer: "We use modern technologies like React, Next.js, Vue.js, and Node.js, along with content management systems like WordPress when appropriate. Our technology choices are guided by your specific requirements and what will best serve your project goals."
      },
      {
        question: "How do you ensure websites are secure?",
        answer: "We implement security best practices including SSL encryption, secure authentication methods, regular security updates, input validation, and protection against common vulnerabilities like cross-site scripting and SQL injection."
      },
      {
        question: "Can you redesign our existing website?",
        answer: "Yes, we offer website redesign services that can modernize your existing site's appearance, improve functionality, enhance user experience, and optimize performance while preserving or improving your SEO rankings."
      }
    ],
    bgColor: "bg-indigo-500"
  },
  {
    id: "design",
    title: "Graphic Design",
    description: "Brand identity, UI/UX design, and visual assets that communicate your brand's unique value.",
    longDescription: "Our graphic design services help you communicate effectively through compelling visuals that resonate with your audience. From brand identity systems to marketing materials, we create cohesive, professional designs that elevate your brand and drive engagement.",
    bannerImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    iconImage: "https://cdn-icons-png.flaticon.com/512/2909/2909808.png",
    process: [
      {
        title: "Creative Brief & Research",
        description: "We begin by understanding your brand, target audience, competitors, and design objectives to inform our creative direction.",
        icon: "📝"
      },
      {
        title: "Concept Development",
        description: "Our designers create initial concepts and design directions based on research insights and creative strategy.",
        icon: "💡"
      },
      {
        title: "Design Refinement",
        description: "Working from your feedback, we refine and iterate on the selected design direction to perfect every detail.",
        icon: "✏️"
      },
      {
        title: "Finalization",
        description: "We prepare final design assets in appropriate formats for different applications and use cases.",
        icon: "✅"
      },
      {
        title: "Implementation Support",
        description: "We provide guidance on how to effectively implement and maintain design consistency across various touchpoints.",
        icon: "🔄"
      }
    ],
    deliverables: [
      {
        title: "Brand Identity System",
        description: "Logo, color palette, typography, and visual elements that form a cohesive brand identity system."
      },
      {
        title: "Design Assets",
        description: "High-quality design files in various formats suitable for print, digital, and other applications."
      },
      {
        title: "Brand Guidelines",
        description: "A comprehensive guide documenting how to consistently apply your visual identity across all materials."
      },
      {
        title: "Marketing Materials",
        description: "Designs for business cards, letterheads, brochures, social media graphics, and other marketing collateral as needed."
      }
    ],
    faq: [
      {
        question: "What makes a good logo design?",
        answer: "A good logo should be simple, memorable, timeless, versatile, and appropriate for your industry and target audience. It should work well at different sizes and in both color and black and white versions."
      },
      {
        question: "How long does a typical branding project take?",
        answer: "A comprehensive branding project typically takes 4-8 weeks, depending on the scope. This includes research, concept development, refinement, and finalization of the brand identity system and guidelines."
      },
      {
        question: "Do you provide editable source files?",
        answer: "Yes, we provide editable source files for all design work, giving you full ownership of your brand assets. We can also provide files in various formats to suit different applications and vendors."
      }
    ],
    bgColor: "bg-purple-500"
  },
  {
    id: "brand",
    title: "Brand Strategy",
    description: "Strategic positioning and messaging that helps your brand stand out in a crowded marketplace.",
    longDescription: "Our brand strategy service helps you define your brand's unique position in the market and develop compelling messaging that resonates with your target audience. We create the strategic foundation that guides all your marketing and communication efforts for consistent, effective brand building.",
    bannerImage: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2336&q=80",
    iconImage: "https://cdn-icons-png.flaticon.com/512/3281/3281303.png",
    process: [
      {
        title: "Brand Audit & Research",
        description: "We analyze your current brand positioning, audience perceptions, competitive landscape, and market opportunities.",
        icon: "🔍"
      },
      {
        title: "Strategy Development",
        description: "Based on research insights, we develop your brand positioning, value proposition, messaging framework, and brand architecture.",
        icon: "📊"
      },
      {
        title: "Brand Storytelling",
        description: "We craft your brand narrative, including your origin story, mission, vision, and the unique value you bring to customers.",
        icon: "📖"
      },
      {
        title: "Implementation Planning",
        description: "We create a roadmap for implementing your brand strategy across all touchpoints and communication channels.",
        icon: "🗺️"
      },
      {
        title: "Measurement Framework",
        description: "We establish metrics and KPIs to track the effectiveness of your brand strategy and guide future refinements.",
        icon: "📈"
      }
    ],
    deliverables: [
      {
        title: "Brand Strategy Document",
        description: "A comprehensive strategy that defines your brand positioning, target audience, value proposition, and competitive differentiation."
      },
      {
        title: "Messaging Framework",
        description: "Core messages, taglines, elevator pitch, and communication guidelines for consistent brand voice across all channels."
      },
      {
        title: "Brand Story",
        description: "A compelling narrative that communicates your brand's purpose, values, and unique perspective in a way that resonates with your audience."
      },
      {
        title: "Implementation Roadmap",
        description: "A strategic plan for bringing your brand to life across all customer touchpoints and internal culture."
      }
    ],
    faq: [
      {
        question: "What's the difference between brand strategy and marketing strategy?",
        answer: "Brand strategy defines who you are as a company—your purpose, values, positioning, and personality. Marketing strategy focuses on how you promote your products or services to achieve specific business goals. Brand strategy is long-term and foundational, while marketing strategy is more tactical and campaign-oriented."
      },
      {
        question: "How often should we revisit our brand strategy?",
        answer: "While core brand elements should remain relatively consistent, we recommend reviewing your brand strategy every 3-5 years or during significant business changes like mergers, new product categories, or major market shifts to ensure it remains relevant and effective."
      },
      {
        question: "How do you measure the success of a brand strategy?",
        answer: "We use both qualitative and quantitative metrics, including brand awareness, perception studies, sentiment analysis, customer acquisition costs, retention rates, and overall business growth to measure the effectiveness of your brand strategy."
      }
    ],
    bgColor: "bg-pink-500"
  },
  {
    id: "social",
    title: "Social Media Services",
    description: "Content creation, community management, and growth strategies for major social platforms.",
    longDescription: "Our social media services help you build meaningful connections with your audience across key platforms. We develop and execute strategic content plans, manage online communities, and implement growth tactics that increase engagement and drive conversions.",
    bannerImage: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    iconImage: "https://cdn-icons-png.flaticon.com/512/2065/2065157.png",
    process: [
      {
        title: "Social Media Audit",
        description: "We assess your current social presence, content performance, audience demographics, and competitive landscape.",
        icon: "📊"
      },
      {
        title: "Strategy Development",
        description: "We create a tailored social media strategy that aligns with your business goals, target audience, and brand voice.",
        icon: "🎯"
      },
      {
        title: "Content Planning & Creation",
        description: "Our team develops engaging content calendars and creates high-quality posts tailored to each platform.",
        icon: "📝"
      },
      {
        title: "Community Management",
        description: "We actively engage with your audience, respond to comments and messages, and foster a positive community around your brand.",
        icon: "💬"
      },
      {
        title: "Analysis & Optimization",
        description: "We continuously monitor performance metrics and refine our approach to maximize engagement and ROI.",
        icon: "📈"
      }
    ],
    deliverables: [
      {
        title: "Social Media Strategy",
        description: "A comprehensive strategy document outlining platform selection, content pillars, posting frequency, and growth tactics."
      },
      {
        title: "Content Calendar",
        description: "A detailed schedule of planned content, including topics, formats, and optimal posting times."
      },
      {
        title: "Original Content",
        description: "High-quality posts, graphics, captions, and hashtags tailored to each platform's best practices."
      },
      {
        title: "Performance Reports",
        description: "Regular analytics reports tracking key metrics, audience growth, engagement rates, and recommendations for optimization."
      }
    ],
    faq: [
      {
        question: "Which social media platforms should my business be on?",
        answer: "Platform selection depends on your business goals, target audience, industry, and content capabilities. We help you identify the most effective platforms for reaching your specific audience rather than spreading resources too thin across too many channels."
      },
      {
        question: "How often should we post on social media?",
        answer: "Posting frequency varies by platform and audience, but consistency is more important than volume. We develop a sustainable posting schedule that maintains audience engagement without sacrificing content quality."
      },
      {
        question: "How do you handle negative comments or feedback?",
        answer: "We address negative feedback promptly and professionally, following your brand's communication guidelines. We view criticism as an opportunity to demonstrate excellent customer service and gather valuable insights for improvement."
      }
    ],
    bgColor: "bg-rose-500"
  }
];

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const serviceData = serviceDetails.find(service => service.id === serviceId);
  
  useEffect(() => {
    if (!serviceData) {
      navigate('/services');
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [serviceData, navigate]);
  
  // Get related blogs
  const relatedBlogs = serviceId ? getRelatedBlogs(serviceId) : [];
  
  if (!serviceData) return null;

  return (
    <div className="pt-28">
      {/* Hero Banner */}
      <section 
        className={`py-20 ${serviceData.bgColor} text-white relative overflow-hidden`}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(43, 43, 62, 0.8), rgba(27, 95, 109, 0.8)), url(${serviceData.bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                <img src={serviceData.iconImage} alt="" className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">{serviceData.title}</h1>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 max-w-3xl"
            >
              {serviceData.longDescription}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10"
            >
              <Button size="lg" className="bg-white text-[#1B5F6D] hover:bg-white/90">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground">
              How we approach {serviceData.title.toLowerCase()} to ensure exceptional results for your business
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {serviceData.process.map((step, index) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-card p-8 h-full border relative z-10">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <div className="absolute -top-4 -left-4 bg-brand-teal text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                {index < serviceData.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gray-200 transform translate-x-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What You'll Get */}
      <section className="py-20 bg-brand-gray">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What You'll Get</h2>
            <p className="text-xl text-muted-foreground">
              Deliverables and outcomes you can expect from our {serviceData.title.toLowerCase()} service
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceData.deliverables.map((deliverable, index) => (
              <motion.div 
                key={deliverable.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 border"
              >
                <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                  <Check className="h-6 w-6 text-brand-teal shrink-0 mt-1" />
                  <span>{deliverable.title}</span>
                </h3>
                <p className="text-muted-foreground ml-9">{deliverable.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our {serviceData.title.toLowerCase()} service
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {serviceData.faq.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-6 last:mb-0"
              >
                <div className="glass-card p-8 border">
                  <h3 className="text-xl font-bold mb-4">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-[#1B5F6D] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your {serviceData.title} Project?</h2>
            <p className="text-xl text-blue-100 mb-10">
              Contact us today to discuss your requirements and learn how we can help you achieve your business goals.
            </p>
            <Button size="lg" className="bg-white text-[#1B5F6D] hover:bg-white/90">
              Request a Proposal
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Related Blog Posts */}
      <RelatedBlogs blogs={relatedBlogs} serviceTitle={serviceData.title} />
    </div>
  );
};

export default ServiceDetail;

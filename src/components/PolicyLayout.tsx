import { motion } from 'framer-motion';

interface PolicyLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const PolicyLayout = ({ title, lastUpdated, children }: PolicyLayoutProps) => {
  return (
    <div className="pt-28 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-muted-foreground mb-8">Last updated: {lastUpdated}</p>
          
          <div className="prose prose-gray max-w-none">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 
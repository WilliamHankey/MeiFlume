import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '@/components/Breadcrumb';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - MeiFlume</title>
        <meta name="description" content="MeiFlume's Terms of Service - Learn about the terms and conditions for using our services." />
      </Helmet>

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Terms of Service', href: '/terms-of-service' }
            ]}
          />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using MeiFlume's services, you agree to be bound by these Terms of Service 
                  and all applicable laws and regulations. If you do not agree with any of these terms, you 
                  are prohibited from using or accessing our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                <p>Permission is granted to temporarily access our services for personal, non-commercial use only. This license does not include:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Modifying or copying our materials</li>
                  <li>Using materials for commercial purposes</li>
                  <li>Attempting to reverse engineer any software</li>
                  <li>Removing any copyright or proprietary notations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
                <p>
                  Our services are provided "as is". We make no warranties, expressed or implied, and hereby 
                  disclaim and negate all other warranties including, without limitation, implied warranties 
                  or conditions of merchantability, fitness for a particular purpose, or non-infringement of 
                  intellectual property or other violation of rights.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:{' '}
                  <a href="mailto:info@meiflume.com" className="text-brand-teal hover:underline">
                    info@meiflume.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TermsOfService; 
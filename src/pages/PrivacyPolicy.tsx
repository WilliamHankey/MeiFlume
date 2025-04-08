import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '@/components/Breadcrumb';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - MeiFlume</title>
        <meta name="description" content="MeiFlume's Privacy Policy - Learn how we protect and handle your data." />
      </Helmet>

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Privacy Policy', href: '/privacy-policy' }
            ]}
          />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                  At MeiFlume, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                  disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Business information</li>
                  <li>Communication preferences</li>
                  <li>Any other information you choose to provide</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Provide and maintain our services</li>
                  <li>Respond to your requests and inquiries</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:{' '}
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

export default PrivacyPolicy; 
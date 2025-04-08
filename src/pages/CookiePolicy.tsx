import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '@/components/Breadcrumb';

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - MeiFlume</title>
        <meta name="description" content="MeiFlume's Cookie Policy - Learn about how we use cookies and similar technologies." />
      </Helmet>

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Cookie Policy', href: '/cookie-policy' }
            ]}
          />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit 
                  our website. They help us make your experience better by remembering your preferences and 
                  understanding how you use our site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Cookies</h2>
                <p>We use cookies for the following purposes:</p>
                <ul className="list-disc pl-6 mt-4">
                  <li>Essential cookies for website functionality</li>
                  <li>Analytics cookies to understand how visitors use our site</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies to deliver relevant advertisements</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">3. Managing Cookies</h2>
                <p>
                  Most web browsers allow you to control cookies through their settings preferences. However, 
                  limiting cookies may impact your experience on our website. You can learn more about cookies 
                  and how to manage them by visiting{' '}
                  <a 
                    href="https://www.allaboutcookies.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-brand-teal hover:underline"
                  >
                    AllAboutCookies.org
                  </a>.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">4. Contact Us</h2>
                <p>
                  If you have any questions about our Cookie Policy, please contact us at:{' '}
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

export default CookiePolicy; 
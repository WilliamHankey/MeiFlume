import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Breadcrumb } from '@/components/Breadcrumb';
import { TextContent } from '@/components/TextContent';
import { getPolicy, type PolicyType, type SanityPolicy } from '@/api/policies';

interface LegalPolicyPageProps {
  type: PolicyType;
  title: string;
  metaDescription: string;
  fallback: SanityPolicy;
}

const LegalPolicyPage = ({ type, title, metaDescription, fallback }: LegalPolicyPageProps) => {
  const [policy, setPolicy] = useState<SanityPolicy | null>(null);

  useEffect(() => {
    let cancelled = false;

    getPolicy(type)
      .then((data) => {
        if (!cancelled && data) setPolicy(data);
      })
      .catch((error) => {
        console.error(`Error fetching ${type} policy:`, error);
      });

    return () => {
      cancelled = true;
    };
  }, [type]);

  const content = {
    ...fallback,
    ...(policy || {}),
  };

  const lastUpdated =
    content.lastUpdated ||
    new Date().toISOString().slice(0, 10);

  return (
    <>
      <Helmet>
        <title>{`${title} - MeiFlume`}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={`${title} - MeiFlume`} />
        <meta property="og:url" content={`https://meiflume.com/${type === 'privacy' ? 'privacy-policy' : type === 'terms' ? 'terms-of-service' : 'cookie-policy'}`} />
      </Helmet>

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: title, href: `/${type === 'privacy' ? 'privacy-policy' : type === 'terms' ? 'terms-of-service' : 'cookie-policy'}` }
            ]}
          />

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">{content.title || title}</h1>
            <p className="text-gray-600 mb-8">
              Last updated: {lastUpdated}
            </p>

            <div className="space-y-8">
              {content.intro && (
                <section>
                  <TextContent text={content.intro} />
                </section>
              )}

              {content.content && (
                <section>
                  <TextContent text={content.content} />
                </section>
              )}

              {content.contactEmail && (
                <section>
                  <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                  <p>
                    If you have any questions about this document, please contact us at:{' '}
                    <a href={`mailto:${content.contactEmail}`} className="text-brand-teal hover:underline">
                      {content.contactEmail}
                    </a>
                  </p>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LegalPolicyPage;
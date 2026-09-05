import LegalPolicyPage from '@/components/LegalPolicyPage';

const CookiePolicy = () => {
  return (
    <LegalPolicyPage
      type="cookie"
      title="Cookie Policy"
      metaDescription="MeiFlume's Cookie Policy - Learn about how we use cookies and similar technologies."
      fallback={{
        _id: 'fallback-cookie',
        type: 'cookie',
        title: 'Cookie Policy',
        intro:
          'Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us make your experience better by remembering your preferences and understanding how you use our site.',
        content:
          '1. What Are Cookies\n\nCookies are small text files placed on your device when you visit a website.\n\n2. How We Use Cookies\n\nWe use cookies for the following purposes:\n\n- Essential cookies for website functionality\n- Analytics cookies to understand how visitors use our site\n- Preference cookies to remember your settings\n- Marketing cookies to deliver relevant advertisements\n\n3. Managing Cookies\n\nMost web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience on our website. You can learn more about cookies and how to manage them by visiting AllAboutCookies.org.\n\n4. Contact Us\n\nIf you have any questions about our Cookie Policy, please contact us at info@meiflume.com.',
        contactEmail: 'info@meiflume.com',
      }}
    />
  );
};

export default CookiePolicy;
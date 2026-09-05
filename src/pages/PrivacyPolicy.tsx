import LegalPolicyPage from '@/components/LegalPolicyPage';

const PrivacyPolicy = () => {
  return (
    <LegalPolicyPage
      type="privacy"
      title="Privacy Policy"
      metaDescription="MeiFlume's Privacy Policy - Learn how we protect and handle your data in accordance with POPIA."
      fallback={{
        _id: 'fallback-privacy',
        type: 'privacy',
        title: 'Privacy Policy',
        intro:
          'At MeiFlume, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.',
        content:
          '1. Information We Collect\n\nWe collect information that you provide directly to us, including:\n\n- Contact information (name, email address, phone number)\n- Business information\n- Communication preferences\n- Any other information you choose to provide\n\n2. How We Use Your Information\n\nWe use the information we collect to provide and maintain our services, respond to your requests and inquiries, send you marketing communications (with your consent), improve our website and services, and comply with legal obligations.\n\n3. Contact Us\n\nIf you have any questions about this Privacy Policy, please contact us at info@meiflume.com.',
        contactEmail: 'info@meiflume.com',
      }}
    />
  );
};

export default PrivacyPolicy;
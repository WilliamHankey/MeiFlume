import { PolicyLayout } from '@/components/PolicyLayout';

const PrivacyPolicy = () => {
  return (
    <PolicyLayout
      title="Privacy Policy"
      lastUpdated="March 15, 2024"
    >
      <h2>Introduction</h2>
      <p>
        At MeiFlume, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
      </p>

      <h2>Information We Collect</h2>
      <p>We collect information that you provide directly to us, including:</p>
      <ul>
        <li>Contact information (name, email, phone number)</li>
        <li>Business information</li>
        <li>Communication preferences</li>
        <li>Any other information you choose to provide</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide and maintain our services</li>
        <li>Respond to your inquiries and requests</li>
        <li>Send you marketing communications (with your consent)</li>
        <li>Improve our website and services</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>Information Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business.
      </p>

      <h2>Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
      </p>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your information</li>
        <li>Object to processing of your information</li>
        <li>Withdraw consent</li>
      </ul>

      <h2>Contact Us</h2>
      <p>
        If you have questions about this Privacy Policy, please contact us at{' '}
        <a href="mailto:info@meiflume.com">info@meiflume.com</a>.
      </p>
    </PolicyLayout>
  );
};

export default PrivacyPolicy; 
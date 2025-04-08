import { PolicyLayout } from '@/components/PolicyLayout';

const TermsOfService = () => {
  return (
    <PolicyLayout
      title="Terms of Service"
      lastUpdated="March 15, 2024"
    >
      <h2>Agreement to Terms</h2>
      <p>
        By accessing or using MeiFlume's website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
      </p>

      <h2>Services</h2>
      <p>
        MeiFlume provides digital transformation services including software development, web development, graphic design, brand strategy, and social media services. The specific details, deliverables, and terms of each service will be outlined in separate service agreements.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        The content, features, and functionality of our website are owned by MeiFlume and are protected by international copyright, trademark, and other intellectual property laws.
      </p>

      <h2>User Responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>Provide accurate and complete information</li>
        <li>Maintain the confidentiality of any account information</li>
        <li>Notify us immediately of any unauthorized access</li>
        <li>Use our services only for lawful purposes</li>
      </ul>

      <h2>Payment Terms</h2>
      <p>
        Payment terms, including fees, payment schedules, and refund policies, will be specified in individual service agreements. All fees are non-refundable unless otherwise stated.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        MeiFlume shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
      </p>

      <h2>Termination</h2>
      <p>
        We may terminate or suspend your access to our services immediately, without prior notice, for any breach of these Terms of Service.
      </p>

      <h2>Changes to Terms</h2>
      <p>
        We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page.
      </p>

      <h2>Contact Us</h2>
      <p>
        For questions about these Terms of Service, please contact us at{' '}
        <a href="mailto:info@meiflume.com">info@meiflume.com</a>.
      </p>
    </PolicyLayout>
  );
};

export default TermsOfService; 
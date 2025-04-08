import { PolicyLayout } from '@/components/PolicyLayout';

const CookiePolicy = () => {
  return (
    <PolicyLayout
      title="Cookie Policy"
      lastUpdated="March 15, 2024"
    >
      <h2>What Are Cookies</h2>
      <p>
        Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide useful information to website owners.
      </p>

      <h2>How We Use Cookies</h2>
      <p>We use cookies for the following purposes:</p>
      <ul>
        <li>Essential cookies: Required for the website to function properly</li>
        <li>Analytics cookies: To understand how visitors interact with our website</li>
        <li>Preference cookies: To remember your settings and preferences</li>
        <li>Marketing cookies: To deliver more relevant advertisements</li>
      </ul>

      <h2>Types of Cookies We Use</h2>
      <h3>Essential Cookies</h3>
      <p>
        These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions you take, such as setting your privacy preferences, logging in, or filling in forms.
      </p>

      <h3>Analytics Cookies</h3>
      <p>
        We use Google Analytics to understand how visitors interact with our website. These cookies help us analyze and improve our website's performance and user experience.
      </p>

      <h3>Preference Cookies</h3>
      <p>
        These cookies enable the website to remember choices you make (such as your preferred language or the region you are in) and provide enhanced, more personal features.
      </p>

      <h3>Marketing Cookies</h3>
      <p>
        These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for individual users.
      </p>

      <h2>Managing Cookies</h2>
      <p>
        Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may impact your overall user experience.
      </p>

      <h2>Your Choices</h2>
      <p>You have the following choices regarding cookies:</p>
      <ul>
        <li>Accept all cookies</li>
        <li>Reject non-essential cookies</li>
        <li>Modify your browser settings to decline cookies</li>
      </ul>

      <h2>Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated revision date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about our Cookie Policy, please contact us at{' '}
        <a href="mailto:info@meiflume.com">info@meiflume.com</a>.
      </p>
    </PolicyLayout>
  );
};

export default CookiePolicy; 
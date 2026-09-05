import LegalPolicyPage from '@/components/LegalPolicyPage';

const TermsOfService = () => {
  return (
    <LegalPolicyPage
      type="terms"
      title="Terms of Service"
      metaDescription="MeiFlume's Terms of Service - Learn about the terms and conditions for using our services."
      fallback={{
        _id: 'fallback-terms',
        type: 'terms',
        title: 'Terms of Service',
        intro:
          'By accessing or using MeiFlume\u2019s services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.',
        content:
          '1. Agreement to Terms\n\nBy accessing or using MeiFlume\u2019s website and services, you agree to be bound by these Terms and all applicable laws and regulations.\n\n2. Use License\n\nPermission is granted to temporarily access our services for personal, non-commercial use only. This license does not include:\n\n- Modifying or copying our materials\n- Using materials for commercial purposes\n- Attempting to reverse engineer any software\n- Removing any copyright or proprietary notations\n\n3. Disclaimer\n\nOur services are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.\n\n4. Governing Law\n\nThese Terms are governed by the laws of the Republic of South Africa.\n\n5. Contact Us\n\nIf you have any questions about these Terms of Service, please contact us at info@meiflume.com.',
        contactEmail: 'info@meiflume.com',
      }}
    />
  );
};

export default TermsOfService;
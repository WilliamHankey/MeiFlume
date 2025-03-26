import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GA_MEASUREMENT_ID = 'G-NC20RJBWMJ';

interface EventProps {
  action: string;
  category: string;
  label: string;
  value?: number;
}

export const trackEvent = ({ action, category, label, value }: EventProps) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

export const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      // Page view tracking
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href
      });

      // Custom dimensions for enhanced tracking
      window.gtag('set', {
        'user_properties': {
          'page_type': location.pathname.split('/')[1] || 'home',
          'user_type': 'visitor'
        }
      });
    }
  }, [location]);

  return null;
};

// Add this script to public/index.html:
/*
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
*/

// Example usage for tracking events:
/*
import { trackEvent } from '@/components/Analytics';

// Track button clicks
trackEvent({
  action: 'click',
  category: 'engagement',
  label: 'cta_button',
  value: 1
});

// Track form submissions
trackEvent({
  action: 'submit',
  category: 'forms',
  label: 'contact_form',
  value: 1
});

// Track downloads
trackEvent({
  action: 'download',
  category: 'resources',
  label: 'portfolio_pdf',
  value: 1
});
*/ 
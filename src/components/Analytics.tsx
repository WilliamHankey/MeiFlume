import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

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
      window.gtag('config', import.meta.env.VITE_GA4_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title
      });

      // Custom dimensions for enhanced tracking
      window.gtag('set', {
        'user_properties': {
          'page_type': location.pathname.split('/')[1] || 'home',
          'user_type': 'visitor' // You can update this based on user authentication status
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

// Usage example for tracking events:
/*
import { trackEvent } from '@/components/Analytics';

// In your component:
const handleClick = () => {
  trackEvent({
    action: 'button_click',
    category: 'engagement',
    label: 'contact_form_submit',
    value: 1
  });
};
*/ 
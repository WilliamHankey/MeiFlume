import { useEffect } from 'react';

declare global {
  interface Window {
    hj: (...args: any[]) => void;
    _hjSettings: {
      hjid: number;
    };
  }
}

export const triggerRecording = (userId?: string, attributes: Record<string, any> = {}) => {
  if (typeof window.hj !== 'undefined') {
    window.hj('identify', userId || null, {
      userType: 'visitor',
      lastVisit: new Date().toISOString(),
      ...attributes
    });
  }
};

export const HeatmapTracking = () => {
  useEffect(() => {
    // Verify Hotjar is loaded
    if (typeof window.hj !== 'undefined') {
      console.log('Hotjar is loaded and ready');
      
      // Set up page view tracking
      window.hj('stateChange', window.location.pathname);
      
      // Example of tracking a virtual page view
      window.hj('trigger', 'virtual_page_view');
    }
  }, []);

  return null;
};

// Usage examples:
/*
// Track specific events
window.hj('trigger', 'button_clicked');

// Track form submissions
window.hj('trigger', 'form_submitted');

// Identify users
triggerRecording('user123', {
  userType: 'premium',
  subscriptionLevel: 'pro'
});
*/ 
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  budget: string;
  source: string;
  services: {
    [key: string]: boolean;
  };
  message: string;
}

export async function sendContactEmail(formData: ContactFormData) {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'https://meiflume.com/api';
    const response = await fetch(`${apiUrl}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send message');
    }

    return { success: true, data: result.data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
} 
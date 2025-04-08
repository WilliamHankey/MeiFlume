import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

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

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();
    const { name, email, phone, company, budget, source, services, message } = formData;
    
    // Format selected services
    const selectedServices = Object.entries(services)
      .filter(([_, selected]) => selected)
      .map(([service]) => service)
      .join(', ');

    const { data, error } = await resend.emails.send({
      from: 'MeiFlume <contact@meiflume.com>',
      to: ['info@meiflume.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Source:</strong> ${source}</p>
        <p><strong>Services Interested In:</strong> ${selectedServices}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
} 
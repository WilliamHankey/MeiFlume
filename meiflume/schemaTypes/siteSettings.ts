const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  description:
    'Global contact details and social media links used across the site (Contact page, Footer, WhatsApp links).',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      initialValue: 'MeiFlume'
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string'
    },
    {
      name: 'phone',
      title: 'Phone (display text)',
      type: 'string',
      description: 'Shown to visitors, e.g. +27 (72) 030-2071'
    },
    {
      name: 'phoneRaw',
      title: 'Phone (digits only, for tel: links)',
      type: 'string',
      description: 'E.g. 27720302071'
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Number (digits only)',
      type: 'string',
      description:
        'Used to build https://wa.me/<number> links that open WhatsApp Web, e.g. 27720302071'
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3
    },
    {
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
          title: 'Social Link',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  'Instagram',
                  'LinkedIn',
                  'Twitter / X',
                  'Facebook',
                  'YouTube',
                  'TikTok',
                  'Website'
                ]
              }
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'companyName'
    }
  }
}

export default siteSettings
const testimonial = {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 6,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Photo of the person giving the testimonial.'
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
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0
    }
  ],
  orderings: [
    {
      title: 'Order (ascending)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'image'
    }
  }
}

export default testimonial
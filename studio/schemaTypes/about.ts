const about = {
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string'
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'mission',
      title: 'Mission',
      type: 'text',
      rows: 5,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'vision',
      title: 'Vision',
      type: 'text',
      rows: 5,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'coreValue',
          title: 'Core Value',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3
            }
          ]
        }
      ]
    },
    {
      name: 'additionalSections',
      title: 'Additional Information',
      type: 'array',
      description:
        'Extra content sections for the About page. Each section renders as a heading followed by body text.',
      of: [
        {
          type: 'object',
          name: 'additionalSection',
          title: 'Section',
          fields: [
            {
              name: 'title',
              title: 'Heading',
              type: 'string'
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
              rows: 8,
              description: 'Use one blank line between paragraphs.'
            }
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'heroTitle'
    }
  }
}

export default about
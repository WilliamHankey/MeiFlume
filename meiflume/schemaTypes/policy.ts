const policy = {
  name: 'policy',
  title: 'Legal Policy Page',
  type: 'document',
  description:
    'Content for the legal pages. One document per type (privacy, terms, cookie). Body text supports paragraphs (separated by a blank line) and bullet lists (lines starting with "- ").',
  fields: [
    {
      name: 'type',
      title: 'Policy Type',
      type: 'string',
      options: {
        list: [
          { title: 'Privacy Policy', value: 'privacy' },
          { title: 'Terms of Service', value: 'terms' },
          { title: 'Cookie Policy', value: 'cookie' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'lastUpdated',
      title: 'Last Updated',
      type: 'date'
    },
    {
      name: 'intro',
      title: 'Introduction',
      type: 'text',
      rows: 4
    },
    {
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 40,
      description:
        'Separate paragraphs with a blank line. Start bullet list items with "- ".'
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}

export default policy
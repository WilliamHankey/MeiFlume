const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'Website',
          'WebApp Development',
          'Mobile Development',
          'Desktop Development',
          'E-commerce',
          'Brand Design',
          'Brand Assets',
          'UI/UX Design',
          'Social Media'
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'link',
      title: 'Project Link',
      type: 'url'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'client',
      title: 'Client',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'solution',
      title: 'Solution',
      type: 'text',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'timeline',
      title: 'Timeline',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'stat',
            title: 'Statistic',
            type: 'string'
          },
          {
            name: 'description',
            title: 'Description',
            type: 'string'
          }
        ]
      }]
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image'}]
    }
  ]
}

export default project 
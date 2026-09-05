const service = {
  name: 'service',
  title: 'Service',
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
      name: 'shortDescription',
      title: 'Short Description (homepage card)',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description (services page)',
      type: 'text',
      rows: 4
    },
    {
      name: 'longDescription',
      title: 'Long Description (service detail page)',
      type: 'text',
      rows: 6
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name used on cards and the services page.',
      options: {
        list: [
          'Code',
          'Globe',
          'PenTool',
          'BrainCircuit',
          'MessageSquare',
          'Palette',
          'Smartphone',
          'Rocket',
          'Search',
          'Database',
          'Layers',
          'Sparkles',
          'ShoppingCart',
          'Megaphone'
        ]
      },
      initialValue: 'Code'
    },
    {
      name: 'bgColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          { title: 'Blue', value: 'bg-blue-500' },
          { title: 'Indigo', value: 'bg-indigo-500' },
          { title: 'Purple', value: 'bg-purple-500' },
          { title: 'Pink', value: 'bg-pink-500' },
          { title: 'Rose', value: 'bg-rose-500' },
          { title: 'Teal', value: 'bg-teal-500' },
          { title: 'Brand Teal', value: 'bg-brand-teal' },
          { title: 'Brand Dark', value: 'bg-brand-dark' }
        ]
      },
      initialValue: 'bg-blue-500'
    },
    {
      name: 'features',
      title: 'Features (services page)',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'process',
      title: 'Process Steps (service detail page)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'processStep',
          title: 'Process Step',
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
            },
            {
              name: 'icon',
              title: 'Icon (emoji)',
              type: 'string',
              description: 'An emoji shown above the step title, e.g. 🔍'
            }
          ]
        }
      ]
    },
    {
      name: 'deliverables',
      title: 'Deliverables (service detail page)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'deliverable',
          title: 'Deliverable',
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
      name: 'faq',
      title: 'Frequently Asked Questions (service detail page)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          title: 'FAQ Item',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string'
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 3
            }
          ]
        }
      ]
    },
    {
      name: 'bannerImage',
      title: 'Banner Image (service detail page)',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'iconImage',
      title: 'Icon Image (service detail page)',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      initialValue: 0
    },
    {
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      description: 'Show this service on the homepage "Our Services" section.',
      initialValue: false
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
      title: 'title'
    }
  }
}

export default service
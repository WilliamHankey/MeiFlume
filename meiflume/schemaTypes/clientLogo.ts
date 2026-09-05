const clientLogo = {
  name: 'clientLogo',
  title: 'Client Logo',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'link',
      title: 'Website Link',
      type: 'url'
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
      media: 'image'
    }
  }
}

export default clientLogo
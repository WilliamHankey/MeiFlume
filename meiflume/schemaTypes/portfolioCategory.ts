const portfolioCategory = {
  name: 'portfolioCategory',
  title: 'Portfolio Category',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      }
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
      title: 'name'
    }
  }
}

export default portfolioCategory
const newsletterSubscriber = {
  name: 'newsletterSubscriber',
  title: 'Newsletter Subscriber',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email()
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Unsubscribed', value: 'unsubscribed' }
        ]
      },
      initialValue: 'active'
    },
    {
      name: 'source',
      title: 'Source',
      type: 'string'
    }
  ],
  preview: {
    select: {
      title: 'email',
      subtitle: 'status'
    }
  }
}

export default newsletterSubscriber
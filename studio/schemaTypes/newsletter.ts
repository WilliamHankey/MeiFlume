const newsletter = {
  name: 'newsletter',
  title: 'Newsletter',
  type: 'document',
  description:
    'Settings for the newsletter sign-up form shown in the footer. Subscribers are stored as "Newsletter Subscriber" documents.',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Stay Updated'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      initialValue: 'Subscribe to our newsletter for the latest insights and updates.'
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Subscribe'
    },
    {
      name: 'placeholder',
      title: 'Input Placeholder',
      type: 'string',
      initialValue: 'Enter your email'
    },
    {
      name: 'successMessage',
      title: 'Success Message',
      type: 'string',
      initialValue: 'Thanks for subscribing! Please check your inbox to confirm.'
    },
    {
      name: 'enabled',
      title: 'Enabled',
      type: 'boolean',
      description: 'Show or hide the newsletter sign-up form.',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}

export default newsletter
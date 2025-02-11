import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'service_name',
      label: 'Name of the Service',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}

import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'Name of the Project',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}

import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { GlobalConfig } from 'payload'
const About: GlobalConfig = {
  slug: 'about',
  label: 'About Us',
  access: {
    read: () => true, // Anyone can read
  },
  fields: [
    {
      label: 'About Us',
      name: 'about_description',
      type: 'textarea',
      //   editor: lexicalEditor({}),
      required: true,
    },
    {
      label: 'About Us Main Image',
      name: 'about_image1',
      type: 'upload',
      relationTo: 'media', // Ensure you have a media collection
      required: true,
    },
    {
      label: 'About Us Secondary Image',
      name: 'about_image2',
      type: 'upload',
      relationTo: 'media', // Ensure you have a media collection
      required: true,
    },
    {
      label: 'Our Mission',
      name: 'about_mission',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
    },
    {
      label: 'Our Vission',
      name: 'about_vision',
      type: 'richText',
      editor: lexicalEditor({}),
      required: true,
    },
    {
      label: 'Our Core Values',
      name: 'about_core_values',
      type: 'richText',
      editor: lexicalEditor({}),
      required: true,
    },
  ],
}

export default About

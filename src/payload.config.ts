// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { cloudinaryStorage } from 'payload-cloudinary'
import About from './globals/About'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Services],
  globals: [About],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    cloudinaryStorage({
      config: {
        cloud_name: 'dpauqvsd6',
        api_key: '368281367779355',
        api_secret: 'MjkyCgAtXpBmoiGRA45q6y0MxNQ',
      },
      collections: {
        media: true, // Enable for media collection
        services: true,
        // Add more collections as needed
      },
      folder: 'MDC', // Optional, defaults to 'payload-media'
      disableLocalStorage: true, // Optional, defaults to true
      enabled: true, // Optional, defaults to true
    }),
  ],
})

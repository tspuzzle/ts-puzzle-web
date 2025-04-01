// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig, getPayload as getPayloadBase } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './(admin)/collections/Users'
import { Media } from './(admin)/collections/Media'
import { Accounts } from './(admin)/collections/Account'
import { Challenges } from './(admin)/collections/Challenges'
import { ChallengeLabels } from './(admin)/collections/ChallengeLabels'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const payloadConfig = buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      views: {
        login: {
          Component: '@/(admin)/views/Login',
          path: '/signin',
        },
      },
    },
  },
  collections: [Users, Accounts, Challenges, ChallengeLabels, Media],
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
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})

export default payloadConfig

export async function getPayload() {
  'use server'
  return await getPayloadBase({ config: payloadConfig })
}

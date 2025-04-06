// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import path from 'path'
import { buildConfig, getPayload as getPayloadBase } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Accounts } from './(admin)/collections/Account'
import { ChallengeLabels } from './(admin)/collections/ChallengeLabels'
import { Challenges } from './(admin)/collections/Challenges'
import { Media } from './(admin)/collections/Media'
import { Users } from './(admin)/collections/Users'
import { defaultLexical } from './(admin)/fields/defaultLexical'

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
  editor: defaultLexical,
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

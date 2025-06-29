// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import path from 'path'
import { buildConfig, getPayload as getPayloadBase } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'
import { s3Storage } from '@payloadcms/storage-s3'

import { Accounts } from './(admin)/collections/Account'
import { Media } from './(admin)/collections/Media'
import { Users } from './(admin)/collections/Users'

import { Posts } from './(admin)/collections/blog/Posts'

import { Challenges, ChallengeLabels } from './(admin)/collections/challenges'
import { Courses, Lessons, Chapters } from './(admin)/collections/courses'

import { defaultLexical } from './(admin)/blocks/defaultLexical'

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
  collections: [
    Posts,
    Challenges,
    ChallengeLabels,
    Courses,
    Lessons,
    Chapters,
    Users,
    Accounts,
    Media,
  ],
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
    s3Storage({
      collections: {
        media: true,
      },
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID!,
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY!,
        },

        region: process.env.S3_REGION,
      },
      bucket: process.env.S3_BUCKET!,
    }),
  ],
})

export default payloadConfig

export async function getPayload() {
  'use server'
  return await getPayloadBase({ config: payloadConfig })
}

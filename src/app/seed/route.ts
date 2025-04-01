import { seed } from '@/lib/app/seed'
import { getPayload } from '@payload-config'
import { headers } from 'next/headers'

export const GET = async () => {
  const payload = await getPayload()
  /*
  const requestHeaders = await headers()


  // Authenticate by passing request headers
  const { user } = await payload.auth({ headers: requestHeaders })

  if (!user) {
    return new Response('Action forbidden.', { status: 403 })
  }
 */

  await seed({ payload })

  return Response.json({ success: true })
}

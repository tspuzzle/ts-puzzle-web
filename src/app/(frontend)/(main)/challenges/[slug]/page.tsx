import { ChallengePage } from '@/lib/pages/challenges'

export default async function HomePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return <ChallengePage slug={slug} />
}

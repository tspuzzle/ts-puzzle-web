import { PostPage } from '@/lib/pages/post/ui/PostPage'

export default async function HomePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return <PostPage slug={slug} />
}

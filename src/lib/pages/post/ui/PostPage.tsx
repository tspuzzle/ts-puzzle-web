import { NotFoundError } from '@/lib/app/errors'
import { notFound } from 'next/navigation'
import { getPost } from '../actions/getPost'
import RichText from '@/lib/shared/components/RichText'

export const PostPage = async ({ slug }: { slug: string }) => {
  const post = await getPost({ slug })

  try {
    return (
      <div className="container mx-auto px-4 py-8 max-w-[800px]">
        <h1 className="text-h4 text-primary-main">{post.title}</h1>
        <RichText data={post.content} />
      </div>
    )
  } catch (error) {
    if (error instanceof NotFoundError) {
      return notFound()
    }
    throw error
  }
}

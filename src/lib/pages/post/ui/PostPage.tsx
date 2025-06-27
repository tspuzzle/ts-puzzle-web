import { NotFoundError } from '@/lib/app/errors'
import { notFound } from 'next/navigation'
import { getPost } from '../actions/getPost'
import RichText from '@/lib/shared/components/RichText'

export const PostPage = async ({ slug }: { slug: string }) => {
  const post = await getPost({ slug })

  try {
    return (
      <div>
        {post.title}

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

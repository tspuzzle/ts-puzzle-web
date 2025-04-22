import { CoursePage } from '@/lib/pages/course/ui/CoursePage'

export default async function HomePage({ params }: { params: Promise<{ courseSlug: string }> }) {
  const { courseSlug } = await params

  return <CoursePage courseSlug={courseSlug} />
}

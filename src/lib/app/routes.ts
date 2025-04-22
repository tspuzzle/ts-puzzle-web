import { root } from 'postcss'

type CourseRoutes = {
  (courseId: string): string
  [Symbol.toPrimitive](): string
}

const routes = {
  login: '/auth/login',
  register: '/auth/register',
  home: '/',
  challenges: {
    list: '/challenges',
    bySlug: (slug: string) => `/challenges/${slug}`,
  },
  courses: {
    list: '/courses',
    bySlug: ({ courseSlug }: { courseSlug: string }) => `/courses/${courseSlug}`,
    lessons: {
      bySlug: ({ courseSlug, lessonSlug }: { courseSlug: string; lessonSlug: string }) => {
        return `/courses/${courseSlug}/${lessonSlug}`
      },
    },
    chapters: {
      bySlug: ({
        chapterSlug,
        lessonSlug,
        courseSlug,
      }: {
        courseSlug: string
        lessonSlug: string
        chapterSlug: string
      }) => {
        return `/courses/${courseSlug}/${lessonSlug}/${chapterSlug}`
      },
    },
  },
}

export default routes

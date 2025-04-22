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
  courses: Object.assign(
    (courseSlug: string) => ({
      lessons: (lessonSlug: string) => {
        return `/courses/${courseSlug}/${lessonSlug}`
      },
    }),
    {
      list: '/courses',
      bySlug: (courseSlug: string) => `/courses/${courseSlug}`,
    },
  ),
}

export default routes

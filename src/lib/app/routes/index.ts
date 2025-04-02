const routes = {
  login: '/auth/login',
  register: '/auth/register',
  home: '/',
  challenges: {
    list: '/challenges',
    bySlug: (slug: string) => `/challenges/${slug}`,
  },
  courses: '/courses',
}

export default routes

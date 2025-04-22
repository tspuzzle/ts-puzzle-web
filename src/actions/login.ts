'use server'

import { LoginSchema } from '@/(shared)/schemas/auth'
import { signIn } from '@/auth'
import { AuthError } from 'next-auth'

export const login = async (values: any) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return {
      error: 'Invalid fields',
    }
  }

  try {
    await signIn('credentials', { ...validatedFields.data, redirectTo: '/' })
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: 'Something went wrong' }
    }
    throw error
  }
  return { success: 'Email sent' }
}

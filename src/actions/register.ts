'use server'

import { createUser, getUserByEmail } from '@/(shared)/data/user'
import { RegisterSchema, RegisterSchemaType } from '@/(shared)/schemas/auth'
import bcrypt from 'bcryptjs'

export const register = async (values: RegisterSchemaType) => {
  try {
    const validatedFields = RegisterSchema.safeParse(values)

    if (!validatedFields.success) {
      return {
        error: 'Invalid fields',
      }
    }

    const { email, password, name } = validatedFields.data

    const existingUser = await getUserByEmail(email)

    if (existingUser) {
      return { error: 'User already exists' }
    }

    const hashPassword = await bcrypt.hash(password, 10)

    await createUser({ email, password: hashPassword, name })

    return { success: 'User created' }
  } catch (error: unknown) {
    return { error: 'Something went wrong' }
  }
}

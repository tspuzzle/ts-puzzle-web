'use client'
import { LoginSchema, LoginSchemaType } from '@/(shared)/schemas/auth'
import { Button } from '@/components/ui/button'

import { login } from '@/actions/login'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import SocialsButtons from './socials-buttons'

const FormLogin = () => {
  const [isPending, startTransition] = useTransition()
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (values: LoginSchemaType) => {
    startTransition(async () => {
      await login(values)
    })
    console.log(values)
  }

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} type="email" placeholder="Email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} type="password" placeholder="Password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-4">
          <Button type="submit" className="w-full">
            Login
          </Button>
          <p className="text-body1 text-center">or</p>
          <SocialsButtons />
        </div>
      </form>
    </Form>
  )
}

export default FormLogin

'use client'
import { RegisterSchema, RegisterSchemaType } from '@/(shared)/schemas/auth'
import { Button } from '@/components/ui/button'

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import SocialsButtons from './socials-buttons'
import { useTransition } from 'react'
import { register } from '@/actions/register'

const FormRegister = () => {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const [isPending, startTransition] = useTransition()

  const onSubmit = (values: RegisterSchemaType) => {
    startTransition(() => {
      register(values)
    })
  }

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input {...field} type="text" placeholder="Name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            Create Account
          </Button>
          <p className="text-body1 text-center">or</p>
          <SocialsButtons />
        </div>
      </form>
    </Form>
  )
}

export default FormRegister

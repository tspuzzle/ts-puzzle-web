import routes from '@/(shared)/config/routes'
import FormLogin from '@/components/features/auth/form-login'
import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-primary">
      <Card className="w-[500px] p-12 bg-white">
        <CardTitle>
          <h1 className="text-h2">Login</h1>
          <p className="text-body1">
            <span className="mr-2">Don&apos;t have an Account</span>
            <Button variant="link" asChild className="p-0">
              <Link href={routes.register}>Create an Account</Link>
            </Button>
          </p>
        </CardTitle>
        <FormLogin />
      </Card>
    </div>
  )
}

export default Page

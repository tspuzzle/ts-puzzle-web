import routes from '@/(shared)/config/routes'
import FormRegister from '@/components/features/auth/form-register'
import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

const Page = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-primary">
      <Card className="w-[500px] p-12 bg-white">
        <CardTitle>
          <h1 className="text-h2">Welcome to TypeScript Puzzle</h1>
          <p className="text-body1">
            <span className="mr-2">Already have an Account</span>
            <Button variant="link" asChild className="p-0">
              <Link href={routes.login}>Log In</Link>
            </Button>
          </p>
        </CardTitle>
        <FormRegister />
      </Card>
    </div>
  )
}

export default Page

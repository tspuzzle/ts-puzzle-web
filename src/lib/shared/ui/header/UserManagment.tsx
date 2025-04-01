import { auth } from '@/auth'
import { Button } from '@/components/ui/button'
import routes from '@/lib/app/routes'
import Link from 'next/link'

export const UserManagment = async () => {
  const session = await auth()

  if (!session?.user) {
    return (
      <div className="flex gap-4">
        <Button size="sm" asChild>
          <Link href={routes.login}>Sign In</Link>
        </Button>
      </div>
    )
  }
  return <div>Loged user</div>
}

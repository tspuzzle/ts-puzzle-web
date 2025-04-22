import { auth } from '@/auth'
import Account from '@/components/features/auth/account'

const Page = async () => {
  const session = await auth()

  const user = session?.user

  if (!user) {
    return null
  }

  return (
    <div className="m-auto max-w-[500px]">
      <Account user={user} />
    </div>
  )
}

export default Page

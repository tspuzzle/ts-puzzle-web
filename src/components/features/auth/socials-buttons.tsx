import { Button } from '@/components/ui/button'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { signIn } from 'next-auth/react'

const SocialsButtons = () => {
  const signInWith = async (provider: string) => {
    await signIn(provider, {
      callbackUrl: '/',
    })
  }
  return (
    <div className="flex flex-col gap-4">
      <Button
        type="button"
        className="w-full"
        variant="outline"
        onClick={() => {
          signInWith('github')
        }}
      >
        <FaGithub className="h-5 w-5" />
        Continue with Github
      </Button>
      <Button
        type="button"
        className="w-full"
        variant="outline"
        onClick={() => {
          signInWith('google')
        }}
      >
        <FaGoogle className="h-5 w-5" />
        Continue with Google
      </Button>
    </div>
  )
}

export default SocialsButtons

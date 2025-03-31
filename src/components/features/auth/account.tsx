'use client'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '@/components/ui/button'

const Account = ({ user }: { user: { name?: string | null } }) => {
  const [name, setName] = useState(user.name || '')
  return (
    <div className="w-full ">
      <h1 className="text-h2 text-center mb-6">Profile Settings</h1>
      <div className="flex flex-col gap-4">
        <Input
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          placeholder="Name"
        />

        <Button>Save</Button>
        <Button
          variant="secondary"
          onClick={() => {
            signOut({ redirectTo: '/' })
          }}
        >
          Log out
        </Button>

        <Button variant="link" className="text-destructive">
          Delete Account
        </Button>
      </div>
    </div>
  )
}

export default Account

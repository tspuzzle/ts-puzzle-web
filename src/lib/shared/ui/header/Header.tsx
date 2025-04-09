import Image from 'next/image'
import { UserManagment } from './UserManagment'
import { ThemeToggler } from './ThemeToggler'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import routes from '@/lib/app/routes'

export const Header = () => {
  return (
    <nav className="flex px-10 py-6 justify-between items-center bg-white ">
      <div className="flex items-center gap-12">
        <Image src="/logo.png" width={146} height={37} alt="logo" className="block dark:hidden" />
        <Image
          src="/logo-dark.png"
          width={146}
          height={37}
          alt="logo"
          className="hidden dark:block"
        />
        <ul className="flex gap-4">
          <li>
            <Button variant="navigation" size="navigation" asChild>
              <Link href={routes.home}>Daily Challenge</Link>
            </Button>
          </li>
          <li>
            <Button variant="navigation" size="navigation">
              <Link href={routes.courses.list}>Course</Link>
            </Button>
          </li>
          <li>
            <Button variant="navigation" size="navigation">
              Support Us
            </Button>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggler />
        <UserManagment />
      </div>
    </nav>
  )
}

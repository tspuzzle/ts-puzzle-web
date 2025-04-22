import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ChallengesListView } from './ChallengesListView'

export const ChallengesListPage = () => {
  return (
    <div className="px-4 bg-white">
      <div className="p-12 rounded-t-3xl bg-primary-dark text-white">
        <div>
          <h1 className="text-h1 max-w-[1000px]">
            Learn and imporove
            <Image
              src="/ts-logo.png"
              width={235}
              height={66}
              alt="ts-logo"
              className="mx-4 inline dark:hidden"
            />
            <Image
              src="/ts-logo-dark.png"
              width={235}
              height={66}
              alt="ts-logo"
              className="mx-4 hidden dark:inline"
            />
            skills with our Daily challenges
          </h1>
          <Button variant="secondary">Support Us</Button>
        </div>
        <div className="mt-40">
          <ChallengesListView />
        </div>
      </div>
    </div>
  )
}

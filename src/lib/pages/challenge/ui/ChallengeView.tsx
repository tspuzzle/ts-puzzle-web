import { Challenge, ChallengeLabel } from '@/payload-types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GrDocumentText } from 'react-icons/gr'
import { LuClipboardCheck } from 'react-icons/lu'
import { IoExtensionPuzzleOutline } from 'react-icons/io5'
import { FaPeopleGroup } from 'react-icons/fa6'
import { Chip, DifficultyChip } from '@/lib/shared/ui'
import RichText from '@/lib/shared/components/RichText'

export const ChallengeView = async ({ challenge }: { challenge: Challenge }) => {
  console.log('challenge.description', challenge.description)
  const labels = (challenge.labels || []) as ChallengeLabel[]
  return (
    <div className="h-[calc(100vh-80px)] grid grid-cols-2 gap-2 px-4 bg-background-paper">
      <div className="px-6 pt-2">
        <div className="h-[100%] max-w-[100%]">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">
                <GrDocumentText className="h-4 w-4" />
                Description
              </TabsTrigger>
              <TabsTrigger value="tests">
                <LuClipboardCheck className="h-4 w-4" />
                Test cases
              </TabsTrigger>
              <TabsTrigger value="hints">
                <IoExtensionPuzzleOutline className="h-4 w-4" />
                Hints
              </TabsTrigger>
              <TabsTrigger value="solutions">
                <FaPeopleGroup className="h-4 w-4" />
                Solutiins
              </TabsTrigger>
            </TabsList>
            <div className="flex flex-col gap-2">
              <h1 className="text-primary-text text-h2">{challenge.title}</h1>
              <div className="flex flex-wrap gap-2">
                <DifficultyChip type={challenge.difficulty} />
                {labels.map((label) => (
                  <Chip title={label.title} key={label.id} />
                ))}
              </div>
            </div>
            <div className="mt-12 scroll-auto">
              <TabsContent value="description">
                <h2 className="text-primary-text text-h4 mb-2">Description:</h2>
                <RichText data={challenge.description} />
              </TabsContent>
              <TabsContent value="tests">Change your password here.</TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
      <div className="flex-grow-1 bg-red-200">Right</div>
    </div>
  )
}

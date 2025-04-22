import { Challenge, ChallengeLabel } from '@/payload-types'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { GrDocumentText } from 'react-icons/gr'
import { LuClipboardCheck } from 'react-icons/lu'
import { IoExtensionPuzzleOutline } from 'react-icons/io5'
import { FaPeopleGroup } from 'react-icons/fa6'
import { Chip, DifficultyChip } from '@/lib/shared/ui'
import RichText from '@/lib/shared/components/RichText'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'

const tabButtonClassName =
  'text-primary px-4 py-2 text-[1rem] font-semibold data-[state=active]:bg-primary-light border-0 data-[state=active]:shadow-none rounded-none border-r-1 border-grey-100'
export const ChallengeView = async ({ challenge }: { challenge: Challenge }) => {
  const labels = (challenge.labels || []) as ChallengeLabel[]

  return (
    <div className="h-[calc(100vh-80px)] px-4 bg-background-paper">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="px-6 overflow-scroll height-full">
          <div className="h-full overflow-scroll">
            <Tabs defaultValue="description">
              <div className="sticky top-0 bg-background-paper pb-4 pt-2">
                <TabsList className="rounded-lg border-grey-100 border p-0 h-auto overflow-hidden">
                  <TabsTrigger value="description" className={tabButtonClassName}>
                    <GrDocumentText className="h-4 w-4 font-semibold" />
                    Description
                  </TabsTrigger>
                  <TabsTrigger value="tests" className={tabButtonClassName}>
                    <LuClipboardCheck className="h-4 w-4" />
                    Test cases
                  </TabsTrigger>
                  <TabsTrigger value="hints" className={tabButtonClassName}>
                    <IoExtensionPuzzleOutline className="h-4 w-4" />
                    Hints
                  </TabsTrigger>
                  <TabsTrigger value="solutions" className={tabButtonClassName}>
                    <FaPeopleGroup className="h-4 w-4" />
                    Solutions
                  </TabsTrigger>
                </TabsList>
                <div className="flex flex-col gap-2 mt-8">
                  <h1 className="text-primary-text text-h2">{challenge.title}</h1>
                  <div className="flex flex-wrap gap-2">
                    <DifficultyChip type={challenge.difficulty} />
                    {labels.map((label) => (
                      <Chip title={label.title} key={label.id} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 scroll-auto">
                <TabsContent value="description">
                  <h2 className="text-primary-text text-h4 mb-2">Description:</h2>
                  <RichText data={challenge.description} />
                </TabsContent>
                <TabsContent value="tests">Change your password here.</TabsContent>
              </div>
            </Tabs>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel className="px-6">
          <div className="h-full overflow-scroll">sakjld</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
  return (
    <div className="h-[calc(100vh-80px)] grid grid-cols-2 gap-2 px-4 bg-background-paper">
      <div className="px-6 pt-2">
        <div className="h-[100%] max-w-[100%]"></div>
      </div>
      <div className="flex-grow-1 bg-red-200">Right</div>
    </div>
  )
}

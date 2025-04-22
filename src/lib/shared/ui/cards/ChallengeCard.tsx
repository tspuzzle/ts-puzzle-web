import { ChallengeLabel } from '@/payload-types'
import { DifficultyChip } from '../chips/DifficultyChip'
import { Chip } from '../chips/Chip'

export const ChallengeCard = ({
  title,
  difficulty,
  labels,
}: {
  title: string
  difficulty: string
  labels: ChallengeLabel[]
}) => {
  return (
    <div className="p-4 rounded-lg flex flex-col justify-between bg-background hover:bg-grey-50 min-h-[240px] border-1 border-grey-100">
      <div className="flex flex-col gap-6 items-start">
        <DifficultyChip type={difficulty} />
        <h3 className="text-h4 text-primary-text">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {labels.map((label) => (
          <Chip title={label.title} key={label.id} />
        ))}
      </div>
    </div>
  )
}

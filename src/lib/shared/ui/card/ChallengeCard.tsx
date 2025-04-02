import { DifficultyLabel } from '../label/DifficultyLabel'

export const ChallengeCard = ({ title, difficulty }: { title: string; difficulty: string }) => {
  return (
    <div className="p-4 rounded-lg flex flex-col justify-between bg-background min-h-[280px]">
      <div className="flex flex-col gap-6">
        <DifficultyLabel type={difficulty} />
        <h3 className="text-h4 text-primary-text">{title}</h3>
      </div>
      <div>Labels</div>
    </div>
  )
}

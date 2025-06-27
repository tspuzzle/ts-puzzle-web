'use client'
import ChallengeBlock from '@/lib/shared/components/ChallengeBlock'
import { ChallengeEditorBlock } from '@/payload-types'

type Props = ChallengeEditorBlock

export const ChallengeEditor: React.FC<Props> = (challengeBlock) => {
  return <ChallengeBlock challengeBlock={challengeBlock} />
}

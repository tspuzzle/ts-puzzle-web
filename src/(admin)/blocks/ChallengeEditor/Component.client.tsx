'use client'
import { ChallengeEditorBlock } from '@/payload-types'

type Props = ChallengeEditorBlock

export const ChallengeEditor: React.FC<Props> = ({ solution }) => {
  console.log('solution', solution)
  return <>Challenge Block</>
}

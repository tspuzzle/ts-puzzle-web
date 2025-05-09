import React from 'react'
import { ChallengeEditor } from './Component.client'
import { ChallengeEditorBlock as _ChallengeEditorBlockProps } from '@/payload-types'

export type ChallengeEditorBlockProps = {
  blockType: 'challengeEditor'
} & _ChallengeEditorBlockProps

type Props = ChallengeEditorBlockProps

export const ChallengeEditorBlock: React.FC<Props> = ({ ...challengeEditorBlock }) => {
  return <ChallengeEditor {...challengeEditorBlock} />
}

import React from 'react'

import { Test } from './Component.client'
import { Question } from '@/lib/shared/components/TestQuestion/model'

export type TestBlockProps = Question & {
  blockType: 'test'
}

type Props = TestBlockProps & {
  className?: string
}

export const TestBlock: React.FC<Props> = ({ className, blockType, ...question }) => {
  return <Test {...question} />
}

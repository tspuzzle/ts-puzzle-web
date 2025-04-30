import { Chapter } from '@/payload-types'

export type Question = Exclude<Chapter['questions'], null | undefined>[number]
export type Answer = Exclude<Question['answers'], null | undefined>[number]

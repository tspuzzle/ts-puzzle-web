'use client'
import { Button } from '@/components/ui/button'
import { TestQuestion } from '@/lib/shared/components/TestQuestion/TestQuestion'
import { Chapter, Lesson } from '@/payload-types'
import { Dispatch, SetStateAction, useState } from 'react'

type UserQuestionMeta = { checkedAnswers: number[]; mode: 'picking' | 'review' }
export type Question = Exclude<Chapter['questions'], null | undefined>[number]

const TestPart = ({
  userQuestionMetas,
  setUserQuestionMetas,
  currentQuestionIndex,
  setCurrentQuestionIndex,
  questions,
}: {
  questions: Question[]
  setUserQuestionMetas: Dispatch<SetStateAction<UserQuestionMeta[]>>
  userQuestionMetas: UserQuestionMeta[]
  currentQuestionIndex: number
  setCurrentQuestionIndex: Dispatch<SetStateAction<number>>
}) => {
  const currentQuestion = questions[currentQuestionIndex]
  const userQuestionMeta = userQuestionMetas[currentQuestionIndex]

  const setUserQuestionMetaByPath = <KEY extends keyof UserQuestionMeta>(
    path: KEY,
    value: UserQuestionMeta[KEY],
  ) => {
    setUserQuestionMetas((prevMeta) =>
      prevMeta.map((meta, i) => {
        if (currentQuestionIndex === i) {
          return { ...meta, [path]: value }
        }
        return meta
      }),
    )
  }

  return (
    <div>
      <div className="text-h6 flex flex-wrap gap-1 mb-2">
        <span className="text-primary">QUESTION {currentQuestionIndex + 1}</span>
        <span className="text-grey-500">OF {questions.length}</span>
      </div>
      <TestQuestion
        question={currentQuestion}
        {...userQuestionMeta}
        setCheckedAnswers={(answers) => {
          if (userQuestionMeta.mode === 'picking') {
            setUserQuestionMetaByPath('checkedAnswers', answers)
          }
        }}
      />
      <div className="mt-4  grid grid-flow-col justify-end gap-2">
        {currentQuestionIndex > 0 && (
          <Button
            variant="outline"
            className="border-0 shadow-none hover:shadow-none text-secondary-text"
            onClick={() => {
              setCurrentQuestionIndex((prev) => prev - 1)
            }}
          >
            Back
          </Button>
        )}

        {userQuestionMeta.mode === 'picking' && (
          <Button
            disabled={userQuestionMeta.checkedAnswers.length === 0}
            onClick={() => {
              setUserQuestionMetaByPath('mode', 'review')
            }}
          >
            Check
          </Button>
        )}

        {userQuestionMeta.mode === 'review' && (
          <Button
            onClick={() => {
              setCurrentQuestionIndex((prev) => prev + 1)
            }}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  )
}

export const ContentTest = ({
  lesson,
  currentChapter,
  chapters,
  currentChapterIndex,
}: {
  lesson: Lesson
  currentChapter: Chapter
  chapters: Chapter[]
  currentChapterIndex: number
}) => {
  const questions = currentChapter.questions || []

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const [userQuestionMetas, setUserQuestionMetas] = useState<
    { checkedAnswers: number[]; mode: 'picking' | 'review' }[]
  >(
    Array.from({ length: questions.length }).map(() => ({
      checkedAnswers: [],
      mode: 'picking',
    })),
  )

  if (currentQuestionIndex >= questions.length) {
    return <div>Finished</div>
  }

  return (
    <TestPart
      questions={questions}
      userQuestionMetas={userQuestionMetas}
      setUserQuestionMetas={setUserQuestionMetas}
      currentQuestionIndex={currentQuestionIndex}
      setCurrentQuestionIndex={setCurrentQuestionIndex}
    />
  )
}

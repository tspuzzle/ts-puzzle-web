import { Check, Clock, Play, X } from 'lucide-react'
import { TestCase, TestCaseState } from '../types'

export const TestCaseStatusIcon = ({ status }: { status: TestCaseState['status'] }) => {
  switch (status) {
    case 'passed':
      return <Check className="w-4 h-4 text-green-500" />
    case 'failed':
      return <X className="w-4 h-4 text-red-500" />
    case 'checking':
      return <Clock className="w-4 h-4 text-yellow-500 animate-spin" />
    default:
      return <Play className="w-4 h-4 text-gray-400" />
  }
}

import { Badge } from '@/components/ui/badge'
import { TestCaseState } from '../types'

export const TestCaseStatusBadge = ({ status }: { status: TestCaseState['status'] }) => {
  const variants = {
    passed: 'bg-green-100 text-green-800 border-green-200',
    failed: 'bg-red-100 text-red-800 border-red-200',
    checking: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'not-run': 'bg-gray-100 text-gray-600 border-gray-200',
  }

  return (
    <Badge variant="outline" className={variants[status]}>
      {status.replace('-', ' ')}
    </Badge>
  )
}

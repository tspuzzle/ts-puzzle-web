export const Chip = ({ title }: { title: string }) => {
  return (
    <div className="px-2 h-6 rounded-sm text-body2 inline-flex items-center bg-primary-light text-primary ">
      {title}
    </div>
  )
}

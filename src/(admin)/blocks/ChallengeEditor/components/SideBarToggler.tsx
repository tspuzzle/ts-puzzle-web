import { PanelLeftClose, PanelLeftOpen } from 'lucide-react'

export const SideBarToggler = ({
  sidebarVisible,
  setSidebarVisible,
}: {
  setSidebarVisible: (visible: boolean) => void
  sidebarVisible?: boolean
}) => {
  return (
    <div className="flex" onClick={() => setSidebarVisible(!sidebarVisible)}>
      {sidebarVisible ? (
        <PanelLeftClose className="h-5 w-5" />
      ) : (
        <PanelLeftOpen className="h-5 w-5" />
      )}
    </div>
  )
}

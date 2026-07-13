import { Sidebar } from './sidebar'
import { Topbar } from './topbar'

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-bg">
      <Sidebar />
      <div className="min-w-0 lg:pl-64">
        <Topbar />
        <main className="mx-auto min-w-0 max-w-content px-4 py-5 sm:py-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  )
}

'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Logo } from '@/components/shared/logo'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard, TrendingUp, Users, GraduationCap, BookOpen,
  Building2, CreditCard, ShieldCheck, BarChart3, ArrowLeft, Menu, X,
} from 'lucide-react'
import { useState } from 'react'

const adminNav = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/revenue', label: 'Revenue Analytics', icon: TrendingUp },
  { href: '/admin/students', label: 'Students', icon: Users },
  { href: '/admin/instructors', label: 'Instructors', icon: GraduationCap },
  { href: '/admin/courses', label: 'Courses', icon: BookOpen },
  { href: '/admin/branches', label: 'Branches', icon: Building2 },
  { href: '/admin/payments', label: 'Payments', icon: CreditCard },
  { href: '/admin/verification', label: 'Certificate Verification', icon: ShieldCheck },
  { href: '/admin/reports', label: 'Reports', icon: BarChart3 },
]

function NavLinks({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return (
    <>
      {adminNav.map((item) => {
        const active = pathname === item.href
        return (
          <Link key={item.href} href={item.href} onClick={onNavigate}
            className={cn(
              'group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium ring-focus transition-colors',
              active ? 'text-gold' : 'text-ink-2 hover:bg-surface-2 hover:text-ink'
            )}>
            {active && (
              <motion.div layoutId="admin-nav-active" className="absolute inset-0 rounded-lg bg-gold-soft"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
            )}
            <item.icon className={cn('relative z-10 h-[18px] w-[18px]', active && 'text-gold')} strokeWidth={2} />
            <span className="relative z-10">{item.label}</span>
          </Link>
        )
      })}
    </>
  )
}

export function AdminShell({ children, title, subtitle, action }: {
  children: React.ReactNode; title: string; subtitle?: string; action?: React.ReactNode
}) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-screen bg-bg">
      {/* desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-surface lg:flex">
        <div className="flex h-16 items-center gap-2 px-6">
          <Link href="/admin" className="ring-focus rounded-md"><Logo /></Link>
          <span className="rounded-md bg-gold-soft px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-gold">Admin</span>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-4">
          <NavLinks pathname={pathname} />
        </nav>
        <Link href="/" className="ring-focus m-3 flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-medium text-ink-2 transition hover:bg-surface-2 hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> Back to Student Portal
        </Link>
      </aside>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <aside className="absolute inset-y-0 left-0 flex w-[min(18rem,calc(100vw-2rem))] flex-col overflow-y-auto border-r border-border bg-surface">
            <div className="flex h-16 items-center justify-between px-6">
              <Logo />
              <button onClick={() => setOpen(false)} className="ring-focus rounded-md p-1 text-ink-2"><X className="h-5 w-5" /></button>
            </div>
            <nav className="flex-1 space-y-1 px-3 py-4"><NavLinks pathname={pathname} onNavigate={() => setOpen(false)} /></nav>
            <Link href="/" className="m-3 flex items-center gap-2 rounded-lg border border-border px-3 py-2.5 text-sm font-medium text-ink-2">
              <ArrowLeft className="h-4 w-4" /> Student Portal
            </Link>
          </aside>
        </div>
      )}

      <div className="min-w-0 lg:pl-64">
        {/* topbar */}
        <header className="sticky top-0 z-20 flex h-16 items-center justify-between gap-4 border-b border-border bg-bg/80 px-4 backdrop-blur lg:px-8">
          <button onClick={() => setOpen(true)} className="ring-focus rounded-md p-1 text-ink-2 lg:hidden"><Menu className="h-5 w-5" /></button>
          <div className="hidden items-center gap-2 sm:flex">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-gold to-coral text-xs font-bold text-[hsl(222_32%_7%)]">AM</div>
            <div className="text-left">
              <p className="text-xs font-semibold leading-tight">Academy Manager</p>
              <p className="text-[11px] leading-tight text-ink-3">Owner · All branches</p>
            </div>
          </div>
          <div className="flex-1" />
        </header>

        <main className="mx-auto min-w-0 max-w-content px-4 py-5 sm:py-6 lg:px-8 lg:py-8">
          <div className="mb-6 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <h1 className="font-display text-2xl font-bold lg:text-3xl">{title}</h1>
              {subtitle && <p className="mt-1 text-sm text-ink-2">{subtitle}</p>}
            </div>
            {action}
          </div>
          {children}
        </main>
      </div>
    </div>
  )
}

'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AdminShell } from '@/components/admin/admin-shell'
import { RevenueBars, LineChart, BreakdownBar } from '@/components/admin/charts'
import { Card, CardBody } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { DemoActionButton } from '@/components/shared/demo-action-button'
import {
  academyStats, revenueSeries, enrollmentSeries, revenueByTrack,
  recentEnrollments, branchPerformance,
} from '@/data/admin/overview'
import { cn } from '@/lib/utils'
import {
  TrendingUp, Users, GraduationCap, BookOpen, ArrowUpRight, Download, Building2, ArrowRight,
} from 'lucide-react'

function egp(n: number) {
  if (n >= 1_000_000) return `E£${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1000) return `E£${(n / 1000).toFixed(0)}K`
  return `E£${n}`
}

export default function AdminDashboard() {
  const kpis = [
    { label: 'Monthly Revenue', value: egp(academyStats.monthlyRevenue), delta: `+${academyStats.revenueGrowth}%`, up: true, icon: TrendingUp, tone: 'text-teal-fg', bg: 'bg-teal-soft' },
    { label: 'Active Students', value: academyStats.activeStudents.toLocaleString(), delta: `+${academyStats.enrollmentsThisMonth} this month`, up: true, icon: Users, tone: 'text-gold', bg: 'bg-gold-soft' },
    { label: 'Instructors', value: academyStats.totalInstructors, delta: `${academyStats.activeCourses} active courses`, up: true, icon: GraduationCap, tone: 'text-coral', bg: 'bg-coral-soft' },
    { label: 'Graduation Rate', value: `${academyStats.graduationRate}%`, delta: `${academyStats.employmentRate}% employed`, up: true, icon: BookOpen, tone: 'text-violet', bg: 'bg-surface-2' },
  ]

  return (
    <AdminShell title="Academy Overview" subtitle="Operations, revenue, and growth across all branches."
      action={<DemoActionButton feature="Export report" detail="Report export will be implemented after live analytics are backed by Supabase." variant="outline" size="sm"><Download className="h-4 w-4" /> Export report</DemoActionButton>}>

      {/* KPI tiles */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((k, i) => (
          <motion.div key={k.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}
            className="rounded-xl border border-border bg-surface p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div className={cn('inline-flex h-10 w-10 items-center justify-center rounded-lg', k.bg)}>
                <k.icon className={cn('h-5 w-5', k.tone)} />
              </div>
              <span className="flex items-center gap-0.5 text-xs font-medium text-teal-fg">
                <ArrowUpRight className="h-3 w-3" /> {k.delta}
              </span>
            </div>
            <p className="mt-4 font-display text-3xl font-bold">{k.value}</p>
            <p className="text-sm text-ink-3">{k.label}</p>
          </motion.div>
        ))}
      </div>

      {/* revenue + breakdown */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardBody>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="font-display text-lg font-semibold">Revenue vs Target</h2>
                <p className="text-xs text-ink-3">Last 12 months · EGP thousands</p>
              </div>
              <div className="flex items-center gap-3 text-xs text-ink-2">
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-teal" /> Above target</span>
                <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-sm bg-coral" /> Below</span>
              </div>
            </div>
            <RevenueBars data={revenueSeries} />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <h2 className="font-display text-lg font-semibold">Revenue by Track</h2>
            <p className="mb-4 text-xs text-ink-3">This month · {egp(revenueByTrack.reduce((s, d) => s + d.value, 0))}</p>
            <BreakdownBar data={revenueByTrack} />
          </CardBody>
        </Card>
      </div>

      {/* enrollment trend + recent */}
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card>
          <CardBody>
            <h2 className="font-display text-lg font-semibold">New Enrollments</h2>
            <p className="mb-4 text-xs text-ink-3">Monthly · last 12 months</p>
            <LineChart data={enrollmentSeries} tone="gold" />
          </CardBody>
        </Card>
        <Card className="lg:col-span-2">
          <CardBody>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold">Recent Enrollments</h2>
              <Link href="/admin/payments"><Button variant="ghost" size="sm">View all <ArrowRight className="h-3.5 w-3.5" /></Button></Link>
            </div>
            <div className="space-y-1">
              {recentEnrollments.map((e) => (
                <div key={e.id} className="flex items-center gap-3 rounded-lg px-2 py-2 transition hover:bg-surface-2">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-fg text-xs font-semibold text-[hsl(222_32%_7%)]">{e.avatar}</div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{e.name}</p>
                    <p className="truncate text-xs text-ink-3">{e.program}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="font-mono text-sm font-semibold">{egp(e.amount)}</p>
                    <p className="text-[11px] text-ink-3">{e.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>

      {/* branch performance */}
      <div className="mt-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">Branch Performance</h2>
          <Link href="/admin/branches"><Button variant="ghost" size="sm">Manage branches <ArrowRight className="h-3.5 w-3.5" /></Button></Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {branchPerformance.map((b, i) => (
            <motion.div key={b.branch} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
              <Card className="h-full">
                <CardBody>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4 text-ink-3" />
                    <p className="text-sm font-semibold">{b.branch}</p>
                  </div>
                  <p className="mt-3 font-display text-xl font-bold">{b.students.toLocaleString()}</p>
                  <p className="text-xs text-ink-3">students · {egp(b.revenue)}</p>
                  <div className="mt-3">
                    <div className="mb-1 flex justify-between text-[11px] text-ink-3"><span>Capacity</span><span>{b.capacity}%</span></div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
                      <motion.div className={cn('h-full rounded-full', b.capacity > 80 ? 'bg-coral' : 'bg-teal')}
                        initial={{ width: 0 }} animate={{ width: `${b.capacity}%` }} transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }} />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </AdminShell>
  )
}

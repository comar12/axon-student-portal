'use client'
import { motion } from 'framer-motion'
import { AdminShell } from '@/components/admin/admin-shell'
import { Card, CardBody } from '@/components/ui/card'
import { DemoActionButton } from '@/components/shared/demo-action-button'
import { academyStats } from '@/data/admin/overview'
import { cn } from '@/lib/utils'
import { Download, TrendingUp, Users, GraduationCap, Award, Building2, Briefcase } from 'lucide-react'

const reports = [
  { id: 'r1', title: 'Revenue & Sales Report', desc: 'Monthly revenue, by track and branch, with refunds and outstanding balances.', icon: TrendingUp, tone: 'teal', updated: 'Generated daily' },
  { id: 'r2', title: 'Student Growth Report', desc: 'Enrollment trends, retention, churn, and cohort progression.', icon: Users, tone: 'gold', updated: 'Generated weekly' },
  { id: 'r3', title: 'Instructor Performance', desc: 'Ratings, student load, course completion, and feedback summaries.', icon: GraduationCap, tone: 'coral', updated: 'Generated monthly' },
  { id: 'r4', title: 'Certificates Issued', desc: 'All credentials issued, by program and period, with verification stats.', icon: Award, tone: 'violet', updated: 'Generated monthly' },
  { id: 'r5', title: 'Branch Operations', desc: 'Capacity, classroom utilization, and revenue per campus.', icon: Building2, tone: 'teal', updated: 'Generated weekly' },
  { id: 'r6', title: 'Employment & Placement', desc: 'Graduate employment rate, partner hiring, and placement outcomes.', icon: Briefcase, tone: 'gold', updated: 'Generated quarterly' },
]
const toneBg: Record<string, string> = { teal: 'bg-teal-soft text-teal-fg', gold: 'bg-gold-soft text-gold', coral: 'bg-coral-soft text-coral', violet: 'bg-surface-2 text-violet' }

export default function ReportsPage() {
  return (
    <AdminShell title="Reports" subtitle="Generate and export operational reports across the academy.">
      <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { label: 'Graduation rate', value: `${academyStats.graduationRate}%` },
          { label: 'Employment rate', value: `${academyStats.employmentRate}%` },
          { label: 'Avg. rating', value: academyStats.avgRating },
          { label: 'Total graduates', value: '2,140' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-surface p-4 text-center shadow-sm">
            <p className="font-display text-2xl font-bold">{s.value}</p><p className="text-xs text-ink-3">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {reports.map((r, i) => (
          <motion.div key={r.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
            <Card className="group flex h-full flex-col transition hover:-translate-y-0.5 hover:shadow-md">
              <CardBody className="flex flex-1 flex-col">
                <div className={cn('mb-3 flex h-11 w-11 items-center justify-center rounded-xl', toneBg[r.tone])}><r.icon className="h-5 w-5" /></div>
                <h3 className="font-display font-semibold">{r.title}</h3>
                <p className="mt-1 flex-1 text-sm text-ink-2">{r.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-ink-3">{r.updated}</span>
                  <DemoActionButton feature="Export" detail="Report exports will use live database analytics after Phase 2." variant="outline" size="sm"><Download className="h-3.5 w-3.5" /> Export</DemoActionButton>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </AdminShell>
  )
}

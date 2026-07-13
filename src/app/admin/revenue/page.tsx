'use client'
import { motion } from 'framer-motion'
import { AdminShell } from '@/components/admin/admin-shell'
import { RevenueBars, LineChart, BreakdownBar } from '@/components/admin/charts'
import { Card, CardBody } from '@/components/ui/card'
import { DemoActionButton } from '@/components/shared/demo-action-button'
import { revenueSeries, enrollmentSeries, revenueByTrack } from '@/data/admin/overview'
import { cn } from '@/lib/utils'
import { Download, TrendingUp, Wallet, Receipt, RotateCcw } from 'lucide-react'

function egp(n: number) {
  if (n >= 1_000_000) return `E£${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1000) return `E£${(n / 1000).toFixed(0)}K`
  return `E£${n}`
}

export default function RevenuePage() {
  const ytd = revenueSeries.reduce((s, d) => s + d.revenue, 0) * 1000
  const avgMonth = ytd / revenueSeries.length
  const kpis = [
    { label: 'Revenue (12mo)', value: egp(ytd), icon: TrendingUp, tone: 'text-teal-fg', bg: 'bg-teal-soft' },
    { label: 'Avg / month', value: egp(avgMonth), icon: Wallet, tone: 'text-gold', bg: 'bg-gold-soft' },
    { label: 'Outstanding', value: egp(385000), icon: Receipt, tone: 'text-coral', bg: 'bg-coral-soft' },
    { label: 'Refunds (12mo)', value: egp(96000), icon: RotateCcw, tone: 'text-violet', bg: 'bg-surface-2' },
  ]
  return (
    <AdminShell title="Revenue Analytics" subtitle="Financial performance across all programs and branches."
      action={<DemoActionButton feature="Export" detail="Revenue exports will be implemented after payment integration in Phase 4." variant="outline" size="sm"><Download className="h-4 w-4" /> Export</DemoActionButton>}>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {kpis.map((k, i) => (
          <motion.div key={k.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}
            className="rounded-xl border border-border bg-surface p-5 shadow-sm">
            <div className={cn('mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg', k.bg)}><k.icon className={cn('h-5 w-5', k.tone)} /></div>
            <p className="font-display text-2xl font-bold">{k.value}</p>
            <p className="text-sm text-ink-3">{k.label}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2"><CardBody>
          <h2 className="font-display text-lg font-semibold">Revenue vs Target</h2>
          <p className="mb-4 text-xs text-ink-3">Last 12 months · EGP thousands</p>
          <RevenueBars data={revenueSeries} />
        </CardBody></Card>
        <Card><CardBody>
          <h2 className="font-display text-lg font-semibold">By Track</h2>
          <p className="mb-4 text-xs text-ink-3">This month</p>
          <BreakdownBar data={revenueByTrack} />
        </CardBody></Card>
      </div>
      <div className="mt-6">
        <Card><CardBody>
          <h2 className="font-display text-lg font-semibold">Enrollment Trend</h2>
          <p className="mb-4 text-xs text-ink-3">New paid enrollments per month</p>
          <LineChart data={enrollmentSeries} tone="teal" />
        </CardBody></Card>
      </div>
    </AdminShell>
  )
}

'use client'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const toneStroke: Record<string, string> = {
  teal: 'hsl(var(--teal))', coral: 'hsl(var(--coral))', gold: 'hsl(var(--gold))', violet: 'hsl(var(--violet))',
}

// Dual-series bar chart (revenue vs target)
export function RevenueBars({ data }: { data: { month: string; revenue: number; target: number }[] }) {
  const max = Math.max(...data.map((d) => Math.max(d.revenue, d.target))) * 1.1
  return (
    <div className="flex items-stretch gap-2">
      {data.map((d, i) => (
        <div key={d.month} className="flex flex-1 flex-col items-center gap-1.5">
          <div className="relative flex h-48 w-full items-end justify-center gap-0.5">
            {/* target ghost */}
            <div className="w-1/2 rounded-t bg-surface-2" style={{ height: `${(d.target / max) * 100}%` }} />
            {/* revenue */}
            <motion.div
              initial={{ height: 0 }} animate={{ height: `${(d.revenue / max) * 100}%` }}
              transition={{ duration: 0.7, delay: i * 0.04, ease: [0.2, 0.8, 0.2, 1] }}
              className={cn('w-1/2 rounded-t', d.revenue >= d.target ? 'bg-teal' : 'bg-coral')}
            />
          </div>
          <span className="shrink-0 text-[10px] text-ink-3">{d.month}</span>
        </div>
      ))}
    </div>
  )
}

// Line chart with area fill
export function LineChart({ data, tone = 'teal' }: { data: { month: string; students: number }[]; tone?: string }) {
  const w = 100, h = 40, pad = 2
  const max = Math.max(...data.map((d) => d.students)) * 1.1
  const min = Math.min(...data.map((d) => d.students)) * 0.9
  const pts = data.map((d, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2)
    const y = h - pad - ((d.students - min) / (max - min)) * (h - pad * 2)
    return [x, y]
  })
  const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')
  const area = `${line} L${pts[pts.length - 1][0].toFixed(1)},${h} L${pts[0][0].toFixed(1)},${h} Z`
  const stroke = toneStroke[tone]
  return (
    <div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-40 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id={`grad-${tone}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity="0.25" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill={`url(#grad-${tone})`} />
        <motion.path d={line} fill="none" stroke={stroke} strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, ease: 'easeInOut' }} />
        {pts.map((p, i) => (
          <circle key={i} cx={p[0]} cy={p[1]} r="0.8" fill={stroke} />
        ))}
      </svg>
      <div className="mt-1 flex justify-between">
        {data.map((d) => <span key={d.month} className="text-[10px] text-ink-3">{d.month}</span>)}
      </div>
    </div>
  )
}

// Horizontal breakdown bar
export function BreakdownBar({ data }: { data: { track: string; value: number; color: string }[] }) {
  const total = data.reduce((s, d) => s + d.value, 0)
  const toneBg: Record<string, string> = { teal: 'bg-teal', coral: 'bg-coral', gold: 'bg-gold', violet: 'bg-violet' }
  return (
    <div>
      <div className="flex h-3 w-full overflow-hidden rounded-full">
        {data.map((d, i) => (
          <motion.div key={d.track} className={cn(toneBg[d.color])}
            initial={{ width: 0 }} animate={{ width: `${(d.value / total) * 100}%` }}
            transition={{ duration: 0.7, delay: i * 0.08 }} />
        ))}
      </div>
      <div className="mt-4 space-y-2">
        {data.map((d) => (
          <div key={d.track} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2">
              <span className={cn('h-2.5 w-2.5 rounded-full', toneBg[d.color])} />
              <span className="text-ink-2">{d.track}</span>
            </span>
            <span className="font-mono text-ink">{((d.value / total) * 100).toFixed(0)}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

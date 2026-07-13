'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { AppShell } from '@/components/layout/app-shell'
import { PageHeader } from '@/components/shared/page-header'
import { CurrencyToggle } from '@/components/shared/currency-toggle'
import { Card, CardBody } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DemoActionButton } from '@/components/shared/demo-action-button'
import { catalog, careerPaths } from '@/data/catalog'
import { formatMoney, type Currency } from '@/data/enrollment'
import { cn } from '@/lib/utils'
import { Star, Users, Clock, BookOpen, ArrowRight, Search, Route } from 'lucide-react'

const trackTone: Record<string, 'teal' | 'coral' | 'gold' | 'neutral'> = {
  Development: 'teal', Data: 'coral', Design: 'gold', Marketing: 'coral', Security: 'neutral', Cloud: 'teal', Business: 'gold',
}
const gradient: Record<string, string> = {
  teal: 'from-teal/30 to-teal/5', coral: 'from-coral/30 to-coral/5',
  gold: 'from-gold/30 to-gold/5', violet: 'from-violet/30 to-violet/5',
}
const pathGradient: Record<string, string> = {
  teal: 'from-teal to-teal-fg', coral: 'from-coral to-rose', gold: 'from-gold to-coral',
}

export default function ExplorePage() {
  const [cur, setCur] = useState<Currency>('EGP')
  const [query, setQuery] = useState('')
  const filtered = catalog.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) || c.track.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <AppShell>
      <PageHeader title="Explore" subtitle="Discover new courses and guided career paths to reach your goals."
        action={<CurrencyToggle value={cur} onChange={setCur} />} />

      {/* career paths */}
      <h2 className="mb-3 font-display text-xl font-semibold">Guided career paths</h2>
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {careerPaths.map((p, i) => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.06 }}>
            <Card className="group h-full overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md">
              <div className={cn('flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white', pathGradient[p.color], 'm-5 mb-0')}>
                <Route className="h-5 w-5" />
              </div>
              <CardBody>
                <h3 className="font-display text-base font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-ink-2">{p.desc}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-ink-3">
                  <span>{p.courses} courses</span><span>·</span><span>{p.weeks} weeks</span>
                </div>
                <DemoActionButton feature={`Career path: ${p.title}`} detail="Career-path detail pages will be connected after tracks and courses move to Supabase in Phase 2." variant="ghost" size="sm" className="mt-3 px-0 text-teal-fg">View path <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" /></DemoActionButton>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* search */}
      <div className="mb-4 flex items-end justify-between gap-3">
        <h2 className="font-display text-xl font-semibold">All courses</h2>
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses…"
            className="ring-focus h-10 w-full rounded-lg border border-border bg-surface-2 pl-9 pr-3 text-sm placeholder:text-ink-3" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.map((c, i) => (
          <motion.div key={c.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.04 }}>
            <Card className="group flex h-full flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md">
              <div className={cn('relative h-24 bg-gradient-to-br', gradient[c.color])}>
                <div className="absolute inset-0 bg-dots opacity-40" />
                <div className="absolute left-4 top-4"><Badge variant={trackTone[c.track]}>{c.track}</Badge></div>
                {c.tag && <div className="absolute right-4 top-4"><Badge variant="gold">{c.tag}</Badge></div>}
              </div>
              <CardBody className="flex flex-1 flex-col">
                <div className="flex items-center gap-2 text-xs text-ink-3">
                  <span className="flex items-center gap-1 text-gold"><Star className="h-3.5 w-3.5 fill-gold" />{c.rating}</span>
                  <span>·</span><span className="flex items-center gap-1"><Users className="h-3 w-3" />{c.students.toLocaleString()}</span>
                  <span>·</span><span>{c.level}</span>
                </div>
                <h3 className="mt-2 font-display font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-xs text-ink-3">with {c.instructor}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-ink-3">
                  <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" />{c.lessons} lessons</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{c.hours}h</span>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="font-display text-lg font-bold">{formatMoney(c.price, cur)}</span>
                  <DemoActionButton feature={`Enroll in ${c.title}`} detail="Enrollment requires authentication, database records, and payment rules. It will be implemented in Phases 2–4." variant="primary" size="sm">Enroll <ArrowRight className="h-3.5 w-3.5" /></DemoActionButton>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="py-12 text-center text-sm text-ink-3">No courses match “{query}”.</p>
      )}
    </AppShell>
  )
}

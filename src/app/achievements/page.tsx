'use client'
import { motion } from 'framer-motion'
import { AppShell } from '@/components/layout/app-shell'
import { PageHeader } from '@/components/shared/page-header'
import { BadgeIcon } from '@/components/shared/badge-icon'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { allBadges } from '@/data/gamification'
import { cn } from '@/lib/utils'

const toneRing: Record<string, string> = {
  coral: 'from-coral/25 to-coral/5 text-coral', gold: 'from-gold/25 to-gold/5 text-gold',
  teal: 'from-teal/25 to-teal/5 text-teal-fg', violet: 'from-violet/25 to-violet/5 text-violet',
  rose: 'from-rose/25 to-rose/5 text-rose',
}
const rarityTone: Record<string, 'teal' | 'gold' | 'coral' | 'neutral' | 'outline'> = {
  Common: 'neutral', Rare: 'teal', Epic: 'gold', Legendary: 'coral',
}

export default function AchievementsPage() {
  const earned = allBadges.filter((b) => b.earned)
  const locked = allBadges.filter((b) => !b.earned)
  return (
    <AppShell>
      <PageHeader
        title="Achievements"
        subtitle={`${earned.length} of ${allBadges.length} badges earned · keep going to unlock the rest`}
        action={
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2">
            <span className="font-display text-2xl font-bold text-gold">{earned.length}</span>
            <span className="text-xs text-ink-3">badges<br />collected</span>
          </div>
        }
      />

      <h2 className="mb-3 font-display text-lg font-semibold">Earned</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {earned.map((b, i) => (
          <motion.div key={b.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="group relative overflow-hidden rounded-xl border border-border bg-surface p-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className={cn('mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br', toneRing[b.tone])}>
              <BadgeIcon name={b.icon} className="h-8 w-8" />
            </div>
            <p className="font-display text-sm font-semibold">{b.name}</p>
            <p className="mt-1 text-xs text-ink-3 leading-snug">{b.desc}</p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <Badge variant={rarityTone[b.rarity]}>{b.rarity}</Badge>
            </div>
            <p className="mt-2 text-[11px] text-ink-3">{b.date}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="mb-3 mt-8 font-display text-lg font-semibold">In progress</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {locked.map((b, i) => (
          <motion.div key={b.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="relative overflow-hidden rounded-xl border border-border bg-surface p-5 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-surface-2 text-ink-3 grayscale">
              <BadgeIcon name={b.icon} className="h-8 w-8 opacity-50" />
            </div>
            <p className="font-display text-sm font-semibold text-ink-2">{b.name}</p>
            <p className="mt-1 text-xs text-ink-3 leading-snug">{b.desc}</p>
            <div className="mt-2 flex items-center justify-center">
              <Badge variant="outline">{b.rarity}</Badge>
            </div>
            {typeof b.progress === 'number' && (
              <div className="mt-3">
                <Progress value={b.progress} tone={b.tone === 'coral' ? 'coral' : b.tone === 'gold' ? 'gold' : 'teal'} />
                <p className="mt-1.5 font-mono text-[11px] text-ink-3">{b.progress}% complete</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </AppShell>
  )
}

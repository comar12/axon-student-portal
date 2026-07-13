'use client'
import { motion } from 'framer-motion'
import { AppShell } from '@/components/layout/app-shell'
import { PageHeader } from '@/components/shared/page-header'
import { Card, CardBody } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DemoActionButton } from '@/components/shared/demo-action-button'
import { assessments, gradeAverage, type Assessment } from '@/data/assessments'
import { cn } from '@/lib/utils'
import { Mic, FileText, GraduationCap, ListChecks, ArrowRight, TrendingUp } from 'lucide-react'

const typeMeta: Record<Assessment['type'], { icon: typeof Mic; label: string }> = {
  speaking: { icon: Mic, label: 'Speaking' },
  assignment: { icon: FileText, label: 'Assignment' },
  exam: { icon: GraduationCap, label: 'Exam' },
  quiz: { icon: ListChecks, label: 'Quiz' },
}
const statusTone: Record<Assessment['status'], { variant: 'teal' | 'coral' | 'gold' | 'neutral'; label: string }> = {
  upcoming: { variant: 'neutral', label: 'Upcoming' },
  'in-progress': { variant: 'coral', label: 'In progress' },
  submitted: { variant: 'gold', label: 'Submitted' },
  graded: { variant: 'teal', label: 'Graded' },
}
const iconBg: Record<string, string> = {
  teal: 'bg-teal-soft text-teal-fg', coral: 'bg-coral-soft text-coral',
  gold: 'bg-gold-soft text-gold', violet: 'bg-surface-2 text-violet',
}

function gradeColor(pct: number) {
  if (pct >= 85) return 'text-teal-fg'
  if (pct >= 60) return 'text-gold'
  return 'text-coral'
}

export default function AssessmentsPage() {
  const active = assessments.filter((a) => a.status === 'upcoming' || a.status === 'in-progress')
  const past = assessments.filter((a) => a.status === 'submitted' || a.status === 'graded')
  const graded = past.filter((a) => a.status === 'graded')

  return (
    <AppShell>
      <PageHeader title="Assessments" subtitle="Your quizzes, projects, exams, and practical labs — with grades and instructor feedback." />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { label: 'Due soon', value: active.length, tone: 'text-coral', bg: 'bg-coral-soft', icon: FileText },
          { label: 'Awaiting grade', value: past.filter(a => a.status === 'submitted').length, tone: 'text-gold', bg: 'bg-gold-soft', icon: ListChecks },
          { label: 'Graded', value: graded.length, tone: 'text-teal-fg', bg: 'bg-teal-soft', icon: GraduationCap },
          { label: 'Average grade', value: `${gradeAverage}%`, tone: 'text-violet', bg: 'bg-surface-2', icon: TrendingUp },
        ].map((t, i) => (
          <motion.div key={t.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}
            className="rounded-xl border border-border bg-surface p-4 shadow-sm">
            <div className={cn('mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg', t.bg)}>
              <t.icon className={cn('h-[18px] w-[18px]', t.tone)} />
            </div>
            <p className="font-display text-2xl font-bold">{t.value}</p>
            <p className="text-xs text-ink-3">{t.label}</p>
          </motion.div>
        ))}
      </div>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">To do</h2>
      <div className="space-y-3">
        {active.map((a, i) => {
          const tm = typeMeta[a.type]
          return (
            <motion.div key={a.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
              <Card className="transition hover:border-border-strong hover:shadow-md">
                <CardBody className="flex items-center gap-4">
                  <div className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-xl', iconBg[a.color])}>
                    <tm.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold">{a.title}</p>
                      <Badge variant={statusTone[a.status].variant}>{statusTone[a.status].label}</Badge>
                    </div>
                    <p className="mt-0.5 text-xs text-ink-3">{tm.label} · {a.course} · {a.points} pts · due {a.due}</p>
                  </div>
                  <DemoActionButton feature={`${a.status === 'in-progress' ? 'Continue' : 'Start'} assessment: ${a.title}`} detail="Assessment delivery and submission will be connected in Phase 3." variant={a.status === 'in-progress' ? 'primary' : 'outline'} size="sm" className="shrink-0">
                    {a.status === 'in-progress' ? 'Continue' : 'Start'} <ArrowRight className="h-3.5 w-3.5" />
                  </DemoActionButton>
                </CardBody>
              </Card>
            </motion.div>
          )
        })}
      </div>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">Completed</h2>
      <div className="space-y-3">
        {past.map((a, i) => {
          const tm = typeMeta[a.type]
          return (
            <motion.div key={a.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.04 }}>
              <Card>
                <CardBody className="flex items-center gap-4">
                  <div className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-xl', iconBg[a.color])}>
                    <tm.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="font-semibold">{a.title}</p>
                      <Badge variant={statusTone[a.status].variant}>{statusTone[a.status].label}</Badge>
                    </div>
                    <p className="mt-0.5 text-xs text-ink-3">{tm.label} · {a.course} · {a.due}</p>
                  </div>
                  {a.status === 'graded' ? (
                    <div className="shrink-0 text-right">
                      <p className={cn('font-display text-xl font-bold', gradeColor((a.grade! / a.points) * 100))}>
                        {a.grade}<span className="text-sm text-ink-3">/{a.points}</span>
                      </p>
                      <DemoActionButton feature={`Feedback for ${a.title}`} detail={`Demo grade: ${a.grade}/${a.points}. Instructor feedback will be stored and displayed in Phase 3.`} variant="ghost" size="sm" className="h-auto px-0 py-0 text-xs text-teal-fg hover:underline">View feedback</DemoActionButton>
                    </div>
                  ) : (
                    <Badge variant="gold" className="shrink-0">Awaiting grade</Badge>
                  )}
                </CardBody>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </AppShell>
  )
}

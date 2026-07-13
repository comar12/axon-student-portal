'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AppShell } from '@/components/layout/app-shell'
import { PageHeader } from '@/components/shared/page-header'
import { CurrencyToggle } from '@/components/shared/currency-toggle'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DemoActionButton } from '@/components/shared/demo-action-button'
import { Progress } from '@/components/ui/progress'
import {
  enrolledCourses, completedCourses, paymentHistory, formatMoney, type Currency,
} from '@/data/enrollment'
import {
  BookOpen, CheckCircle2, Clock, Play, ChevronRight, GraduationCap,
  Award, Download, CreditCard, AlertCircle,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const gradient: Record<string, string> = {
  teal: 'from-teal to-teal-fg', coral: 'from-coral to-rose',
  gold: 'from-gold to-coral', violet: 'from-violet to-teal',
}
const trackTone: Record<string, 'teal' | 'coral' | 'gold' | 'neutral'> = {
  'Professional Diploma': 'teal', 'Career Track': 'coral', Foundation: 'gold', Elective: 'neutral',
}

export default function CoursesPage() {
  const [cur, setCur] = useState<Currency>('EGP')
  const totalPaid = paymentHistory.reduce((s, p) => s + p.amount, 0)

  const tiles = [
    { icon: BookOpen, label: 'Active courses', value: enrolledCourses.length, tone: 'text-teal-fg', bg: 'bg-teal-soft' },
    { icon: CheckCircle2, label: 'Completed', value: completedCourses.length, tone: 'text-gold', bg: 'bg-gold-soft' },
    { icon: Clock, label: 'This week', value: '6h 17m', tone: 'text-coral', bg: 'bg-coral-soft' },
    { icon: Award, label: 'Certificates', value: completedCourses.length, tone: 'text-violet', bg: 'bg-surface-2' },
  ]

  return (
    <AppShell>
      <PageHeader
        title="My Courses"
        subtitle="Manage what you're taking, track progress, and view your payments."
        action={<CurrencyToggle value={cur} onChange={setCur} />}
      />

      {/* summary tiles */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {tiles.map((t, i) => (
          <motion.div key={t.label} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="rounded-xl border border-border bg-surface p-4 shadow-sm">
            <div className={cn('mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg', t.bg)}>
              <t.icon className={cn('h-[18px] w-[18px]', t.tone)} />
            </div>
            <p className="font-display text-2xl font-bold">{t.value}</p>
            <p className="text-xs text-ink-3">{t.label}</p>
          </motion.div>
        ))}
      </div>

      {/* active courses */}
      <div className="mb-4 mt-8 flex items-end justify-between">
        <h2 className="font-display text-xl font-semibold">Active courses</h2>
        <span className="text-sm text-ink-3">{enrolledCourses.length} in progress</span>
      </div>
      <div className="space-y-4">
        {enrolledCourses.map((c, i) => {
          const fullyPaid = c.paid >= c.price
          return (
            <motion.div key={c.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}>
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-[1.5fr_1fr]">
                  {/* main */}
                  <div className="border-b border-border p-5 lg:border-b-0 lg:border-r">
                    <div className="flex items-start gap-3.5">
                      <div className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br p-3 text-white', gradient[c.color])}>
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <Badge variant={trackTone[c.track]}>{c.track}</Badge>
                          <Badge variant="neutral">{c.cohort}</Badge>
                        </div>
                        <h3 className="font-display text-lg font-semibold leading-tight">{c.title}</h3>
                        <p className="mt-0.5 text-xs text-ink-3">with {c.instructor} · last studied {c.lastStudied}</p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mb-1.5 flex justify-between text-xs">
                        <span className="text-ink-2">{c.completedLessons} of {c.totalLessons} lessons · ~{c.hoursLeft}h left</span>
                        <span className={cn('font-mono font-semibold',
                          c.color === 'coral' ? 'text-coral' : c.color === 'gold' ? 'text-gold' : 'text-teal-fg')}>{c.progress}%</span>
                      </div>
                      <Progress value={c.progress} tone={c.color === 'coral' ? 'coral' : c.color === 'gold' ? 'gold' : 'teal'} />
                    </div>
                    <Link href={`/courses/${c.id}/learn`}
                      className="ring-focus group mt-4 flex items-center gap-3 rounded-xl border border-border bg-surface p-3 transition hover:border-teal hover:bg-teal-soft">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal text-[hsl(222_32%_7%)]">
                        <Play className="h-4 w-4 fill-current" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] uppercase tracking-wide text-ink-3">Up next</p>
                        <p className="truncate text-sm font-semibold">{c.nextLesson}</p>
                      </div>
                      <ChevronRight className="h-4 w-4 shrink-0 text-ink-3 transition group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                  {/* side: enrollment + payment */}
                  <div className="bg-bg-subtle p-5">
                    <dl className="space-y-0 text-sm">
                      <div className="flex justify-between border-b border-border py-1.5"><dt className="text-ink-3">Enrolled</dt><dd className="font-medium">{c.enrolledOn}</dd></div>
                      <div className="flex justify-between border-b border-border py-1.5"><dt className="text-ink-3">Access until</dt><dd className="font-medium">{c.accessUntil}</dd></div>
                      <div className="flex justify-between py-1.5"><dt className="text-ink-3">Plan</dt><dd className="font-medium">{c.plan.split(' · ')[0]}</dd></div>
                    </dl>
                    {fullyPaid ? (
                      <div className="mt-3.5 rounded-xl border border-teal/30 bg-teal-soft p-3.5">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-ink-3">Tuition</p>
                            <p className="font-display text-lg font-bold text-teal-fg">{formatMoney(c.price, cur)}</p>
                          </div>
                          <Badge variant="teal"><CheckCircle2 className="h-3.5 w-3.5" /> Paid in full</Badge>
                        </div>
                      </div>
                    ) : c.nextPayment ? (
                      <div className="mt-3.5 rounded-xl border border-gold/40 bg-gold-soft p-3.5">
                        <div className="flex items-center justify-between gap-2">
                          <div>
                            <p className="flex items-center gap-1 text-xs text-ink-3"><AlertCircle className="h-3 w-3 text-gold" /> Next installment · {c.nextPayment.due}</p>
                            <p className="font-display text-lg font-bold text-gold">{formatMoney(c.nextPayment.amount, cur)}</p>
                          </div>
                          <DemoActionButton feature={`Pay installment for ${c.title}`} detail="Payments are scheduled for Phase 4 after authentication and enrollment records are implemented." variant="primary" size="sm" className="bg-gold hover:bg-gold"><CreditCard className="h-3.5 w-3.5" /> Pay now</DemoActionButton>
                        </div>
                        <p className="mt-2 text-xs text-ink-2">{c.plan} · {formatMoney(c.paid, cur)} of {formatMoney(c.price, cur)} paid</p>
                        <Progress value={Math.round((c.paid / c.price) * 100)} tone="gold" className="mt-1.5" />
                      </div>
                    ) : null}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <DemoActionButton feature={`Open ${c.title}`} detail="Lesson-player routes and persistent progress are scheduled for Phase 3." variant="ghost" size="sm">Go to course</DemoActionButton>
                      <DemoActionButton feature={`Manage enrollment for ${c.title}`} detail="Enrollment management requires authenticated user records and will be connected in Phase 2." variant="ghost" size="sm">Manage</DemoActionButton>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* completed */}
      <div className="mb-4 mt-8 flex items-end justify-between">
        <h2 className="font-display text-xl font-semibold">Completed</h2>
        <span className="text-sm text-ink-3">{completedCourses.length} finished</span>
      </div>
      <div className="space-y-4">
        {completedCourses.map((c) => (
          <Card key={c.id} className="overflow-hidden">
            <div className="grid lg:grid-cols-[1.5fr_1fr]">
              <div className="border-b border-border p-5 lg:border-b-0 lg:border-r">
                <div className="flex items-start gap-3.5">
                  <div className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br p-3 text-white', gradient[c.color])}>
                    <GraduationCap className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex flex-wrap items-center gap-2">
                      <Badge variant="neutral">{c.track}</Badge>
                      <Badge variant="teal"><CheckCircle2 className="h-3.5 w-3.5" /> Completed</Badge>
                    </div>
                    <h3 className="font-display text-lg font-semibold leading-tight">{c.title}</h3>
                    <p className="mt-0.5 text-xs text-ink-3">with {c.instructor} · finished {c.completedOn}</p>
                  </div>
                </div>
                <Progress value={100} tone="teal" className="mt-4" />
                <div className="mt-4 flex items-center gap-3.5 rounded-xl border border-gold/35 bg-gold-soft p-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold text-[hsl(222_32%_7%)]">
                    <Award className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Certificate earned · Final grade {c.finalGrade}%</p>
                    <p className="font-mono text-xs text-ink-3">{c.certId}</p>
                  </div>
                  <Link href={`/certificates/${c.id}`}><Button variant="primary" size="sm" className="bg-gold hover:bg-gold"><Download className="h-3.5 w-3.5" /> Download</Button></Link>
                </div>
              </div>
              <div className="bg-bg-subtle p-5">
                <dl className="space-y-0 text-sm">
                  <div className="flex justify-between border-b border-border py-1.5"><dt className="text-ink-3">Enrolled</dt><dd className="font-medium">{c.enrolledOn}</dd></div>
                  <div className="flex justify-between border-b border-border py-1.5"><dt className="text-ink-3">Completed</dt><dd className="font-medium">{c.completedOn}</dd></div>
                  <div className="flex justify-between py-1.5"><dt className="text-ink-3">Tuition</dt><dd className="font-medium">{formatMoney(c.price, cur)}</dd></div>
                </dl>
                <div className="mt-3.5 rounded-xl border border-teal/30 bg-teal-soft p-3.5">
                  <div className="flex items-center justify-between">
                    <Badge variant="teal"><CheckCircle2 className="h-3.5 w-3.5" /> Paid in full</Badge>
                    <span className="font-display text-lg font-bold text-teal-fg">{formatMoney(c.paid, cur)}</span>
                  </div>
                </div>
                <div className="mt-4">
                  <DemoActionButton feature={`Review ${c.title}`} detail="Course reviews will be connected when user accounts and course records are stored in Supabase." variant="ghost" size="sm">Review course</DemoActionButton>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* payment history */}
      <div className="mb-4 mt-8 flex items-end justify-between">
        <h2 className="font-display text-xl font-semibold">Payment history</h2>
        <span className="text-sm text-ink-3">Total paid · {formatMoney(totalPaid, cur)}</span>
      </div>
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                {['Date', 'Description', 'Method', 'Amount', 'Status'].map((h) => (
                  <th key={h} className="px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-ink-3">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((p, i) => (
                <tr key={i} className="border-b border-border last:border-0 transition hover:bg-surface-2">
                  <td className="px-4 py-3 text-ink-2">{p.date}</td>
                  <td className="px-4 py-3 font-medium text-ink">{p.desc}</td>
                  <td className="px-4 py-3 text-ink-2">{p.method}</td>
                  <td className="px-4 py-3 font-mono font-medium text-ink">{formatMoney(p.amount, cur)}</td>
                  <td className="px-4 py-3"><Badge variant="teal"><CheckCircle2 className="h-3 w-3" /> {p.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </AppShell>
  )
}

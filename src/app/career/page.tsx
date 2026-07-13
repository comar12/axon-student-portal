'use client'
import { motion } from 'framer-motion'
import { AppShell } from '@/components/layout/app-shell'
import { PageHeader } from '@/components/shared/page-header'
import { Card, CardBody } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { DemoActionButton } from '@/components/shared/demo-action-button'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { FileText, FolderOpen, MessageSquareText, ArrowRight, MapPin, Building2, CheckCircle2 } from 'lucide-react'

const tools = [
  { id: 'resume', icon: FileText, title: 'Resume Builder', desc: 'Craft an ATS-friendly tech CV with guided templates and your project links.', cta: 'Open builder', progress: 60, tone: 'teal' },
  { id: 'portfolio', icon: FolderOpen, title: 'Portfolio Builder', desc: 'Showcase your projects, GitHub repos, and certificates in one shareable link.', cta: 'Build portfolio', progress: 25, tone: 'coral' },
  { id: 'interview', icon: MessageSquareText, title: 'Interview Prep', desc: 'Practice technical and HR interview questions with AI feedback on your answers.', cta: 'Start practicing', progress: 40, tone: 'gold' },
]
const toneBg: Record<string, string> = {
  teal: 'from-teal to-teal-fg', coral: 'from-coral to-rose', gold: 'from-gold to-coral',
}

const jobs = [
  { id: 'j1', title: 'Junior Front-End Developer (React)', company: 'Instabug', location: 'Cairo · Hybrid', match: 92, type: 'Full-time', tone: 'teal' },
  { id: 'j2', title: 'Full Stack Developer Intern', company: 'Paymob', location: 'Cairo · On-site', match: 86, type: 'Internship', tone: 'coral' },
  { id: 'j3', title: 'UI/UX Designer', company: 'Vezeeta', location: 'Remote', match: 81, type: 'Full-time', tone: 'gold' },
  { id: 'j4', title: 'Junior Data Analyst', company: 'Fawry', location: 'Cairo · Hybrid', match: 78, type: 'Full-time', tone: 'violet' },
]

const milestones = [
  { label: 'Complete skills assessment', done: true },
  { label: 'Build your resume', done: true },
  { label: 'Add 3 portfolio items', done: false },
  { label: 'Complete 5 mock technical interviews', done: false },
  { label: 'Apply to 3 matched roles', done: false },
]

export default function CareerPage() {
  const doneCount = milestones.filter((m) => m.done).length
  const readiness = Math.round((doneCount / milestones.length) * 100)

  return (
    <AppShell>
      <PageHeader title="Career Center" subtitle="Turn your new skills into career outcomes — build, practice, and get matched." />

      {/* readiness banner */}
      <Card className="relative mb-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal/15 via-transparent to-coral/10" />
        <CardBody className="relative flex flex-col gap-5 lg:flex-row lg:items-center">
          <div className="flex items-center gap-4">
            <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
              <svg viewBox="0 0 100 100" className="h-20 w-20 -rotate-90">
                <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--surface-2))" strokeWidth="9" />
                <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--teal))" strokeWidth="9" strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 42} strokeDashoffset={2 * Math.PI * 42 * (1 - readiness / 100)} />
              </svg>
              <span className="absolute font-display text-xl font-bold text-teal-fg">{readiness}%</span>
            </div>
            <div>
              <Badge variant="teal" className="mb-1">Career readiness</Badge>
              <p className="font-display text-lg font-bold">You&rsquo;re {readiness}% job-ready</p>
              <p className="text-sm text-ink-2">{doneCount} of {milestones.length} milestones complete</p>
            </div>
          </div>
          <div className="flex-1 lg:px-6">
            <div className="space-y-2">
              {milestones.map((m) => (
                <div key={m.label} className="flex items-center gap-2.5 text-sm">
                  <CheckCircle2 className={cn('h-4 w-4 shrink-0', m.done ? 'text-teal-fg' : 'text-ink-3')} />
                  <span className={cn(m.done ? 'text-ink-2 line-through' : 'text-ink')}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>

      {/* tools */}
      <h2 className="mb-3 font-display text-xl font-semibold">Build your profile</h2>
      <div className="mb-8 grid gap-4 md:grid-cols-3">
        {tools.map((t, i) => (
          <motion.div key={t.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.06 }}>
            <Card className="group flex h-full flex-col transition hover:-translate-y-0.5 hover:shadow-md">
              <CardBody className="flex flex-1 flex-col">
                <div className={cn('mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-white', toneBg[t.tone])}>
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display font-semibold">{t.title}</h3>
                <p className="mt-1 flex-1 text-sm text-ink-2">{t.desc}</p>
                <div className="mt-3">
                  <div className="mb-1.5 flex justify-between text-xs">
                    <span className="text-ink-3">Progress</span>
                    <span className="font-mono text-ink-2">{t.progress}%</span>
                  </div>
                  <Progress value={t.progress} tone={t.tone === 'coral' ? 'coral' : t.tone === 'gold' ? 'gold' : 'teal'} />
                </div>
                <DemoActionButton feature={t.title} detail="This career tool is outside the current LMS demo scope and will be specified before implementation." variant="outline" size="sm" className="mt-4 w-full">
                  {t.cta} <ArrowRight className="h-3.5 w-3.5" />
                </DemoActionButton>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* matched jobs */}
      <div className="mb-4 flex items-end justify-between">
        <h2 className="font-display text-xl font-semibold">Matched opportunities</h2>
        <span className="text-sm text-ink-3">{jobs.length} roles for your profile</span>
      </div>
      <div className="space-y-3">
        {jobs.map((j, i) => (
          <motion.div key={j.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
            <Card className="transition hover:border-border-strong hover:shadow-md">
              <CardBody className="flex flex-wrap items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-ink-2">
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{j.title}</p>
                  <p className="mt-0.5 flex flex-wrap items-center gap-x-2 text-xs text-ink-3">
                    <span>{j.company}</span><span>·</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{j.location}</span>
                    <span>·</span><span>{j.type}</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="font-display text-lg font-bold text-teal-fg">{j.match}%</p>
                    <p className="text-[11px] text-ink-3">match</p>
                  </div>
                  <DemoActionButton feature={`Apply to ${j.title}`} detail="External job applications are not submitted from the demo. A destination or partner integration must be selected first." variant="primary" size="sm">Apply</DemoActionButton>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </AppShell>
  )
}

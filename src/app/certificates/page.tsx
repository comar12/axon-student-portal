'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AppShell } from '@/components/layout/app-shell'
import { PageHeader } from '@/components/shared/page-header'
import { Card, CardBody } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { certificates, upcomingCertificates } from '@/data/certificates'
import { cn } from '@/lib/utils'
import { Award, ShieldCheck, Clock, ArrowRight, Download, Eye } from 'lucide-react'

const ribbon: Record<string, string> = {
  teal: 'from-teal to-teal-fg', coral: 'from-coral to-rose',
  gold: 'from-gold to-coral', violet: 'from-violet to-teal',
}

export default function CertificatesPage() {
  return (
    <AppShell>
      <PageHeader
        title="Certificates"
        subtitle="Your earned credentials — verifiable, shareable, and ready to download."
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { icon: Award, label: 'Earned', value: certificates.length, tone: 'text-gold', bg: 'bg-gold-soft' },
          { icon: Clock, label: 'In progress', value: upcomingCertificates.length, tone: 'text-teal-fg', bg: 'bg-teal-soft' },
          { icon: ShieldCheck, label: 'Verified', value: certificates.length, tone: 'text-violet', bg: 'bg-surface-2' },
          { icon: Clock, label: 'Total hours', value: certificates.reduce((s, c) => s + c.hours, 0), tone: 'text-coral', bg: 'bg-coral-soft' },
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

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">Earned credentials</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {certificates.map((c, i) => (
          <motion.div key={c.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.06 }}>
            <Card className="group overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md">
              <div className={cn('relative h-2 bg-gradient-to-r', ribbon[c.color])} />
              <CardBody>
                <div className="flex items-start gap-3">
                  <div className={cn('flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white', ribbon[c.color])}>
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Badge variant="gold" className="mb-1"><ShieldCheck className="h-3 w-3" /> Verified</Badge>
                    <h3 className="font-display font-semibold leading-tight">{c.program}</h3>
                    <p className="mt-0.5 text-xs text-ink-3">{c.track} · {c.hours} hours · Grade {c.finalGrade}%</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <div className="font-mono text-xs text-ink-3">
                    <p>{c.id}</p>
                    <p>Issued {c.issueDate}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/certificates/${c.slug}`}>
                      <Button variant="outline" size="sm"><Eye className="h-3.5 w-3.5" /> View</Button>
                    </Link>
                    <Link href={`/certificates/${c.slug}`}>
                      <Button variant="primary" size="sm"><Download className="h-3.5 w-3.5" /> PDF</Button>
                    </Link>
                  </div>
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>

      <h2 className="mb-3 mt-8 font-display text-xl font-semibold">On track to earn</h2>
      <div className="space-y-3">
        {upcomingCertificates.map((u, i) => (
          <motion.div key={u.program} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.05 }}>
            <Card>
              <CardBody className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-ink-3">
                  <Award className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold">{u.program}</p>
                  <p className="text-xs text-ink-3">{u.track} · {u.eta}</p>
                  <Progress value={u.progress} className="mt-2" />
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-mono text-lg font-bold text-teal-fg">{u.progress}%</p>
                  <ArrowRight className="ml-auto h-4 w-4 text-ink-3" />
                </div>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </AppShell>
  )
}

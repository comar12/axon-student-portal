'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { AdminShell } from '@/components/admin/admin-shell'
import { Card, CardBody } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { certificates } from '@/data/certificates'
import { ShieldCheck, Search, XCircle, CheckCircle2 } from 'lucide-react'

export default function VerificationPage() {
  const [code, setCode] = useState('')
  const [result, setResult] = useState<null | 'found' | 'notfound'>(null)
  const [match, setMatch] = useState<typeof certificates[0] | null>(null)

  function verify() {
    const c = certificates.find((x) => x.verifyCode.toLowerCase() === code.trim().toLowerCase() || x.id.toLowerCase() === code.trim().toLowerCase())
    if (c) { setMatch(c); setResult('found') } else { setMatch(null); setResult('notfound') }
  }

  return (
    <AdminShell title="Certificate Verification" subtitle="Validate any Axon credential by its verification code or certificate number.">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardBody>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-soft text-teal-fg"><ShieldCheck className="h-5 w-5" /></div>
              <div><p className="font-display font-semibold">Verify a certificate</p><p className="text-xs text-ink-3">Try code <span className="font-mono">WF94-K7Q2-AX26</span></p></div>
            </div>
            <div className="mt-4 flex gap-2">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3" />
                <input value={code} onChange={(e) => setCode(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && verify()}
                  placeholder="Enter verification code or certificate number…"
                  className="ring-focus h-11 w-full rounded-lg border border-border bg-surface-2 pl-9 pr-3 text-sm placeholder:text-ink-3" />
              </div>
              <Button variant="primary" onClick={verify}>Verify</Button>
            </div>
          </CardBody>
        </Card>

        {result === 'found' && match && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
            <Card className="border-teal/40">
              <CardBody>
                <div className="flex items-center gap-2 text-teal-fg"><CheckCircle2 className="h-5 w-5" /><p className="font-semibold">Valid certificate</p><Badge variant="teal">Verified</Badge></div>
                <dl className="mt-4 space-y-0 text-sm">
                  {[
                    ['Student', match.studentName], ['Student ID', match.studentId],
                    ['Program', match.program], ['Hours', `${match.hours} hours`],
                    ['Final grade', `${match.finalGrade}%`], ['Instructor', match.instructor],
                    ['Issued', match.issueDate], ['Certificate No.', match.id], ['Verification code', match.verifyCode],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-border py-2 last:border-0">
                      <dt className="text-ink-3">{k}</dt><dd className="font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </CardBody>
            </Card>
          </motion.div>
        )}
        {result === 'notfound' && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mt-4">
            <Card className="border-coral/40">
              <CardBody className="flex items-center gap-3">
                <XCircle className="h-6 w-6 text-coral" />
                <div><p className="font-semibold">No certificate found</p><p className="text-sm text-ink-3">That code didn’t match any issued credential. Check for typos and try again.</p></div>
              </CardBody>
            </Card>
          </motion.div>
        )}
      </div>
    </AdminShell>
  )
}

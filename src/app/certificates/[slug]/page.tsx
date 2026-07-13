'use client'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { AppShell } from '@/components/layout/app-shell'
import { Button } from '@/components/ui/button'
import { QrCode } from '@/components/shared/qr-code'
import { Logo } from '@/components/shared/logo'
import { findCertificate } from '@/data/certificates'
import { ArrowLeft, Download, ShieldCheck, Award } from 'lucide-react'

export default function CertificateDetail({ params }: { params: { slug: string } }) {
  const cert = findCertificate(params.slug)
  if (!cert) notFound()

  const verifyUrl = `https://verify.axon.academy/${cert.verifyCode}`

  return (
    <AppShell>
      {/* toolbar — hidden on print */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link href="/certificates" className="ring-focus inline-flex items-center gap-2 rounded-md text-sm font-medium text-ink-2 hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> Back to certificates
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => window.print()}>
            <Download className="h-4 w-4" /> Download / Print PDF
          </Button>
        </div>
      </div>

      {/* certificate */}
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl">
        <div id="cert-sheet"
          className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 shadow-lg sm:p-12 print:rounded-none print:border-0 print:shadow-none">
          {/* decorative frame */}
          <div className="pointer-events-none absolute inset-3 rounded-xl border border-teal/30 print:border-teal/40" />
          <div className="pointer-events-none absolute inset-4 rounded-lg border border-border" />
          {/* corner flourishes */}
          <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 bg-gradient-to-br from-teal/15 to-transparent" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-24 w-24 bg-gradient-to-tl from-gold/15 to-transparent" />

          <div className="relative">
            {/* header */}
            <div className="flex items-center justify-between">
              <Logo size={32} />
              <div className="text-right">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-teal-fg">Certificate</p>
                <p className="text-[11px] text-ink-3">of Completion</p>
              </div>
            </div>

            {/* seal */}
            <div className="mt-8 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-gold to-coral text-[hsl(222_32%_7%)] shadow-md">
                <Award className="h-8 w-8" />
              </div>
            </div>

            {/* body */}
            <div className="mt-6 text-center">
              <p className="text-sm text-ink-3">This is to certify that</p>
              <h1 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">{cert.studentName}</h1>
              <p className="mx-auto mt-1 max-w-xs font-mono text-xs text-ink-3">Student ID · {cert.studentId}</p>
              <p className="mt-5 text-sm text-ink-2">has successfully completed the program</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-teal-fg sm:text-2xl">{cert.program}</h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-ink-2">
                comprising {cert.hours} hours of instruction and assessment, achieving a final grade of{' '}
                <span className="font-semibold text-ink">{cert.finalGrade}%</span>.
              </p>
            </div>

            {/* footer: signature / qr / verify */}
            <div className="mt-10 grid grid-cols-1 items-end gap-6 sm:grid-cols-3">
              <div className="text-center sm:text-left">
                <p className="border-b border-border-strong pb-1 font-display text-lg italic text-ink">{cert.instructor}</p>
                <p className="mt-1 text-xs font-medium text-ink-2">{cert.instructor}</p>
                <p className="text-[11px] text-ink-3">{cert.instructorTitle}</p>
              </div>

              <div className="flex flex-col items-center">
                <div className="rounded-lg bg-white p-2">
                  <QrCode value={verifyUrl} size={84} />
                </div>
                <p className="mt-2 flex items-center gap-1 text-[10px] font-medium text-teal-fg">
                  <ShieldCheck className="h-3 w-3" /> Scan to verify
                </p>
              </div>

              <div className="text-center sm:text-right">
                <p className="text-[11px] text-ink-3">Certificate No.</p>
                <p className="font-mono text-xs font-semibold text-ink">{cert.id}</p>
                <p className="mt-2 text-[11px] text-ink-3">Verification Code</p>
                <p className="font-mono text-xs font-semibold text-ink">{cert.verifyCode}</p>
                <p className="mt-2 text-[11px] text-ink-3">Issued {cert.issueDate}</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-ink-3 print:hidden">
          Verify this certificate at <span className="font-mono text-ink-2">verify.axon.academy</span> using the code above.
        </p>
      </motion.div>
    </AppShell>
  )
}

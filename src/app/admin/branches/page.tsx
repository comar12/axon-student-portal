'use client'
import { motion } from 'framer-motion'
import { AdminShell } from '@/components/admin/admin-shell'
import { Card, CardBody } from '@/components/ui/card'
import { DemoActionButton } from '@/components/shared/demo-action-button'
import { Badge } from '@/components/ui/badge'
import { branchPerformance } from '@/data/admin/overview'
import { cn } from '@/lib/utils'
import { Building2, MapPin, Plus } from 'lucide-react'

function egp(n: number) { return n >= 1_000_000 ? `E£${(n / 1_000_000).toFixed(2)}M` : `E£${(n / 1000).toFixed(0)}K` }

const branchMeta: Record<string, { address: string; classrooms: number; instructors: number }> = {
  'Nasr City (HQ)': { address: 'Abbas El-Akkad St, Nasr City, Cairo', classrooms: 14, instructors: 28 },
  'Maadi': { address: 'Road 9, Maadi, Cairo', classrooms: 8, instructors: 16 },
  'Zamalek': { address: '26th of July St, Zamalek, Cairo', classrooms: 6, instructors: 11 },
  'Alexandria': { address: 'Smouha, Alexandria', classrooms: 7, instructors: 13 },
  '6th October': { address: 'Central Axis, 6th of October City', classrooms: 5, instructors: 6 },
}

export default function BranchesPage() {
  return (
    <AdminShell title="Branches & Campuses" subtitle="5 campuses across Greater Cairo and Alexandria."
      action={<DemoActionButton feature="Add branch" detail="Branch creation requires admin authentication and database CRUD, scheduled for Phases 2–3." variant="primary" size="sm"><Plus className="h-4 w-4" /> Add branch</DemoActionButton>}>
      <div className="grid gap-4 md:grid-cols-2">
        {branchPerformance.map((b, i) => {
          const meta = branchMeta[b.branch]
          return (
            <motion.div key={b.branch} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: i * 0.06 }}>
              <Card className="h-full transition hover:-translate-y-0.5 hover:shadow-md">
                <CardBody>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn('flex h-11 w-11 items-center justify-center rounded-xl text-white',
                        b.color === 'teal' ? 'bg-teal' : b.color === 'gold' ? 'bg-gold' : b.color === 'coral' ? 'bg-coral' : 'bg-violet')}>
                        <Building2 className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-display font-semibold">{b.branch}</p>
                        <p className="flex items-center gap-1 text-xs text-ink-3"><MapPin className="h-3 w-3" />{meta.address}</p>
                      </div>
                    </div>
                    {b.capacity > 80 && <Badge variant="coral">Near capacity</Badge>}
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4 text-center">
                    <div><p className="font-display text-lg font-bold">{b.students.toLocaleString()}</p><p className="text-[11px] text-ink-3">Students</p></div>
                    <div><p className="font-display text-lg font-bold">{meta.classrooms}</p><p className="text-[11px] text-ink-3">Classrooms</p></div>
                    <div><p className="font-display text-lg font-bold">{meta.instructors}</p><p className="text-[11px] text-ink-3">Instructors</p></div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-1 flex justify-between text-xs"><span className="text-ink-3">Capacity utilization</span><span className="font-mono">{b.capacity}%</span></div>
                    <div className="h-2 overflow-hidden rounded-full bg-surface-2">
                      <motion.div className={cn('h-full rounded-full', b.capacity > 80 ? 'bg-coral' : 'bg-teal')}
                        initial={{ width: 0 }} animate={{ width: `${b.capacity}%` }} transition={{ duration: 0.8, delay: 0.2 }} />
                    </div>
                  </div>
                  <p className="mt-3 text-sm"><span className="text-ink-3">Monthly revenue:</span> <span className="font-mono font-semibold">{egp(b.revenue)}</span></p>
                </CardBody>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </AdminShell>
  )
}

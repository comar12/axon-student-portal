'use client'
import { AdminShell } from '@/components/admin/admin-shell'
import { DataTable, type Column } from '@/components/admin/data-table'
import { Badge } from '@/components/ui/badge'
import { DemoActionButton } from '@/components/shared/demo-action-button'
import { adminPayments, type AdminPayment } from '@/data/admin/records'
import { Download, CheckCircle2, Clock, RotateCcw, XCircle } from 'lucide-react'

const statusMeta: Record<AdminPayment['status'], { variant: 'teal' | 'gold' | 'coral' | 'neutral'; icon: typeof CheckCircle2 }> = {
  Paid: { variant: 'teal', icon: CheckCircle2 },
  Pending: { variant: 'gold', icon: Clock },
  Refunded: { variant: 'neutral', icon: RotateCcw },
  Failed: { variant: 'coral', icon: XCircle },
}

export default function AdminPaymentsPage() {
  const total = adminPayments.filter((p) => p.status === 'Paid').reduce((s, p) => s + p.amount, 0)
  const columns: Column<AdminPayment>[] = [
    { key: 'id', label: 'Invoice', render: (r) => <span className="font-mono text-xs">{r.id}</span> },
    { key: 'student', label: 'Student', render: (r) => <span className="font-medium">{r.student}</span> },
    { key: 'program', label: 'Program', render: (r) => <span className="text-ink-2">{r.program}</span> },
    { key: 'method', label: 'Method', render: (r) => <span className="text-ink-2">{r.method}</span> },
    { key: 'amount', label: 'Amount', render: (r) => <span className="font-mono font-medium">E£{r.amount.toLocaleString()}</span> },
    { key: 'date', label: 'Date', render: (r) => <span className="text-ink-2">{r.date}</span> },
    { key: 'status', label: 'Status', render: (r) => {
      const m = statusMeta[r.status]
      return <Badge variant={m.variant}><m.icon className="h-3 w-3" /> {r.status}</Badge>
    }},
  ]
  return (
    <AdminShell title="Payments & Invoices" subtitle={`E£${total.toLocaleString()} collected · recent transactions`}
      action={<DemoActionButton feature="Export" detail="Payment exports will be implemented after the payment gateway in Phase 4." variant="outline" size="sm"><Download className="h-4 w-4" /> Export</DemoActionButton>}>
      <DataTable rows={adminPayments} columns={columns} searchKeys={['id', 'student', 'program']}
        searchPlaceholder="Search by invoice, student, or program…"
        filters={{ label: 'Status', key: 'status', values: ['Paid', 'Pending', 'Refunded', 'Failed'] }} />
    </AdminShell>
  )
}

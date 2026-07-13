'use client'
import { AdminShell } from '@/components/admin/admin-shell'
import { DataTable, type Column } from '@/components/admin/data-table'
import { Badge } from '@/components/ui/badge'
import { DemoActionButton } from '@/components/shared/demo-action-button'
import { Progress } from '@/components/ui/progress'
import { adminStudents, type AdminStudent } from '@/data/admin/records'
import { UserPlus } from 'lucide-react'

const statusTone: Record<AdminStudent['status'], 'teal' | 'gold' | 'coral' | 'neutral'> = {
  Active: 'teal', Graduated: 'gold', 'On Hold': 'neutral', 'At Risk': 'coral',
}

export default function AdminStudentsPage() {
  const columns: Column<AdminStudent>[] = [
    { key: 'name', label: 'Student', render: (r) => (
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal to-teal-fg text-xs font-semibold text-[hsl(222_32%_7%)]">{r.avatar}</div>
        <div className="min-w-0">
          <p className="font-medium">{r.name}</p>
          <p className="font-mono text-[11px] text-ink-3">{r.id}</p>
        </div>
      </div>
    )},
    { key: 'diploma', label: 'Diploma', render: (r) => <span className="text-ink-2">{r.diploma}</span> },
    { key: 'branch', label: 'Branch', render: (r) => <span className="text-ink-2">{r.branch}</span> },
    { key: 'progress', label: 'Progress', className: 'min-w-[140px]', render: (r) => (
      <div>
        <div className="mb-1 flex justify-between text-[11px]"><span className="text-ink-3">{r.progress}%</span><span className="text-ink-3">GPA {r.gpa}</span></div>
        <Progress value={r.progress} tone={r.progress >= 70 ? 'teal' : r.progress >= 40 ? 'gold' : 'coral'} />
      </div>
    )},
    { key: 'status', label: 'Status', render: (r) => <Badge variant={statusTone[r.status]}>{r.status}</Badge> },
    { key: 'paid', label: 'Payment', render: (r) => r.paid
      ? <Badge variant="teal">Paid</Badge>
      : <Badge variant="coral">Balance due</Badge> },
  ]

  return (
    <AdminShell title="Student Management" subtitle={`${adminStudents.length} records shown · 8,742 total enrolled`}
      action={<DemoActionButton feature="Add student" detail="Student creation requires authentication and admin CRUD in Phase 2." variant="primary" size="sm"><UserPlus className="h-4 w-4" /> Add student</DemoActionButton>}>
      <DataTable
        rows={adminStudents}
        columns={columns}
        searchKeys={['name', 'id', 'email', 'diploma']}
        searchPlaceholder="Search by name, ID, email, or diploma…"
        filters={{ label: 'Status', key: 'status', values: ['Active', 'At Risk', 'On Hold', 'Graduated'] }}
      />
    </AdminShell>
  )
}

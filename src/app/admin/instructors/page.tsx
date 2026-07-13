'use client'
import { AdminShell } from '@/components/admin/admin-shell'
import { DataTable, type Column } from '@/components/admin/data-table'
import { Badge } from '@/components/ui/badge'
import { DemoActionButton } from '@/components/shared/demo-action-button'
import { adminInstructors, type AdminInstructor } from '@/data/admin/records'
import { UserPlus, Star } from 'lucide-react'

export default function AdminInstructorsPage() {
  const columns: Column<AdminInstructor>[] = [
    { key: 'name', label: 'Instructor', render: (r) => (
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-coral text-xs font-semibold text-[hsl(222_32%_7%)]">{r.avatar}</div>
        <div className="min-w-0"><p className="font-medium">{r.name}</p><p className="text-[11px] text-ink-3">{r.title}</p></div>
      </div>
    )},
    { key: 'track', label: 'Track', render: (r) => <Badge variant="neutral">{r.track}</Badge> },
    { key: 'branch', label: 'Branch', render: (r) => <span className="text-ink-2">{r.branch}</span> },
    { key: 'courses', label: 'Courses', render: (r) => <span className="font-mono">{r.courses}</span> },
    { key: 'students', label: 'Students', render: (r) => <span className="font-mono">{r.students.toLocaleString()}</span> },
    { key: 'rating', label: 'Rating', render: (r) => (
      <span className="flex items-center gap-1 font-mono"><Star className="h-3.5 w-3.5 fill-gold text-gold" />{r.rating}</span>
    )},
    { key: 'status', label: 'Status', render: (r) => <Badge variant={r.status === 'Active' ? 'teal' : 'neutral'}>{r.status}</Badge> },
  ]
  return (
    <AdminShell title="Instructor Management" subtitle={`${adminInstructors.length} instructors across all branches`}
      action={<DemoActionButton feature="Add instructor" detail="Instructor creation requires admin authentication and role management in Phase 2." variant="primary" size="sm"><UserPlus className="h-4 w-4" /> Add instructor</DemoActionButton>}>
      <DataTable rows={adminInstructors} columns={columns} searchKeys={['name', 'title', 'track']}
        searchPlaceholder="Search instructors…"
        filters={{ label: 'Track', key: 'track', values: ['Development', 'Data & AI', 'Design', 'Marketing', 'Security', 'Cloud', 'Business'] }} />
    </AdminShell>
  )
}

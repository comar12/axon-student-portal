'use client'
import { AdminShell } from '@/components/admin/admin-shell'
import { DataTable, type Column } from '@/components/admin/data-table'
import { Badge } from '@/components/ui/badge'
import { DemoActionButton } from '@/components/shared/demo-action-button'
import { adminCourses, type AdminCourse } from '@/data/admin/records'
import { Plus, Star } from 'lucide-react'

const statusTone: Record<AdminCourse['status'], 'teal' | 'gold' | 'neutral'> = {
  Published: 'teal', Draft: 'gold', Archived: 'neutral',
}

export default function AdminCoursesPage() {
  const columns: Column<AdminCourse>[] = [
    { key: 'title', label: 'Course', render: (r) => (
      <div className="min-w-0"><p className="font-medium">{r.title}</p><p className="font-mono text-[11px] text-ink-3">{r.id} · updated {r.updated}</p></div>
    )},
    { key: 'track', label: 'Track', render: (r) => <Badge variant="neutral">{r.track}</Badge> },
    { key: 'instructor', label: 'Instructor', render: (r) => <span className="text-ink-2">{r.instructor}</span> },
    { key: 'enrolled', label: 'Enrolled', render: (r) => <span className="font-mono">{r.enrolled.toLocaleString()}</span> },
    { key: 'rating', label: 'Rating', render: (r) => r.rating > 0
      ? <span className="flex items-center gap-1 font-mono"><Star className="h-3.5 w-3.5 fill-gold text-gold" />{r.rating}</span>
      : <span className="text-ink-3">—</span> },
    { key: 'price', label: 'Price', render: (r) => <span className="font-mono">E£{r.price.toLocaleString()}</span> },
    { key: 'status', label: 'Status', render: (r) => <Badge variant={statusTone[r.status]}>{r.status}</Badge> },
  ]
  return (
    <AdminShell title="Course Management" subtitle={`${adminCourses.length} courses · 128 total in catalogue`}
      action={<DemoActionButton feature="New course" detail="Course creation requires admin authentication and database CRUD, scheduled for Phases 2–3." variant="primary" size="sm"><Plus className="h-4 w-4" /> New course</DemoActionButton>}>
      <DataTable rows={adminCourses} columns={columns} searchKeys={['title', 'id', 'instructor', 'track']}
        searchPlaceholder="Search courses…"
        filters={{ label: 'Status', key: 'status', values: ['Published', 'Draft', 'Archived'] }} />
    </AdminShell>
  )
}

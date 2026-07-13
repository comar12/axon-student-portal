'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Search } from 'lucide-react'

export type Column<T> = {
  key: string
  label: string
  render: (row: T) => React.ReactNode
  className?: string
}

export function DataTable<T extends Record<string, unknown>>({
  rows, columns, searchKeys, searchPlaceholder = 'Search…', filters,
}: {
  rows: T[]
  columns: Column<T>[]
  searchKeys: (keyof T)[]
  searchPlaceholder?: string
  filters?: { label: string; values: string[]; key: keyof T }
}) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<string>('All')

  const filtered = rows.filter((r) => {
    const matchesQuery = query === '' || searchKeys.some((k) => String(r[k]).toLowerCase().includes(query.toLowerCase()))
    const matchesFilter = !filters || filter === 'All' || String(r[filters.key]) === filter
    return matchesQuery && matchesFilter
  })

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative w-full min-w-0 flex-1 sm:min-w-[220px]">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-3" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={searchPlaceholder}
            className="ring-focus h-10 w-full rounded-lg border border-border bg-surface-2 pl-9 pr-3 text-sm placeholder:text-ink-3" />
        </div>
        {filters && (
          <div className="flex flex-wrap gap-1.5">
            {['All', ...filters.values].map((v) => (
              <button key={v} onClick={() => setFilter(v)}
                className={`ring-focus rounded-lg px-3 py-1.5 text-xs font-medium transition ${filter === v ? 'bg-gold text-[hsl(222_32%_7%)]' : 'bg-surface-2 text-ink-2 hover:text-ink'}`}>
                {v}
              </button>
            ))}
          </div>
        )}
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-[720px] w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                {columns.map((c) => (
                  <th key={c.key} className={`px-4 py-3 text-[11px] font-semibold uppercase tracking-wide text-ink-3 ${c.className ?? ''}`}>{c.label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, i) => (
                <motion.tr key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25, delay: Math.min(i * 0.02, 0.3) }}
                  className="border-b border-border transition last:border-0 hover:bg-surface-2">
                  {columns.map((c) => (
                    <td key={c.key} className={`px-4 py-3 ${c.className ?? ''}`}>{c.render(row)}</td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Search className="mb-3 h-8 w-8 text-ink-3" />
              <p className="text-sm font-medium">No results found</p>
              <p className="text-xs text-ink-3">Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </Card>
      <p className="mt-3 text-xs text-ink-3">Showing {filtered.length} of {rows.length}</p>
    </div>
  )
}

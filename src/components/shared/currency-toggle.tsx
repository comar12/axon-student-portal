'use client'
import { cn } from '@/lib/utils'
import type { Currency } from '@/data/enrollment'

export function CurrencyToggle({ value, onChange }: { value: Currency; onChange: (c: Currency) => void }) {
  return (
    <div className="inline-flex rounded-lg border border-border bg-surface-2 p-0.5">
      {(['EGP', 'USD'] as Currency[]).map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={cn(
            'ring-focus rounded-md px-3 py-1.5 font-mono text-xs font-semibold transition-colors',
            value === c ? 'bg-teal text-[hsl(222_32%_7%)]' : 'text-ink-3 hover:text-ink-2'
          )}
          aria-pressed={value === c}
        >
          {c}
        </button>
      ))}
    </div>
  )
}

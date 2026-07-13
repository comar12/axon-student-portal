export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-6 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-end">
      <div>
        <h1 className="font-display text-2xl font-bold lg:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-ink-2">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

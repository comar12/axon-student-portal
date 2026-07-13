'use client'

import type { ComponentProps } from 'react'
import { Button } from '@/components/ui/button'

type DemoActionButtonProps = ComponentProps<typeof Button> & {
  feature: string
  detail?: string
}

export function DemoActionButton({ feature, detail, onClick, ...props }: DemoActionButtonProps) {
  return (
    <Button
      {...props}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented) return
        window.alert(
          detail ?? `${feature} is intentionally disabled in the frontend demo. It will be connected during the relevant backend phase.`
        )
      }}
    />
  )
}

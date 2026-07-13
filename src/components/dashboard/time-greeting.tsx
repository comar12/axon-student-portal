'use client'

import { useEffect, useState } from 'react'

function getGreeting(date: Date) {
  const hour = date.getHours()

  if (hour < 12) return 'Good morning'
  if (hour < 18) return 'Good afternoon'
  return 'Good evening'
}

export function TimeGreeting() {
  const [greeting, setGreeting] = useState('Welcome back')

  useEffect(() => {
    const updateGreeting = () => setGreeting(getGreeting(new Date()))

    updateGreeting()
    const intervalId = window.setInterval(updateGreeting, 60_000)

    return () => window.clearInterval(intervalId)
  }, [])

  return <>{greeting}</>
}

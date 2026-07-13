// Currency conversion (demo rates). EGP is the base.
export const fx = { EGP: 1, USD: 0.0205 } as const
export const currencySymbol = { EGP: 'E£', USD: '$' } as const
export type Currency = keyof typeof fx

export function formatMoney(egp: number, cur: Currency) {
  const v = egp * fx[cur]
  const sym = currencySymbol[cur]
  return sym + (cur === 'USD' ? v.toFixed(2) : Math.round(v).toLocaleString())
}

export type EnrolledCourse = {
  id: string
  title: string
  track: string
  instructor: string
  color: 'teal' | 'coral' | 'gold' | 'violet'
  progress: number
  totalLessons: number
  completedLessons: number
  nextLesson: string
  hoursLeft: number
  enrolledOn: string
  accessUntil: string
  cohort: string
  lastStudied: string
  price: number
  paid: number
  plan: string
  nextPayment?: { amount: number; due: string }
}

export type CompletedCourse = {
  id: string
  title: string
  track: string
  instructor: string
  color: 'teal' | 'coral' | 'gold' | 'violet'
  finalGrade: number
  certId: string
  enrolledOn: string
  completedOn: string
  price: number
  paid: number
}

export const enrolledCourses: EnrolledCourse[] = [
  {
    id: 'fullstack-diploma', title: 'Full Stack Web Development Diploma', track: 'Professional Diploma',
    instructor: 'Omar El-Sayed', color: 'teal', progress: 58, totalLessons: 168, completedLessons: 97,
    nextLesson: 'State Management with Redux Toolkit', hoursLeft: 64,
    enrolledOn: '12 Jan 2026', accessUntil: '12 Jan 2027', cohort: 'FS-2026 · Spring · Evening',
    lastStudied: '2 days ago', price: 32000, paid: 16000, plan: 'Installments · 2 of 4 paid',
    nextPayment: { amount: 8000, due: '28 Jun 2026' },
  },
  {
    id: 'uiux-diploma', title: 'UI/UX Design Professional Track', track: 'Career Track',
    instructor: 'Yara Hossam', color: 'gold', progress: 85, totalLessons: 64, completedLessons: 54,
    nextLesson: 'Design Systems & Component Libraries', hoursLeft: 8,
    enrolledOn: '5 Feb 2026', accessUntil: '5 Aug 2026', cohort: 'UX-2026 · Self-paced',
    lastStudied: '4 days ago', price: 14500, paid: 14500, plan: 'Paid in full',
  },
  {
    id: 'digital-marketing', title: 'Digital Marketing Diploma', track: 'Career Track',
    instructor: 'Hala Mansour', color: 'coral', progress: 32, totalLessons: 72, completedLessons: 23,
    nextLesson: 'Meta Ads Campaign Structure', hoursLeft: 22,
    enrolledOn: '28 Mar 2026', accessUntil: '28 Mar 2027', cohort: 'DM-2026 · Weekend',
    lastStudied: 'Yesterday', price: 12000, paid: 12000, plan: 'Paid in full',
  },
]

export const completedCourses: CompletedCourse[] = [
  {
    id: 'web-foundations', title: 'Web Foundations: HTML, CSS & JavaScript', track: 'Foundation',
    instructor: 'Omar El-Sayed', color: 'violet', finalGrade: 94, certId: 'AXN-WF-2026-0417',
    enrolledOn: '3 Jan 2026', completedOn: '18 Mar 2026', price: 6500, paid: 6500,
  },
]

export const paymentHistory = [
  { date: '28 Apr 2026', desc: 'Full Stack Diploma — Installment 2 of 4', amount: 8000, method: 'Visa ··· 4291', status: 'Paid' },
  { date: '12 Jan 2026', desc: 'Full Stack Diploma — Installment 1 of 4', amount: 8000, method: 'Paymob wallet', status: 'Paid' },
  { date: '28 Mar 2026', desc: 'Digital Marketing Diploma — Full', amount: 12000, method: 'Visa ··· 4291', status: 'Paid' },
  { date: '5 Feb 2026', desc: 'UI/UX Professional Track — Full', amount: 14500, method: 'Visa ··· 4291', status: 'Paid' },
  { date: '3 Jan 2026', desc: 'Web Foundations — Full', amount: 6500, method: 'Visa ··· 4291', status: 'Paid' },
]

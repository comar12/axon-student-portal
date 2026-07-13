export type Certificate = {
  id: string            // certificate number
  slug: string          // url id
  program: string
  track: string
  studentName: string
  studentId: string
  instructor: string
  instructorTitle: string
  issueDate: string
  completionDate: string
  hours: number
  finalGrade: number
  verifyCode: string
  color: 'teal' | 'coral' | 'gold' | 'violet'
}

export const certificates: Certificate[] = [
  {
    id: 'AXN-WF-2026-0417',
    slug: 'web-foundations',
    program: 'Web Foundations: HTML, CSS & JavaScript',
    track: 'Foundation Program',
    studentName: 'Karim Adel',
    studentId: 'AXN-STU-24193',
    instructor: 'Omar El-Sayed',
    instructorTitle: 'Lead Front-End Instructor',
    issueDate: '18 March 2026',
    completionDate: '18 March 2026',
    hours: 120,
    finalGrade: 94,
    verifyCode: 'WF94-K7Q2-AX26',
    color: 'violet',
  },
]

// Programs the student is on track to earn (not yet issued)
export const upcomingCertificates = [
  { program: 'Full Stack Web Development Diploma', progress: 58, eta: 'Est. Dec 2026', track: 'Professional Diploma' },
  { program: 'UI/UX Design Professional Track', progress: 85, eta: 'Est. Aug 2026', track: 'Career Track' },
]

export function findCertificate(slug: string) {
  return certificates.find((c) => c.slug === slug)
}

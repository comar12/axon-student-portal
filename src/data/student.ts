export const student = {
  name: 'Karim Adel',
  firstName: 'Karim',
  level: 'Full Stack Web Development — Diploma',
  streak: 24,
  xp: 8420,
  nextLevelXp: 10000,
  rank: 7,
  cohortSize: 142,
  avatar: 'KA',
  joinedDays: 96,
}

export type Course = {
  id: string
  title: string
  track: string
  instructor: string
  progress: number
  totalLessons: number
  completedLessons: number
  nextLesson: string
  nextLessonId: string
  color: 'teal' | 'coral' | 'gold' | 'violet'
  cover: string
  hoursLeft: number
}

// "Courses" here are the modules within the student's active diploma + electives.
export const courses: Course[] = [
  {
    id: 'react-frontend',
    title: 'React & Modern Front-End',
    track: 'Full Stack Diploma',
    instructor: 'Omar El-Sayed',
    progress: 68,
    totalLessons: 42,
    completedLessons: 29,
    nextLesson: 'State Management with Redux Toolkit',
    nextLessonId: 'l-rtk-01',
    color: 'teal',
    cover: 'from-teal/30 to-teal/5',
    hoursLeft: 6,
  },
  {
    id: 'node-backend',
    title: 'Node.js & REST API Development',
    track: 'Full Stack Diploma',
    instructor: 'Mariam Fouad',
    progress: 41,
    totalLessons: 56,
    completedLessons: 23,
    nextLesson: 'Authentication with JWT & Bcrypt',
    nextLessonId: 'l-jwt-04',
    color: 'coral',
    cover: 'from-coral/30 to-coral/5',
    hoursLeft: 14,
  },
  {
    id: 'ui-fundamentals',
    title: 'UI/UX Design Fundamentals',
    track: 'Elective',
    instructor: 'Yara Hossam',
    progress: 85,
    totalLessons: 30,
    completedLessons: 25,
    nextLesson: 'Design Systems & Component Libraries',
    nextLessonId: 'l-ds-02',
    color: 'gold',
    cover: 'from-gold/30 to-gold/5',
    hoursLeft: 3,
  },
  {
    id: 'web-foundations',
    title: 'Web Foundations: HTML, CSS & JavaScript',
    track: 'Full Stack Diploma',
    instructor: 'Omar El-Sayed',
    progress: 100,
    totalLessons: 38,
    completedLessons: 38,
    nextLesson: 'Module Complete',
    nextLessonId: '',
    color: 'violet',
    cover: 'from-violet/30 to-violet/5',
    hoursLeft: 0,
  },
]

export const upcoming = [
  { id: 'u1', type: 'live', title: 'Live Lab: Building a REST API', course: 'Node.js & REST API', date: new Date(Date.now() + 86400000).toISOString(), time: '6:00 PM', instructor: 'Mariam Fouad', mins: 90 },
  { id: 'u2', type: 'deadline', title: 'Project: E-Commerce Frontend — Submission', course: 'React & Modern Front-End', date: new Date(Date.now() + 2 * 86400000).toISOString(), time: '11:59 PM', instructor: 'Omar El-Sayed', mins: 0 },
  { id: 'u3', type: 'live', title: 'Design Critique Session (Group)', course: 'UI/UX Fundamentals', date: new Date(Date.now() + 3 * 86400000).toISOString(), time: '5:30 PM', instructor: 'Yara Hossam', mins: 60 },
  { id: 'u4', type: 'exam', title: 'Midterm Exam — Front-End Module', course: 'React & Modern Front-End', date: new Date(Date.now() + 5 * 86400000).toISOString(), time: '10:00 AM', instructor: 'Omar El-Sayed', mins: 120 },
]

export const assignments = [
  { id: 'a1', title: 'E-Commerce Product Page (React)', course: 'React & Modern Front-End', status: 'in-progress', due: new Date(Date.now() + 86400000).toISOString(), points: 100 },
  { id: 'a2', title: 'REST API for Task Manager', course: 'Node.js & REST API', status: 'not-started', due: new Date(Date.now() + 2 * 86400000).toISOString(), points: 100 },
  { id: 'a3', title: 'Wireframe Kit — Mobile App', course: 'UI/UX Fundamentals', status: 'submitted', due: new Date(Date.now() - 86400000).toISOString(), points: 50, grade: 47 },
  { id: 'a4', title: 'JavaScript Algorithms Challenge', course: 'Web Foundations', status: 'graded', due: new Date(Date.now() - 4 * 86400000).toISOString(), points: 100, grade: 94 },
]

// Diploma skill/competency map (replaces language skills)
export const skills = [
  { name: 'Front-End', value: 88, tone: 'teal' as const },
  { name: 'Back-End', value: 64, tone: 'coral' as const },
  { name: 'Databases', value: 73, tone: 'gold' as const },
  { name: 'UI/UX', value: 82, tone: 'teal' as const },
  { name: 'DevOps', value: 58, tone: 'violet' as const },
  { name: 'Testing', value: 70, tone: 'coral' as const },
]

export const achievements = [
  { id: 'ac1', name: '24-Day Streak', desc: 'Logged in and studied 24 days running', icon: 'flame', earned: true, tone: 'coral' },
  { id: 'ac2', name: 'Module Master', desc: 'Completed Web Foundations with 90%+', icon: 'crown', earned: true, tone: 'gold' },
  { id: 'ac3', name: 'Top 10 Cohort', desc: 'Ranked in top 10 of your cohort', icon: 'trophy', earned: true, tone: 'teal' },
  { id: 'ac4', name: 'Early Bird', desc: 'Completed 10 sessions before 9 AM', icon: 'sunrise', earned: true, tone: 'gold' },
  { id: 'ac5', name: 'Project Shipper', desc: 'Submit 10 graded projects', icon: 'book', earned: false, tone: 'violet', progress: 73 },
  { id: 'ac6', name: 'Full Stack Ready', desc: 'Pass 5 practical exams with 85+', icon: 'mic', earned: false, tone: 'teal', progress: 60 },
]

export const weeklyActivity = [
  { day: 'Mon', mins: 45 }, { day: 'Tue', mins: 62 }, { day: 'Wed', mins: 30 },
  { day: 'Thu', mins: 78 }, { day: 'Fri', mins: 52 }, { day: 'Sat', mins: 90 }, { day: 'Sun', mins: 40 },
]

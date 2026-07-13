export type Assessment = {
  id: string
  title: string
  course: string
  type: 'quiz' | 'assignment' | 'exam' | 'speaking'
  status: 'upcoming' | 'in-progress' | 'submitted' | 'graded'
  due: string
  points: number
  grade?: number
  color: 'teal' | 'coral' | 'gold' | 'violet'
}

// type 'speaking' is reused as "practical/lab exam"; 'quiz' = MCQ; 'assignment' = upload; 'exam' = proctored
export const assessments: Assessment[] = [
  { id: 'a1', title: 'Practical Lab: Build a REST API', course: 'Node.js & REST API', type: 'speaking', status: 'in-progress', due: 'Tomorrow · 6:00 PM', points: 100, color: 'teal' },
  { id: 'a2', title: 'Project Upload: E-Commerce Frontend', course: 'React & Modern Front-End', type: 'assignment', status: 'upcoming', due: 'Fri · 11:59 PM', points: 100, color: 'coral' },
  { id: 'a3', title: 'Midterm Exam — Front-End Module', course: 'React & Modern Front-End', type: 'exam', status: 'upcoming', due: 'Mon · 10:00 AM', points: 200, color: 'coral' },
  { id: 'a4', title: 'MCQ Quiz: JavaScript Fundamentals', course: 'Web Foundations', type: 'quiz', status: 'submitted', due: 'Yesterday', points: 50, color: 'gold' },
  { id: 'a5', title: 'Coding Challenge: Algorithms', course: 'Web Foundations', type: 'quiz', status: 'graded', due: '4 days ago', points: 100, grade: 94, color: 'violet' },
  { id: 'a6', title: 'Practical: Responsive Layout', course: 'React & Modern Front-End', type: 'speaking', status: 'graded', due: '1 week ago', points: 100, grade: 88, color: 'teal' },
  { id: 'a7', title: 'MCQ Quiz: HTTP & APIs', course: 'Node.js & REST API', type: 'quiz', status: 'graded', due: '1 week ago', points: 50, grade: 41, color: 'coral' },
]

export const gradeAverage = 89

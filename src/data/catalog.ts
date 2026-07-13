export type CatalogCourse = {
  id: string
  title: string
  track: string
  level: string
  instructor: string
  rating: number
  students: number
  lessons: number
  hours: number
  price: number
  tag?: string
  color: 'teal' | 'coral' | 'gold' | 'violet'
}

// Full academy program catalogue — tech, design, marketing, data, business.
export const catalog: CatalogCourse[] = [
  { id: 'c1', title: 'Front-End Development Diploma', track: 'Development', level: 'Beginner–Intermediate', instructor: 'Omar El-Sayed', rating: 4.9, students: 3840, lessons: 96, hours: 120, price: 18000, tag: 'Bestseller', color: 'teal' },
  { id: 'c2', title: 'Data Analysis & Business Intelligence', track: 'Data', level: 'Intermediate', instructor: 'Tarek Saleh', rating: 4.8, students: 2310, lessons: 78, hours: 90, price: 16500, tag: 'New', color: 'coral' },
  { id: 'c3', title: 'UI/UX Design Professional Track', track: 'Design', level: 'All levels', instructor: 'Yara Hossam', rating: 4.9, students: 2965, lessons: 64, hours: 80, price: 14500, color: 'gold' },
  { id: 'c4', title: 'Digital Marketing Diploma', track: 'Marketing', level: 'Beginner', instructor: 'Hala Mansour', rating: 4.7, students: 4120, lessons: 72, hours: 85, price: 12000, tag: 'Popular', color: 'coral' },
  { id: 'c5', title: 'Cybersecurity Fundamentals', track: 'Security', level: 'Intermediate', instructor: 'Khaled Nabil', rating: 4.8, students: 1480, lessons: 68, hours: 96, price: 19500, color: 'violet' },
  { id: 'c6', title: 'Cloud Computing & DevOps (AWS)', track: 'Cloud', level: 'Intermediate–Advanced', instructor: 'Sherif Adel', rating: 4.9, students: 1620, lessons: 74, hours: 100, price: 21000, tag: 'In demand', color: 'teal' },
  { id: 'c7', title: 'AI & Machine Learning Diploma', track: 'Data', level: 'Advanced', instructor: 'Tarek Saleh', rating: 4.8, students: 1190, lessons: 88, hours: 130, price: 24000, color: 'violet' },
  { id: 'c8', title: 'Accounting & Finance Professional', track: 'Business', level: 'Beginner–Intermediate', instructor: 'Nadia Kamel', rating: 4.7, students: 2040, lessons: 60, hours: 75, price: 11500, color: 'gold' },
  { id: 'c9', title: 'Project Management (PMP Track)', track: 'Business', level: 'Intermediate', instructor: 'Nadia Kamel', rating: 4.8, students: 1730, lessons: 52, hours: 70, price: 13500, color: 'teal' },
]

export const careerPaths = [
  { id: 'p1', title: 'Become a Full Stack Developer', desc: 'From zero to job-ready: front-end, back-end, databases, and deployment', courses: 5, weeks: 32, color: 'teal' },
  { id: 'p2', title: 'Become a Data Analyst', desc: 'Excel, SQL, Python, Power BI, and real business dashboards', courses: 4, weeks: 24, color: 'coral' },
  { id: 'p3', title: 'Become a UI/UX Designer', desc: 'Research, wireframing, prototyping, and a portfolio that hires', courses: 3, weeks: 20, color: 'gold' },
]

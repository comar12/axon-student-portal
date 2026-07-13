export type AdminStudent = {
  id: string; name: string; avatar: string; email: string
  diploma: string; branch: string; status: 'Active' | 'On Hold' | 'Graduated' | 'At Risk'
  progress: number; gpa: number; enrolled: string; paid: boolean
}

export const adminStudents: AdminStudent[] = [
  { id: 'AXN-STU-24193', name: 'Karim Adel', avatar: 'KA', email: 'karim.adel@email.com', diploma: 'Full Stack Web Development', branch: 'Nasr City', status: 'Active', progress: 58, gpa: 3.7, enrolled: '12 Jan 2026', paid: false },
  { id: 'AXN-STU-24201', name: 'Mariam Yassin', avatar: 'MY', email: 'mariam.y@email.com', diploma: 'Full Stack Web Development', branch: 'Maadi', status: 'Active', progress: 12, gpa: 3.9, enrolled: '24 Jun 2026', paid: true },
  { id: 'AXN-STU-23877', name: 'Ahmed Sobhy', avatar: 'AS', email: 'a.sobhy@email.com', diploma: 'Data Analysis & BI', branch: 'Nasr City', status: 'Active', progress: 71, gpa: 3.5, enrolled: '3 Mar 2026', paid: true },
  { id: 'AXN-STU-22910', name: 'Nour El-Din', avatar: 'NE', email: 'nour.eldin@email.com', diploma: 'UI/UX Design Track', branch: 'Zamalek', status: 'At Risk', progress: 23, gpa: 2.1, enrolled: '18 Feb 2026', paid: true },
  { id: 'AXN-STU-24056', name: 'Salma Adel', avatar: 'SA', email: 'salma.adel@email.com', diploma: 'Digital Marketing', branch: 'Alexandria', status: 'Active', progress: 44, gpa: 3.8, enrolled: '28 Mar 2026', paid: true },
  { id: 'AXN-STU-21445', name: 'Youssef Hany', avatar: 'YH', email: 'y.hany@email.com', diploma: 'Cybersecurity', branch: 'Nasr City', status: 'Graduated', progress: 100, gpa: 3.9, enrolled: '10 Sep 2025', paid: true },
  { id: 'AXN-STU-23512', name: 'Farida Mostafa', avatar: 'FM', email: 'farida.m@email.com', diploma: 'Cloud & DevOps', branch: 'Maadi', status: 'On Hold', progress: 35, gpa: 3.2, enrolled: '14 Jan 2026', paid: false },
  { id: 'AXN-STU-24188', name: 'Omar Tarek', avatar: 'OT', email: 'omar.tarek@email.com', diploma: 'AI & Machine Learning', branch: 'Nasr City', status: 'Active', progress: 19, gpa: 3.6, enrolled: '20 Jun 2026', paid: true },
]

export type AdminInstructor = {
  id: string; name: string; avatar: string; title: string
  track: string; courses: number; students: number; rating: number
  status: 'Active' | 'On Leave'; branch: string
}

export const adminInstructors: AdminInstructor[] = [
  { id: 'INS-001', name: 'Omar El-Sayed', avatar: 'OE', title: 'Lead Front-End Instructor', track: 'Development', courses: 6, students: 1840, rating: 4.9, status: 'Active', branch: 'Nasr City' },
  { id: 'INS-002', name: 'Mariam Fouad', avatar: 'MF', title: 'Senior Back-End Engineer', track: 'Development', courses: 4, students: 1210, rating: 4.8, status: 'Active', branch: 'Nasr City' },
  { id: 'INS-003', name: 'Yara Hossam', avatar: 'YH', title: 'Product Design Lead', track: 'Design', courses: 3, students: 2965, rating: 4.9, status: 'Active', branch: 'Zamalek' },
  { id: 'INS-004', name: 'Tarek Saleh', avatar: 'TS', title: 'Data Science Instructor', track: 'Data & AI', courses: 5, students: 1480, rating: 4.8, status: 'Active', branch: 'Maadi' },
  { id: 'INS-005', name: 'Hala Mansour', avatar: 'HM', title: 'Digital Marketing Strategist', track: 'Marketing', courses: 4, students: 2103, rating: 4.7, status: 'On Leave', branch: 'Alexandria' },
  { id: 'INS-006', name: 'Khaled Nabil', avatar: 'KN', title: 'Security Researcher', track: 'Security', courses: 3, students: 943, rating: 4.8, status: 'Active', branch: 'Nasr City' },
  { id: 'INS-007', name: 'Sherif Adel', avatar: 'SA', title: 'Cloud Architect (AWS)', track: 'Cloud', courses: 3, students: 1620, rating: 4.9, status: 'Active', branch: 'Maadi' },
  { id: 'INS-008', name: 'Nadia Kamel', avatar: 'NK', title: 'Finance & PM Instructor', track: 'Business', courses: 4, students: 1730, rating: 4.8, status: 'Active', branch: 'Nasr City' },
]

export type AdminCourse = {
  id: string; title: string; track: string; instructor: string
  enrolled: number; rating: number; price: number; status: 'Published' | 'Draft' | 'Archived'
  updated: string
}

export const adminCourses: AdminCourse[] = [
  { id: 'CRS-101', title: 'Full Stack Web Development Diploma', track: 'Development', instructor: 'Omar El-Sayed', enrolled: 1840, rating: 4.9, price: 32000, status: 'Published', updated: '2 days ago' },
  { id: 'CRS-102', title: 'Front-End Development Diploma', track: 'Development', instructor: 'Omar El-Sayed', enrolled: 3840, rating: 4.9, price: 18000, status: 'Published', updated: '5 days ago' },
  { id: 'CRS-201', title: 'Data Analysis & Business Intelligence', track: 'Data & AI', instructor: 'Tarek Saleh', enrolled: 2310, rating: 4.8, price: 16500, status: 'Published', updated: '1 week ago' },
  { id: 'CRS-202', title: 'AI & Machine Learning Diploma', track: 'Data & AI', instructor: 'Tarek Saleh', enrolled: 1190, rating: 4.8, price: 24000, status: 'Published', updated: '3 days ago' },
  { id: 'CRS-301', title: 'UI/UX Design Professional Track', track: 'Design', instructor: 'Yara Hossam', enrolled: 2965, rating: 4.9, price: 14500, status: 'Published', updated: '6 hours ago' },
  { id: 'CRS-401', title: 'Digital Marketing Diploma', track: 'Marketing', instructor: 'Hala Mansour', enrolled: 4120, rating: 4.7, price: 12000, status: 'Published', updated: '4 days ago' },
  { id: 'CRS-501', title: 'Cybersecurity Fundamentals', track: 'Security', instructor: 'Khaled Nabil', enrolled: 1480, rating: 4.8, price: 19500, status: 'Published', updated: '1 day ago' },
  { id: 'CRS-601', title: 'Cloud Computing & DevOps (AWS)', track: 'Cloud', instructor: 'Sherif Adel', enrolled: 1620, rating: 4.9, price: 21000, status: 'Published', updated: '2 weeks ago' },
  { id: 'CRS-602', title: 'Kubernetes in Production', track: 'Cloud', instructor: 'Sherif Adel', enrolled: 0, rating: 0, price: 9500, status: 'Draft', updated: '1 hour ago' },
]

export type AdminPayment = {
  id: string; student: string; program: string; amount: number
  method: string; status: 'Paid' | 'Pending' | 'Refunded' | 'Failed'; date: string
}

export const adminPayments: AdminPayment[] = [
  { id: 'INV-2026-4821', student: 'Mariam Yassin', program: 'Full Stack Web Development', amount: 8000, method: 'Visa ··· 4291', status: 'Paid', date: '29 Jun 2026' },
  { id: 'INV-2026-4820', student: 'Ahmed Sobhy', program: 'Data Analysis & BI', amount: 16500, method: 'Paymob', status: 'Paid', date: '29 Jun 2026' },
  { id: 'INV-2026-4819', student: 'Nour El-Din', program: 'UI/UX Design Track', amount: 14500, method: 'Instapay', status: 'Paid', date: '28 Jun 2026' },
  { id: 'INV-2026-4818', student: 'Farida Mostafa', program: 'Cloud & DevOps', amount: 5250, method: 'Visa ··· 7733', status: 'Pending', date: '28 Jun 2026' },
  { id: 'INV-2026-4817', student: 'Salma Adel', program: 'Digital Marketing', amount: 12000, method: 'Visa ··· 1102', status: 'Paid', date: '27 Jun 2026' },
  { id: 'INV-2026-4816', student: 'Hossam Gad', program: 'Front-End Development', amount: 18000, method: 'Paymob', status: 'Refunded', date: '26 Jun 2026' },
  { id: 'INV-2026-4815', student: 'Omar Tarek', program: 'AI & Machine Learning', amount: 24000, method: 'Bank Transfer', status: 'Paid', date: '26 Jun 2026' },
  { id: 'INV-2026-4814', student: 'Lina Sherif', program: 'Cybersecurity', amount: 19500, method: 'Visa ··· 9921', status: 'Failed', date: '25 Jun 2026' },
]

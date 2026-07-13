// Academy-wide operational data for the Owner/Admin portal.
// Realistic figures for a mid-size Egyptian training academy.

export const academyStats = {
  totalStudents: 8742,
  activeStudents: 6310,
  totalInstructors: 64,
  activeCourses: 128,
  diplomas: 14,
  branches: 5,
  monthlyRevenue: 4825000, // EGP
  revenueGrowth: 12.4, // % vs last month
  enrollmentsThisMonth: 412,
  graduationRate: 87, // %
  employmentRate: 73, // % of graduates employed within 6 months
  avgRating: 4.8,
}

// Revenue for the last 12 months (EGP, thousands)
export const revenueSeries = [
  { month: 'Jul', revenue: 3120, target: 3000 },
  { month: 'Aug', revenue: 3340, target: 3200 },
  { month: 'Sep', revenue: 3980, target: 3500 },
  { month: 'Oct', revenue: 4210, target: 3800 },
  { month: 'Nov', revenue: 4060, target: 4000 },
  { month: 'Dec', revenue: 4720, target: 4200 },
  { month: 'Jan', revenue: 4390, target: 4300 },
  { month: 'Feb', revenue: 4510, target: 4400 },
  { month: 'Mar', revenue: 4880, target: 4500 },
  { month: 'Apr', revenue: 4640, target: 4600 },
  { month: 'May', revenue: 4925, target: 4700 },
  { month: 'Jun', revenue: 4825, target: 4800 },
]

export const enrollmentSeries = [
  { month: 'Jul', students: 280 }, { month: 'Aug', students: 310 },
  { month: 'Sep', students: 520 }, { month: 'Oct', students: 470 },
  { month: 'Nov', students: 390 }, { month: 'Dec', students: 610 },
  { month: 'Jan', students: 540 }, { month: 'Feb', students: 430 },
  { month: 'Mar', students: 580 }, { month: 'Apr', students: 460 },
  { month: 'May', students: 495 }, { month: 'Jun', students: 412 },
]

// Revenue split by program track
export const revenueByTrack = [
  { track: 'Development', value: 1840000, color: 'teal' },
  { track: 'Data & AI', value: 1120000, color: 'violet' },
  { track: 'Design', value: 720000, color: 'gold' },
  { track: 'Marketing', value: 640000, color: 'coral' },
  { track: 'Business', value: 505000, color: 'teal' },
]

export const recentEnrollments = [
  { id: 'e1', name: 'Mariam Yassin', avatar: 'MY', program: 'Full Stack Web Development', amount: 32000, time: '12 min ago', method: 'Visa' },
  { id: 'e2', name: 'Ahmed Sobhy', avatar: 'AS', program: 'Data Analysis & BI', amount: 16500, time: '38 min ago', method: 'Paymob' },
  { id: 'e3', name: 'Nour El-Din', avatar: 'NE', program: 'UI/UX Design Track', amount: 14500, time: '1 hour ago', method: 'Instapay' },
  { id: 'e4', name: 'Salma Adel', avatar: 'SA', program: 'Digital Marketing', amount: 12000, time: '2 hours ago', method: 'Visa' },
  { id: 'e5', name: 'Karim Wael', avatar: 'KW', program: 'Cybersecurity Fundamentals', amount: 19500, time: '3 hours ago', method: 'Cash — Nasr City' },
]

export const branchPerformance = [
  { branch: 'Nasr City (HQ)', students: 3120, revenue: 1920000, capacity: 86, color: 'teal' },
  { branch: 'Maadi', students: 1840, revenue: 1140000, capacity: 72, color: 'gold' },
  { branch: 'Zamalek', students: 1290, revenue: 880000, capacity: 64, color: 'coral' },
  { branch: 'Alexandria', students: 1680, revenue: 690000, capacity: 58, color: 'violet' },
  { branch: '6th October', students: 812, revenue: 195000, capacity: 41, color: 'teal' },
]

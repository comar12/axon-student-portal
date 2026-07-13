export const leaderboard = [
  { rank: 1, name: 'Youssef Adel', avatar: 'YA', xp: 12840, streak: 61, you: false, change: 0 },
  { rank: 2, name: 'Mostafa Wael', avatar: 'MW', xp: 11920, streak: 45, you: false, change: 1 },
  { rank: 3, name: 'Farida Nour', avatar: 'FN', xp: 11340, streak: 38, you: false, change: -1 },
  { rank: 4, name: 'Ziad Ramy', avatar: 'ZR', xp: 10610, streak: 52, you: false, change: 2 },
  { rank: 5, name: 'Aya Bahaa', avatar: 'AB', xp: 9870, streak: 29, you: false, change: 0 },
  { rank: 6, name: 'Marwan Rashad', avatar: 'MR', xp: 8990, streak: 19, you: false, change: -2 },
  { rank: 7, name: 'Karim Adel', avatar: 'KA', xp: 8420, streak: 24, you: true, change: 3 },
  { rank: 8, name: 'Salma Tarek', avatar: 'ST', xp: 8210, streak: 22, you: false, change: -1 },
  { rank: 9, name: 'Omar Farouk', avatar: 'OF', xp: 7650, streak: 14, you: false, change: 0 },
  { rank: 10, name: 'Nour Hany', avatar: 'NH', xp: 7400, streak: 31, you: false, change: 1 },
]

export const groups = [
  { id: 'g1', name: 'Full Stack Students', members: 2284, desc: 'Front-end, back-end, projects, and code reviews — help each other ship.', tone: 'teal', active: true, posts: 142 },
  { id: 'g2', name: 'UI/UX Designers', members: 1876, desc: 'Portfolio feedback, Figma tips, and design-system discussions.', tone: 'gold', active: true, posts: 98 },
  { id: 'g3', name: 'Cybersecurity Community', members: 943, desc: 'CTF challenges, certifications, and threat-hunting walkthroughs.', tone: 'violet', active: false, posts: 55 },
  { id: 'g4', name: 'Digital Marketing Community', members: 2103, desc: 'Campaigns, analytics, and growth strategies that actually convert.', tone: 'coral', active: true, posts: 167 },
  { id: 'g5', name: 'Career Development', members: 3420, desc: 'Resumes, interviews, and internship & job opportunities.', tone: 'teal', active: true, posts: 210 },
]

export const feed = [
  { id: 'f1', author: 'Omar El-Sayed', avatar: 'OE', role: 'Instructor', time: '32m ago', group: 'Full Stack Students', text: 'Live lab on Thursday: we build and deploy a full REST API from scratch. Bring your laptop and a coffee — we ship to production by the end. Who is in?', likes: 47, comments: 12, liked: true, tone: 'teal' },
  { id: 'f2', author: 'Aya Bahaa', avatar: 'AB', role: 'Student', time: '1h ago', group: 'Career Development', text: 'Just got my first front-end internship offer at a fintech startup! The portfolio project from the diploma was the main thing they asked about in the interview. This program works.', likes: 189, comments: 43, liked: false, tone: 'teal' },
  { id: 'f3', author: 'Yara Hossam', avatar: 'YH', role: 'Instructor', time: '3h ago', group: 'UI/UX Designers', text: 'Reminder: a design system is not just a color palette. It is components, tokens, and rules. Drop your Figma links below and I will review them in this week\u2019s critique session.', likes: 76, comments: 28, liked: true, tone: 'gold' },
  { id: 'f4', author: 'Marwan Rashad', avatar: 'MR', role: 'Student', time: '5h ago', group: 'Digital Marketing Community', text: 'Anyone running Meta ads for a client right now? Looking to compare CPM benchmarks for e-commerce in the Egyptian market. Happy to share my dashboard in return.', likes: 34, comments: 19, liked: false, tone: 'coral' },
]

export const challenges = [
  { id: 'c1', title: 'Ship It Weekend', desc: 'Complete 5 lessons this weekend', reward: 250, progress: 3, total: 5, ends: '2 days', tone: 'teal' },
  { id: 'c2', title: 'Project Streak', desc: 'Submit 3 graded projects this week', reward: 150, progress: 1, total: 3, ends: '4 days', tone: 'coral' },
  { id: 'c3', title: 'Code Every Day', desc: 'Log practice on 6 days this week', reward: 300, progress: 5, total: 6, ends: '6 days', tone: 'gold' },
]

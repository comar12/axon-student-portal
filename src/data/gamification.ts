export const levels = [
  { level: 1, name: 'Trainee', xp: 0, tone: 'neutral' },
  { level: 2, name: 'Junior', xp: 1000, tone: 'neutral' },
  { level: 3, name: 'Practitioner', xp: 2500, tone: 'teal' },
  { level: 4, name: 'Developer', xp: 4500, tone: 'teal' },
  { level: 5, name: 'Specialist', xp: 7000, tone: 'gold' },
  { level: 6, name: 'Senior', xp: 10000, tone: 'gold' },
  { level: 7, name: 'Expert', xp: 14000, tone: 'coral' },
]

export const currentLevel = 5
export const xpHistory = [
  { label: 'Lessons completed', xp: 4350, tone: 'teal' },
  { label: 'Quizzes & exams', xp: 2180, tone: 'gold' },
  { label: 'Projects submitted', xp: 980, tone: 'coral' },
  { label: 'Streak bonuses', xp: 720, tone: 'violet' },
  { label: 'Community contributions', xp: 190, tone: 'teal' },
]

export const allBadges = [
  { id: 'b1', name: '24-Day Streak', desc: 'Studied every day for 24 days straight', icon: 'flame', earned: true, tone: 'coral', rarity: 'Rare', date: 'Earned 2 days ago' },
  { id: 'b2', name: 'Module Master', desc: 'Completed Web Foundations with 90%+ average', icon: 'crown', earned: true, tone: 'gold', rarity: 'Epic', date: 'Earned 1 week ago' },
  { id: 'b3', name: 'Top 10 Cohort', desc: 'Reached the top 10 of your cohort leaderboard', icon: 'trophy', earned: true, tone: 'teal', rarity: 'Rare', date: 'Earned 3 days ago' },
  { id: 'b4', name: 'Early Bird', desc: 'Completed 10 sessions before 9 AM', icon: 'sunrise', earned: true, tone: 'gold', rarity: 'Common', date: 'Earned 2 weeks ago' },
  { id: 'b5', name: 'Perfect Week', desc: 'Hit your daily goal every day for a week', icon: 'calendar-check', earned: true, tone: 'teal', rarity: 'Common', date: 'Earned 5 days ago' },
  { id: 'b6', name: 'Exam Champion', desc: 'Scored 100% on 5 quizzes', icon: 'target', earned: true, tone: 'violet', rarity: 'Rare', date: 'Earned 1 week ago' },
  { id: 'b7', name: 'Project Shipper', desc: 'Submit 10 graded projects', icon: 'book-open', earned: false, tone: 'violet', rarity: 'Epic', progress: 73 },
  { id: 'b8', name: 'Full Stack Ready', desc: 'Pass 5 practical exams with 85+', icon: 'mic', earned: false, tone: 'teal', rarity: 'Epic', progress: 60 },
  { id: 'b9', name: 'Marathon', desc: 'Reach a 50-day study streak', icon: 'flame', earned: false, tone: 'coral', rarity: 'Legendary', progress: 48 },
  { id: 'b10', name: 'Helping Hand', desc: 'Get 100 likes on community posts', icon: 'heart', earned: false, tone: 'rose', rarity: 'Rare', progress: 34 },
  { id: 'b11', name: 'Diploma Crusher', desc: 'Complete 5 full modules', icon: 'graduation-cap', earned: false, tone: 'gold', rarity: 'Epic', progress: 20 },
  { id: 'b12', name: 'Night Owl', desc: 'Complete 20 sessions after 10 PM', icon: 'moon', earned: false, tone: 'violet', rarity: 'Common', progress: 45 },
]

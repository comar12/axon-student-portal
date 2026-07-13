export const modules = [
  {
    id: 'm1', title: 'Foundations of Business Communication', lessons: [
      { id: 'l1', title: 'The Business Communication Landscape', type: 'video', duration: 12, done: true },
      { id: 'l2', title: 'Register: Formal vs. Informal', type: 'video', duration: 16, done: true },
      { id: 'l3', title: 'Email Etiquette Essentials', type: 'reading', duration: 10, done: true },
      { id: 'l4', title: 'Checkpoint Quiz', type: 'quiz', duration: 8, done: true },
    ],
  },
  {
    id: 'm2', title: 'Meetings & Presentations', lessons: [
      { id: 'l5', title: 'Opening and Closing Meetings', type: 'video', duration: 14, done: true },
      { id: 'l6', title: 'Presentation Signposting Language', type: 'video', duration: 18, done: true },
      { id: 'l7', title: 'Handling Q&A with Confidence', type: 'video', duration: 15, done: false, current: true },
      { id: 'l8', title: 'Practice: Deliver a 3-min Pitch', type: 'assignment', duration: 30, done: false },
    ],
  },
  {
    id: 'm3', title: 'Negotiation & Persuasion', lessons: [
      { id: 'l9', title: 'Negotiation Language & Tactics', type: 'video', duration: 20, done: false },
      { id: 'l10', title: 'Diplomatic Disagreement', type: 'video', duration: 13, done: false },
      { id: 'l11', title: 'Role-Play: Salary Negotiation', type: 'assignment', duration: 25, done: false },
      { id: 'l12', title: 'Module Assessment', type: 'quiz', duration: 12, done: false },
    ],
  },
  {
    id: 'm4', title: 'Cross-Cultural & Remote Work', lessons: [
      { id: 'l13', title: 'Communicating Across Cultures', type: 'video', duration: 17, done: false },
      { id: 'l14', title: 'Async Communication Mastery', type: 'reading', duration: 12, done: false },
      { id: 'l15', title: 'Final Capstone Project', type: 'assignment', duration: 60, done: false },
    ],
  },
]

export const transcript = [
  { t: '0:00', text: "Welcome back. In this lesson we're tackling one of the most nerve-racking moments in any presentation: the Q&A." },
  { t: '0:14', text: "The secret isn't knowing every answer — it's having a framework that keeps you composed when you don't." },
  { t: '0:31', text: "Let's start with the three-step LBR method: Listen fully, Bridge to your message, and Respond with structure." },
  { t: '0:52', text: "First, listen. Resist the urge to start forming your answer while the question is still being asked." },
  { t: '1:18', text: "Notice how I paraphrase the question back: 'So what you're asking is...' This buys thinking time and confirms understanding." },
]

export const notes = [
  { id: 'n1', t: '0:31', text: 'LBR method = Listen, Bridge, Respond. Use for interview questions too.', color: 'teal' },
  { id: 'n2', t: '1:18', text: 'Paraphrasing buys time + shows I understood. Practice this!', color: 'gold' },
]

export const discussion = [
  { id: 'd1', author: 'Ahmed K.', avatar: 'AK', time: '2h ago', text: 'The paraphrasing tip is gold. Tried it in a real client call today and it completely changed my confidence.', likes: 12, replies: 3 },
  { id: 'd2', author: 'Maria S.', avatar: 'MS', time: '5h ago', text: 'Anyone else struggle with the bridging step? I tend to jump straight to answering.', likes: 8, replies: 5 },
  { id: 'd3', author: 'Sarah Mitchell', avatar: 'SM', time: '1d ago', text: 'Great discussion everyone. Remember: the bridge is where you regain control of the narrative. Practice the phrase "That connects to..."', likes: 24, replies: 2, instructor: true },
]

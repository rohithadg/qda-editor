import { Participant, Question, Answer, Code } from '@/types';

export const mockParticipants: Participant[] = [
  {
    id: 'p1',
    name: 'Alice Johnson',
    codedCount: 3,
    totalAnswersCount: 5,
  },
  {
    id: 'p2',
    name: 'Bob Smith',
    codedCount: 4,
    totalAnswersCount: 5,
  },
  {
    id: 'p3',
    name: 'Carol Williams',
    codedCount: 2,
    totalAnswersCount: 5,
  },
  {
    id: 'p4',
    name: 'David Brown',
    codedCount: 5,
    totalAnswersCount: 5,
  },
  {
    id: 'p5',
    name: 'Emma Davis',
    codedCount: 1,
    totalAnswersCount: 5,
  },
];

export const mockQuestions: Question[] = [
  {
    id: 'q1',
    text: 'What is your background and experience with technology?',
    order: 1,
    codedCount: 4,
    totalParticipantsCount: 5,
  },
  {
    id: 'q2',
    text: 'What are the main challenges you face in your daily work?',
    order: 2,
    codedCount: 5,
    totalParticipantsCount: 5,
  },
  {
    id: 'q3',
    text: 'How do you currently solve these challenges?',
    order: 3,
    codedCount: 3,
    totalParticipantsCount: 5,
  },
  {
    id: 'q4',
    text: 'What improvements would you like to see?',
    order: 4,
    codedCount: 2,
    totalParticipantsCount: 5,
  },
  {
    id: 'q5',
    text: 'Any additional thoughts or feedback?',
    order: 5,
    codedCount: 1,
    totalParticipantsCount: 5,
  },
];

export const mockAnswers: Answer[] = [
  // Alice's answers
  {
    id: 'a1-1',
    participantId: 'p1',
    questionId: 'q1',
    text: "I've been working with technology for about 10 years now. I started as a web developer and gradually moved into UX design. I'm comfortable with most modern tools, but I sometimes struggle with keeping up with the rapid pace of change in the industry.",
    highlights: [],
    lastModified: '2024-01-15T10:30:00Z',
  },
  {
    id: 'a1-2',
    participantId: 'p1',
    questionId: 'q2',
    text: "The biggest challenge is time management. There's always too much to do and not enough time. I also find it difficult to balance creative work with administrative tasks. Communication with remote team members can be frustrating when time zones don't align.",
    highlights: [],
    lastModified: '2024-01-15T10:32:00Z',
  },
  {
    id: 'a1-3',
    participantId: 'p1',
    questionId: 'q3',
    text: "I use a lot of productivity tools - task managers, calendars, communication apps. I try to block time for deep work. For remote communication, we use Slack and have daily stand-ups. It's not perfect, but it works most of the time.",
    highlights: [],
    lastModified: '2024-01-15T10:35:00Z',
  },
  {
    id: 'a1-4',
    participantId: 'p1',
    questionId: 'q4',
    text: "I'd love to have better tools that integrate everything - tasks, communication, documentation. Something that reduces context switching. Also, better ways to async collaborate across time zones would be amazing.",
    highlights: [],
    lastModified: '2024-01-15T10:38:00Z',
  },
  {
    id: 'a1-5',
    participantId: 'p1',
    questionId: 'q5',
    text: "Overall, I'm happy with where things are going. I just hope we can find ways to make work more sustainable and less overwhelming.",
    highlights: [],
    lastModified: '2024-01-15T10:40:00Z',
  },

  // Bob's answers
  {
    id: 'a2-1',
    participantId: 'p2',
    questionId: 'q1',
    text: "I'm relatively new to tech - only about 3 years of experience. I came from a non-technical background in marketing. The learning curve has been steep, but I enjoy problem-solving and building things. I still feel like an imposter sometimes.",
    highlights: [],
    lastModified: '2024-01-16T09:20:00Z',
  },
  {
    id: 'a2-2',
    participantId: 'p2',
    questionId: 'q2',
    text: "My main challenge is the technical complexity. There's so much to learn and I often feel overwhelmed. Documentation is often poor or outdated. I also struggle with asking for help because I don't want to seem incompetent.",
    highlights: [],
    lastModified: '2024-01-16T09:25:00Z',
  },
  {
    id: 'a2-3',
    participantId: 'p2',
    questionId: 'q3',
    text: "I spend a lot of time reading documentation, watching tutorials, and experimenting. I've found online communities really helpful. Stack Overflow has saved me countless times. I also try to pair program with more experienced colleagues when possible.",
    highlights: [],
    lastModified: '2024-01-16T09:30:00Z',
  },
  {
    id: 'a2-4',
    participantId: 'p2',
    questionId: 'q4',
    text: "Better onboarding and mentorship programs would be incredible. Also, more beginner-friendly documentation. I think tools that can help bridge the knowledge gap would be really valuable.",
    highlights: [],
    lastModified: '2024-01-16T09:35:00Z',
  },
  {
    id: 'a2-5',
    participantId: 'p2',
    questionId: 'q5',
    text: "Despite the challenges, I'm really enjoying the journey. The tech community is generally supportive and I'm learning something new every day.",
    highlights: [],
    lastModified: '2024-01-16T09:38:00Z',
  },

  // Carol's answers
  {
    id: 'a3-1',
    participantId: 'p3',
    questionId: 'q1',
    text: "I've been in tech for 15+ years, mainly in backend development and system architecture. I'm very comfortable with code and infrastructure, but less so with front-end work and design. I prefer working with data and APIs.",
    highlights: [],
    lastModified: '2024-01-17T14:10:00Z',
  },
  {
    id: 'a3-2',
    participantId: 'p3',
    questionId: 'q2',
    text: "Dealing with legacy systems is my biggest pain point. We have technical debt that makes every change risky and time-consuming. Also, balancing new feature development with maintenance and bug fixes is always a challenge.",
    highlights: [],
    lastModified: '2024-01-17T14:15:00Z',
  },
  {
    id: 'a3-3',
    participantId: 'p3',
    questionId: 'q3',
    text: "We're gradually refactoring the legacy code when we can. We've also implemented better testing practices and CI/CD pipelines. It's slow progress, but we're moving in the right direction. Good documentation helps a lot.",
    highlights: [],
    lastModified: '2024-01-17T14:20:00Z',
  },
  {
    id: 'a3-4',
    participantId: 'p3',
    questionId: 'q4',
    text: "More resources for refactoring and modernization. Better tools for analyzing and visualizing code complexity. Also, I'd love to see AI tools that can help with code migration and modernization.",
    highlights: [],
    lastModified: '2024-01-17T14:25:00Z',
  },
  {
    id: 'a3-5',
    participantId: 'p3',
    questionId: 'q5',
    text: "It's important to remember that technology is just a tool. The real value comes from solving real problems for real people.",
    highlights: [],
    lastModified: '2024-01-17T14:28:00Z',
  },

  // David's answers (shorter for variety)
  {
    id: 'a4-1',
    participantId: 'p4',
    questionId: 'q1',
    text: "20 years in various tech roles. Started as QA, moved to development, now in leadership. Seen a lot of trends come and go.",
    highlights: [],
    lastModified: '2024-01-18T11:05:00Z',
  },
  {
    id: 'a4-2',
    participantId: 'p4',
    questionId: 'q2',
    text: "Managing people and projects across distributed teams. Keeping everyone aligned and motivated. Making technical decisions with incomplete information.",
    highlights: [],
    lastModified: '2024-01-18T11:08:00Z',
  },
  {
    id: 'a4-3',
    participantId: 'p4',
    questionId: 'q3',
    text: "Regular check-ins, clear documentation, transparency. Trust the team to do their work. Focus on outcomes, not hours logged.",
    highlights: [],
    lastModified: '2024-01-18T11:12:00Z',
  },
  {
    id: 'a4-4',
    participantId: 'p4',
    questionId: 'q4',
    text: "Better async communication tools. More automation for repetitive tasks. Tools that surface important information without overwhelming people.",
    highlights: [],
    lastModified: '2024-01-18T11:15:00Z',
  },
  {
    id: 'a4-5',
    participantId: 'p4',
    questionId: 'q5',
    text: "People are more important than processes or tools. Focus on that and everything else falls into place.",
    highlights: [],
    lastModified: '2024-01-18T11:18:00Z',
  },

  // Emma's answers
  {
    id: 'a5-1',
    participantId: 'p5',
    questionId: 'q1',
    text: "Fresh graduate, just started 6 months ago. Computer Science degree. Excited but also nervous about the real world versus academia. Still figuring out what I want to specialize in.",
    highlights: [],
    lastModified: '2024-01-19T16:30:00Z',
  },
  {
    id: 'a5-2',
    participantId: 'p5',
    questionId: 'q2',
    text: "Everything feels like a challenge right now! Understanding the codebase, learning the tools, working in a team, imposter syndrome. It's a lot all at once. Sometimes I feel like I learned nothing useful in school.",
    highlights: [],
    lastModified: '2024-01-19T16:35:00Z',
  },
  {
    id: 'a5-3',
    participantId: 'p5',
    questionId: 'q3',
    text: "Asking a LOT of questions. Taking notes on everything. Reading code to understand patterns. My team is really supportive which helps. I also dedicate evenings to learning and side projects.",
    highlights: [],
    lastModified: '2024-01-19T16:40:00Z',
  },
  {
    id: 'a5-4',
    participantId: 'p5',
    questionId: 'q4',
    text: "Better bridges between education and industry. Maybe more practical projects in school. Tools that help junior developers learn faster. More structured mentorship programs.",
    highlights: [],
    lastModified: '2024-01-19T16:45:00Z',
  },
  {
    id: 'a5-5',
    participantId: 'p5',
    questionId: 'q5',
    text: "I'm really grateful for the opportunity to learn and grow. Despite the challenges, I'm excited about my career in tech.",
    highlights: [],
    lastModified: '2024-01-19T16:48:00Z',
  },
];

export const mockCodes: Code[] = [
  {
    id: 'c1',
    name: 'Time Management',
    color: '#ef4444', // red
    description: 'Challenges related to managing time and priorities',
    category: 'Challenges',
    usageCount: 8,
    createdAt: '2024-01-10T10:00:00Z',
  },
  {
    id: 'c2',
    name: 'Learning Curve',
    color: '#f97316', // orange
    description: 'Difficulty learning new technologies or concepts',
    category: 'Challenges',
    usageCount: 12,
    createdAt: '2024-01-10T10:05:00Z',
  },
  {
    id: 'c3',
    name: 'Remote Communication',
    color: '#eab308', // yellow
    description: 'Issues with distributed team communication',
    category: 'Challenges',
    usageCount: 6,
    createdAt: '2024-01-10T10:10:00Z',
  },
  {
    id: 'c4',
    name: 'Technical Debt',
    color: '#22c55e', // green
    description: 'Legacy systems and code quality issues',
    category: 'Challenges',
    usageCount: 4,
    createdAt: '2024-01-10T10:15:00Z',
  },
  {
    id: 'c5',
    name: 'Imposter Syndrome',
    color: '#06b6d4', // cyan
    description: 'Feelings of inadequacy or self-doubt',
    category: 'Emotional',
    usageCount: 5,
    createdAt: '2024-01-10T10:20:00Z',
  },
  {
    id: 'c6',
    name: 'Tool Usage',
    color: '#3b82f6', // blue
    description: 'Current tools and workflows being used',
    category: 'Solutions',
    usageCount: 15,
    createdAt: '2024-01-10T10:25:00Z',
  },
  {
    id: 'c7',
    name: 'Documentation Issues',
    color: '#8b5cf6', // violet
    description: 'Problems with documentation quality or availability',
    category: 'Challenges',
    usageCount: 7,
    createdAt: '2024-01-10T10:30:00Z',
  },
  {
    id: 'c8',
    name: 'Mentorship',
    color: '#d946ef', // fuchsia
    description: 'Need for or benefit from mentorship',
    category: 'Solutions',
    usageCount: 9,
    createdAt: '2024-01-10T10:35:00Z',
  },
];
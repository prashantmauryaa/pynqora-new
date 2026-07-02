export interface Category {
  id: string;
  name: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  featured?: boolean;
}

export const insightCategories: Category[] = [
  { id: 'all', name: 'All Topics' },
  { id: 'engineering', name: 'Engineering' },
  { id: 'ai', name: 'AI & ML' },
  { id: 'automation', name: 'Automation' },
  { id: 'cloud', name: 'Cloud Architecture' },
  { id: 'design', name: 'UI/UX Design' }
];

export const insights: Article[] = [
  {
    id: 'a1',
    title: 'Why We Bet Big on Go for Microservices',
    excerpt: 'An in-depth look at our transition from Node.js monoliths to Go microservices, and how it reduced our server costs by 60% while improving response times.',
    category: 'engineering',
    date: 'Oct 12, 2026',
    author: 'Aarav S.',
    readTime: '8 min read',
    featured: true
  },
  {
    id: 'a2',
    title: 'The Real Cost of "No-Code" Tools in Enterprise',
    excerpt: 'While no-code tools are great for prototypes, scaling them in an enterprise environment often leads to technical debt, vendor lock-in, and security vulnerabilities.',
    category: 'engineering',
    date: 'Sep 28, 2026',
    author: 'Divya K.',
    readTime: '6 min read',
    featured: true
  },
  {
    id: 'a3',
    title: 'Implementing RAG: Beyond the Basics',
    excerpt: 'Retrieval-Augmented Generation is easy to prototype but hard to put into production. Here is our architecture for secure, highly accurate RAG pipelines.',
    category: 'ai',
    date: 'Sep 15, 2026',
    author: 'Rohan M.',
    readTime: '12 min read'
  },
  {
    id: 'a4',
    title: 'Automating the Boring Stuff with n8n',
    excerpt: 'How we used n8n to connect a clients legacy CRM to their modern React frontend, eliminating 40 hours of manual data entry per week.',
    category: 'automation',
    date: 'Aug 30, 2026',
    author: 'Priya T.',
    readTime: '5 min read'
  },
  {
    id: 'a5',
    title: 'Designing for Developers: API-First Philosophy',
    excerpt: 'Why your API design is just as important as your UI design, and how to create developer experiences that your team will love.',
    category: 'design',
    date: 'Aug 14, 2026',
    author: 'Vikram A.',
    readTime: '7 min read'
  }
];

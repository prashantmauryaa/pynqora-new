export interface Project {
  id: string;
  title: string;
  client?: string;
  description: string;
  tags: string[];
  type: 'featured' | 'concept' | 'open-source';
  link?: string;
  image?: string;
}

export const workProjects: Project[] = [
  // Featured Projects
  {
    id: 'f1',
    title: 'Nexus ERP Architecture',
    client: 'Global Logistics Corp',
    description: 'A complete overhaul of a legacy logistics system. We built a custom Next.js frontend backed by a highly performant Go microservices architecture, reducing data query latency by 400%.',
    tags: ['Go', 'Next.js', 'PostgreSQL', 'Docker'],
    type: 'featured',
    image: '/images/proj_microservices.png',
  },
  {
    id: 'f2',
    title: 'AI Customer Operations Engine',
    client: 'FinTech Startup',
    description: 'Integrated a secure LLM-powered assistant into their internal CRM. The system autonomously handles tier-1 support tickets and triages complex issues based on vector embeddings of their documentation.',
    tags: ['Python', 'OpenAI', 'Pinecone', 'React'],
    type: 'featured',
    image: '/images/proj_ai.png',
  },
  {
    id: 'f3',
    title: 'High-Frequency Trading Dashboard',
    client: 'Private Equity Firm',
    description: 'A real-time analytics dashboard rendering millions of data points with zero frame drops. Engineered using WebGL and advanced React state management.',
    tags: ['React', 'WebGL', 'WebSockets', 'Node.js'],
    type: 'featured',
    image: '/images/proj_dashboard.png',
  },

  // Concept Projects
  {
    id: 'c1',
    title: 'Project Aurora: Autonomous Dev',
    description: 'An internal R&D project exploring multi-agent LLM systems capable of scaffolding and testing full-stack applications based on natural language prompts.',
    tags: ['LangChain', 'TypeScript', 'Agents'],
    type: 'concept',
  },
  {
    id: 'c2',
    title: 'Edge Cache Router',
    description: 'Experimental middleware designed to intelligently cache GraphQL responses at the edge, dynamically invalidating based on database mutation webhooks.',
    tags: ['Cloudflare Workers', 'GraphQL', 'Redis'],
    type: 'concept',
  },

  // Open Source
  {
    id: 'o1',
    title: 'Pynqora State CLI',
    description: 'A lightning-fast CLI tool for scaffolding opinionated, production-ready React boilerplates. Used by over 2,000 developers worldwide.',
    tags: ['Rust', 'CLI', 'React'],
    type: 'open-source',
    link: 'https://github.com'
  },
  {
    id: 'o2',
    title: 'TypeSafe SQL Builder',
    description: 'A lightweight TypeScript library for building complex, type-safe SQL queries without the overhead of a full ORM.',
    tags: ['TypeScript', 'SQL', 'Open Source'],
    type: 'open-source',
    link: 'https://github.com'
  }
];

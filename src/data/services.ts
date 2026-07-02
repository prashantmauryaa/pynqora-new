export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServiceStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  isFlagship?: boolean;
  shortDesc: string;
  subServices: string[];
  overview: string;
  whyItMatters: string;
  whatsIncluded: ServiceFeature[];
  process: ServiceStep[];
  benefits: string[];
  technologies: string[];
  faqs: ServiceFAQ[];
  iconName: string;
}

export const services: Service[] = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    shortDesc: "Integrate custom LLMs, chatbots, and autonomous agents into your business.",
    subServices: ["AI Chatbots", "AI Assistants", "AI Integrations", "RAG Systems", "AI Agents"],
    overview: "We engineer intelligent AI systems that extend beyond simple wrappers. From complex Retrieval-Augmented Generation (RAG) pipelines to fully autonomous agents, we securely integrate cutting-edge AI capabilities into your existing workflows.",
    whyItMatters: "Artificial Intelligence is no longer just a buzzword; it is a critical competitive advantage. Proper AI integration reduces manual labor, provides instant customer support, and uncovers insights hidden in massive datasets.",
    whatsIncluded: [
      { title: "Custom LLM Fine-Tuning", desc: "Training models specifically on your proprietary data." },
      { title: "RAG Architecture", desc: "Securely connecting generative AI to your internal databases." },
      { title: "Agentic Workflows", desc: "Deploying multi-agent systems that autonomously complete complex tasks." }
    ],
    process: [
      { step: "01", title: "Data Audit", desc: "Evaluating your data readiness and security posture." },
      { step: "02", title: "Model Selection", desc: "Choosing the right foundational models (OpenAI, Anthropic, Open-source)." },
      { step: "03", title: "Integration & Testing", desc: "Deploying the AI within your infrastructure with strict guardrails." }
    ],
    benefits: ["24/7 Automated Operations", "Hyper-personalized user experiences", "Secure handling of proprietary data"],
    technologies: ["OpenAI API", "LangChain", "Pinecone", "Python", "TensorFlow"],
    faqs: [
      { question: "Is our data secure?", answer: "Yes. We deploy enterprise-grade AI solutions that ensure your data is never used to train public models without consent." },
      { question: "Do you build custom chatbots?", answer: "Absolutely. We build context-aware chatbots that understand your specific business logic and documentation." }
    ],
    iconName: "Cpu"
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    isFlagship: true,
    shortDesc: "End-to-end development of bespoke software systems tailored to your unique operations.",
    subServices: ["Business Software", "Internal Tools", "CRM", "ERP", "Dashboards", "SaaS Development"],
    overview: "Our flagship service. We build robust, scalable, and secure custom software applications. Whether you need a proprietary CRM, a complex ERP system, or a high-performance SaaS product, our engineering team delivers software that acts as the backbone of your business.",
    whyItMatters: "Off-the-shelf software often forces you to change your business processes to fit the tool. Custom software is molded exactly to your operational needs, eliminating inefficiencies and scaling seamlessly as you grow.",
    whatsIncluded: [
      { title: "Architecture Design", desc: "Scalable system design and database modeling." },
      { title: "Full-Stack Engineering", desc: "Robust backend logic paired with dynamic frontend interfaces." },
      { title: "Quality Assurance", desc: "Comprehensive automated and manual testing pipelines." }
    ],
    process: [
      { step: "01", title: "Discovery & Scoping", desc: "Deep dive into your business logic and requirements." },
      { step: "02", title: "Sprint-Based Development", desc: "Iterative engineering with continuous feedback loops." },
      { step: "03", title: "Deployment & Scaling", desc: "Zero-downtime deployment to secure cloud infrastructure." }
    ],
    benefits: ["Complete ownership of IP", "Tailored to your exact workflows", "Infinitely scalable architecture"],
    technologies: ["React", "Node.js", "PostgreSQL", "Go", "AWS", "Docker"],
    faqs: [
      { question: "How long does a custom project take?", answer: "Depending on complexity, an MVP typically takes 8-12 weeks, with continuous iterations thereafter." },
      { question: "Do we own the source code?", answer: "Yes, upon project completion and final payment, you retain 100% ownership of the intellectual property and source code." }
    ],
    iconName: "Code"
  },
  {
    id: "web-development",
    title: "Web Development",
    shortDesc: "High-performance websites and web applications built with modern frameworks.",
    subServices: ["Business Websites", "Corporate Websites", "Landing Pages", "Web Applications", "Admin Panels"],
    overview: "We engineer web experiences focused on speed, accessibility, and conversion. From dynamic corporate websites to complex admin panels, we utilize modern JavaScript frameworks to deliver lightning-fast, SEO-optimized web properties.",
    whyItMatters: "Your website is your most important digital asset. Slow load times and poor mobile experiences directly result in lost revenue and diminished brand trust. We treat web development as a hard engineering discipline.",
    whatsIncluded: [
      { title: "Responsive Design", desc: "Flawless execution across mobile, tablet, and desktop." },
      { title: "Performance Optimization", desc: "Sub-second load times and perfect Core Web Vitals." },
      { title: "CMS Integration", desc: "Headless CMS setups for easy content management." }
    ],
    process: [
      { step: "01", title: "Wireframing", desc: "Mapping the user journey and page structure." },
      { step: "02", title: "Front-End Build", desc: "Translating designs into semantic, performant code." },
      { step: "03", title: "Launch & QA", desc: "Cross-browser testing and performance auditing." }
    ],
    benefits: ["Exceptional SEO performance", "High conversion rates", "Easy-to-manage content architecture"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
    faqs: [
      { question: "Do you use WordPress?", answer: "We primarily build modern, headless architectures using Next.js/React, which offer vastly superior performance and security compared to traditional WordPress setups." },
      { question: "Will the site be mobile friendly?", answer: "Yes. Every interface we build is developed mobile-first to ensure a perfect experience on all devices." }
    ],
    iconName: "Layout"
  },
  {
    id: "business-automation",
    title: "Business Automation",
    shortDesc: "Eliminate manual operational overhead by connecting disparate APIs.",
    subServices: ["Workflow Automation", "Email Automation", "CRM Automation", "WhatsApp Automation", "API Integrations", "n8n Automation"],
    overview: "We connect your disconnected tools. By engineering custom APIs, webhooks, and utilizing platforms like n8n, we automate manual data entry and repetitive tasks, freeing your team to focus on high-value work.",
    whyItMatters: "Manual data entry is prone to human error and severely bottlenecks scaling. Automation allows your operations to run 24/7 with perfect accuracy, significantly reducing overhead costs.",
    whatsIncluded: [
      { title: "Custom Middleware", desc: "Code that bridges the gap between legacy systems." },
      { title: "n8n Workflows", desc: "Visual automation pipelines for complex branching logic." },
      { title: "Webhook Management", desc: "Real-time data synchronization across platforms." }
    ],
    process: [
      { step: "01", title: "Workflow Analysis", desc: "Identifying bottlenecks and manual touchpoints." },
      { step: "02", title: "Scripting & Integration", desc: "Building the connective tissue between APIs." },
      { step: "03", title: "Monitoring", desc: "Setting up alerts to ensure workflows run smoothly." }
    ],
    benefits: ["Zero human error in data transfer", "Massive reduction in operational costs", "Real-time data synchronization"],
    technologies: ["n8n", "Node.js", "REST APIs", "GraphQL", "Webhooks"],
    faqs: [
      { question: "Can you connect legacy systems?", answer: "Yes, as long as the legacy system has some form of API, database access, or file export capability, we can build middleware to automate it." },
      { question: "Why n8n?", answer: "n8n is a powerful, source-available automation tool that allows for highly complex, code-level logic that standard tools like Zapier cannot handle." }
    ],
    iconName: "Zap"
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    shortDesc: "Deliver premium product designs with clear user flows and accessible layouts.",
    subServices: ["Product Design", "Dashboard Design", "Wireframes", "Design Systems", "Prototypes"],
    overview: "We design software that people actually want to use. Our UI/UX process bridges the gap between complex technical requirements and intuitive human interaction, resulting in clean, accessible, and highly functional interfaces.",
    whyItMatters: "A powerful backend is useless if the user interface is confusing. Great design reduces friction, lowers customer support requests, and drastically improves user retention.",
    whatsIncluded: [
      { title: "Design Systems", desc: "Comprehensive component libraries for consistent branding." },
      { title: "Interactive Prototypes", desc: "High-fidelity mockups to validate flows before coding." },
      { title: "User Research", desc: "Data-driven decisions based on real user behavior." }
    ],
    process: [
      { step: "01", title: "Research & Empathy", desc: "Understanding the end-user's pain points and goals." },
      { step: "02", title: "Wireframing", desc: "Low-fidelity structural layouts." },
      { step: "03", title: "High-Fidelity UI", desc: "Applying color, typography, and micro-interactions." }
    ],
    benefits: ["Higher user satisfaction", "Reduced development friction", "Consistent brand identity"],
    technologies: ["Figma", "Framer", "Storybook", "CSS Modules"],
    faqs: [
      { question: "Do you provide just design services?", answer: "While we specialize in end-to-end development, we do offer standalone UI/UX design and design system creation for existing engineering teams." },
      { question: "What deliverables do we get?", answer: "You will receive organized Figma files, fully interactive prototypes, and a comprehensive design system document." }
    ],
    iconName: "PenTool"
  }
];

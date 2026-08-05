// All portfolio content, preserved verbatim from the original site.

export const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Tech Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'awards', label: 'Awards Wall' },
  { id: 'contact', label: 'Contact' },
]

export const NAV_LINKS = [
  { href: '#about', label: 'About', icon: 'fa-user' },
  { href: '#experience', label: 'Experience', icon: 'fa-briefcase' },
  { href: '#skills', label: 'Tech Stack', icon: 'fa-code' },
  { href: '#projects', label: 'Projects', icon: 'fa-folder-open' },
  { href: '#achievements', label: 'Achievements', icon: 'fa-trophy' },
]

export const TYPING_TEXTS = ['QA Analyst', 'Full-Stack Developer', 'Software Developer', 'Problem Solver']

export const HERO_BLURB =
  'A Bachelor of Science in Information Technology graduate dedicated to driving client success through seamless technical implementations. I bring a strong foundation in software ecosystems, demonstrated through hands-on development and rapid problem-solving in competitive hackathons.'

export const ABOUT_QUOTE = `"The key is not to prioritize what's on your schedule, but to schedule your priorities."`

export const ABOUT_TEXT =
  'I am a Bachelor of Science in Information Technology graduate from the University of Cebu – Banilad (2022–2026). I combine academic discipline with proven technical presentation skills, excelling at translating complex IT concepts into clear, actionable delivery strategies for diverse stakeholders.'

export const COMPETENCIES = [
  'Technical Communication',
  'Critical Attention to Detail',
  'Strategic Test Planning',
  'Risk-Based Testing',
  'Rapid Problem-Solving',
  'Full-Stack Development',
]

export const STATS = [
  { icon: 'fa-folder-open', target: 10, suffix: '+', label: 'Projects Built' },
  { icon: 'fa-trophy', target: 15, suffix: '+', label: 'Awards & Recognition' },
  { icon: 'fa-code', target: 25, suffix: '+', label: 'Technologies' },
  { icon: 'fa-laptop-code', target: 8, suffix: '+', label: 'Hackathons' },
]

export const TIMELINE = [
  {
    icon: 'fa-briefcase', type: 'work', typeLabel: 'Work Experience',
    title: 'Quality Assurance Intern', org: 'N-Compass TV', orgIcon: 'fa-building',
    period: 'Jan 2026 – May 2026',
    points: [
      'Quality Assurance & functional testing across platform features',
      'System Validation to ensure software reliability',
      'Defect Tracking and detailed bug reporting',
    ],
  },
  {
    icon: 'fa-graduation-cap', type: 'edu', typeLabel: 'Education',
    title: 'BS Information Technology', org: 'University of Cebu – Banilad', orgIcon: 'fa-university',
    period: 'Aug 2022 – 2026',
    points: ['Relevant Coursework: Systems Analysis, Database Management, IT Project Management'],
  },
  {
    icon: 'fa-users', type: 'org', typeLabel: 'Leadership',
    title: 'Auditor & Volunteer Associate', org: 'PSITS – Banilad Chapter', orgIcon: 'fa-sitemap',
    period: '2023 – 2025',
    points: [
      'Auditor — Financial oversight and record management (2023)',
      'Volunteer Associate — Active community involvement (2024–2025)',
    ],
  },
]

export const TECH_GROUPS = [
  {
    title: 'Languages', icon: 'fa-code', tone: 'lang',
    items: [
      { icon: 'fas fa-hashtag', name: 'C#' },
      { icon: 'fab fa-js', name: 'TypeScript' },
      { icon: 'fab fa-js-square', name: 'JavaScript' },
      { icon: 'fab fa-python', name: 'Python' },
      { icon: 'fab fa-java', name: 'Java' },
      { icon: 'fab fa-html5', name: 'HTML' },
      { icon: 'fab fa-css3-alt', name: 'CSS' },
    ],
  },
  {
    title: 'Frameworks & Libraries', icon: 'fa-layer-group', tone: 'framework',
    items: [
      { icon: 'fab fa-react', name: 'React' },
      { icon: 'fab fa-react', name: 'React Native' },
      { icon: 'fab fa-angular', name: 'Angular' },
      { icon: 'fab fa-node-js', name: 'Node.js' },
      { icon: 'fas fa-leaf', name: 'Spring Boot' },
      { icon: 'fas fa-bolt', name: 'FastAPI' },
      { icon: 'fas fa-layer-group', name: 'Razor MVC' },
      { icon: 'fas fa-wind', name: 'Tailwind CSS' },
      { icon: 'fab fa-bootstrap', name: 'Bootstrap' },
    ],
  },
  {
    title: 'Databases & CMS', icon: 'fa-database', tone: 'db',
    items: [
      { icon: 'fas fa-database', name: 'MySQL' },
      { icon: 'fas fa-leaf', name: 'MongoDB' },
      { icon: 'fas fa-fire', name: 'Firebase' },
      { icon: 'fas fa-server', name: 'Supabase' },
      { icon: 'fas fa-th-large', name: 'Strapi' },
    ],
  },
  {
    title: 'Tools & QA', icon: 'fa-tools', tone: 'tool',
    items: [
      { icon: 'fas fa-vial', name: 'Playwright' },
      { icon: 'fas fa-paper-plane', name: 'Postman' },
      { icon: 'fab fa-jira', name: 'JIRA' },
      { icon: 'fas fa-tasks', name: 'Plane' },
      { icon: 'fab fa-git-alt', name: 'Git' },
      { icon: 'fas fa-bolt', name: 'Vite' },
      { icon: 'fas fa-project-diagram', name: 'n8n' },
      { icon: 'fas fa-spider', name: 'Apify' },
      { icon: 'fab fa-figma', name: 'Figma' },
      { icon: 'fas fa-palette', name: 'Canva' },
    ],
  },
]

export const PROJECTS = [
  {
    name: 'AEROGA', year: '2026', icon: 'fa-network-wired',
    gradient: 'linear-gradient(135deg, #1a237e, #0d47a1)',
    tech: ['Java 17', 'Spring Boot 3', 'MongoDB', 'JWT'],
    desc: 'A full-stack API gateway with JWT authentication, sliding-window rate limiting per API key, full request logging with latency tracking, and 14 REST endpoints via OpenAPI/Swagger. Backend on Railway, React dashboard on Vercel.',
    link: '#',
  },
  {
    name: 'ACADUS', year: '2025', icon: 'fa-graduation-cap',
    gradient: 'linear-gradient(135deg, #00695c, #26a69a)',
    tech: ['C#', 'Razor MVC', 'SQL'],
    desc: 'A centralized academic performance tracking platform with role-based access for students, teachers, and administrators, featuring real-time grade viewing and automated report generation.',
    link: '#',
  },
  {
    name: 'Project FIRA', year: '2025', icon: 'fa-fire',
    gradient: 'linear-gradient(135deg, #b71c1c, #f4511e)',
    tech: ['React', 'React Native', 'CNN', 'Google Maps'],
    desc: 'A web and mobile fire incident reporting app using a CNN-based likelihood model to validate images, with a real-time Google Maps visualization dashboard for citizens and fire response units.',
    link: 'https://projectfira.vercel.app/',
  },
  {
    name: 'CURA', year: '2026', icon: 'fa-ambulance',
    gradient: 'linear-gradient(135deg, #283593, #5c6bc0)',
    tech: ['React Native', 'Supabase', 'Edge AI', 'NLP'],
    desc: 'A fault-tolerant emergency coordination platform using Edge AI for localized hazard reporting. Dispatchers use a tactical dashboard for resource-based routing, fleet tracking, and automated NLP chat escalation.',
    link: '#',
  },
  {
    name: 'RUFUS', year: '2026', icon: 'fa-coins',
    gradient: 'linear-gradient(135deg, #1b5e20, #66bb6a)',
    tech: ['React', 'GPT-4o-mini', 'AI'],
    desc: 'A secure microfinance productivity tool allowing MSME borrowers to digitize financial ledgers. Loan officers use a centralized dashboard with zero-temperature AI data extraction and automated credit scoring.',
    link: '#',
  },
  {
    name: 'ELIXER', year: '2026', icon: 'fa-heartbeat',
    gradient: 'linear-gradient(135deg, #880e4f, #ec407a)',
    tech: ['React', 'FastAPI', 'GPT-4o'],
    desc: 'A bilingual personal health navigator allowing underserved Filipino users to safely triage medical symptoms in their native language, with context-aware conversational AI and strict emergency escalation triggers.',
    link: '#',
  },
  {
    name: 'Prospect Analyzer', year: '2026', icon: 'fa-chart-line',
    gradient: 'linear-gradient(135deg, #006064, #26c6da)',
    tech: ['Angular', 'C#', 'AI', 'SaaS'],
    desc: 'A credit-based B2B SaaS platform aggregating data across Google, web, and social channels to deliver standardized digital presence scores and AI-generated summaries for lead prioritization.',
    link: '#',
  },
  {
    name: 'O.L.E.A.', year: '2026', icon: 'fa-file-export',
    gradient: 'linear-gradient(135deg, #e65100, #ffa726)',
    tech: ['C#', 'Python', 'Automation'],
    desc: 'Optimal Logistics Extraction Automation — a high-speed data pipeline built for a competitive logistics hackathon to automate conversion of unstructured shipping contracts into Excel and JSON formats.',
    link: '#',
  },
  {
    name: 'Hotel Asia Website', year: '2026', icon: 'fa-hotel',
    gradient: 'linear-gradient(135deg, #4a148c, #ab47bc)',
    tech: ['C#', 'ASP.NET', 'Responsive'],
    desc: 'A modern, mobile-responsive hotel website built in C# showcasing rooms, facilities, dining, and location while streamlining guest inquiries and bookings.',
    link: '#',
  },
  {
    name: 'EXPoints', year: '2025', icon: 'fa-gamepad',
    gradient: 'linear-gradient(135deg, #311b92, #7e57c2)',
    tech: ['C#', 'SQL', 'Gamification'],
    desc: 'A C#-based web platform centralizing video game reviews where users earn XP points, rate, and comment — with role-based access, customizable profiles, and admin moderation tools.',
    link: '#',
  },
]

// Featured milestones for the horizontal achievements slider.
// Order: Internship → Championships → Semifinalist → Leadership award →
// Best Award → 2nd places → 3rd places → Dean's Lister.
export const FEATURED_MILESTONES = [
  {
    rank: 'IT Internship', tone: 'blue', icon: 'fa-laptop-code',
    title: 'N-Compass TV — Quality Assurance & Frontend',
    org: 'N-Compass TV',
    year: 'Jan – May 2026',
    desc: 'Quality Assurance and frontend internship: functional testing across platform features, system validation for software reliability, and detailed defect tracking for broadcast platform software.',
    image: '/images/internship.jpg',
    tags: ['Quality Assurance', 'Frontend', 'System Validation'],
  },
  {
    rank: 'Champion', tone: 'gold', icon: 'fa-city',
    title: "Lambo 2026: Cebu's AI Business Summit",
    org: 'Cebu AI Summit',
    year: 'Jun 2026',
    desc: "Champion at Lambo 2026, Cebu's AI business summit exploring industry trends and innovation ecosystems — taking the top spot among competing teams.",
    image: '/images/lambo-champs3.jpg',
    tags: ['Champion', 'AI Business Summit', 'Cebu'],
  },
  {
    rank: 'Champion', tone: 'gold', icon: 'fa-trophy',
    title: 'PSITE CV Innovation Challenge',
    org: 'PSITE Central Visayas',
    year: '2026',
    desc: '1st place for designing and defending a scalable technical solution to real-world problems.',
    image: '/images/PSITE1.jpg',
    tags: ['1st Place', 'Innovation', 'Central Visayas'],
  },
  {
    rank: 'Champion', tone: 'gold', icon: 'fa-trophy',
    title: 'ICT Congress Lightning Pitch',
    org: 'University of Cebu — Inter-school',
    year: '2026',
    desc: 'Championship for distilling an intricate technical project into a persuasive, client-facing presentation.',
    image: '/images/ICT-Con1.jpg',
    tags: ['1st Place', 'Lightning Pitch', 'Inter-school'],
  },
  {
    rank: 'Semifinalist', tone: 'violet', icon: 'fa-robot',
    title: 'ASEAN AI Hackathon 2026',
    org: 'Southeast Asia — International',
    year: 'Apr – Jul 2026',
    desc: 'Semifinalist in the Southeast Asia-wide AI hackathon — competing against teams from across the whole ASEAN region in an intensive AI innovation and training program.',
    image: '/images/asean.jpg',
    tags: ['Semifinalist', 'Southeast Asia', 'AI'],
  },
  {
    rank: 'Leadership & Excellence', tone: 'green', icon: 'fa-handshake',
    title: 'PSITS – Banilad Chapter',
    org: 'PSITS – Banilad Chapter',
    year: '2023 – 2025',
    desc: 'Leadership and Excellence Award for service to PSITS — financial oversight as Auditor and active community involvement as Volunteer Associate.',
    image: '/images/psits.jpg',
    tags: ['Leadership', 'Auditor', 'Volunteer Associate'],
  },
  {
    rank: 'Best Standup', tone: 'pink', icon: 'fa-star',
    title: 'CodeKada Online Hackathon',
    org: "DevKada's CodeKada — National",
    year: '2026',
    desc: 'Awarded Best Standup at a rigorous national development sprint for Agile communication skills.',
    image: '/images/devkada.jpg',
    tags: ['Best Award', 'National Hackathon', 'Agile'],
  },
  {
    rank: '2nd Place', tone: 'silver', icon: 'fa-medal',
    title: 'CCS Research Congress Podium',
    org: 'University of Cebu — Inter-school',
    year: '2026',
    desc: '2nd place for presenting an innovative technical system architecture to a diverse academic panel.',
    image: '/images/rescon.jpg',
    tags: ['2nd Place', 'Research', 'Inter-school'],
  },
  {
    rank: '2nd Place', tone: 'silver', icon: 'fa-medal',
    title: 'CCS Exhibit – Lightning Pitch',
    org: 'University of Cebu — CCS',
    year: '2026',
    desc: '2nd place for delivering a compelling and concise product pitch for Project FIRA.',
    image: '/images/ccslightpitch.jpg',
    tags: ['2nd Place', 'Project FIRA', 'Pitch'],
  },
  {
    rank: '2nd Place', tone: 'silver', icon: 'fa-palette',
    title: 'CCS Exhibit – Poster Competition',
    org: 'University of Cebu — CCS',
    year: '2026',
    desc: '2nd place for the Project FIRA technical poster, transforming complex data systems into stakeholder-ready exhibits.',
    image: '/images/ccsposter.jpg',
    tags: ['2nd Place', 'Project FIRA', 'Poster'],
  },
  {
    rank: '2nd Place', tone: 'silver', icon: 'fa-calculator',
    title: 'Intramurals Math Quiz',
    org: 'UC – Banilad',
    year: '2026',
    desc: '2nd place demonstrating rapid quantitative reasoning and precise mental calculation under strict time constraints.',
    image: '/images/mathquiz.jpg',
    tags: ['2nd Place', 'Quantitative Reasoning'],
  },
  {
    rank: 'Top 3 Finisher', tone: 'bronze', icon: 'fa-award',
    title: 'Paper to Data Logistics Challenge',
    org: 'Oltek — Sponsored Hackathon',
    year: '2026',
    desc: 'Placed Top 3 for architecting O.L.E.A. — Optimal Logistics Extraction Automation — a high-speed pipeline converting unstructured shipping contracts into structured Excel and JSON formats.',
    image: '/images/oltek.jpg',
    tags: ['O.L.E.A. Project', 'C#', 'Python', 'Automation'],
  },
  {
    rank: '3rd Place', tone: 'bronze', icon: 'fa-award',
    title: 'UC-B Research Congress Podium',
    org: 'University of Cebu – Banilad',
    year: '2026',
    desc: '3rd place for effectively communicating complex technical research findings to a diverse academic panel.',
    image: '/images/ucbrescon.jpg',
    tags: ['3rd Place', 'Research', 'UC – Banilad'],
  },
  {
    rank: '3rd Place', tone: 'bronze', icon: 'fa-flask',
    title: 'Intramurals Science Quiz',
    org: 'UC – Banilad',
    year: '2023',
    desc: '3rd place applying scientific concepts and logical reasoning under strict time constraints.',
    tags: ['3rd Place', 'Logical Reasoning'],
  },
  {
    rank: "Dean's Lister", tone: 'gold', icon: 'fa-graduation-cap',
    title: 'Academic Excellence',
    org: 'University of Cebu – Banilad',
    year: '2022 – 2026',
    desc: 'Consistently recognized on the Dean’s List for outstanding academic performance in the BS Information Technology program — combining academic discipline with hands-on technical delivery.',
    image: '/images/deanslist.jpg',
    tags: ['Academic Excellence', 'BSIT', 'Consistency'],
  },
]

export const ACHIEVEMENT_STATS = [
  { icon: 'fa-trophy', label: '4 Top Awards', tone: 'gold' },
  { icon: 'fa-medal', label: '7 Podium Finishes', tone: 'silver' },
  { icon: 'fa-globe', label: '4 International', tone: 'globe' },
  { icon: 'fa-calendar-check', label: '16 Events & Seminars', tone: 'green' },
]

export const ACHIEVEMENT_FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'competitions', label: 'Competitions' },
  { value: 'leadership', label: 'Leadership' },
  { value: 'workshops', label: 'Workshops' },
]

export const ACHIEVEMENTS = [
  { category: 'competitions', rank: 'Champion', tone: 'champion', icon: 'fa-trophy', title: 'PSITE CV Innovation Challenge', org: 'PSITE Central Visayas', year: '2026', desc: '1st place for designing and defending a scalable technical solution to real-world problems.' },
  { category: 'competitions', rank: 'Champion', tone: 'champion', icon: 'fa-trophy', title: 'ICT Congress Lightning Pitch', org: 'University of Cebu — Inter-school', year: '2026', desc: 'Championship for distilling an intricate technical project into a persuasive, client-facing presentation.' },
  { category: 'competitions', rank: 'Champion', tone: 'champion', icon: 'fa-city', title: "Lambo 2026: Cebu's AI Business Summit", org: 'Cebu AI Summit', year: '2026', desc: "Champion at Cebu's AI business summit exploring industry trends and innovation ecosystems — taking the top spot among competing teams." },
  { category: 'competitions', rank: 'Best Award', tone: 'best', icon: 'fa-star', title: 'CodeKada Hackathon – Best Standup', org: "DevKada's CodeKada — National", year: '2026', desc: 'Awarded Best Standup at a rigorous national development sprint for Agile communication skills.' },
  { category: 'competitions', rank: '2nd Place', tone: 'second', icon: 'fa-medal', title: 'CCS Research Congress Podium', org: 'University of Cebu — Inter-school', year: '2026', desc: '2nd place for presenting an innovative technical system architecture to a diverse academic panel.', image: '/images/rescon.jpg' },
  { category: 'competitions', rank: '2nd Place', tone: 'second', icon: 'fa-medal', title: 'CCS Exhibit – Lightning Pitch', org: 'University of Cebu — CCS', year: '2026', desc: '2nd place for delivering a compelling and concise product pitch for Project FIRA.' },
  { category: 'competitions', rank: '2nd Place', tone: 'second', icon: 'fa-palette', title: 'CCS Exhibit – Poster Competition', org: 'University of Cebu — CCS', year: '2026', desc: '2nd place for the Project FIRA technical poster, transforming complex data systems into stakeholder-ready exhibits.' },
  { category: 'competitions', rank: '2nd Place', tone: 'second', icon: 'fa-calculator', title: 'Intramurals Math Quiz', org: 'UC – Banilad', year: '2026', desc: '2nd place demonstrating rapid quantitative reasoning and precise mental calculation under strict time constraints.', image: '/images/mathquiz.jpg' },
  { category: 'competitions', rank: '3rd Place', tone: 'third', icon: 'fa-award', title: 'Paper to Data Logistics Hackathon', org: 'Oltek — Sponsored', year: '2026', desc: '3rd place for architecting a high-speed logistics data extraction pipeline.' },
  { category: 'competitions', rank: '3rd Place', tone: 'third', icon: 'fa-award', title: 'UC-B Research Congress Podium', org: 'University of Cebu – Banilad', year: '2026', desc: '3rd place for effectively communicating complex technical research findings to a diverse academic panel.' },
  { category: 'competitions', rank: '3rd Place', tone: 'third', icon: 'fa-flask', title: 'Intramurals Science Quiz', org: 'UC – Banilad', year: '2023', desc: '3rd place applying scientific concepts and logical reasoning under strict time constraints.' },
  { category: 'competitions', rank: 'Semifinalist', tone: 'finalist', icon: 'fa-robot', title: 'ASEAN AI Hackathon 2026', org: 'Southeast Asia — International', year: '2026', desc: 'Semifinalist in the Southeast Asia-wide AI hackathon, competing against teams from across the whole ASEAN region in an intensive AI innovation program.' },
  { category: 'competitions', rank: 'Finalist', tone: 'finalist', icon: 'fa-bolt', title: 'VECO & Aboitiz Innovate Cebu', org: 'VECO & Aboitiz — Regional', year: '2026', desc: "Finalist in a community-centered innovation competition solving Cebu's pressing challenges through technology." },
  { category: 'competitions', rank: 'Participant', tone: 'participant', icon: 'fa-globe-asia', title: 'AI Ready ASEAN Youth Challenge', org: 'Singapore — International', year: '2026', desc: 'International AI challenge in Singapore, developing a fault-tolerant emergency platform with Edge AI.' },
  { category: 'competitions', rank: 'Participant', tone: 'participant', icon: 'fa-globe', title: 'SEA-CICSIC Innovation Competition', org: 'Malaysia — Southeast Asia', year: '2026', desc: 'Premier global innovation event in Malaysia designing scalable technical solutions for regional challenges.' },
  { category: 'competitions', rank: 'Participant', tone: 'participant', icon: 'fa-leaf', title: 'Climate LaunchPad', org: 'Global Green Business Competition', year: '2026', desc: 'Global green business competition pitching scalable, sustainability-focused innovations.' },
  { category: 'competitions', rank: 'Participant', tone: 'participant', icon: 'fa-code', title: 'SIKAPTala National CS Hackathon', org: 'National Competition', year: '2026', desc: 'Nationwide CS hackathon building ELIXER using rapid prototyping under strict deadlines.' },
  { category: 'leadership', rank: 'Intern', tone: 'work', icon: 'fa-laptop-code', title: 'Quality Assurance Intern', org: 'N-Compass TV', year: 'Jan – May 2026', desc: 'QA, system validation, and defect tracking for broadcast platform software.' },
  { category: 'leadership', rank: 'Leader', tone: 'org', icon: 'fa-handshake', title: 'Auditor & Volunteer Associate', org: 'PSITS – Banilad Chapter', year: '2023 – 2025', desc: 'Financial oversight as Auditor and active community involvement as Volunteer Associate.', image: '/images/psits.jpg' },
  { category: 'workshops', icon: 'fa-robot', title: 'ASEAN AI Hackathon', org: 'Regional Program', year: 'Apr – Jul 2026', desc: 'Intensive ASEAN AI hackathon and training program.', image: '/images/asean.jpg' },
  { category: 'workshops', icon: 'fa-city', title: "Lambo 2026: Cebu's AI Business Summit", org: 'Cebu AI Summit', year: 'Jun 2026', desc: 'AI business summit exploring industry trends and innovation ecosystems.' },
  { category: 'workshops', icon: 'fa-lightbulb', title: 'Cebu Solutionsfest 2026', org: 'Cebu Tech Community', year: 'Jun 2026', desc: 'Technology solutions festival and innovation showcase.' },
  { category: 'workshops', icon: 'fa-users', title: 'ASEAN Youth Challenge', org: 'Regional Training Program', year: 'Jan – May 2026', desc: 'Intensive regional youth development and innovation training program.' },
  { category: 'workshops', icon: 'fa-brain', title: 'Human-AI Collaboration Ethics', org: 'Professional Seminar', year: 'Feb 2026', desc: 'Seminar on ethics and balance in human-AI collaboration in the workplace.' },
  { category: 'workshops', icon: 'fa-book', title: 'Alliance Jumpstart Training Program', org: 'Professional Development', year: 'Aug – Nov 2025', desc: 'Professional growth and career advancement training program.' },
  { category: 'workshops', icon: 'fa-drafting-compass', title: 'Adaptive Design Sprints Seminar', org: 'PSITS B1 ITinuro', year: 'Sep 2024', desc: 'Adaptive design methods for streamlined product decisions — valuable insights for product development.' },
  { category: 'workshops', icon: 'fa-store', title: 'Campus to Commerce Workshop', org: 'MSME Content Creation', year: 'Aug 2025', desc: 'Empowering MSMEs through student-led content creation — practical digital marketing and communication skills.' },
  { category: 'workshops', icon: 'fa-building', title: 'VECO & Aboitiz — Innovate Cebu', org: 'VECO & Aboitiz', year: 'Nov 2025 – Apr 2026', desc: "Extended innovation program focused on solving Cebu's pressing challenges through technology and collaboration." },
  { category: 'workshops', icon: 'fa-university', title: 'DOHE Seminar', org: 'Department of Higher Education', year: 'Feb 2026', desc: 'Higher education-focused seminar covering academic standards and professional development pathways.' },
  { category: 'workshops', icon: 'fa-file-alt', title: 'Paper to Data Logistics Hackathon', org: 'Oltek — Sponsored', year: 'Mar 2026', desc: 'Competitive logistics workshop focused on automating conversion of unstructured shipping data into structured digital formats.' },
  { category: 'workshops', icon: 'fa-chart-bar', title: 'IT Interns Industry Preparedness', org: 'Project Management & IT', year: 'Apr 2026', desc: 'Industry preparedness seminar covering project management methodologies and IT internship expectations.' },
  { category: 'workshops', icon: 'fa-satellite-dish', title: 'AI Evolution: Trends Shaping Tomorrow', org: 'Professional Seminar', year: 'Apr 2026', desc: 'Forward-looking seminar on emerging AI trends and their transformative impact across industries.' },
  { category: 'workshops', icon: 'fa-code-branch', title: 'DEVKADA Hackathon', org: 'DevKada — National', year: 'May 2026', desc: 'National development sprint challenging participants to build and present innovative software solutions under pressure.' },
  { category: 'workshops', icon: 'fa-laptop-code', title: 'SIKAPTALA Hackathon', org: 'National CS & IT Competition', year: 'May 2026', desc: 'Nationwide computer science and IT hackathon employing rapid prototyping and advanced programming under strict deadlines.' },
  { category: 'workshops', icon: 'fa-balance-scale', title: 'AI: Expectation vs. Reality', org: 'Professional Seminar', year: 'May 2026', desc: 'Critical analysis of AI capabilities versus common misconceptions, bridging the gap between hype and practical application.' },
]

export const CONTACT = {
  email: 'JashmineVerdida08@gmail.com',
  phone: '+63 956 950 5102',
  phoneHref: '+639569505102',
  location: 'Brgy. Sto. Nino, Cebu City, Philippines',
  socials: [
    { icon: 'fab fa-linkedin', title: 'LinkedIn', href: 'https://www.linkedin.com/in/jashmine-verdida-820a56352/' },
    { icon: 'fab fa-github', title: 'GitHub', href: 'https://github.com/jashverdida' },
    { icon: 'fab fa-facebook', title: 'Facebook', href: 'https://www.facebook.com/shajenim/' },
  ],
}

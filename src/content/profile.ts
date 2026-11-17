// All site content lives here. Edit this file to update the website.

export const profile = {
  firstName: "Gede",
  lastName: "Satyamahinsa",
  fullName: "Gede Satyamahinsa Prastita Uttama",
  shortName: "Satyamahinsa",
  displayName: "Gede Satyamahinsa", // shown top-left in the navbar
  nickname: "Satya", // hero greeting: "Hi, I'm Satya"
  role: "AI Engineer",
  // Smaller line under the hero headline
  focus:
    "Artificial Intelligence · Machine Learning · Computer Vision · Natural Language Processing",
  tagline:
    "Passionate about building AI systems that help machines see and understand the world, with a focus on Computer Vision.",
  location: "Indonesia",
  available: true,
  availabilityText: "Available for work",
  email: "gdmahinsa@gmail.com",
  // Put your CV in /public (e.g. public/cv.pdf) and set the path here. Leave "" to hide the button.
  cvUrl: "",
  // Put your photo in /public (e.g. public/profile.jpg) and set the path here. Leave "" to show initials.
  photo: "/profile-hero.webp", // lossless transparent cut-out
  socials: {
    linkedin: "https://www.linkedin.com/in/satyamahinsapu",
    github: "", // e.g. "https://github.com/your-username"
    scholar: "", // e.g. Google Scholar profile URL
  },
};

export const about = {
  paragraphs: [
    "Informatics graduate from Telkom University Surabaya (Summa Cum Laude), focused on Artificial Intelligence and Computer Vision.",
    "Through work, research and teaching, I've built AI systems for computer vision, OCR and NLP. My aim is to build vision systems that turn images and video into reliable, real-world insight.",
    "Learn fast, communicate clearly, and enjoy solving hard problems with a team.",
  ],
  stats: [
    { value: 3.99, decimals: 2, suffix: "", label: "Bachelor's GPA (out of 4.00)" },
    { value: 4, decimals: 0, suffix: "", label: "Publications" },
    { value: 6, decimals: 0, suffix: "", label: "Professional roles" },
    { value: 3, decimals: 0, suffix: "", label: "Awards & honors" },
  ],
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  { title: "Programming", items: ["Python", "R", "C", "C++", "SQL (MySQL)"] },
  {
    title: "Machine Learning & AI",
    items: ["TensorFlow", "PyTorch", "Computer Vision", "OCR", "NLP", "Time Series Forecasting"],
  },
  {
    title: "Data Analytics & BI",
    items: ["Power BI", "Tableau", "Looker Studio", "Microsoft Excel", "Data Analysis"],
  },
  {
    title: "Soft Skills",
    items: ["Communication", "Problem Solving", "Teamwork", "Leadership", "Time Management"],
  },
  { title: "Spoken Languages", items: ["Bahasa Indonesia (Native)", "English (Professional)"] },
];

export type Education = {
  school: string;
  degree: string;
  detail: string;
  period: string;
};

export const education: Education[] = [
  {
    school: "Telkom University Surabaya",
    degree: "Bachelor of Informatics",
    detail: "GPA 3.99 / 4.00 · Summa Cum Laude",
    period: "Sep 2022 — Jul 2026",
  },
  {
    school: "SMA Negeri 1 Singaraja",
    degree: "Science Track (Mathematics & Natural Sciences)",
    detail: "Final grade average: 95.20",
    period: "Jul 2019 — Apr 2022",
  },
];

export type Achievement = { title: string; date: string };

export const achievements: Achievement[] = [
  { title: "Top 18 Best Mentee — Digistar Class 2024, Telkom Indonesia", date: "Oct 2024" },
  {
    title:
      "Finalist (Mathematics) — National Mathematics & Science Olympiad for Universities (ONMIPA-PT)",
    date: "May 2024",
  },
  {
    title: "Gold Medal (Informatics) — National Mathematics, Science & Language Olympiad",
    date: "Jan 2023",
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  type: "work" | "research" | "organization";
  location: string;
  employment: string; // e.g. Full Time, Intern, Part Time
  workMode: "On-site" | "Hybrid" | "Remote";
  points: string[];
};

export const experiences: Experience[] = [
  {
    company: "BrightCHAMPS",
    role: "Coding & GenAI Educator",
    period: "Nov 2026 — Present",
    type: "work",
    location: "Bengaluru, Karnataka, India",
    employment: "Full Time",
    workMode: "Remote",
    points: [
      "Teach coding and Generative AI to students through live online classes.",
      "Build learning materials and hands-on projects that turn AI concepts into practical skills.",
    ],
  },
  {
    company: "TELUS Digital",
    role: "AI Engineer",
    period: "Aug 2026 — Oct 2026",
    type: "work",
    location: "Denpasar, Bali, Indonesia",
    employment: "Full Time (Contract)",
    workMode: "On-site",
    points: [
      "Reviewed TikTok video content against client policies and guidelines.",
      "Annotated, labeled and classified video data used to train AI models.",
      "Ran quality checks to keep video datasets accurate and consistent.",
    ],
  },
  {
    company: "Djoin ID",
    role: "Data Scientist Intern",
    period: "May 2026 — Aug 2026",
    type: "work",
    location: "Denpasar, Bali, Indonesia",
    employment: "Intern",
    workMode: "Hybrid",
    points: [
      "Built Looker Studio dashboards and KPIs to track platform usage and client performance.",
      "Explored Vanna AI for natural-language-to-SQL queries and AI-assisted analytics.",
    ],
  },
  {
    company: "Joycode Nusantara",
    role: "Online Coding Tutor",
    period: "Oct 2024 — Jul 2026",
    type: "work",
    location: "Denpasar, Bali, Indonesia",
    employment: "Full Time",
    workMode: "Remote",
    points: [
      "Taught Python to students of all levels, from fundamentals to advanced topics.",
      "Guided learners through exercises and projects to build their problem-solving skills.",
    ],
  },
  {
    company: "PT Semen Indonesia (Persero) Tbk.",
    role: "Business Intelligence Intern",
    period: "Feb 2025 — Jul 2025",
    type: "work",
    location: "South Jakarta, Jakarta, Indonesia",
    employment: "Intern",
    workMode: "On-site",
    points: [
      "Built Power BI dashboards that kept business data accurate and up to date.",
      "Added time series forecasting to predict monthly ReadyMix volume.",
      "Wrote analysis reports and helped shape data-driven recommendations.",
    ],
  },
  {
    company: "Telkom University Surabaya",
    role: "Research Assistant Lecturer",
    period: "Jun 2023 — Jan 2025",
    type: "research",
    location: "Surabaya, East Java, Indonesia",
    employment: "Part Time",
    workMode: "Hybrid",
    points: [
      "e-MedDis: built a prototype machine that dispenses medicine automatically from a prescription (hardware prototyping, embedded systems).",
      "Classroom emotion detection: detected learners' emotions from facial expressions using computer vision in Python.",
    ],
  },
  {
    company: "UKM CODER Telkom University Surabaya",
    role: "Head of Artificial Intelligence Division",
    period: "Mar 2024 — Dec 2024",
    type: "organization",
    location: "Surabaya, East Java, Indonesia",
    employment: "Part Time",
    workMode: "Hybrid",
    points: [
      "Led and mentored division members, and organized AI workshops and seminars.",
      "Designed and built AI projects for a range of applications.",
    ],
  },
  {
    company: "GDSC Telkom University Surabaya",
    role: "Assistant Tech & Curriculum — Machine Learning",
    period: "Dec 2023 — Jun 2024",
    type: "organization",
    location: "Surabaya, East Java, Indonesia",
    employment: "Part Time",
    workMode: "Hybrid",
    points: [
      "Mentored members through their machine learning projects.",
      "Ran weekly meetups, workshops and hands-on training sessions.",
    ],
  },
];

export type Publication = {
  title: string;
  venue: string;
  date: string;
  url: string;
};

export const publications: Publication[] = [
  {
    title:
      "An Integrated EasyOCR–XLM-RoBERTa Framework for Detecting Online Gambling Advertisements in Digital Poster Images",
    venue: "IEEE Xplore",
    date: "Jul 2026",
    url: "https://ieeexplore.ieee.org/abstract/document/11620806",
  },
  {
    title:
      "Detection of Online Gambling Promotional Content in Digital Poster Images Using PP-OCRv5 and XLM-RoBERTa",
    venue: "IEEE Xplore",
    date: "Jul 2026",
    url: "https://ieeexplore.ieee.org/abstract/document/11613897",
  },
  {
    title: "Content-Based Book Recommendation System Using TF-IDF and Cosine Similarity",
    venue: "JITE · Universitas Medan Area",
    date: "Jul 2026",
    url: "https://ojs.uma.ac.id/index.php/jite/article/view/17131",
  },
  {
    title:
      "e-MedDis Software for an Automatic Drug Distribution Control System with 20 Encoding-Integrated Drive Motors",
    venue: "Telkom University · Intellectual Property",
    date: "Aug 2025",
    url: "https://btp.telkomuniversity.ac.id/landing/ip/HCNA1908258000",
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  year: string;
  tags: string[];
  links: { live?: string; github?: string };
  // Detail page content
  overview: string;
  role: string;
  problem: string;
  approach: string[];
  results: string[];
  placeholder?: boolean;
};

// PLACEHOLDER PROJECTS — replace with your real projects.
export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    summary: "[What it does] using [main tech] — [result or impact].",
    category: "Machine Learning",
    year: "2026",
    tags: ["Python", "PyTorch", "Computer Vision"],
    links: { live: "", github: "" },
    overview:
      "A short paragraph describing the project at a high level. Replace this placeholder with your real project overview.",
    role: "Data Scientist · Solo project",
    problem: "Describe the problem or question this project set out to solve.",
    approach: [
      "Data collection and preprocessing steps.",
      "Model or analysis approach you chose and why.",
      "How you evaluated and iterated on the solution.",
    ],
    results: ["Key metric or outcome #1.", "Key metric or outcome #2."],
    placeholder: true,
  },
  {
    slug: "project-two",
    title: "Project Two",
    summary: "[What it does] using [main tech] — [result or impact].",
    category: "Data Analytics",
    year: "2025",
    tags: ["Power BI", "SQL", "Forecasting"],
    links: { live: "", github: "" },
    overview:
      "A short paragraph describing the project at a high level. Replace this placeholder with your real project overview.",
    role: "BI Analyst · Team of 3",
    problem: "Describe the problem or question this project set out to solve.",
    approach: [
      "Data collection and preprocessing steps.",
      "Model or analysis approach you chose and why.",
      "How you evaluated and iterated on the solution.",
    ],
    results: ["Key metric or outcome #1.", "Key metric or outcome #2."],
    placeholder: true,
  },
  {
    slug: "project-three",
    title: "Project Three",
    summary: "[What it does] using [main tech] — [result or impact].",
    category: "NLP",
    year: "2025",
    tags: ["Transformers", "OCR", "Python"],
    links: { live: "", github: "" },
    overview:
      "A short paragraph describing the project at a high level. Replace this placeholder with your real project overview.",
    role: "ML Engineer · Research project",
    problem: "Describe the problem or question this project set out to solve.",
    approach: [
      "Data collection and preprocessing steps.",
      "Model or analysis approach you chose and why.",
      "How you evaluated and iterated on the solution.",
    ],
    results: ["Key metric or outcome #1.", "Key metric or outcome #2."],
    placeholder: true,
  },
  {
    slug: "project-four",
    title: "Project Four",
    summary: "[What it does] using [main tech] — [result or impact].",
    category: "Web App",
    year: "2024",
    tags: ["Next.js", "API", "Dashboard"],
    links: { live: "", github: "" },
    overview:
      "A short paragraph describing the project at a high level. Replace this placeholder with your real project overview.",
    role: "Full-stack · Solo project",
    problem: "Describe the problem or question this project set out to solve.",
    approach: [
      "Data collection and preprocessing steps.",
      "Model or analysis approach you chose and why.",
      "How you evaluated and iterated on the solution.",
    ],
    results: ["Key metric or outcome #1.", "Key metric or outcome #2."],
    placeholder: true,
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "projects", label: "Projects" },
];

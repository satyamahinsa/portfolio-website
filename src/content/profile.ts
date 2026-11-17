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
  group: ProjectGroup; // which category tab it appears under
  image?: string; // thumbnail in /public, e.g. "/projects/adidas.webp"
  title: string;
  summary: string;
  category: string;
  year: string;
  tags: string[];
  links: { live?: string; github?: string; paper?: string };
  // Detail page content
  overview: string;
  role: string;
  problem: string; // "" hides the section
  approach: string[];
  results: string[];
  placeholder?: boolean;
};

// Project categories, in the order their buttons appear. The first one is shown by default.
export const projectGroups = [
  "Computer Vision",
  "Machine Learning",
  "Power BI",
  "Looker Studio",
  "Tableau",
] as const;
export type ProjectGroup = (typeof projectGroups)[number];

// Projects, newest first within each group. Each one also gets a detail page at /projects/<slug>.
// Thumbnails live in /public/projects. Stock photos are from Unsplash (free license).
export const projects: Project[] = [
  // ---------- Computer Vision ----------
  {
    slug: "online-gambling-ad-detection",
    group: "Computer Vision",
    title: "Online Gambling Ad Detection",
    summary:
      "Detects online gambling ads in poster images using EasyOCR and XLM-RoBERTa, with 96.2% accuracy.",
    category: "Computer Vision · NLP",
    year: "2026",
    image: "/projects/gambling.webp",
    tags: ["Python", "EasyOCR", "XLM-RoBERTa", "PyTorch", "Optuna"],
    links: {
      github: "https://github.com/satyamahinsa/online-gambling-poster-classification",
      paper: "https://ieeexplore.ieee.org/abstract/document/11620806",
    },
    overview:
      "An end-to-end desktop app that reads the text on digital poster images and decides whether the poster promotes online gambling. It handles mixed Indonesian and English text, varied typography and busy layouts.",
    role: "Bachelor's thesis · Solo project",
    problem:
      "Online gambling ads spread as image posters that mix Indonesian and English, so text-based filters can't read them.",
    approach: [
      "Extract poster text with EasyOCR.",
      "Clean and normalize the text: Unicode normalization, case folding, and removing URLs, symbols and extra whitespace.",
      "Classify the text with a fine-tuned XLM-RoBERTa model, tuned with Optuna.",
      "Package the pipeline as a desktop app for uploading and classifying posters.",
    ],
    results: [
      "Accuracy 96.20%, precision 95.29%, recall 97.20%, F1-score 96.24%.",
      "Text cleaning cut OCR character errors from 31.13% to 16.52% on gambling posters and from 26.55% to 11.00% on other posters.",
    ],
  },

  // ---------- Machine Learning ----------
  {
    slug: "fraud-detection",
    group: "Machine Learning",
    title: "Fraud Detection in Financial Transactions",
    summary:
      "Flags fraudulent transactions among 6.3 million records using XGBoost, catching 87.9% of fraud cases.",
    category: "Machine Learning",
    year: "2025",
    image: "/projects/fraud.webp",
    tags: ["Python", "XGBoost", "scikit-learn", "Pandas"],
    links: {},
    overview:
      "A machine learning pipeline that classifies mobile-money transactions as fraudulent or legitimate, from data exploration through model comparison to an exported model.",
    role: "Solo project",
    problem:
      "Fraud is only 0.13% of transactions, so a model that simply predicts \"not fraud\" looks accurate but catches nothing.",
    approach: [
      "Explore the data and find that fraud occurs only in TRANSFER and CASH_OUT transactions.",
      "Engineer balance-difference features for the sender and receiver accounts.",
      "Compare logistic regression and XGBoost with grid search inside a preprocessing pipeline.",
      "Export the best model for reuse.",
    ],
    results: [
      "XGBoost: ROC-AUC 0.9995, recall 87.9%, precision 75.4%.",
      "Logistic regression reached only 2% precision on the fraud class.",
    ],
  },
  {
    slug: "house-price-regression",
    group: "Machine Learning",
    title: "House Price Regression",
    summary:
      "Predicts house prices from size, rooms, age and neighborhood quality using a tuned Random Forest.",
    category: "Machine Learning",
    year: "2024",
    image: "/projects/house.webp",
    tags: ["Python", "scikit-learn", "Random Forest"],
    links: {
      github:
        "https://github.com/satyamahinsa/project-portfolio/tree/main/House%20Price%20Regression",
    },
    overview:
      "A regression project that explores which property features drive house prices and builds a model to estimate them.",
    role: "Solo project",
    problem: "",
    approach: [
      "Explore each feature on its own and against house price.",
      "Engineer features such as house age and lot size per square foot.",
      "Tune a Random Forest with grid search (405 fits).",
    ],
    results: [],
  },
  {
    slug: "drug-classification",
    group: "Machine Learning",
    title: "Drug Classification",
    summary:
      "Recommends the right drug type from patient age, blood pressure, cholesterol and Na/K ratio using KNN, with 95% accuracy.",
    category: "Machine Learning",
    year: "2024",
    image: "/projects/drug.webp",
    tags: ["Python", "scikit-learn", "KNN"],
    links: {
      github:
        "https://github.com/satyamahinsa/project-portfolio/tree/main/Drug%20Classification",
    },
    overview:
      "A classification model that suggests which of five drug types fits a patient, based on their health characteristics.",
    role: "Solo project",
    problem: "",
    approach: [
      "Explore how age, sex, blood pressure, cholesterol and Na/K ratio relate to each drug type.",
      "Encode categorical features and scale them with StandardScaler.",
      "Tune KNN with grid search, which picked k = 7 with distance weighting.",
    ],
    results: ["95% accuracy on the test set."],
  },

  // ---------- Power BI ----------
  {
    slug: "adidas-us-sales",
    group: "Power BI",
    title: "Adidas US Sales Analysis",
    summary:
      "Power BI dashboard of $899.9M in Adidas US sales, showing which regions, products and retailers drive profit.",
    category: "Data Analytics & BI",
    year: "2024",
    image: "/projects/adidas.webp",
    tags: ["Power BI", "Data Analysis"],
    links: {
      live: "https://app.powerbi.com/view?r=eyJrIjoiY2I5NWZmMTYtYTgzMi00NmE1LTgxMmMtMTUyNGI3MzU5MzNjIiwidCI6IjkwYWZmZTBmLWMyYTMtNDEwOC1iYjk4LTZjZWI0ZTk0ZWYxNSIsImMiOjEwfQ%3D%3D",
    },
    overview:
      "A Power BI sales report answering business questions about sales over time, by state, region, product and retailer, with pricing and margin KPIs.",
    role: "Solo project",
    problem:
      "Decision-makers needed a clear view of where sales and profit come from, to guide inventory, pricing and regional strategy.",
    approach: [
      "Define KPIs: total sales, operating profit, units sold, average price and margin.",
      "Build charts for sales by month, state, region, product and retailer.",
      "Turn each chart into a business insight and recommendation.",
    ],
    results: [
      "$332.1M operating profit, a 42.3% operating margin.",
      "The West region, Men's Street Fashion and West Gear lead sales.",
      "The Midwest and South are the main growth opportunities.",
    ],
  },

  // ---------- Looker Studio ----------
  {
    slug: "retail-transaction-report",
    group: "Looker Studio",
    title: "Retail Transaction Report",
    summary:
      "Looker Studio dashboard of $8.69B in retail revenue, broken down by payment method, product category and customer.",
    category: "Data Analytics & BI",
    year: "2026",
    image: "/projects/retail.webp",
    tags: ["Looker Studio", "Data Analysis"],
    links: { live: "https://datastudio.google.com/reporting/5133b13b-b232-4094-8377-c61ae7e03536" },
    overview:
      "An interactive report for an online retail store covering 2021–2022 transactions, with filters for payment method, category and date range.",
    role: "Solo project",
    problem: "",
    approach: [
      "Build KPI scorecards for revenue, customers, profit, discount and quantity.",
      "Chart monthly revenue and compare payment methods by transactions and revenue.",
      "Break down quantity and revenue by product category.",
      "Add product and customer summary tables with revenue, discount and profit.",
    ],
    results: [
      "$8.69B revenue and $2.03B profit from 3,998 customers.",
      "Mobiles & Tablets lead revenue among product categories.",
    ],
  },
  {
    slug: "e-commerce-transaction-report",
    group: "Looker Studio",
    title: "E-Commerce Business Transaction Report",
    summary:
      "Looker Studio dashboard of £58.29M in 2019 e-commerce revenue, tracking products, customers, countries and cancellations.",
    category: "Data Analytics & BI",
    year: "2026",
    image: "/projects/ecommerce.webp",
    tags: ["Looker Studio", "Data Analysis"],
    links: { live: "https://datastudio.google.com/reporting/86e4d4a1-dafa-4ee3-ab0a-357d9f7376d6" },
    overview:
      "An interactive report on a year of e-commerce transactions, from December 2018 to November 2019, with a date-range filter.",
    role: "Solo project",
    problem: "",
    approach: [
      "Build KPI scorecards for revenue, transactions, customers, products and quantity.",
      "Chart the monthly revenue trend and the best-selling products.",
      "Compare successful and cancelled transactions, and the top customers by payment.",
      "Map the countries with the most transactions.",
    ],
    results: [
      "£58.29M revenue from 22,250 transactions and 19,615 customers.",
      "14.7% of transactions were cancelled.",
      "Revenue climbed steadily from August to November 2019.",
    ],
  },

  // ---------- Tableau ----------
  {
    slug: "chocolate-sales-dashboard",
    group: "Tableau",
    title: "Chocolate Sales Dashboard",
    summary:
      "Tableau dashboard of a chocolate brand's 2024 customers and orders, comparing each KPI with the previous year.",
    category: "Data Analytics & BI",
    year: "2026",
    image: "/projects/chocolate.webp",
    tags: ["Tableau", "Data Analysis"],
    links: {
      live: "https://public.tableau.com/views/ChocolateSalesDashboard_17741679628380/CustomerDashboard",
    },
    overview:
      "A customer dashboard built from sales, customer, product, store and calendar tables, with year-over-year comparisons and highlighted best and worst months.",
    role: "Solo project",
    problem: "",
    approach: [
      "Model the sales, customer, product, store and calendar tables in Tableau.",
      "Build KPI cards with monthly trend lines, marking the highest and lowest months.",
      "Compare loyalty members and non-members by gender.",
      "Rank the top 10 customers by profit.",
    ],
    results: [
      "9,993 customers (+1.1% vs. 2023) and 197K orders (+0.9%).",
      "Average customer age 44.18, with an even gender split among members and non-members.",
    ],
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

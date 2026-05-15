import avatarImage from "../../assets/img/avatar.avif";
import avatarSmallImage from "../../assets/img/avatarsmall.avif";
import dashboardImage from "../../assets/img/dashboard.webp";
import ghostyImage from "../../assets/img/ghosty.webp";
import scholar_sync from "../../assets/img/scholar_sync.webp"
import scholar_manager from "../../assets/img/scholar_manager.webp"
export const profile = {
  name: "Nihal",
  shortName: "Nihal",
  title: "Computer Science Undergraduate and Full-Stack Developer",
  tagline: "JavaScript, Node.js, React, AI pipelines, and DSA",
  location: "Srinagar, India",
  email: "nihalonly772@gmail.com",
  phone: "+91 8789600276",
  github: "https://github.com/nihal1087",
  linkedin: "https://www.linkedin.com/in/mohammad-nihal-519523289/",
  leetcode: "https://leetcode.com/u/name_is_nihal/",
  blog: "https://nihalnyl.blog/",
  avatarImage,
  avatarSmallImage,
};

export const heroStats = [
  { value: "600+", label: "DSA problems solved" },
  { value: "8.72", label: "CSE CGPA at NIT Srinagar" },
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Java", "C++", "JavaScript", "TypeScript", "Python"],
  },
  {
    title: "Full-Stack",
    items: ["React", "Node.js", "Express", "REST APIs", "Server-Sent Events"],
  },
  {
    title: "Data and Systems",
    items: ["SQLite", "MongoDB", "MySQL", "Prisma ORM", "DBMS", "Operating Systems"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Docker", "Firecrawl"],
  },
];

export const focusAreas = [
  {
    title: "Full-stack product work",
    text: "Designing reliable REST APIs, data flows, and React interfaces that stay fast under real inputs.",
  },
  {
    title: "Problem solving",
    text: "Using DSA, OOP, and core CS fundamentals to make implementation choices that scale past demos.",
  },
];

export const education = {
  school: "National Institute of Technology, Srinagar",
  degree: "B.Tech in Computer Science and Engineering",
  period: "2023 - 2027",
  detail: "CGPA: 8.72",
};

export const experience = [
  {
    company: "Youth Dreamers Foundation (YDF)",
    role: "Software Development Engineer Intern",
    period: "Jan 2026 - Mar 2026",
    location: "Remote",
    points: [
      "Built an AI-powered scholarship chatbot that automated roughly 80% of user queries.",
      "Engineered a Python and Firecrawl pipeline to convert unstructured web data into structured formats.",
      "Applied Llama-3 NER and validation logic to improve response accuracy and data reliability.",
    ],
  },
  {
    company: "TEDxNITSrinagar",
    role: "Sponsorship Team Member",
    period: "Aug 2024 - Sep 2024",
    location: "NIT Srinagar",
    points: [
      "Led partner outreach and stakeholder communication for sponsorship acquisition.",
      "Managed deadline-driven sponsor deliverables across a fast-moving event team.",
    ],
  },
];

export const achievements = [
  "FLY Scholar, USA 2025: selected for certified training in leadership, innovation, and analytical problem-solving.",
];

export const projects = [
  {
    slug: "scholarsync",
    title: "ScholarSync",
    type: "AI scholarship search platform",
    role: "Full-stack and data pipeline engineering",
    image: scholar_sync,
    liveUrl: "https://scholarsync-84uz.onrender.com/",
    repoUrl: "",
    visual: {
      eyebrow: "AI search",
      title: "Structured scholarship discovery",
      rows: ["Llama-3 NER", "REST API", "JSON datasets", "Low-latency UI"],
      metric: "30%",
      metricLabel: "accuracy gain from validation",
    },
    summary:
      "An AI-driven scholarship platform that turns unstructured web content into structured, searchable data.",
    metrics: [
      {  label: "accuracy gain from validation" },
      {  label: "core eligibility filters" },
      { value: "JSON", label: "normalized scholarship data" },
    ],
    caseStudy: {
      problem:
        "Scholarship information is scattered across pages with inconsistent wording, making it hard for students to find relevant opportunities quickly.",
      approach: [
        "Built a Python scraping pipeline to collect scholarship pages and normalize them into JSON records before they reached the app.",
        "Used Llama-3 NER to extract fields such as eligibility, income limits, category, deadlines, and state coverage.",
        "Added deterministic validation and filters so AI extraction could be checked against predictable user inputs.",
      ],
      impact:
        "The finished experience turns messy web data into a searchable product where students can narrow results with practical eligibility filters instead of reading every page manually.",
      decisions: [
        "Separated extraction from query serving so the frontend receives already-structured scholarship records.",
        "Used REST endpoints for search and conversational access rather than binding the UI to raw scraped pages.",
        "Favored explicit filters for critical eligibility criteria to avoid vague AI-only matching.",
      ],
    },
    overview: [
      "ScholarSync combines a Node.js API, a Python scraping pipeline, and Llama-3 based entity extraction to make scholarship discovery easier to query and filter.",
      "The project focuses on reliability: deterministic filters for state, category, and income reduce irrelevant results, while the frontend keeps search interactions responsive.",
    ],
    highlights: [
      "Built RESTful APIs for structured conversational scholarship search.",
      "Converted raw web content into JSON datasets for efficient querying.",
      "Designed multi-parameter filtering to reduce irrelevant results.",
    ],
    stack: ["Node.js", "Express", "Python", "Llama-3", "REST APIs", "JSON", "React"],
  },
  {
    slug: "scholarship-automator",
    title: "Scholarship Automator",
    type: "Admin workflow automation",
    role: "Backend, database design, and workflow tooling",
    image: scholar_manager,
    liveUrl: "https://scholarship-bot-5r9g.onrender.com",
    repoUrl: "",
    visual: {
      eyebrow: "Automation",
      title: "Bulk eligibility checks",
      rows: ["CSV validation", "Prisma schema", "Conflict detection", "Moodle export"],
      metric: "1000s",
      metricLabel: "records processed in bulk",
    },
    summary:
      "A bulk-processing tool that validates student records against complex scholarship eligibility rules.",
    metrics: [
      { value: "1000s", label: "records processed in bulk" },
      { value: "CSV", label: "import and export workflow" },
      { value: "Prisma", label: "relational eligibility model" },
    ],
    caseStudy: {
      problem:
        "Admin teams had to inspect large student spreadsheets manually, which made eligibility checks slow and increased the chance of missing duplicate or conflicting scheme entries.",
      approach: [
        "Created a CSV processing flow that validates incoming rows before they enter the scholarship workflow.",
        "Designed Prisma-backed relational entities for schemes, student records, eligibility criteria, and export-ready results.",
        "Added conflict detection and Moodle-compatible export generation so admins could move from validation to publishing faster.",
      ],
      impact:
        "The tool reduces repeated spreadsheet work by turning manual checking into a structured import, validate, review, and export workflow.",
      decisions: [
        "Modeled scheme rules in the database instead of hard-coding every condition in the UI.",
        "Kept CSV as the operating format because it matches the tools admins already use.",
        "Generated Moodle-ready outputs to remove the final hand-formatting step.",
      ],
    },
    overview: [
      "Scholarship Automator replaces manual spreadsheet checks with a structured CSV processing flow and a relational data model.",
      "The system validates records, detects overlapping scheme conflicts, and exports Moodle-ready CSVs for admin teams.",
    ],
    highlights: [
      "Built a CSV processing engine for large student datasets.",
      "Designed relational entities with Prisma ORM to model schemes and eligibility.",
      "Generated export files that removed repetitive manual admin work.",
    ],
    stack: ["Node.js", "Express", "Prisma ORM", "Vanilla JS", "CSV", "Database Design"],
  },
  {
    slug: "personal-dashboard",
    title: "Personal Dashboard",
    type: "Chrome new-tab extension",
    role: "Frontend integration and data UI",
    image: dashboardImage,
    liveUrl: "",
    repoUrl: "https://github.com/nihal1087/personal-dashboard",
    summary:
      "A custom new-tab dashboard with LeetCode stats, GitHub activity, live time, weather, and quotes.",
    metrics: [
      { value: "5+", label: "live data sources" },
      { value: "MV3", label: "Chrome extension architecture" },
      { value: "SVG", label: "interactive progress view" },
    ],
    caseStudy: {
      problem:
        "The default browser new tab does not give a developer useful context, so frequent checks for coding progress, activity, weather, and time stay scattered across different tools.",
      approach: [
        "Built a Chrome Manifest V3 extension that replaces the new-tab page with a focused developer dashboard.",
        "Integrated multiple REST APIs for LeetCode, GitHub, weather, quotes, and background data using async JavaScript.",
        "Rendered progress and activity in compact UI blocks so the page stays glanceable each time a new tab opens.",
      ],
      impact:
        "The dashboard brings personal coding signals and daily context into one always-available surface without requiring a separate app.",
      decisions: [
        "Used SVG for LeetCode progress so the visualization stays sharp and easy to update.",
        "Kept the extension client-side to match the lightweight new-tab use case.",
        "Structured the project around Manifest V3 requirements for modern Chrome extensions.",
      ],
    },
    overview: [
      "Personal Dashboard replaces the default Chrome new tab with a practical developer workspace.",
      "It integrates multiple REST APIs with async JavaScript and renders live context each time a tab opens.",
    ],
    highlights: [
      "Built an SVG LeetCode progress visualization with interactive states.",
      "Fetched GitHub, weather, quote, and background data dynamically.",
      "Structured the extension around Chrome Manifest V3.",
    ],
    stack: ["JavaScript", "Chrome Extension MV3", "REST APIs", "SVG", "GitHub API", "Geolocation"],
  },
  {
    slug: "ghosty",
    title: "Ghosty",
    type: "Real-time Node.js app",
    role: "Frontend and Node.js backend",
    image: ghostyImage,
    liveUrl: "https://ghosty-l50w.onrender.com/",
    repoUrl: "https://github.com/nihal1087/Ghosty.git",
    summary:
      "A Node.js app for sharing stories with live updates delivered through Server-Sent Events.",
    metrics: [
      { value: "SSE", label: "real-time delivery" },
      { value: "0", label: "backend framework dependency" },
      { value: "JSON", label: "file-based storage" },
    ],
    caseStudy: {
      problem:
        "A story-sharing app needs fresh activity to appear without constant refreshes, but the project still needed to stay lightweight and understandable.",
      approach: [
        "Served static assets and API routes from the native Node.js HTTP module to keep the backend small.",
        "Used EventEmitter with Server-Sent Events so connected clients receive new story activity in real time.",
        "Validated and sanitized submitted stories before persisting them to JSON storage.",
      ],
      impact:
        "Ghosty demonstrates a complete same-origin Node.js app with live updates, request handling, static serving, and persistence without relying on a framework.",
      decisions: [
        "Chose SSE because the app only needs server-to-client activity updates.",
        "Used file-based JSON storage to keep the persistence layer transparent for a portfolio-scale project.",
        "Kept routing and parsing explicit to show comfort with Node.js fundamentals.",
      ],
    },
    overview: [
      "Ghosty is built on the native Node.js HTTP module, with static assets and API routes served from one same-origin backend.",
      "The architecture uses EventEmitter, file-based JSON storage, request validation, and Server-Sent Events for live client updates.",
    ],
    highlights: [
      "Streamed live story activity to connected clients with SSE.",
      "Handled routing, request parsing, and static serving without a framework.",
      "Sanitized submissions before writing to JSON storage.",
    ],
    stack: ["Node.js HTTP", "JavaScript Modules", "Server-Sent Events", "EventEmitter", "JSON Storage"],
  },
];

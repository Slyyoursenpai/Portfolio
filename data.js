// ============================================================
//  DATA.JS — Edit this file to update your portfolio content
//  Structure is self-explanatory. Don't touch index.html or
//  style.css unless you want to change layout / design.
// ============================================================

const DATA = {

  // ── PERSONAL INFO ────────────────────────────────────────
  name:     "Mahirul Alam Chowdhury",
  role:     "QA Engineer & AI Developer",
  location: "Saitama / Tokyo, Japan | Chittagong, Bangladesh",
  email:    "chymahirul13@gmail.com",
  linkedin: "linkedin.com/in/YOUR_LINKEDIN",
  github:   "github.com/Slyyoursenpai",
  cv:       "./cv.pdf",               // path to your CV file, or a Google Drive link
  status:   "Available",             // shown in the hero pill

  // short bio shown in hero
  heroBio: "Breaking systems so users don't have to. MSc candidate at Tokyo International University, with 1.5+ years building test infrastructure and shipping lightweight AI for constrained devices.",

  // ── STATS (hero right panel) ─────────────────────────────
  stats: [
    { label: "Experience",         sub: "SQA Engineering",                    value: "1.5y+" },
    { label: "Published Research", sub: "IET Cyber-Physical Systems",         value: "1"     },
    { label: "Current study",      sub: "Digital Business & Innovation · TIU", value: "MSc"  },
  ],

  // ── ABOUT SECTION ────────────────────────────────────────
  about: {
    // Each string becomes a paragraph
    paragraphs: [
      "I'm a QA Engineer and AI developer currently based in <strong>Saitama, Japan</strong>, pursuing an MSc in Digital Business & Innovation at <strong>Tokyo International University</strong>. My engineering background is in software quality assurance, where I built test automation infrastructure using Selenium, Java, and BDD frameworks.",
      "On the research side, I published a paper in <strong>IET Cyber-Physical Systems (2024)</strong> on mobile cataract detection — a lightweight CNN deployed via TensorFlow Lite on Android, demonstrating that real-world constraints are a design parameter, not an afterthought.",
      "I'm actively targeting <strong>QA, SDET, and tech roles at English-friendly companies in Japan</strong> — global tech firms, foreign-affiliated companies, and multinational consultancies. I bring both the systematic mindset of a tester and the curiosity of a builder.",
    ],
    // Sidebar cards — add/remove freely
    sidebar: [
      {
        label: "Currently",
        body:  "<strong>MSc Student · TIU Ikebukuro</strong>Digital Business & Innovation",
      },
      {
        label: "Research interests",
        body:  "Lightweight ML · Edge AI<br>Medical Computer Vision<br>RAG & On-device Inference",
      },
      {
        label: "Target employers",
        body:  "Rakuten · Mercari · Amazon Japan<br>Microsoft Japan · MNCs<br>English-friendly global tech",
      },
      {
        label: "Languages",
        body:  "English (fluent) · Bengali (native)<br>Japanese N5 → actively studying",
      },
    ],
  },

  // ── EXPERIENCE ───────────────────────────────────────────
  // Add new jobs at the top of the array (newest first)
  experience: [
    {
      type:    "SQA Engineer",
      period:  "2025 — 2026",
      org:     "MarginEdge",
      title:   "Jr. Software Quality Assurance Engineer",
      company: "Tekarsh · Embedded at MarginEdge · Remote",
      bullets: [
        "Performed API and manual testing, requirement analysis, test case design, and design for the MarginEdge webapplication and Freepour hardware, ensuring 95% feature stability for each release",
        "Conducted regression, smoke, API using Postman, and functional testing, directly supporting the successful release of 7 newproduct features and upgrades collaborating with development teams, product managers, and cross-functional teams",
        "Identified, documented, and tracked 200 bugs using Jira over 14 months, including critical defects and requirement inconsistencies, reducing user reported bugs by 25%",
        "Validated data and database consistencies and functionalities using AWS S3, DynamoDB",
        "Collaborated in Agile sprints — owned bug triage, test planning",
        "Designed test cases, documentation and feature requirements that reduced regression cycle time and regression failures",
        "Adopted Test Driven Development approach, resulting in fewer bugs, faster deployment and a 45% improvement in task completion rate across the team",
      ],
      tags: ["Software Quality Assurance", "Regression/Smoke/API testing", "Test Plan Design", "AWS", "Postman", "Agile/Scrum", "JIRA", "Test Planning", "Test-Driven Development", ""],
    },
    {
      type:    "QA Automation Engineer",
      period:  "2024",
      org:     "A1qa",
      title:   "QA Automation Engineer Intern",
      company: "a1qa · Remote",
      bullets: [
        "Developed and maintained 10+ automated test suites for Wikipedia, AccuWeather, and GeeksforGeeks using Java Selenium and Cucumber BDD, reducing manual testing effort by 65%",
        "Implemented Page Object Model design pattern across 5 test suites, improving code reusability by 40% and reducing maintenance time by 3 hours per sprint",
        "Streamlined CI/CD pipeline integration with Jenkins and Docker, achieving 80% automated test execution consistency and reducing deployment cycle time from 4 hours to 45 minutes",
      ],
      tags: ["Automation Testing", "Test Case Design", "Selenium", "BDD", "Cucumber", "Regression Testing", "Jenkins", "Docker"],
    },
  ],

  // ── RESEARCH ─────────────────────────────────────────────
  papers: [
    {
      year:   "2024",
      badge:  "IET Cyber-Physical Systems · Peer-reviewed",
      title:  "Mobile Cataract Detection via Lightweight CNN on Edge Devices",
      desc:   "Designed and deployed a lightweight convolutional neural network for cataract detection, optimised for Android deployment via TensorFlow Lite. Achieved clinically useful accuracy on constrained hardware — making ophthalmic screening accessible without specialist equipment. Associated Android app: <strong>I-Scan</strong>.",
      tags:   ["TensorFlow Lite", "CNN", "Android", "Medical AI", "Edge Inference", "Java", "Machine Learning"],
      link:   "https://doi.org/10.1049/cps2.12083Digital Object Identifier (DOI) ",
    },
  ],

  // Work-in-progress research card (leave empty string to hide it)
  wip: {
    label: "In Progress · MSc Research Thesis",
    title: "Retinal Disease Detection with Explaiability AI",
    desc:  "Research on ML models for Retinal Disease Detection and integrating with Explainable AI techniques",
  },

  // ── PROJECTS ─────────────────────────────────────────────
  // Add new projects anywhere — numbering is auto-generated
  projects: [
    {
      title:     "WordPress Dark Mode Plugin Automation",
      sub:       "Automation Testing Suite for the 'WP Dark Mode' plugin on WordPress",
      desc:      "Developed an end-to-end automation test suite for the WP Dark Mode plugin using Java and Selenium, covering functional and regression scenarios.",
      tags:      ["Automation Testing", "Selenium", "Java", "Github Actions"],
      link:      "https://github.com/Slyyoursenpai/Wordpress-Automation.git",
      linkLabel: "View on GitHub",
    },

    {
      title:     "Wikipedia Automation with Page Object Model and Aquality",
      sub:       "Automation Testing Suite for Wikipedia following POM design pattern and Aquality framework for Selenium",
      desc:      "Built an automated test suite for Wikipedia using Aquality Selenium (Java) and Page Object Model (POM), improving test script reusability and maintainability.",
      tags:      ["Automation Testing", "Selenium", "Java", "Github Actions"],
      link:      "https://github.com/Slyyoursenpai/Wikipedia-Automation-with-POM-and-Aquality",
      linkLabel: "View on GitHub",
    },
    
    {
      title:     "I-Scan",
      sub:       "Mobile cataract detection app",
      desc:      "Android app deploying a TFLite CNN for real-time cataract screening. Jetpack Compose UI, Room DB for local history. Published — IET Cyber-Physical Systems 2024.",
      tags:      ["Android", "TFLite", "Jetpack Compose", "Room DB"],
      link:      "https://github.com/Slyyoursenpai",
      linkLabel: "View on GitHub",
    },
    {
      title:     "NoteAI",
      sub:       "AI-powered smart notebook",
      desc:      "React app with Claude API integration for intelligent note-taking, AI-assisted summarisation, and Q&A over personal notes.",
      tags:      ["React", "Claude API", "RAG"],
      link:      "https://github.com/Slyyoursenpai",
      linkLabel: "View on GitHub",
    },

    {
      title:     "This Portfolio",
      sub:       "Vanilla HTML · CSS · JS",
      desc:      "Built without a framework. Dark editorial aesthetic, Syne + DM Mono typefaces, scroll-reveal animations. Data-driven — all content lives in data.js.",
      tags:      ["HTML", "CSS", "JavaScript"],
      link:      "https://github.com/Slyyoursenpai",
      linkLabel: "View source",
    },
  ],

  // ── SKILLS / STACK ───────────────────────────────────────
  // Add/remove categories and items freely
  skills: [
    {
      category: "QA / Testing",
      items: ["Selenium", "Playwright", "Postman", "Cucumber", "BDD/Gherkin", "JIRA", "TestNG"],
    },
    {
      category: "Languages",
      items: ["Java", "Python", "TypeScript", "JavaScript", "Kotlin", "SQL"],
    },
    {
      category: "AI / ML",
      items: ["TensorFlow Lite", "ONNX Runtime", "ChromaDB", "LanceDB", "RAG", "Claude API"],
    },
    {
      category: "Frontend / Mobile",
      items: ["React", "Android", "Jetpack Compose", "HTML/CSS", "Tailwind"],
    },
    {
      category: "Data / Backend",
      items: ["PostgreSQL", "Firebase", "Room DB", "REST APIs", "SQLite"],
    },
    {
      category: "Tools / Infra",
      items: ["Git / GitHub", "GitHub Actions", "Tailscale", "Linux", "VS Code"],
    },
  ],

  // ── CONTACT — open to ────────────────────────────────────
  openTo: [
    "QA Engineer / SDET",
    "Test Automation Engineer",
    "Junior AI/ML Engineer",
    "Android Developer (QA-adjacent)",
    "Research Collaborations",
  ],

  contactNote: "Full-time roles in Tokyo / Saitama area. Remote-first international teams also welcome.",

};

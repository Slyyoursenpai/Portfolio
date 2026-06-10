// ============================================================
//  DATA.JS — Edit this file to update your portfolio content
//  Structure is self-explanatory. Don't touch index.html or
//  style.css unless you want to change layout / design.
// ============================================================

const DATA = {

  // ── PERSONAL INFO ────────────────────────────────────────
  name:     "Mahirul Alam Chowdhury",
  role:     "QA Engineer",
  location: "Saitama / Tokyo, Japan | Chittagong, Bangladesh",
  email:    "chymahirul13@gmail.com",
  linkedin: "linkedin.com/in/https://www.linkedin.com/in/mahirul-alam-chowdhury-222bb9205/",
  github:   "github.com/Slyyoursenpai",
  cv:       "https://drive.google.com/file/d/1NBlzLBVTLia3ukdyc_Jpy0lMA6JUKrsX/view?usp=sharing", // path to your CV file, or a Google Drive link
  status:   "Available",             // shown in the hero pill

  // short bio shown in hero
  heroBio: "Breaking systems so users don't have to. Computer Science grad, with 1.5+ years engineering test infrastructure and testing software quality for webapps and SAAS products",

  // ── STATS (hero right panel) ─────────────────────────────
  stats: [
    { label: "Experience",         sub: "SQA Engineering",                    value: "1.5y+" },
    { label: "Published Research", sub: "IET Cyber-Physical Systems",         value: "1"     },
    { label: "Current study",      sub: "Digital Business & Innovation · TIU", value: "MSc"  },
    { label: "Undergraduate",      sub: "Computer Science and Engineering · North South University", value: "BSc"}
  ],

  // ── ABOUT SECTION ────────────────────────────────────────
  about: {
    // Each string becomes a paragraph
    paragraphs: [
      "I'm a QA Engineer with a Computer Science and Engineering background. My engineering background is in software quality assurance, where I designed test requirements, test plans, carried out regression, functional tests and designed Automation Testing Suites",
      "On the research side, I published a paper in <strong>IET Cyber-Physical Systems (2024)</strong> on mobile cataract detection — a lightweight CNN deployed via TensorFlow Lite on Android.",
      "I'm also passionate about video games, video game design and learning about game designs and development as a solo dev ",
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
        body:  "·Software Quality and Assurance Engineering ·Lightweight ML ·Edge AI<br>Medical Computer Vision<br>",
      },
     /* {
        label: "Target employers",
        body:  "Rakuten · Mercari · Amazon Japan<br>Microsoft Japan · MNCs<br>English-friendly global tech",
      }, */
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
      title:     "Labelhub Automation Testing",
      sub:       "Automation Testing Suite for 'Labelhub', using Seleniu, Python",
      desc:      "Developed an end-to-end automation testing suite for Labelhub, government funded LLM annotation platform",
      tags:      ["Automation Testing", "Selenium", "Python"],
      link:      "https://github.com/Slyyoursenpai/Labelhub-Testing---Selenium",
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
      title:     "I-Scan -  Light Weight Machine Learning Cataract Disease Model",
      sub:       "Mobile cataract detection CNN model demonstrated via an App",
      desc:      "Developed an Android application for Cataract detection using a lightweight CNN model for Edge devices as part of published research. 'Mobile Detection of Cataracts with an Optimised Lightweight Deep Edge Intelligent Technique' - [IET Cyber-Physical Systems: Theory & Applications], [2024]",
      tags:      ["Machine Learning", "TFLite", "Java", "CNN", "ML Research"],
      link:      "https://github.com/Slyyoursenpai/I-Scan",
      linkLabel: "View on GitHub",
    },
  /*  {
      title:     "NotePal",
      sub:       "Note app powered by AI retrieval and context awareness",
      desc:      "React app with AI integration for AI-assisted summarisation, and Q&A over personal notes.",
      tags:      ["React", "LLM", "RAG", "Vector DB", "Web Development"],
      link:      "https://github.com/Slyyoursenpai",
      linkLabel: "View on GitHub",
    }, */
 
    {
      title:     "Pixel Invaders",
      sub:       "Classic Retro-inspired arcade shooter developed using Pico-8 Engine",
      desc:      "Retro-inspired game developed using the Pico-8 engine and its own subset of the Lua language, followed game design patterns. Published on Itch.io",
      tags:      ["Game Development", "Lua", "Game Design", "Pico-8", "Itchio"],
      link:      "https://github.com/Slyyoursenpai/Wordpress-Automation.git",
      linkLabel: "View on GitHub",
      //link: "https://slyyoursenpai.itch.io/pixel-invaders",
     // linkLabel: "View on Itch.io."
    },


  /*  {
      title:     "This Portfolio",
      sub:       "Vanilla HTML · CSS · JS",
      desc:      "Built without a framework. Dark editorial aesthetic, Syne + DM Mono typefaces, scroll-reveal animations. Data-driven — all content lives in data.js.",
      tags:      ["HTML", "CSS", "JavaScript"],
      link:      "https://github.com/Slyyoursenpai/Portfolio",
      linkLabel: "View source",
    }, */
  ],

  // ── SKILLS / STACK ───────────────────────────────────────
  // Add/remove categories and items freely
  skills: [
    {
      category: "QA / Testing",
      items: ["Manual Testing", "Regression/Functional Testing", "Selenium", "Playwright", "Postman", "Cucumber", "BDD/Gherkin", "CI/CD", "JIRA", "TestNG", "Test Requirement Design", "Agile", "TDD"],
    },
    {
      category: "Languages",
      items: ["Java", "Python", "TypeScript", "JavaScript", "C", "PHP", "SQL","Lua"],
    },
    /*{
      category: "AI / ML",
      items: ["TensorFlow Lite", "ONNX Runtime", "ChromaDB", "LanceDB", "RAG", "Claude API"],
    },*/
    {
      category: "Frontend / Mobile",
      items: ["React", "Android", "Java", "HTML/CSS", "Tailwind"],
    },
    {
      category: "Data / Backend",
      items: ["PostgreSQL", "MySQL", "REST APIs", "AWS"],
    },
    {
      category: "Tools / Infra",
      items: ["Git / GitHub", "GitHub Actions", "Jenkins", "Docker", "VS Code", "Android Studio", "IntelliJ"],
    },
  ],

  // ── CONTACT — open to ────────────────────────────────────
  openTo: [
    "SQA Engineer / SDET",
    "Test Automation Engineer",
    "Junior AI/ML Engineer",
    "Research Collaborations",
  ],

  //contactNote: "Full-time roles in Tokyo / Saitama area. Remote-first international teams also welcome.",

};

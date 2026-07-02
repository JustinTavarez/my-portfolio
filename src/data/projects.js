// Shared project data used by the Projects list page and the ProjectDetail page.
//
// To attach media, drop files into src/assets/videos and src/assets/screenshots,
// import them at the top of this file, and set the `video` / `screenshots` fields.
// Until then, leave `video` as null and `screenshots` as an empty array, the UI
// gracefully hides those sections.
//
// Example:
//   import oerVideo from "../assets/videos/oer-ai-agent.mp4";
//   import oerShot1 from "../assets/screenshots/oer-ai-agent-1.png";
//   ... then set video: oerVideo, screenshots: [oerShot1]

export const projects = [
  {
    slug: "oer-ai-agent",
    title: "OER AI Agent Website",
    tech: "React, FastAPI, Python, ChromaDB, LM Studio, RAG",
    summary:
      "A production-ready RAG tool that helps instructors discover and evaluate Open Educational Resources.",
    description:
      "Built a production-ready Retrieval-Augmented Generation (RAG) tool enabling instructors to discover and evaluate Open Educational Resources using real syllabus and OpenALG data, independently researching and applying ChromaDB, LM Studio, and RAG pipeline architecture from scratch. Architected a FastAPI backend integrated with a locally hosted LLM via LM Studio, delivering AI-generated, context-aware responses with low latency. Developed a React frontend with full-text search, structured result display, and a rubric-based evaluation system assessing resource quality, licensing, and accessibility.",
    links: { live: "", github: "" },
    video: null,
    screenshots: [],
  },
  {
    slug: "exact-scholars",
    title: "EXACT Scholars Web App",
    tech: "Angular, Node.js, Express, MongoDB, Selenium",
    summary:
      "Testing lead on an Angular/Node app, building Selenium E2E suites and improving backend workflows.",
    description:
      "I served as the testing lead for an Angular and Node/MongoDB application, building Selenium end-to-end test suites. I wrote installation guides, API docs, Swagger updates, and recurring project reports. I updated backend routes, models, and validation logic to improve admin workflows and data handling. I also contributed UI updates, accessibility fixes, and new frontend features aligned with GGC design.",
    links: { live: "", github: "" },
    video: null,
    screenshots: [],
  },
  {
    slug: "hotel-data-automation",
    title: "Hotel Data Automation",
    tech: "Java, Selenium, SQLite",
    summary:
      "A resilient scraper that collects hotel prices across cities and brands, then surfaces the lowest-price dates.",
    description:
      "I built a scraper that collected hotel prices across five cities and five hotel brands. I analyzed the data to find the ten lowest price dates for each hotel and city across several months. I used DRY patterns, solid error handling, and automation to keep long runs stable. I also wrote automated tests using the AAA structure with JUnit annotations.",
    links: { live: "", github: "" },
    video: null,
    screenshots: [],
  },
  {
    slug: "todo-app",
    title: "TO-DO App",
    tech: "Vue.js 3, Vite, MVC",
    summary:
      "A reactive Vue 3 task manager with an MVC structure, validation, and localStorage persistence.",
    description:
      "I built a Vue 3 task manager using an MVC structure that separates data, UI, and logic. I designed a reactive TaskStore with validation and localStorage persistence. I created reusable components that emit add, complete, and delete events to the controller layer. I wrote controller logic that keeps the model and view in sync. I used the Composition API and Vite for a fast, clean workflow.",
    links: { live: "", github: "" },
    video: null,
    screenshots: [],
  },
  {
    slug: "adventure-game",
    title: "Adventure Game",
    tech: "Java, JavaFX",
    summary:
      "A Minecraft-style text adventure with branching story paths and a JavaFX stats dashboard.",
    description:
      "I built a Minecraft-style text adventure game in Java with branching story paths driven by player choices. I added a JavaFX dashboard that tracks inventory, progress, and game stats. I followed OOP principles and used an MVC structure across the codebase.",
    links: { live: "", github: "" },
    video: null,
    screenshots: [],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

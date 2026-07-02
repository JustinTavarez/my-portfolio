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
    role:
      "Full-stack developer and architect. I designed the RAG pipeline end to end, built the FastAPI backend around a locally hosted LLM, and developed the React frontend for search, results, and rubric-based evaluation.",
    learned:
      "How to design a RAG pipeline from scratch, wire ChromaDB vector search to a local LLM through LM Studio, and keep AI responses fast and context-aware. I also learned to translate real syllabus and OpenALG data into a structured, evaluatable format.",
    links: { live: "", github: "" },
    video: "",
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
    role:
      "Testing lead. I owned the Selenium end-to-end test suites and project documentation while also contributing to backend routes, models, and validation logic, plus frontend UI and accessibility improvements.",
    learned:
      "How to build maintainable end-to-end test coverage with Selenium and communicate clearly through installation guides, API docs, and Swagger. I also grew in coordinating a team and aligning frontend work with an established design system.",
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
    role:
      "Sole developer. I designed and built the scraper, the data analysis that ranked lowest-price dates, the SQLite storage layer, and the automated test suite.",
    learned:
      "How to keep long-running automation stable with solid error handling and DRY design, and how to structure reliable tests using the AAA pattern with JUnit. I also learned to turn raw scraped data into actionable insights.",
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
    role:
      "Sole developer. I architected the MVC structure, built the reactive TaskStore, and created the reusable components and controller logic that keep the model and view in sync.",
    learned:
      "How to apply an MVC structure inside a component framework and keep data, UI, and logic cleanly separated. I also deepened my grasp of Vue 3's Composition API, reactive state, and localStorage persistence.",
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
    role:
      "Sole developer. I designed the branching story engine, the player-choice logic, and the JavaFX dashboard for inventory, progress, and stats.",
    learned:
      "How to model branching game state cleanly with OOP principles and an MVC structure, and how to connect that logic to a JavaFX UI that stays in sync with the game state.",
    links: { live: "", github: "" },
    video: null,
    screenshots: [],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);

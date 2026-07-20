export const projects = [
  {
    slug: "oer-ai-agent",
    title: "OER AI Agent Website",
    tech: [
      { name: "React", pct: 35 },
      { name: "Python", pct: 25 },
      { name: "FastAPI", pct: 20 },
      { name: "ChromaDB", pct: 10 },
      { name: "RAG", pct: 7 },
      { name: "LM Studio", pct: 3 },
    ],
    summary:
      "Developed an AI-powered assistant that helps university faculty quickly identify and evaluate Open Educational Resources (OER) for their courses.",
    description: [
      "The OER AI Agent is an AI-powered platform designed to help university faculty discover, evaluate, and adopt Open Educational Resources (OER) as affordable alternatives to traditional textbooks and course materials. Instead of manually searching through multiple repositories, instructors can enter a course or topic and receive relevant educational resources that are matched to their needs using semantic search and Retrieval-Augmented Generation (RAG).",
      "The application combines large language models with a ChromaDB vector database to search course syllabi and trusted OER repositories for relevant content. Documents are converted into vector embeddings, allowing the system to retrieve information based on meaning rather than exact keywords. Retrieved resources are then used to ground AI responses, producing accurate recommendations that include resource summaries, open license verification, quality evaluations based on an OER rubric, and suggestions for classroom integration.",
      "The project was developed as part of a client-driven software engineering initiative for Georgia Gwinnett College's AI in Curriculum and Pedagogy Working Group. The goal was to design a reliable AI solution that reduced the time instructors spend searching for educational materials while improving the quality and trustworthiness of AI-generated recommendations.",
      "Throughout development, the system was refined through testing, prompt engineering, and feedback from stakeholders to create a practical tool that demonstrates modern AI application development using Retrieval-Augmented Generation, vector databases, and large language models.",
    ],
    role:
      "Full-stack developer and architect. I designed the RAG pipeline end to end, built the FastAPI backend around a locally hosted LLM, and developed the React frontend for search, results, and rubric-based evaluation.",
    learned: [
      "This project gave me hands-on experience building an end-to-end AI application with modern retrieval and language model technologies. It deepened my understanding of RAG, vector databases, semantic search, and prompt engineering—and how those pieces work together to produce accurate, context-aware responses.",
      "I also gained experience designing FastAPI backends, preparing data for retrieval, and integrating large language models into a production-style workflow.",
      "Beyond the technical work, the project reinforced how important it is to design AI systems that are reliable, explainable, and grounded in trusted data. Working from real client requirements, testing AI outputs, and refining the app with stakeholder feedback strengthened my skills in software engineering, system design, and collaboration.",
    ],
    links: { live: "", github: "" },
    video: "",
    screenshots: [],
  },
  {
    slug: "exact-scholars",
    title: "EXACT Scholars Web App",
    tech: [
      { name: "Selenium", pct: 30 },
      { name: "Angular", pct: 25 },
      { name: "Node.js", pct: 15 },
      { name: "Express", pct: 15 },
      { name: "MongoDB", pct: 15 },
    ],
    summary:
      "EXACT App is a web application developed for Georgia Gwinnett College to support the EXACT(Experiential Learning And Critical Thinking) Plan.",
    description: [
      "The platform serves two primary audiences. Students can learn about the EXACT program and apply to become EXACT Scholars, while administrators can review applications, manage scholars, generate certificates, send decision emails, and maintain semester archives.",
      "During the Fall 2025 update, the app received a full redesign to match Georgia Gwinnett College's updated branding and improve the overall experience. New work included Protégé Scholar applications, ADA accessibility improvements, automated certificate generation, semester archives with CSV exports, and a refreshed interface inspired by the GGC website.",
      "The focus was on making the application easier to use, more accessible, and more efficient for both students and administrators.",
    ],
    role: [
      "I served as Testing Lead, Documentation Lead, and Programmer on the project.",
      "As Testing Lead, I planned and ran testing throughout development, verified new features, tracked defects, and worked with the team to resolve issues before release. I also helped confirm that accessibility improvements and key user workflows behaved correctly across the app.",
      "As Documentation Lead, I kept project docs current, recorded feature updates and system changes, and helped the team stay aligned on requirements. Clear documentation made collaboration and long-term maintenance easier.",
      "As a Programmer, I helped implement new features, fix bugs, and improve overall functionality alongside the team, with a focus on a better experience for students and administrators.",
    ],
    learned: [
      "Working on the EXACT App strengthened both my technical and collaboration skills. Contributing to an existing production app taught me how to learn an established codebase, ship features without breaking what already works, and keep the product consistent.",
      "I also saw the value of structured testing and thorough documentation. Test plans, verification, and clear change notes reduced defects and made team communication more effective. Along the way, I built a stronger grasp of accessibility, user-centered design, and how admin tools can simplify work through automation—like custom emails, certificates, and data exports.",
      "Most of all, this project reinforced that shipping polished software takes more than writing code. Planning, testing, documentation, collaboration, and steady refinement were all essential to delivering something reliable for real users.",
    ],
    links: { live: "", github: "" },
    video: null,
    screenshots: [],
  },
  {
    slug: "nanocraft",
    title: "NanoCraft",
    tech: [
      { name: "Java", pct: 100 },
    ],
    summary:
      "NanoCraft is a 2D RPG game that is inspired by Minecraft and is written entirely in Java..",
    description: [
      "This project was created to transform core concepts such as exploration, resource gathering, combat, and progression into a 2D, top-down format that everyone can enjoy.",
      "The game is written entirely in Java and uses the JavaSwing library for the GUI. The game is a single-player game.",
      "Exploration through different biomes, Combat with different monsters/enemies, Resource gathering, and Progression through the game.  ",
    ],
    role:
      "Sole developer. I designed and built the game from scratch, including the game engine, the GUI, the game logic, and the game mechanics.",
    learned:
      "How to design and build a 2D RPG game from scratch, including the game engine, the GUI, the game logic, and the game mechanics.",
    links: { live: "", github: "" },
    video: null,
    screenshots: [],
  },
  {
    slug: "todo-app",
    title: "TO-DO App",
    tech: [
      { name: "Vue.js 3", pct: 70 },
      { name: "MVC", pct: 20 },
      { name: "Vite", pct: 10 },
    ],
    summary:
      "A reactive Vue 3 task manager with an MVC structure, validation, and localStorage persistence.",
    description: [
      "I built a Vue 3 task manager using an MVC structure that separates data, UI, and logic. I designed a reactive TaskStore with validation and localStorage persistence.",
      "I created reusable components that emit add, complete, and delete events to the controller layer. I wrote controller logic that keeps the model and view in sync. I used the Composition API and Vite for a fast, clean workflow.",
    ],
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
    tech: [
      { name: "Java", pct: 60 },
      { name: "JavaFX", pct: 40 },
    ],
    summary:
      "A Minecraft-style text adventure with branching story paths and a JavaFX stats dashboard.",
    description: [
      "I built a Minecraft-style text adventure game in Java with branching story paths driven by player choices. I added a JavaFX dashboard that tracks inventory, progress, and game stats. I followed OOP principles and used an MVC structure across the codebase.",
    ],
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

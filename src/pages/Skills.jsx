import {
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss,
  SiPhp,
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiSpringboot,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSelenium,
  SiJunit5,
  SiDotnet,
  SiGit,
  SiGithub,
  SiDocker,
  SiLinux,
  SiKubernetes,
  SiNextdotjs,
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaVial,
  FaAws,
  FaSyncAlt,
  FaBrain,
} from "react-icons/fa";
import { TbBrandCSharp, TbBrandVscode } from "react-icons/tb";
import useInView from "../hooks/useInView";

const skills = {
  "Languages & Frameworks": [
    { name: "Java", icon: FaJava, color: "#f89820" },
    { name: "Python", icon: SiPython, color: "#3776ab" },
    { name: "C#", icon: TbBrandCSharp, color: "#9b4f96" },
    { name: "C++", icon: SiCplusplus, color: "#659ad2" },
    { name: "HTML", icon: SiHtml5, color: "#e34f26" },
    { name: "CSS", icon: SiCss, color: "#1572b6" },
    { name: "PHP", icon: SiPhp, color: "#777bb4" },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
    { name: "Angular", icon: SiAngular, color: "#dd0031" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6db33f" },
    { name: "React.js", icon: SiReact, color: "#61dafb" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4fc08d" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  ],
  Databases: [
    { name: "MySQL", icon: SiMysql, color: "#4479a1" },
    { name: "SQLite", icon: SiSqlite, color: "#67b7d1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
    { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
    { name: "AWS RDS", icon: FaDatabase, color: "#ff9900" },
    { name: "AWS DynamoDB", icon: FaDatabase, color: "#4053d6" },
    { name: "AWS Redshift", icon: FaDatabase, color: "#8c4fff" },
    { name: "AWS Aurora", icon: FaDatabase, color: "#527fff" },
  ],
  "Testing Tools": [
    { name: "Selenium WebDriver", icon: SiSelenium, color: "#43b02a" },
    { name: "JUnit", icon: SiJunit5, color: "#25a162" },
    { name: "Mockito", icon: FaVial, color: "#c5d92d" },
    { name: "ASP.NET Core", icon: SiDotnet, color: "#512bd4" },
  ],
  "Tools & DevOps": [
    { name: "Git", icon: SiGit, color: "#f05032" },
    { name: "GitHub", icon: SiGithub, color: "#f7f7f7" },
    { name: "Docker", icon: SiDocker, color: "#2496ed" },
    { name: "Linux", icon: SiLinux, color: "#fcc624" },
    { name: "AWS", icon: FaAws, color: "#ff9900" },
    { name: "Agile/Scrum", icon: FaSyncAlt, color: "#60a5fa" },
    { name: "VS Code", icon: TbBrandVscode, color: "#3ea8ff" },
  ],
};

const learning = [
  { name: "Kubernetes", icon: SiKubernetes, color: "#326ce5" },
  { name: "AWS Solutions Architect", icon: FaAws, color: "#ff9900" },
  { name: "Next.js", icon: SiNextdotjs, color: "#f7f7f7" },
  { name: "AI/Machine Learning", icon: FaBrain, color: "#ff6f00" },
];

function SkillChip({ skill, delay, learning: isLearning }) {
  const Icon = skill.icon;
  return (
    <span
      className={`skill-chip pop-in${isLearning ? " skill-chip--learning" : ""}`}
      style={{
        "--skill-color": skill.color,
        animationDelay: `${delay}s`,
      }}
    >
      <Icon className="skill-chip-icon" aria-hidden="true" />
      <span className="skill-chip-label">{skill.name}</span>
    </span>
  );
}

function SkillsCategory({ title, subtitle, items, learning: isLearning }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`skills-category${inView ? " is-visible" : ""}`}
    >
      <div className="skills-category-header">
        <h2 className="skills-category-title">{title}</h2>
      </div>
      {subtitle && <p className="skills-category-subtitle">{subtitle}</p>}
      <div className="skills-chips">
        {items.map((skill, index) => (
          <SkillChip
            key={skill.name}
            skill={skill}
            delay={0.15 + index * 0.05}
            learning={isLearning}
          />
        ))}
      </div>
    </div>
  );
}

function SkillsCta() {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`skills-cta${inView ? " is-visible" : ""} flex flex-wrap gap-2 sm:gap-4`}
    >
      <a href="/projects" className="btn">
        See these skills in action
      </a>
      <a href="/contact" className="btn btn-secondary">
        Get in touch
      </a>
    </div>
  );
}

function Skills() {
  return (
    <section className="page skills-page w-full overflow-x-hidden">
      <h1 className="fade-in-up text-2xl sm:text-3xl">My Skills!</h1>
      <p className="fade-in-up delay-1">
        What I&apos;m comfortable working with right now.
      </p>

      <div className="skills-groups mt-6 sm:mt-8">
        {Object.entries(skills).map(([category, items]) => (
          <SkillsCategory key={category} title={category} items={items} />
        ))}

        <SkillsCategory
          title="Currently Learning"
          subtitle="What I'm exploring next."
          items={learning}
          learning
        />
      </div>

      <SkillsCta />
    </section>
  );
}

export default Skills;

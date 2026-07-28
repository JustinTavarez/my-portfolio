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
} from "react-icons/si";
import { FaJava, FaDatabase, FaVial } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

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
};

function Skills() {
  // Global stagger index so chips cascade in across the whole page
  let chipIndex = 0;

  return (
    <section className="page skills-page w-full overflow-x-hidden">
      <h1 className="fade-in-up text-2xl sm:text-3xl">My Skills!</h1>
      <p className="fade-in-up delay-1">
        What I&apos;m comfortable working with right now.
      </p>

      <div className="skills-groups mt-6 sm:mt-8">
        {Object.entries(skills).map(([category, items], categoryIndex) => (
          <div
            key={category}
            className="skills-category fade-in-up"
            style={{ animationDelay: `${0.25 + categoryIndex * 0.15}s` }}
          >
            <div className="skills-category-header">
              <h2 className="skills-category-title">{category}</h2>
            </div>

            <div className="skills-chips">
              {items.map((skill) => {
                const Icon = skill.icon;
                const delay = 0.4 + chipIndex * 0.04;
                chipIndex += 1;
                return (
                  <span
                    key={skill.name}
                    className="skill-chip pop-in"
                    style={{
                      "--skill-color": skill.color,
                      animationDelay: `${delay}s`,
                    }}
                  >
                    <Icon className="skill-chip-icon" aria-hidden="true" />
                    <span className="skill-chip-label">{skill.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

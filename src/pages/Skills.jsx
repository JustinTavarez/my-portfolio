const skills = {
  "Languages & Frameworks": [
    "Java",
    "Python",
    "C#",
    "C++",
    "HTML",
    "CSS",
    "PHP",
    "JavaScript",
    "TypeScript",
    "Angular",
    "Spring Boot",
    "React.js",
    "Vue.js",
    "Node.js",
  ],
  "Databases": ["MySQL", "SQLite", "MongoDB", "PostgreSQL", "Firebase", "AWS RDS", "AWS DynamoDB", "AWS Redshift", "AWS Aurora"],
  "Testing Tools": ["Selenium WebDriver", "JUnit", "Mockito", "ASP.NET Core"],
};

function Skills() {
  return (
    <section className="page skills-page w-full overflow-x-hidden">
      <h1 className="fade-in-up text-2xl sm:text-3xl">My Skills</h1>
      <p className="fade-in-up delay-1">What I'm comfortable working with right now.</p>

      <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-6 sm:mt-8">
        {Object.entries(skills).map(([category, items], index) => (
          <div 
            key={category} 
            className={`skills-column fade-in-up delay-${index + 2} w-full min-w-0 p-4 sm:p-5`}
          >
            <h2>{category}</h2>
            <ul>
              {items.map((item, itemIndex) => (
                <li 
                  key={item}
                  style={{ animationDelay: `${(index * 0.1) + (itemIndex * 0.05) + 0.6}s` }}
                  className="skill-item"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

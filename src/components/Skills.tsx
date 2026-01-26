import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React / Next.js", level: 80 },
  { name: "TypeScript", level: 80 },
  { name: "Express.js", level: 65 },
  { name: "Spring Boot", level: 20 },
  { name: "Tailwind CSS", level: 80 },
  { name: "PostgreSQL", level: 55 },
  { name: "MongoDB", level: 55 },
  { name: "Docker", level: 15 },
];

const technologies = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express.js",
  "Spring Boot",
  "Tailwind",
  "PostgreSQL",
  "Docker",
  "MongoDB",
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section-padding bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Skills Bars */}
          <div>
            <p
              className={`text-primary font-medium tracking-widest uppercase text-sm mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              My Skills
            </p>
            <h2
              className={`text-4xl md:text-5xl font-display font-semibold mb-12 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Expertise &<br />
              Proficiency
            </h2>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${400 + index * 100}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <p
              className={`text-primary font-medium tracking-widest uppercase text-sm mb-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Technologies
            </p>
            <h2
              className={`text-4xl md:text-5xl font-display font-semibold mb-12 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Tools I
              <br />
              Work With
            </h2>

            <div className="flex flex-wrap gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={tech}
                  className={`px-6 py-3 bg-card border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300 cursor-default ${
                    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 50}ms`,
                    transitionDuration: "500ms",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

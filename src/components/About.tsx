import profilePic from "@/assets/my-pic.png";
import { useEffect, useRef, useState } from "react";

const About = () => {
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

  const stats = [
    { value: "1+", label: "Year of Experience" },
    { value: "2+", label: "Projects Delivered" },
    // { value: "30+", label: "Satisfied Clients" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div
            className={`relative transition-all duration-1000 max-w-sm mx-auto lg:mx-0 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[4/5] rounded-2xl bg-card overflow-hidden relative">
              <img
                src={profilePic}
                alt="profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 leading-tight">
              Creating meaningful
              <br />
              digital experiences
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I’m a full stack developer who enjoys building clean, scalable,
              and user-focused web applications. With 1+ year of experience, I
              help turn ideas into reliable products that solve real problems.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              Outside of work, I like learning new technologies, improving UI
              details, contributing to open-source projects, and taking breaks
              with playing Dota2.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <p className="text-4xl font-display font-semibold text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

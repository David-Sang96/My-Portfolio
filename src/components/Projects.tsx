import note from "@/assets/d-notes.jpg";
import fashion from "@/assets/fashion_blog.jpg";
import iCoreImg from "@/assets/iCore.png";
import netflix from "@/assets/netflix.jpg";
import recipe from "@/assets/recipes.jpg";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  demo: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A modern shopping experience with seamless checkout flow",
    demo: "https://icore-shop-psi.vercel.app/",
    image: iCoreImg,
  },
  {
    id: 2,
    title: "Fashion Blog",
    category: "Web Development",
    description: "A simple landing page of Fashion Blog Posts",
    demo: "https://blog-landing-xi.vercel.app/",
    image: fashion,
  },
  {
    id: 3,
    title: "Note Application",
    category: "Web Development",
    description:
      "A simple app for users to create, manage, and share their notes with images effortlessly.",
    demo: "https://dnotepri.onrender.com",
    image: note,
  },
  {
    id: 1,
    title: "Movie Platform",
    category: "Web Development",
    description:
      "A Netflix-inspired streaming app showcasing movies and series with user authentication and watch the favorite movies.",
    demo: "https://movie-app-kozt.onrender.com/",
    image: netflix,
  },
  {
    id: 1,
    title: "Recipe Sharing Platform",
    category: "Web Development",
    description:
      "A platform for food lovers to create, share, and explore recipes with user profiles and save features.",
    demo: "https://foodie-front-r4x6.onrender.com/sign-in",
    image: recipe,
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Selected Work
          </p> */}
          <h2 className="text-4xl md:text-5xl font-display font-semibold">
            Recent Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="card-hover rounded-2xl overflow-hidden bg-card border border-border">
                {/* Project Image Placeholder */}
                <div className="aspect-[16/10] relative overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 rounded-full bg-foreground flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100"
                    >
                      <ArrowUpRight className="w-6 h-6 text-background" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <p className="text-primary text-sm font-medium mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

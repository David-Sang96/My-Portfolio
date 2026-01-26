import { useEffect, useState } from "react";
import { ModeToggle } from "./mode-toggle";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="font-display text-2xl font-semibold tracking-tight text-foreground"
          >
            Portfolio<span className="text-primary">.</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link text-sm font-medium tracking-wide uppercase"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#contact"
              className="hidden md:inline-flex px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Let's Talk
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

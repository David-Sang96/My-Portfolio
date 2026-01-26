import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding pt-32">
      <div className="max-w-5xl">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 animate-slide-up">
          Software Engineer
        </p>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold leading-[1.1] mb-8">
          <span className="animate-slide-up-delay-1 block">
            Building modern
          </span>
          <span className="animate-slide-up-delay-2 block">
            web apps that <span className="text-gradient">matter</span>
          </span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-12 animate-slide-up-delay-3">
          I’m a full stack developer who loves turning ideas into fast,
          scalable, and user-friendly applications.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-slide-up-delay-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1"
          >
            See My Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
          >
            More about me
          </a>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-1/2 right-12 lg:right-24 -translate-y-1/2 hidden xl:block">
        <div className="w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;

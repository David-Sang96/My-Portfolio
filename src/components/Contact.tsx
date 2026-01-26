import { useForm, ValidationError } from "@formspree/react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AiOutlineDiscord } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { RiGithubLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Formspree setup
  const [state, handleSubmit] = useForm("xbdogday");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/David-Sang96",
      icon: <RiGithubLine className="size-4" />,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/david-sang-1226b3302/",
      icon: <SlSocialLinkedin className="size-4" />,
    },
    {
      name: "Discord",
      href: "https://discord.com/users/926160311738855564",
      icon: <AiOutlineDiscord className="size-4" />,
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Content */}
          <div>
            <p
              className={`text-primary font-medium tracking-widest uppercase text-sm mb-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Get In Touch
            </p>
            <h2
              className={`text-4xl md:text-5xl lg:text-6xl font-display font-semibold mb-8 leading-tight transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              Let's create
              <br />
              something <span className="text-gradient">amazing</span>
              <br />
              together
            </h2>

            <div
              className={`space-y-4 mb-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <div className="flex items-center gap-4 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>luainawl@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>
                  Jalan Baiduri, Off Jalan Sanpeng, Kuala Lumpur, Malaysia
                </span>
              </div>
            </div>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full text-sm font-medium hover:border-primary hover:text-primary transition-all duration-300"
                >
                  {link.icon} {link.name}
                  <ArrowUpRight className="size-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {state.succeeded ? (
              <div className="p-8 bg-card rounded-2xl text-center">
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  Thank you!
                </h3>
                <p className="text-muted-foreground">
                  Your message has been sent. I will get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 resize-none"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  {state.submitting ? (
                    <div className="flex items-center gap-2 justify-center">
                      <span>Sending</span>
                      <div className="flex space-x-1">
                        <span className="dot animate-bounce delay-0 bg-white size-1.5 rounded-full"></span>
                        <span className="dot animate-bounce delay-200 bg-white size-1.5 rounded-full"></span>
                        <span className="dot animate-bounce delay-400 bg-white size-1.5 rounded-full"></span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 justify-center">
                      <span>Send Message</span>
                      <BsSend className="w-4 h-4" />
                    </div>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

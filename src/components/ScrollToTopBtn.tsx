import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    //Now you're tracking UX interactions too 😎
    window.gtag?.("event", "scroll_to_top_click", {
      event_category: "engagement",
      event_label: "Scroll To Top Button",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 lg:p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-110 transition-all duration-300 z-50"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTopButton;

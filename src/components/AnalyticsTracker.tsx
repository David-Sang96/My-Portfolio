import { useEffect } from "react";
import { useLocation } from "react-router";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-06ER8V9TGT", {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
};

export default AnalyticsTracker;

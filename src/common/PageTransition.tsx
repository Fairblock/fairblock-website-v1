import { useLocation } from "react-router-dom";
import { type ReactNode } from "react";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  return (
    <div
      key={location.pathname}
      style={{ animation: "pageFadeIn 0.35s ease forwards" }}
    >
      {children}
    </div>
  );
};

export default PageTransition;

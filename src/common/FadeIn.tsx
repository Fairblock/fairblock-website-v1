import { useEffect, useRef, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "none";
};

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: direction === "up" ? "translateY(28px)" : "none",
        transition: "opacity 0.65s ease, transform 0.65s ease",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;

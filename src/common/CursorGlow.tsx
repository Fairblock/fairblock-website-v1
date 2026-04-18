import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glow = glowRef.current;
      if (!glow) return;
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2"
      style={{
        width: "500px",
        height: "500px",
        background: "radial-gradient(circle, rgba(88,189,246,0.07) 0%, transparent 70%)",
        transition: "left 0.12s ease, top 0.12s ease",
      }}
    />
  );
};

export default CursorGlow;

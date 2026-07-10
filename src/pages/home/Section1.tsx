import { useEffect, useState } from "react";
import HeroNetworkAnimation from "./HeroNetworkAnimation";

export default function Section1() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "90vh" }}
    >
      <div
        className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 px-6 sm:px-10 lg:px-14"
        style={{ minHeight: "90vh", paddingTop: "12vh", paddingBottom: "6vh" }}
      >
        {/* ── Left: Text ── */}
        <div className="flex flex-col justify-center w-full lg:w-[42%] lg:pr-10">

          {/* Heading */}
          <h1 className="font-heading font-normal" style={{ lineHeight: 1.05, letterSpacing: "-0.025em", fontSize: "clamp(3.2rem, 5.2vw, 6rem)" }}>
            <span style={fade(120)}>Powering </span>
            <em style={{ color: "#58BDF6", fontStyle: "italic", ...fade(210) }}>Incorruptible </em>
            <span style={fade(300)}>Markets and Machines</span>
          </h1>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap mt-10" style={fade(520)}>
            <a href="https://docs.fairblock.network/"
              target="_blank" rel="noopener noreferrer"
              className="btn-ink">
              Read the docs
            </a>
            <a href="https://docs.fairblock.network/ct/guides/build/building-with-sdk"
              target="_blank" rel="noopener noreferrer"
              className="btn-outline">
              Start building
            </a>
          </div>
        </div>

        {/* ── Right: Animation ── */}
        <div className="w-full lg:w-[58%] flex items-center" style={fade(300)}>
          <HeroNetworkAnimation />
        </div>
      </div>
    </section>
  );
}

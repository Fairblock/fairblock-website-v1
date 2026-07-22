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
        className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 px-4 sm:px-8 lg:pl-14"
        style={{ minHeight: "90vh", paddingTop: "12vh", paddingBottom: "6vh" }}
      >
        {/* ── Left: Text ── */}
        <div className="w-full lg:w-[44%] lg:pr-6 flex flex-col">
          {/* Heading */}
          <h1 className="font-heading font-normal text-[#141210]" style={{ lineHeight: 1.02, letterSpacing: "-0.03em", fontSize: "clamp(3rem, 4.8vw, 5.5rem)" }}>
            <span style={fade(120)}>The Turnkey </span>
            <em style={{ color: "#58BDF6", fontStyle: "italic", ...fade(210) }}>Confidentiality </em>
            <span style={fade(300)}>Layer</span>
          </h1>

          <div
            className="mt-7"
            style={fade(390)}
          >
            <p className="max-w-[40rem] text-base sm:text-lg leading-[1.65]">
              Fairblock enables confidential assets, transactions, and intelligent
              applications without requiring users to change wallets, bridge assets,
              or adopt new infrastructure. Built for stablecoins, tokenized assets,
              AI inference, and enterprise applications.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap mt-8" style={fade(520)}>
            <a href="/capps" className="btn-ink">
              Application Showcase
            </a>
            <a href="https://docs.fairblock.network/ct/guides/build/building-with-sdk"
              target="_blank" rel="noopener noreferrer"
              className="btn-outline">
              Start building
            </a>
          </div>
        </div>

        {/* ── Right: Animation ── */}
        <div className="w-full lg:w-[56%] flex items-center" style={fade(300)}>
          <HeroNetworkAnimation />
        </div>
      </div>
    </section>
  );
}

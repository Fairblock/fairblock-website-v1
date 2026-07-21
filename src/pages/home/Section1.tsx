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
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-[#58BDF6]/15 blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-[34%] h-72 w-72 rounded-full bg-[#B9E6FF]/20 blur-[100px]" />

      <div
        className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 px-6 sm:px-10 lg:px-14"
        style={{ minHeight: "90vh", paddingTop: "12vh", paddingBottom: "6vh" }}
      >
        {/* ── Left: Text ── */}
        <div className="w-full lg:w-[44%] lg:pr-6">
          <div className="relative flex flex-col justify-center overflow-hidden rounded-[1.75rem] border border-white/90 bg-white/60 p-6 shadow-[0_24px_80px_rgba(31,112,158,0.12),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl sm:p-8 lg:p-9">
          <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#58BDF6]/12 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#58BDF6]/55 to-transparent" />

          {/* Heading */}
          <h1 className="relative font-heading font-normal" style={{ lineHeight: 1.02, letterSpacing: "-0.03em", fontSize: "clamp(3rem, 4.8vw, 5.5rem)" }}>
            <span style={fade(120)}>The Turnkey </span>
            <em style={{ color: "#58BDF6", fontStyle: "italic", ...fade(210) }}>Confidentiality </em>
            <span style={fade(300)}>Layer</span>
          </h1>

          <div
            className="relative mt-7 overflow-hidden rounded-2xl border border-white/95 bg-white/55 p-5 shadow-[0_14px_40px_rgba(31,112,158,0.09),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-lg sm:p-6"
            style={fade(390)}
          >
            <div className="pointer-events-none absolute -right-12 -top-16 h-36 w-36 rounded-full bg-[#58BDF6]/15 blur-3xl" />
            <p
              className="relative max-w-[40rem] text-base sm:text-lg leading-[1.65]"
              style={{ color: "rgba(9, 15, 20, 0.72)" }}
            >
              Fairblock enables confidential assets, transactions, and intelligent
              applications without requiring users to change wallets, bridge assets,
              or adopt new infrastructure. Built for stablecoins, tokenized assets,
              AI inference, and enterprise applications.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap mt-8" style={fade(520)}>
            <a href="/capps"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-[#000D14]/90 px-6 py-3 text-sm font-medium tracking-[0.02em] text-white shadow-[0_12px_30px_rgba(0,13,20,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#000D14] hover:shadow-[0_16px_36px_rgba(0,13,20,0.24)]">
              Application Showcase
            </a>
            <a href="https://docs.fairblock.network/ct/guides/build/building-with-sdk"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/95 bg-white/55 px-6 py-3 text-sm font-medium tracking-[0.02em] text-[#000D14] shadow-[0_12px_30px_rgba(31,112,158,0.1),inset_0_1px_0_rgba(255,255,255,1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-blue/35 hover:bg-white/80 hover:shadow-[0_16px_36px_rgba(31,112,158,0.16)]">
              Start building
            </a>
          </div>
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

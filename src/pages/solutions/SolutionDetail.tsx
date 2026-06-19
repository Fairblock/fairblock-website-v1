import { useParams, Navigate } from "react-router-dom";
import { SOLUTIONS } from "./solutionsData";

export default function SolutionDetail() {
  const { solutionId } = useParams<{ solutionId: string }>();
  const solution = SOLUTIONS.find(s => s.id === solutionId);

  if (!solution) return <Navigate to={`/solutions/${SOLUTIONS[0].id}`} replace />;

  return (
    <div className="mx-auto max-w-[1920px]">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        className="flex items-center px-6 sm:px-10 lg:px-14 xl:px-20"
        style={{ minHeight: "90vh", paddingTop: "10vh", paddingBottom: "8vh" }}
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Left: text */}
          <div className="flex flex-col gap-6">
            {/* Category pill */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "1px solid rgba(0,0,0,0.12)",
              padding: "5px 12px",
              width: "fit-content",
            }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#8892A4",
              }}>
                {solution.title}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-heading font-normal"
              style={{
                fontSize: "clamp(2.8rem, 5vw, 4.4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "#141210",
              }}
            >
              {solution.headline}
            </h1>

            {/* Description */}
            <p style={{
              fontFamily: "'Maison Neue', sans-serif",
              fontSize: "16px",
              lineHeight: 1.8,
              color: "#141210",
              opacity: 0.55,
              maxWidth: "520px",
            }}>
              {solution.description}
            </p>

            {/* CTA */}
            <div className="flex gap-3 flex-wrap pt-2">
              <a href="mailto:hello@fairblock.network" className="btn-ink">
                Contact us
              </a>
            </div>
          </div>

          {/* Right: graphic */}
          <div style={{ border: "1px solid rgba(0,0,0,0.07)", overflow: "hidden" }}>
            <solution.Graphic />
          </div>
        </div>
      </section>

      {/* ── Feature cards ─────────────────────────────────────────────────── */}
      <section className="border-t border-black/8 px-6 sm:px-10 lg:px-14 xl:px-20 py-16">
        {/* Label */}
        <div className="flex items-center gap-3 mb-12">
          <div style={{ width: "12px", height: "12px", background: "#58BDF6", flexShrink: 0 }} />
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#8892A4",
          }}>
            Key capabilities
          </span>
        </div>

        {/* 3-col cards with vertical dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-black/8">
          {solution.features.map((f, i) => (
            <div key={i} className="flex flex-col gap-5 px-0 sm:px-8 xl:px-10 py-6 sm:py-0 first:pl-0 last:pr-0">
              {/* Icon circle */}
              <div style={{
                width: "44px",
                height: "44px",
                border: "1px solid rgba(0,0,0,0.1)",
                background: "rgba(0,0,0,0.025)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <f.Icon size={18} strokeWidth={1.5} color="#141210" />
              </div>

              <h3
                className="font-heading font-normal"
                style={{ fontSize: "1.25rem", lineHeight: 1.2, letterSpacing: "-0.01em", color: "#141210" }}
              >
                {f.title}
              </h3>

              <p style={{
                fontFamily: "'Maison Neue', sans-serif",
                fontSize: "14px",
                lineHeight: 1.75,
                color: "#141210",
                opacity: 0.5,
              }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="border-t border-black/8 px-6 sm:px-10 lg:px-14 xl:px-20 py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <h2
            className="font-heading font-normal"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", lineHeight: 1.1, letterSpacing: "-0.025em", color: "#141210" }}
          >
            Ready to get started?
          </h2>
          <p style={{
            fontFamily: "'Maison Neue', sans-serif",
            fontSize: "15px",
            color: "#141210",
            opacity: 0.45,
            marginTop: "0.5rem",
          }}>
            Talk to our team about {solution.title.toLowerCase()}.
          </p>
        </div>
        <a href="mailto:hello@fairblock.network" className="btn-ink" style={{ whiteSpace: "nowrap" }}>
          Contact us →
        </a>
      </section>
    </div>
  );
}

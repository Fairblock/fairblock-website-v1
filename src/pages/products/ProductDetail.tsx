import { useParams, Navigate } from "react-router-dom";
import { PiArrowUpRightBold } from "react-icons/pi";
import { PRODUCTS } from "./productsData";

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const product = PRODUCTS.find(p => p.id === productId);

  if (!product) return <Navigate to={`/products/${PRODUCTS[0].id}`} replace />;

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
                {product.title}
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
              {product.headline}
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
              {product.description}
            </p>

            {/* CTA */}
            <div className="flex gap-3 flex-wrap pt-2">
              <a
                href={product.ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ink inline-flex items-center gap-2"
              >
                {product.ctaLabel}
                <PiArrowUpRightBold />
              </a>
            </div>
          </div>

          {/* Right: graphic */}
          <div style={{ border: "1px solid rgba(0,0,0,0.07)", overflow: "hidden" }}>
            <product.Graphic />
          </div>
        </div>
      </section>

      {/* ── Embedded in ──────────────────────────────────────────────────── */}
      {product.embeddedIn && (
        <section className="border-t border-black/8 px-6 sm:px-10 lg:px-14 xl:px-20 py-16">
          {/* Label */}
          <div className="flex items-center gap-3 mb-4">
            <div style={{ width: "12px", height: "12px", background: "#58BDF6", flexShrink: 0 }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#8892A4",
            }}>
              Embedded everywhere
            </span>
          </div>

          <h2
            className="font-heading font-normal mb-4"
            style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)", lineHeight: 1.15, letterSpacing: "-0.02em", color: "#141210", maxWidth: "40rem" }}
          >
            Embed confidential transfers into the products people already use.
          </h2>

          <p style={{
            fontFamily: "'Maison Neue', sans-serif",
            fontSize: "15px",
            lineHeight: 1.7,
            color: "#141210",
            opacity: 0.55,
            maxWidth: "40rem",
            marginBottom: "2.5rem",
          }}>
            The SDK installs once and works the same way everywhere, so the hard part is done in minutes, not weeks. Confidential transfers slot into any layer of the stack, wallets, neobanks, DeFi protocols, and issuers alike, without custom integration work.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
            {product.embeddedIn.map(cat => (
              <div key={cat.label} className="flex flex-col gap-4">
                <h3 style={{
                  fontFamily: "'Maison Neue', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  color: "#141210",
                  opacity: 0.85,
                }}>
                  {cat.label}
                </h3>
                <div className="flex flex-col gap-2.5">
                  {cat.examples.map(ex => {
                    const name = typeof ex === "string" ? ex : ex.name;
                    const logo = typeof ex === "string" ? null : ex.logo;
                    return (
                      <div key={name} className="flex items-center gap-2">
                        {logo ? (
                          <img
                            src={logo}
                            alt={name}
                            style={{ width: "22px", height: "22px", flexShrink: 0, objectFit: "cover" }}
                          />
                        ) : (
                          <span style={{
                            width: "22px",
                            height: "22px",
                            flexShrink: 0,
                            border: "1px solid rgba(0,0,0,0.12)",
                            background: "rgba(0,0,0,0.025)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: "8px",
                            color: "#8892A4",
                          }}>
                            {name
                              .split(/\s+/)
                              .map(w => w[0])
                              .join("")
                              .slice(0, 2)
                              .toUpperCase()}
                          </span>
                        )}
                        <span style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "13.5px", color: "#141210", opacity: 0.7 }}>
                          {name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <p style={{
            fontFamily: "'Maison Neue', sans-serif",
            fontSize: "12px",
            lineHeight: 1.6,
            color: "#141210",
            opacity: 0.4,
            maxWidth: "44rem",
            marginTop: "2.5rem",
          }}>
            Names above are illustrative, not a confirmed partner list. If you're building one of these and want confidential transfers, let's talk.
          </p>
        </section>
      )}

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
          {product.features.map((f, i) => (
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
            Try {product.title} today.
          </p>
        </div>
        <a
          href={product.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ink inline-flex items-center gap-2"
          style={{ whiteSpace: "nowrap" }}
        >
          {product.ctaLabel}
          <PiArrowUpRightBold />
        </a>
      </section>
    </div>
  );
}

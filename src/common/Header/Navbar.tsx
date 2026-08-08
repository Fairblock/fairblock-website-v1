import { Link, useLocation } from "react-router-dom";
import { useState, useRef, type Dispatch, type SetStateAction } from "react";
import { SOLUTIONS } from "../../pages/solutions/solutionsData";
import { NAV_PRODUCTS } from "../../pages/products/productsData";

export type NavbarProps = {
  isMobileNav: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ isMobileNav, setMenuOpen }: NavbarProps) => {
  const location = useLocation();
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const [productsOpen, setProductsOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  const linkClass = (path: string) =>
    `transition-colors duration-200 font-maison-neue text-sm tracking-wide ${
      location.pathname === path
        ? "text-[#000D14] font-medium"
        : "text-[#000D14]/55 hover:text-[#000D14]"
    }`;

  return (
    <>
      {/* Products dropdown */}
      {isMobileNav ? (
        <div className="flex flex-col gap-1">
          <span className="text-[#000D14]/55 text-sm tracking-wide font-maison-neue">Products</span>
          <div className="flex flex-col gap-1 pl-3 border-l border-black/10">
            {NAV_PRODUCTS.map(p => p.internal ? (
              <Link
                key={p.id}
                to={p.to}
                onClick={() => setMenuOpen(false)}
                className="text-[#000D14]/50 hover:text-[#000D14] text-sm transition-colors duration-150 py-0.5"
                style={{ fontFamily: "'Maison Neue', sans-serif" }}
              >
                {p.title}
              </Link>
            ) : (
              <a
                key={p.id}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-1.5 text-[#000D14]/50 hover:text-[#000D14] text-sm transition-colors duration-150 py-0.5"
                style={{ fontFamily: "'Maison Neue', sans-serif" }}
              >
                {p.title}
                <span style={{ fontSize: "11px" }}>↗</span>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div
          ref={productsRef}
          className="relative"
          onMouseEnter={() => setProductsOpen(true)}
          onMouseLeave={() => setProductsOpen(false)}
        >
          <button
            className={`flex items-center gap-1 transition-colors duration-200 font-maison-neue text-sm tracking-wide ${
              location.pathname.startsWith("/products")
                ? "text-[#000D14] font-medium"
                : "text-[#000D14]/55 hover:text-[#000D14]"
            }`}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            Products
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transition: "transform .2s", transform: productsOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
            </svg>
          </button>

          {/* Dropdown */}
          {productsOpen && (
            <div
              className="absolute left-0 top-full pt-3 z-50"
              style={{ minWidth: "220px" }}
            >
              <div style={{
                background: "#FAFAF8",
                border: "1px solid rgba(0,0,0,0.1)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                padding: "8px 0",
              }}>
                {NAV_PRODUCTS.map(p => p.internal ? (
                  <Link
                    key={p.id}
                    to={p.to}
                    style={{ display: "flex", alignItems: "center", padding: "10px 16px", textDecoration: "none", transition: "background .12s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.03)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <span style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "13.5px", color: "#141210" }}>{p.title}</span>
                  </Link>
                ) : (
                  <a
                    key={p.id}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px", padding: "10px 16px", textDecoration: "none", transition: "background .12s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.03)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <span style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "13.5px", color: "#141210" }}>{p.title}</span>
                    <span style={{ fontSize: "11px", color: "#8892A4" }}>↗</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      {/* Solutions dropdown */}
      {isMobileNav ? (
        <div className="flex flex-col gap-1">
          <span className="text-[#000D14]/55 text-sm tracking-wide font-maison-neue">Solutions</span>
          <div className="flex flex-col gap-1 pl-3 border-l border-black/10">
            {SOLUTIONS.map(s => (
              <Link
                key={s.id}
                to={`/solutions/${s.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-[#000D14]/50 hover:text-[#000D14] text-sm transition-colors duration-150 py-0.5"
                style={{ fontFamily: "'Maison Neue', sans-serif" }}
              >
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div
          ref={solutionsRef}
          className="relative"
          onMouseEnter={() => setSolutionsOpen(true)}
          onMouseLeave={() => setSolutionsOpen(false)}
        >
          <button
            className={`flex items-center gap-1 transition-colors duration-200 font-maison-neue text-sm tracking-wide ${
              location.pathname.startsWith("/solutions")
                ? "text-[#000D14] font-medium"
                : "text-[#000D14]/55 hover:text-[#000D14]"
            }`}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            Solutions
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transition: "transform .2s", transform: solutionsOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
            </svg>
          </button>

          {/* Dropdown */}
          {solutionsOpen && (
            <div
              className="absolute left-0 top-full pt-3 z-50"
              style={{ minWidth: "260px" }}
            >
              <div style={{
                background: "#FAFAF8",
                border: "1px solid rgba(0,0,0,0.1)",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                padding: "8px 0",
              }}>
                {SOLUTIONS.map(s => (
                  <Link
                    key={s.id}
                    to={`/solutions/${s.id}`}
                    style={{ display: "flex", alignItems: "center", gap: "10px", padding: "10px 16px", textDecoration: "none", transition: "background .12s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.03)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "8.5px", color: "#58BDF6", minWidth: "20px", letterSpacing: "0.05em" }}>{s.number}</span>
                    <span style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "13.5px", color: "#141210" }}>{s.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      <Link
        className={linkClass("/how-it-works")}
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        to="how-it-works"
      >
        How it works
      </Link>
      <Link
        className={linkClass("/capps")}
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        to="capps"
      >
        Application Showcase
      </Link>
      <a
        href="https://docs.fairblock.network/"
        target="_blank"
        rel="noopener noreferrer"
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        className={linkClass("")}
      >
        Docs
      </a>
    </>
  );
};

export default Navbar;

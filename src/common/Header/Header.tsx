import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Navbar from "./Navbar";
import { SOLUTIONS } from "../../pages/solutions/solutionsData";

const ChevronDown = ({ open }: { open: boolean }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
    style={{ transition: "transform .25s", transform: open ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}>
    <path d="M3 5.5L8 10.5L13 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
  </svg>
);

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setVisible(y <= 50 || y < lastScrollY);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setSolutionsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleCopy = () => {
    navigator.clipboard.writeText("hello@fairblock.network");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const close = () => { setMenuOpen(false); setSolutionsOpen(false); };

  const navItems = [
    { to: "/how-it-works", label: "How it works" },
    { to: "/capps",        label: "Application Showcase" },
    { to: "/articles",     label: "Articles" },
  ];

  return (
    <>
      {/* ── Floating header bar ── */}
      <div className={`${
        visible ? "translate-y-0" : "-translate-y-[120px]"
      } fixed top-4 xl:top-6 left-0 right-0 flex justify-center transition-transform duration-300 z-50`}>
        <div className={`font-maison-neue flex items-center justify-between px-5 sm:px-8 py-3 sm:py-4 w-[95%] max-w-[1800px] transition-all duration-300 relative z-10 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.08)] border border-black/[0.07]"
            : "bg-white/70 backdrop-blur-sm border border-black/[0.06]"
        }`}>
          {/* Logo */}
          <Link to="/" className="flex gap-2 items-center" onClick={close}>
            <img className="h-6 sm:h-7 invert" src="/common/fairblock-logo.svg" alt="Fairblock" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-4 items-center text-base">
            <Navbar isMobileNav={false} setMenuOpen={setMenuOpen} />
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden h-11 w-11 -mr-2 flex items-center justify-center text-2xl text-[#000D14]/70 hover:text-[#000D14] transition-colors"
            onClick={() => setMenuOpen(p => !p)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* ── Mobile full-screen menu ── */}
      <div className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
        menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/10" onClick={close} />

        {/* Panel */}
        <div className={`absolute inset-x-0 top-0 bg-white transition-transform duration-300 ease-out flex flex-col ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        }`} style={{ minHeight: "100dvh" }}>

          {/* Panel header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-black/8">
            <Link to="/" onClick={close}>
              <img className="h-6 invert" src="/common/fairblock-logo.svg" alt="Fairblock" />
            </Link>
            <button
              onClick={close}
              className="h-11 w-11 -mr-2 flex items-center justify-center text-[#141210] hover:opacity-60 transition-opacity"
              aria-label="Close navigation menu"
            >
              <IoClose size={24} />
            </button>
          </div>

          {/* Nav items */}
          <div className="flex flex-col flex-1 px-6 pt-2 overflow-y-auto">

            {/* Solutions — expandable */}
            <div className="border-b border-black/8">
              <button
                className="flex items-center justify-between w-full py-5 text-left"
                onClick={() => setSolutionsOpen(p => !p)}
              >
                <span style={{ fontSize: "20px", color: "#141210", fontFamily: "'Maison Neue', sans-serif", fontWeight: 400 }}>
                  Solutions
                </span>
                <ChevronDown open={solutionsOpen} />
              </button>

              {/* Expanded solution list */}
              {solutionsOpen && (
                <div className="flex flex-col pb-3">
                  {SOLUTIONS.map(s => (
                    <Link
                      key={s.id}
                      to={`/solutions/${s.id}`}
                      onClick={close}
                      className="flex items-start gap-3 py-3 border-t border-black/5"
                    >
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "#58BDF6", letterSpacing: "0.1em", paddingTop: "3px", minWidth: "22px" }}>
                        {s.number}
                      </span>
                      <span style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "15px", color: "rgba(20,18,16,0.65)" }}>
                        {s.title}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other nav links */}
            {navItems.map(item => (
              <Link
                key={item.to}
                to={item.to}
                onClick={close}
                className="flex items-center justify-between py-5 border-b border-black/8"
                style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "20px", color: "#141210", textDecoration: "none", fontWeight: 400 }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://docs.fairblock.network/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={close}
              className="flex items-center justify-between py-5 border-b border-black/8"
              style={{ fontFamily: "'Maison Neue', sans-serif", fontSize: "20px", color: "#141210", textDecoration: "none", fontWeight: 400 }}
            >
              Docs
            </a>
          </div>

          {/* Bottom CTAs */}
          <div className="px-6 pb-10 pt-6 flex flex-col gap-4 border-t border-black/8">
            <div className="flex gap-3">
              <button onClick={handleCopy} className="btn-ink flex-1 justify-center">
                {copied ? "✓ Copied" : "Contact us"}
              </button>
              <a
                href="https://docs.fairblock.network/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline flex-1 justify-center"
              >
                Read the docs
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5 pt-1">
              <a href="https://x.com/0xfairblock" target="_blank" rel="noopener noreferrer"
                className="text-[#141210]/40 hover:text-[#141210] transition-colors">
                <FaXTwitter size={18} />
              </a>
              <a href="https://discord.com/invite/fairblock" target="_blank" rel="noopener noreferrer"
                className="text-[#141210]/40 hover:text-[#141210] transition-colors">
                <FaDiscord size={18} />
              </a>
              <button onClick={handleCopy} className="text-[#141210]/40 hover:text-[#141210] transition-colors">
                <MdEmail size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

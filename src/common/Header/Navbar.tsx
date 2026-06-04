import { Link, useLocation } from "react-router-dom";
import { useState, type Dispatch, type SetStateAction } from "react";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export type NavbarProps = {
  isMobileNav: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const EMAIL = "hello@fairblock.network";

const Navbar = ({ isMobileNav, setMenuOpen }: NavbarProps) => {
  const location = useLocation();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    if (isMobileNav) setMenuOpen(false);
    setTimeout(() => setCopied(false), 2000);
  };

  const linkClass = (path: string) =>
    `transition-colors duration-200 font-maison-neue text-sm tracking-wide ${
      location.pathname === path
        ? "text-[#000D14] font-medium"
        : "text-[#000D14]/55 hover:text-[#000D14]"
    }`;

  return (
    <>
      {location.pathname !== "/" && (
        <Link
          className={linkClass("/")}
          onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
          to="/"
        >
          Home
        </Link>
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
        Showcase
      </Link>
      <Link
        className={linkClass("/articles")}
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        to="articles"
      >
        Articles
      </Link>

      {/* Divider + icons */}
      <div className={`flex items-center gap-3 ${isMobileNav ? "" : "pl-4 border-l border-black/10"}`}>
        <a
          href="https://x.com/0xfairblock"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[#000D14]/45 hover:text-[#000D14] transition-colors duration-200"
        >
          <FaXTwitter className="text-base" />
        </a>
        <a
          href="https://discord.com/invite/fairblock"
          rel="noopener noreferrer"
          target="_blank"
          className="text-[#000D14]/45 hover:text-[#000D14] transition-colors duration-200"
        >
          <FaDiscord className="text-base" />
        </a>
        <button
          onClick={handleCopy}
          title={copied ? "Copied!" : EMAIL}
          className="text-[#000D14]/45 hover:text-[#000D14] transition-colors duration-200"
        >
          {copied
            ? <span className="text-xs font-semibold text-[#000D14]">✓</span>
            : <MdEmail className="text-lg" />
          }
        </button>
      </div>
    </>
  );
};

export default Navbar;

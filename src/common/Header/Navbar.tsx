import { Link, useLocation } from "react-router-dom";
import { useState, type Dispatch, type SetStateAction } from "react";
// icons
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// types
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

  return (
    <>
      {location.pathname !== "/" && (
        <Link
          className="flex items-center gap-1 font-heading font-medium"
          onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
          to="/"
        >
          Home
        </Link>
      )}
      <Link
        className={`font-heading ${location.pathname === "/how-it-works" ? "font-medium" : "font-normal"}`}
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        to="how-it-works"
      >
        How it works
      </Link>
      <Link
        className={`font-heading ${location.pathname === "/capps" ? "font-medium" : "font-normal"}`}
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        to="capps"
      >
        Applications
      </Link>
      <Link
        className={`font-heading ${location.pathname === "/articles" ? "font-medium" : "font-normal"}`}
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        to="articles"
      >
        Articles
      </Link>
      <div className="flex sm:pl-4 gap-4 items-center">
        <a href="https://x.com/0xfairblock" rel="noopener noreferrer" target="_blank">
          <FaXTwitter />
        </a>
        <a href="https://discord.com/invite/fairblock" rel="noopener noreferrer" target="_blank">
          <FaDiscord />
        </a>
        <button
          onClick={handleCopy}
          title={copied ? "Copied!" : EMAIL}
          className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-200"
        >
          {copied
            ? <span className="text-black text-xs font-semibold">✓</span>
            : <MdEmail className="text-black text-xl" />
          }
        </button>
      </div>
    </>
  );
};

export default Navbar;

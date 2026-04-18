import { Link, useLocation } from "react-router-dom";
import { type Dispatch, type SetStateAction } from "react";
// icons
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
// types
export type NavbarProps = {
  isMobileNav: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ isMobileNav, setMenuOpen }: NavbarProps) => {
  const location = useLocation();

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
        Solutions
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
      </div>
    </>
  );
};

export default Navbar;

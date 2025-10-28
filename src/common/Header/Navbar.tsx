import { Link, useLocation } from "react-router-dom";
import { type Dispatch, type SetStateAction } from "react";
// icons
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
// types
export type NavbarProps = {
  isMobileNav: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ isMobileNav, setMenuOpen }: NavbarProps) => {
  const location = useLocation();

  return (
    <>
      <Link
        className={`${location.pathname === "/how-it-works" && "font-semibold"}`}
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        to="how-it-works"
      >
        How it works
      </Link>
      {/* <a
        href="https://docs.fairblock.network/docs/welcome/Vision"
        rel="noopener noreferrer"
        target="_blank"
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
      >
        Docs
      </a> */}
      <Link
        className={`${location.pathname === "/articles" && "font-semibold"}`}
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        to="articles"
      >
        Articles
      </Link>
      <Link
        className={`${location.pathname === "/ecosystem" && "font-semibold"}`}
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        to="ecosystem"
      >
        Ecosystem
      </Link>
      <Link
        className={`${location.pathname === "/capps" && "font-semibold"}`}
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        to="capps"
      >
        cApps
      </Link>
      <div className="flex pl-4 gap-4">
        <a
          href="https://x.com/0xfairblock"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://discord.com/invite/fairblock"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaDiscord />
        </a>
        <a
          href="https://t.me/+HvfLo4NFTvw3NTU0"
          rel="noopener noreferrer"
          target="_blank"
        >
          <RiTelegram2Fill />
        </a>
      </div>
    </>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";
// icons
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
// types
export type NavbarProps = {
  isMobileNav: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ isMobileNav, setMenuOpen }: NavbarProps) => {
  return (
    <>
      <Link
        to="how-it-works"
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
      >
        How it works
      </Link>
      <a
        href="https://docs.fairblock.network/docs/welcome/Vision"
        rel="noopener noreferrer"
        target="_blank"
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
      >
        Docs
      </a>
      <Link
        to="articles"
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
      >
        Articles
      </Link>
      <Link
        to="ecosystem"
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
      >
        Ecosystem
      </Link>
      <Link
        to="capps"
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
      >
        cApps
      </Link>
      <div className="flex gap-4">
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

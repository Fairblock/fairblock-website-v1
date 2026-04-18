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
      <Link
        className={`${location.pathname === "/capps" && "font-semibold"}`}
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        to="capps"
      >
        Solutions
      </Link>
      <Link
        className={`${location.pathname === "/articles" && "font-semibold"}`}
        onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        to="articles"
      >
        Articles
      </Link>
      <div className="flex sm:pl-4 gap-4 items-center">
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
        <a
          href="mailto:hello@fairblock.network"
          className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-200 whitespace-nowrap"
          onClick={isMobileNav ? () => setMenuOpen(false) : undefined}
        >
          Book a Demo
        </a>
      </div>
    </>
  );
};

export default Navbar;

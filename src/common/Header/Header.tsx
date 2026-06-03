import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > 50 && y > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`${
        visible ? "translate-y-0" : "-translate-y-[120px]"
      } fixed top-4 xl:top-6 left-0 right-0 flex justify-center transition-transform duration-300 z-50`}
    >
      <div
        className={`font-maison-neue flex items-center justify-between px-5 sm:px-8 py-3 sm:py-4 w-[95%] max-w-[1800px] transition-all duration-300 relative z-10 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.08)] border border-black/[0.07]"
            : "bg-white/70 backdrop-blur-sm border border-black/[0.06]"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex gap-2 items-center">
          <img
            className="h-6 sm:h-7 invert"
            src="/common/fairblock-logo.svg"
            alt="fairblock-logo"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 items-center text-base">
          <Navbar isMobileNav={false} setMenuOpen={setMenuOpen} />
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-2xl text-[#000D14]/70 hover:text-[#000D14] transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute top-4 bg-white/95 backdrop-blur-md border border-black/[0.07] shadow-[0_8px_32px_rgba(0,0,0,0.1)] duration-300 font-maison-neue flex flex-col gap-5 p-6 pt-20 md:hidden text-lg text-[#000D14] w-[95%] max-w-[1800px] origin-top transition-all ${
          menuOpen
            ? "opacity-100 translate-y-0 scale-y-100"
            : "opacity-0 -translate-y-4 scale-y-0 pointer-events-none"
        }`}
      >
        <Navbar isMobileNav={true} setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
};

export default Header;

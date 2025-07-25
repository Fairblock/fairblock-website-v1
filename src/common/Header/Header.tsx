import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// components
import Navbar from "./Navbar";
// icons
import { IoMenu, IoClose } from "react-icons/io5";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // hide/show on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`${
        visible ? "translate-y-0" : "-translate-y-[120px]"
      } fixed top-4 xl:top-8 left-0 right-0 flex justify-center transition-transform duration-300 z-50`}
    >
      <div className="bg-primary-blue flex items-center justify-between px-4 sm:px-8 py-3 rounded-xl w-[95%] max-w-[1800px] transition-all duration-300 relative text-black z-10">
        {/* Logo */}
        <Link to="/" className="flex gap-2 items-center">
          <img
            className="h-9 invert"
            src="/common/fairblock-logo.svg"
            alt="fairblock-logo"
          />
          <span className="font-light text-3xl">Fairblock</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 items-center text-base lg:text-xl">
          <Navbar isMobileNav={false} setMenuOpen={setMenuOpen} />
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile menu (slides down separately) */}
      <div
        className={`absolute top-6 bg-primary-blue duration-300 flex flex-col gap-6 p-6 pt-16 md:hidden rounded-xl shadow-lg text-xl text-black w-[95%] max-w-[1800px] origin-top transition-all ${
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

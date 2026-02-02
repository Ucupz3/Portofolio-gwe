import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// Taruh navLinks di luar komponen
const navLinks = [
  { name: "Home", href: "hero" },
  { name: "About", href: "about" },
  { name: "Projects", href: "projects" },
  { name: "Contact", href: "contact" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = "hero";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            currentSection = link.href;
          }
        }
      });
      setActiveLink(`#${currentSection}`);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // cukup kosong, karena navLinks sudah di luar

  const handleLinkClick = (href) => {
    setActiveLink(`#${href}`);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-100 shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-extrabold text-sapphire tracking-tighter"
        >
          Muh<span className="text-powder">Gifari</span>.
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={`#${link.href}`}
                onClick={() => handleLinkClick(link.href)}
                className="relative text-navy font-medium text-lg transition duration-300 group"
              >
                <span
                  className={
                    activeLink === `#${link.href}`
                      ? "text-sapphire font-bold"
                      : "group-hover:text-sapphire"
                  }
                >
                  {link.name}
                </span>
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] bg-powder rounded-full transition-all duration-300 ease-out ${
                    activeLink === `#${link.href}`
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-sapphire text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-blue-100 shadow-lg border-t border-sapphire flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={() => handleLinkClick(link.href)}
              className={`text-lg font-medium ${
                activeLink === `#${link.href}`
                  ? "text-sapphire font-bold"
                  : "text-navy"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
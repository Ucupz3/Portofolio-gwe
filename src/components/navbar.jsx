import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// Taruh navLinks di luar komponen
const navLinks = [
    { name: "Home", href: "hero" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Certificates", href: "certificates" },
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
    }, []);

    const handleLinkClick = (href) => {
        setActiveLink(`#${href}`);
        setIsMobileMenuOpen(false);
    };

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav
    className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
                        bg-blue-100 shadow-md py-4 md:py-0
                        ${isScrolled ? "md:bg-blue-100 md:shadow-md md:py-4" : "md:bg-transparent md:shadow-none md:py-6"}
                    `}
                >

                <div className="container mx-auto px-6 flex justify-between items-center">
                    {/* Logo */}
                    <a
                    href="#hero"
                    className="text-2xl font-extrabold text-sapphire tracking-tighter relative z-50"
                    >
                    Ricky<span className="text-powder">Hartono</span>.
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
                                activeLink === `#${link.href}` ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                            ></span>
                        </a>
                        </li>
                    ))}
                    </ul>

                    {/* Tombol Mobile */}
                    <div className="md:hidden relative z-50">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-sapphire text-2xl focus:outline-none transition-transform duration-300 hover:scale-110"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                    </div>
                </div>
                </nav>

            {/* Backdrop Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
                    isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Mobile - Slide dari kanan */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] bg-gradient-to-br from-blue-50 to-blue-100 shadow-2xl z-40 md:hidden transform transition-transform duration-500 ease-in-out ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                {/* Header Mobile Menu */}
                <div className="pt-24 pb-8 px-6">
                    <h3 className="text-sapphire font-bold text-xl mb-2">Navigation</h3>
                    <div className="w-16 h-1 bg-powder rounded-full"></div>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col px-6 space-y-2">
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={`#${link.href}`}
                            onClick={() => handleLinkClick(link.href)}
                            className={`relative group py-3 px-4 rounded-lg transition-all duration-300 transform ${
                                activeLink === `#${link.href}`
                                    ? "bg-sapphire text-white shadow-lg scale-105"
                                    : "text-navy hover:bg-white/50 hover:translate-x-2"
                            }`}
                            style={{
                                animationDelay: `${index * 50}ms`,
                                animation: isMobileMenuOpen ? 'slideInRight 0.4s ease-out forwards' : 'none'
                            }}
                        >
                            <span className="flex items-center justify-between">
                                <span className={`font-medium text-lg ${
                                    activeLink === `#${link.href}` ? "font-bold" : ""
                                }`}>
                                    {link.name}
                                </span>
                                {activeLink === `#${link.href}` && (
                                    <span className="w-2 h-2 bg-powder rounded-full animate-pulse"></span>
                                )}
                            </span>
                            {activeLink !== `#${link.href}` && (
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-powder transition-all duration-300 group-hover:w-full"></span>
                            )}
                        </a>
                    ))}
                </div>

                {/* Footer Mobile Menu */}
                <div className="absolute bottom-8 left-6 right-6">
                    <div className="border-t border-sapphire/20 pt-6">
                        <p className="text-navy/60 text-sm text-center">
                            © 2024 Ricky Hartono
                        </p>
                    </div>
                </div>
            </div>

            {/* Inline CSS for animation */}
            <style>{`
                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
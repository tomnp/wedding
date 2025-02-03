"use client";

import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "#home", label: "N&T" },
    { href: "#countdown", label: "Sự Kiện" },
    { href: "#couple", label: "Cô Dâu & Chú Rể" },
    { href: "#gallery", label: "Album Cưới" },
    { href: "#guestbook", label: "Sổ Lưu Bút" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Update nav background opacity
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = menuItems.map((item) => {
        const element = document.getElementById(item.href.substring(1));
        if (!element) return { id: item.href.substring(1), top: 0 };
        return {
          id: item.href.substring(1),
          top: element.offsetTop - 100,
        };
      });

      const currentSection = sections.reduce((acc, section) => {
        return window.scrollY >= section.top ? section.id : acc;
      }, "home");

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-white/90 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between md:justify-center py-4">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-rose-600"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex justify-center space-x-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-rose-600 bg-rose-50"
                      : "text-gray-600 hover:text-rose-600"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Placeholder for mobile menu button alignment */}
          <div className="w-10 md:hidden"></div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="py-2 space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href.substring(1))}
                    className={`w-full px-4 py-3 text-left transition-colors ${
                      activeSection === item.href.substring(1)
                        ? "text-rose-600 bg-rose-50"
                        : "text-gray-600 hover:text-rose-600"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

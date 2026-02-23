import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
      fixed top-0 w-full z-50
      bg-ivory/80 dark:bg-royalBlack/80
      backdrop-blur-xl
      border-b border-roseGold/30 dark:border-antiqueGold/30
      shadow-md
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Kriva Couture"
            className="h-16 w-16 rounded-full object-cover border-2 border-roseGold dark:border-antiqueGold"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {["Home", "Shop", "Collections", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative group hover:text-roseGold dark:hover:text-antiqueGold transition duration-300"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-roseGold dark:bg-antiqueGold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-roseGold dark:text-antiqueGold"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="
          md:hidden
          bg-ivory dark:bg-royalBlack
          border-t border-roseGold/30 dark:border-antiqueGold/30
          px-6 py-6
          space-y-5
          text-center
          "
        >
          {["Home", "Shop", "Collections", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-lg font-medium hover:text-roseGold dark:hover:text-antiqueGold transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

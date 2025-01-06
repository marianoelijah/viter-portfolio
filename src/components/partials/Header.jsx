import React, { useState } from "react";
import { Link } from "react-scroll";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-green-800 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div>
            <Link to="home" className="font-bold text-xl">
              My Portfolio
            </Link>
          </div>
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link to="home" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <li>
              <Link to="projects" className="hover:text-gray-200">
                Skills
              </Link>
            </li>
            <li>
              <Link to="contact" className="hover:text-gray-200">
                Contact
              </Link>
            </li>
          </ul>
          <button
            id="mobile-menu-btn"
            className="block md:hidden"
            onClick={toggleMenu}
          >
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;

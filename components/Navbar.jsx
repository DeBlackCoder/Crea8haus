"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import { DropdownMenuContainer } from "./DropDownMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ===== Desktop Navbar ===== */}
      <header className="desktop-navbar">
        <Link href="/">
          <div className="logo">
            <div className="logoimage">
              <img src="/images/logo.png" alt="Crea8haus logo" />
            </div>
            <strong>Crea8haus</strong>
          </div>
        </Link>

        <nav className="navbar">
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/services">
              <li>Services</li>
            </Link>
            <Link href="/team">
              <li>Community</li>
            </Link>
            <Link href="/articles">
              <li>Articles</li>
            </Link>

            <Link href="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </nav>
      </header>

      {/* ===== Mobile Navbar ===== */}
      <div className="mobile-header">
        {/* Logo */}
        <Link href="/">
          <div className="logo">
            <div className="logoimage">
              <img src="/images/logo.png" alt="Crea8haus logo" />
            </div>
            <strong>Crea8haus</strong>
          </div>
        </Link>

        <DropdownMenuContainer />
      </div>
    </>
  );
};

export default Navbar;

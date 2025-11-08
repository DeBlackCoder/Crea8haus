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
              <img src="/svg/crea8logo.png" alt="Logo" />
            </div>
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
            {/* <Link href="/services">
              <li>Services</li>
            </Link> */}
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
          <div className="logo-mobile">
            <div className="logoimage-mobile">
              <img src="/svg/crea8logo.png" alt="Logo" />
            </div>
          </div>
        </Link>

        <DropdownMenuContainer />
      </div>
    </>
  );
};

export default Navbar;

"use client";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <Link href={"/"}>
        <div className="logo">
          <div className="logoimage">
            <img src="/images/logo.png" alt="Crea8haus logo" />
          </div>
          <strong>Crea8haus</strong>
        </div>
      </Link>

      <nav className="navbar">
        <ul>
          <Link href={"/"}>
            <li>Home</li>
          </Link>

          <Link href={"/about"}>
            <li>About</li>
          </Link>
          <Link href={"/services"}>
            <li>Services</li>
          </Link>

          <Link href={"/team"}>
            <li>Community</li>
          </Link>

           <Link href={"/team"}>
            <li>Articles</li>
          </Link>

        </ul>
      </nav>

      <div className="header-right">
        <Link href="/contact" className="contact">
          Contact Us
        </Link>

        <div className="toggle">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;

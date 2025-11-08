"use client";
import "./footer.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img src="/svg/crea8logo.png" alt="Logo" />

          <p>
            We blend technology, creativity & strategy to build digital
            realities that stand out and last.
          </p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/team">Meet the Team</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: contact@crea8haus.com</p>
          <p>WhatsApp: +234 xx xxx xxx</p>

          <div className="socials">
            <a href="#">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="#">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="#">
              <i className="ri-twitter-x-line"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Crea8haus. All rights reserved.</p>
      </div>
    </footer>
  );
}

"use client"
import './dropdownmenu.css'
import Link from 'next/link'
import { useState } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from './ThemeToggle'

export function DropdownMenuContainer() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <div className="dropdown-container">
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="dropdown-button"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="icon" /> : <Menu className="icon" />}
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="dropdown-content">
          <ul>
            <li onClick={handleLinkClick}>
              <Link href="/">Home</Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link href="/about">About</Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link href="/services">Services</Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link href="/team">Community</Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link href="/articles">Articles</Link>
            </li>
            <li onClick={handleLinkClick}>
              <Link href="/contact" className="contact">
                Contact Us
              </Link>
            </li>
           
          </ul>
        </div>
      )}
    </div>
  )
}

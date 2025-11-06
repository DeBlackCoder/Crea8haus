"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  // Load saved theme on startup
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      document.documentElement.setAttribute("data-theme", defaultTheme);
    }
  }, []);

  // Toggle
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        width: "55%",
        height: "25px",
        borderRadius: "20px",
        background: "var(--text-color)",
        display: "flex",
        alignItems: "center",
        padding: "3px",
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
        transition: "background 0.3s ease",
      }}
      
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100px", // 2 icons wide (50px * 2)
          height: "100%",
          transform: theme === "light" ? "translateX(0)" : "translateX(-50px)",
          transition: "transform 0.35s ease-in-out",
        }}
        
      >
        {/* Light icon (Sun) */}
        <div
          style={{
            width: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Sun size={18} color="var(--white)" />
        </div>

        {/* Dark icon (Moon) */}
        <div
          style={{
            width: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Moon size={18} color="var(--black)" />
        </div>
      </div>
    </button>
  );
}

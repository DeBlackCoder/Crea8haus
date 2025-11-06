"use client";
import React, { useState, useEffect } from "react";

const TypingText = () => {
  const texts = [
    "We Create Digital Experiences",
    "We Build Innovative Apps",
    "We Elevate UI/UX Designs",
    "We Craft Stunning Graphics",
    "We Provide Ghostwriting Solutions",
    "We Deliver Seamless Web Solutions",
    "We Optimize Frontend & Backend",
    "We Innovate with AI & Tech",
    "We Design Interactive Interfaces",
    "We Transform Ideas into Reality",
  ];

  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pause = 1500;

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[index];

      if (!isDeleting) {
        setDisplayedText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentText.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, texts]);

  return (
    <span className="typing-text" style={{ borderRight: "2px solid #fff", paddingRight: "5px" }}>
      {displayedText}
    </span>
  );
};

export default TypingText;

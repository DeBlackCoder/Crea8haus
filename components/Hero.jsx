"use client";
import "./hero.css";
import TypingText from "./TypingText";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>
            <TypingText />
          </h1>

          <p>
            Crea8haus is a multi-disciplinary creative & tech studio.
            We design brands, build digital products, craft visuals,
            develop strategies and write compelling content — all in one place.
          </p>

          <div className="hero-tags">
            <span>Tech Development</span>
            <span>Graphic Design</span>
            <span>UI / UX</span>
            <span>Brand Identity</span>
            <span>Ghost Writing</span>
            <span>Digital Strategy</span>
          </div>

          <button className="cta-btn">Start a Project</button>
        </div>
      </div>
    </section>
  );
}

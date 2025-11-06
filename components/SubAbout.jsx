"use client";
import Carousel from "./Carousel";
import "./subabout.css";

export default function SubAbout() {
  return (
    <section className="subabout">
      <div className="subabout-inner">
        <h2 className="about-title">Crea8haus</h2>

        <p className="about-tagline">Where Ideas Become Experiences.</p>

        <p className="about-description">
          Crea8haus is a multidisciplinary digital studio driven by creativity,
          innovation, and purpose. We merge design, technology, and storytelling
          to create meaningful solutions that elevate brands and inspire
          audience connection. Our work goes beyond visuals — we translate ideas
          into living experiences that speak, resonate, and remain.
        </p>

        <p className="about-description">
          Whether we're shaping identities, building digital products, designing
          engaging interfaces, crafting visual narratives, or developing
          creative content, our focus is always the same — clarity, excellence,
          and authenticity. We build with intention. We design with emotion. We
          create with vision. And we do it in a way that feels human.
        </p>
      </div>

        <Carousel />
    </section>
  );
}

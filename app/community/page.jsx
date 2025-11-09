import React from "react";
import "./community.css";
import TeamSection from "@/components/TeamMembers";

const page = () => {
  return (
    <>
      {/* COMMUNITY SECTION */}
      <section className="community-section">
        {/* HERO JOIN CALL */}
        <div className="community-hero">
          <h2>
            Join the{" "}
            <span className="community-highlight">
              Crea<span>8</span>haus Community
            </span>
          </h2>
          <p>
            Connect with creators, developers, and tech enthusiasts shaping the
            future of digital experiences.
          </p>
          <a href="#" className="join-btn">
            Join Our Community
          </a>
        </div>

        {/* MODERN CARDS */}
        <div className="community-cards">
          <div className="community-card">
            <h3>Tech Hub</h3>
            <p>
              Discuss development, frameworks, open-source and best practices.
            </p>
          </div>

          <div className="community-card">
            <h3>Design Lab</h3>
            <p>
              UI/UX sharing, visual processes & design inspiration exchange.
            </p>
          </div>

          <div className="community-card">
            <h3>Creators Lounge</h3>
            <p>Collaborate on brand, content and product building ideas.</p>
          </div>

          <div className="community-card">
            <h3>Career & Growth</h3>
            <p>Portfolio reviews, mentorship, and opportunities spotlight.</p>
          </div>
        </div>
      </section>

      <TeamSection />
      
    </>
  );
};

export default page;

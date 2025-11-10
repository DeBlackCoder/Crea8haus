import React from "react";
import "./teamsection.css";

const TeamMembers = () => {
  return (
    <section className="team-section">
      <h2 className="team-title">Meet Our Team</h2>

      <div className="team-grid">

        <div className="team-card">
          <div className="team-image">
            <img src="/images/greatlife2.jpg" alt="Team Admin" />
          </div>
          <div className="team-info">
            <h3 className="team-name">GreatLife Lazarus</h3>
            <p className="team-role">CEO</p>
          </div>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img src="/images/prosper.png" alt="Team Admin" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Hillary-Prosper Wahua</h3>
            <p className="team-role"> CEO / Lead Frontend Developer</p>
          </div>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img src="/images/king2.jpg" alt="Team Admin" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Christian King</h3>
            <p className="team-role">Admin / Lead Backend Developer</p>
          </div>
        </div>

        <div className="team-card">
          <div className="team-image">
            <img src="/images/elijah2.jpg" alt="Team Member" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Elijah Elijah</h3>
            <p className="team-role">Admin / Lead Graphics Design</p>
          </div>
        </div>

        {/* <div className="team-card">
          <div className="team-image">
            <img src="/images/member5.jpg" alt="Team Member" />
          </div>
          <div className="team-info">
            <h3 className="team-name">Mmakan Wills</h3>
            <p className="team-role">Marketing & Strategy</p>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default TeamMembers;

import React from "react";
import "./about.css";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";

const Page = () => {
  return (
    <div className="about-body">
      <div className="about-section">
        <h2>
          <span className="about-span">About</span>{" "}
          <span className="aboutlogoname">
            <strong>CREA8HAUS</strong>
          </span>
        </h2>
        At Crea8haus, we craft innovative digital experiences that help
        businesses thrive. Our team excels in UI/UX design, graphics design, and
        creating intuitive interfaces that delight users. We offer expert
        digital strategy and ghostwriting services to amplify your brand’s voice
        and online presence. From concept to execution, we blend creativity with
        technology to deliver seamless, engaging solutions. Every project
        reflects our commitment to quality, efficiency, and measurable results
        across multiple disciplines. Crea8haus transforms ideas into impactful,
        user-centric experiences that elevate brands in the digital world.
      </div>

      <section className="services-wrapper">
        <h2>
          {" "}
          <span className="ourstrong">Our</span>{" "}
          <span className="corestrong"> Core</span>{" "}
          <span className="servicestrong"> Services</span>
        </h2>

        <section className="services-grid">
          <ServiceCard
            title="Web Development"
            description="We build clean and scalable web apps."
          />
          <ServiceCard
            title="UI/UX Design"
            description="Creating intuitive and beautiful user interfaces."
          />
          <ServiceCard
            title="Mobile Apps"
            description="Android and iOS development with smooth experiences."
          />
          <ServiceCard
            title="Brand Identity"
            description="Crafting brand visuals & guidelines."
          />
          <ServiceCard
            title="SEO Optimization"
            description="Boost your rankings and organic traffic."
          />
          <ServiceCard
            title="Copywriting"
            description="Persuasive marketing text for engagement."
          />
          <ServiceCard
            title="Cloud Deployment"
            description="Deploy, scale and maintain cloud environments."
          />
          <ServiceCard
            title="Tech Consulting"
            description="Advisory & planning for digital transformation."
          />
        </section>
      </section>

      <div className="about-container">
        {/* ✅ Mission & Vision */}
        <section className="section-block">
          <SectionHeader title="Our Mission & Vision" />
          <div className="mv-grid">
            <div className="mv-box">
              <h3>Mission</h3>
              <p>
                To deliver digital solutions that simplify life and create real
                value.
              </p>
            </div>

            <div className="mv-box">
              <h3>Vision</h3>
              <p>
                To become a trusted global brand known for purposeful
                innovation.
              </p>
            </div>
          </div>
        </section>

        {/* ✅ Core Values */}
        <section className="section-block">
          <SectionHeader title="Our Core Values" />
          <ul className="values-list">
            <li>
              <strong>Integrity:</strong> We keep our word.
            </li>
            <li>
              <strong>Innovation:</strong> We think ahead.
            </li>
            <li>
              <strong>Excellence:</strong> Details matter.
            </li>
            <li>
              <strong>People First:</strong> We value relationships.
            </li>
          </ul>
        </section>

        {/* ✅ Process */}
        <section className="section-block">
          <SectionHeader title="How We Work" />
          <div className="process-steps">
            <div className="step">
              <span className="step-label">1. Discovery</span>
              <div className="step-detail">
                
              </div>
            </div>

            <div className="step">
              <span className="step-label">2. Design</span>
              <div className="step-detail">
                
              </div>
            </div>

            <div className="step">
              <span className="step-label">3. Build</span>
              <div className="step-detail">
                
              </div>
            </div>

            <div className="step">
              <span className="step-label">4. Launch</span>
              <div className="step-detail">
                
              </div>
            </div>
          </div>
        </section>

        {/* ✅ Achievements */}
        <section className="section-block">
          <SectionHeader title="Our Impact in Numbers" />
          <div className="stats-grid">
            <div>
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3>30+</h3>
              <p>Projects Completed</p>
            </div>
            <div>
              <h3>10+</h3>
              <p>Clients Served</p>
            </div>
          </div>
        </section>

        {/* ✅ Testimonials */}
        <section className="section-block">
          <SectionHeader title="What Clients Say" />
          <blockquote className="testimonial">
            “Professional, creative and reliable. Highly recommended.”
          </blockquote>
        </section>

        {/* ✅ FAQ */}
        <section className="section-block">
          <SectionHeader title="Frequently Asked Questions" />
          <details>
            <summary>How long does a project take?</summary>
            <p>Depends on complexity — usually 1-4 weeks.</p>
          </details>
          <details>
            <summary>Do you provide maintenance?</summary>
            <p>Yes, we offer flexible support plans.</p>
          </details>
        </section>

        {/* ✅ CTA */}
        <section className="cta-section">
          <h2>Ready to Start Your Project?</h2>
          <button>Contact Us</button>
        </section>
      </div>
    </div>
  );
};

export default Page;

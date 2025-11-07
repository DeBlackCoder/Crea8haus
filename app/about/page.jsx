'use client'
import React from "react";
import "./about.css";
import ServiceCard from "@/components/ServiceCard";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Page = () => {
  return (
    <div className="about-body">

      {/* ABOUT TEXT */}
      <motion.div
        className="about-section"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2>
          <span className="about-span">About</span>{" "}
          <span className="aboutlogoname"><strong>CREA8HAUS</strong></span>
        </h2>
        At Crea8haus, we craft innovative digital experiences that help
        businesses thrive...
      </motion.div>

      {/* SERVICES TITLE */}
      <motion.section
        className="services-wrapper"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2>
          <span className="ourstrong">Our</span>{" "}
          <span className="corestrong"> Core</span>{" "}
          <span className="servicestrong"> Services</span>
        </h2>

        {/* SERVICES GRID */}
        <motion.section
          className="services-grid"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <ServiceCard title="Web Development" description="We build clean and scalable web apps." />
          <ServiceCard title="UI/UX Design" description="Creating intuitive and beautiful user interfaces." />
          <ServiceCard title="Mobile Apps" description="Android and iOS development with smooth experiences." />
          <ServiceCard title="Brand Identity" description="Crafting brand visuals & guidelines." />
          <ServiceCard title="SEO Optimization" description="Boost your rankings and organic traffic." />
          <ServiceCard title="Copywriting" description="Persuasive marketing text for engagement." />
          <ServiceCard title="Cloud Deployment" description="Deploy, scale and maintain cloud environments." />
          <ServiceCard title="Tech Consulting" description="Advisory & planning for digital transformation." />
        </motion.section>
      </motion.section>

      <div className="about-container">

        {/* MISSION & VISION */}
        <motion.section
          className="section-block"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader title="Our Mission & Vision" />
          <div className="mv-grid">
            <div className="mv-box"><h3>Mission</h3><p>To deliver digital solutions that simplify life and create real value.</p></div>
            <div className="mv-box"><h3>Vision</h3><p>To become a trusted global brand known for purposeful innovation.</p></div>
          </div>
        </motion.section>

        {/* CORE VALUES */}
        <motion.section
          className="section-block"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader title="Our Core Values" />
          <ul className="values-list">
            <li><strong>Integrity:</strong> We keep our word.</li>
            <li><strong>Innovation:</strong> We think ahead.</li>
            <li><strong>Excellence:</strong> Details matter.</li>
            <li><strong>People First:</strong> We value relationships.</li>
          </ul>
        </motion.section>

        {/* PROCESS */}
        <motion.section
          className="section-block"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader title="How We Work" />
          <div className="process-steps">
            <div className="step"><span className="step-label">1. Discovery</span></div>
            <div className="step"><span className="step-label">2. Design</span></div>
            <div className="step"><span className="step-label">3. Build</span></div>
            <div className="step"><span className="step-label">4. Launch</span></div>
          </div>
        </motion.section>

        {/* STATS */}
        <motion.section
          className="section-block"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader title="Our Impact in Numbers" />
          <div className="stats-grid">
            <div><h3>5+</h3><p>Years Experience</p></div>
            <div><h3>30+</h3><p>Projects Completed</p></div>
            <div><h3>10+</h3><p>Clients Served</p></div>
          </div>
        </motion.section>

        {/* TESTIMONIAL */}
        <motion.section
          className="section-block"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader title="What Clients Say" />

<div className="testimonial-carousel">
  <div className="testimonial-track">

    <div className="testimonial-card">“Professional, creative and reliable. Highly recommended.”</div>
    <div className="testimonial-card">“They transformed our online presence beyond expectation.”</div>
    <div className="testimonial-card">“Clear communication from start to finish. Smooth workflow.”</div>
    <div className="testimonial-card">“Delivered earlier than scheduled — and quality was top-notch.”</div>
    <div className="testimonial-card">“You can tell they truly care about the success of the project.”</div>
    <div className="testimonial-card">“Very flexible, adaptive and easy to work with. 10/10.”</div>
    <div className="testimonial-card">“Exceeded our requirements with a clean and modern design.”</div>
    <div className="testimonial-card">“Support after delivery was impressive — no one does that anymore.”</div>

    <div className="testimonial-card">“Professional, creative and reliable. Highly recommended.”</div>
    <div className="testimonial-card">“They transformed our online presence beyond expectation.”</div>
    <div className="testimonial-card">“Clear communication from start to finish. Smooth workflow.”</div>
    <div className="testimonial-card">“Delivered earlier than scheduled — and quality was top-notch.”</div>
    <div className="testimonial-card">“You can tell they truly care about the success of the project.”</div>
    <div className="testimonial-card">“Very flexible, adaptive and easy to work with. 10/10.”</div>
    <div className="testimonial-card">“Exceeded our requirements with a clean and modern design.”</div>
    <div className="testimonial-card">“Support after delivery was impressive — no one does that anymore.”</div>

  </div>
</div>
        </motion.section>

        {/* FAQ */}
        <motion.section
          className="section-block"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <SectionHeader title="Frequently Asked Questions" />
          <details><summary>How long does a project take?</summary><p>Depends on complexity — usually 1-4 weeks.</p></details>
          <details><summary>Do you provide maintenance?</summary><p>Yes, we offer flexible support plans.</p></details>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="cta-section"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2>Ready to Start Your Project?</h2>
          <button>Contact Us</button>
        </motion.section>

      </div>
    </div>
  );
};

export default Page;

import React from "react";
import { motion } from "framer-motion";
import "./mission.css";

const Section = ({ title, children }) => (
  <motion.section
    className="section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="section-title">{title}</h2>
    {children}
  </motion.section>
);

export default function ArtemisMissionPage() {
  return (
    <div className="container">
      <header className="header">
        <motion.h1
          className="main-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          🚀 Artemis I: The First Step Toward a New Lunar Era
        </motion.h1>

      </header>

      <Section title="Introduction">
        <p>Dummy text about the significance of Artemis I and the goal of the Artemis program.</p>
        <div className="image-placeholder">[Placeholder for hero image]</div>
      </Section>

      <Section title="Mission Objectives">
        <p>Dummy text outlining the goals and purpose of the Artemis I mission.</p>
      </Section>

      <Section title="Technology and Hardware">
        <p>Dummy text about the SLS rocket, Orion spacecraft, and supporting systems.</p>
        <div className="image-placeholder">[Placeholder for spacecraft diagram]</div>
      </Section>

      <Section title="Flight Path and Timeline">
        <p>Dummy text describing the flight path, lunar orbit, and splashdown.</p>
        <div className="image-placeholder">[Timeline visual placeholder]</div>
      </Section>

      <Section title="Scientific Payloads and Experiments">
        <p>Dummy text about CubeSats, radiation sensors, and other experiments.</p>
      </Section>

      <Section title="Successes and Challenges">
        <p>Dummy text about what went well and what issues occurred during Artemis I.</p>
      </Section>

      <Section title="Why Artemis Matters">
        <p>Dummy text explaining the historical and scientific significance of Artemis I.</p>
      </Section>

      <Section title="Interactive Features">
        <p>Embed or link dynamic visuals here, such as:</p>
        <ul>
          <li>3D model of the rocket</li>
          <li>Mission map viewer</li>
          <li>Launch replay video</li>
        </ul>
        <div className="image-placeholder">[Interactive 3D model placeholder]</div>
      </Section>

      <Section title="Conclusion">
        <p>Dummy text wrapping up the significance of Artemis I and next steps in the program.</p>
      </Section>
    </div>
  );
}
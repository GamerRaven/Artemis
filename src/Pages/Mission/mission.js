import React from "react";
import { motion } from "framer-motion";
import "./mission.css";

import Header from "../../Components/Header/header.js";

const Section = ({ title, children, id }) => (
  <motion.section
    id={id}
    className="mission-section"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <h2 className="mission-section-title">{title}</h2>
    {children}
  </motion.section>
);

const Navbar = () => (
  <nav className="mission-navbar">
    <div className="mission-logo">Artemis I</div>
    <ul className="mission-links">
      <li><a href="#introduction">Introduction</a></li>
      <li><a href="#objectives">Objectives</a></li>
      <li><a href="#hardware">Hardware</a></li>
      <li><a href="#timeline">Timeline</a></li>
      <li><a href="#payloads">Payloads</a></li>
      <li><a href="#challenges">Challenges</a></li>
      <li><a href="#importance">Why It Matters</a></li>
      <li><a href="#interactive">Interactive</a></li>
    </ul>
  </nav>
);

export default function ArtemisMissionPage() {
  return (
    <div className="mission-wrapper">
      <Header />
      <div className="mission-layout">
        <Navbar />
        <div className="mission-content">
          <header className="mission-header">
            <motion.h1
              className="mission-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              🚀 Artemis I: The First Step Toward a New Lunar Era
            </motion.h1>
          </header>

          <Section title="Introduction" id="introduction">
            <p>Dummy text about the significance of Artemis I and the goal of the Artemis program.</p>
            <div className="mission-placeholder">[Placeholder for hero image]</div>
          </Section>

          <Section title="Mission Objectives" id="objectives">
            <p>Dummy text outlining the goals and purpose of the Artemis I mission.</p>
          </Section>

          <Section title="Technology and Hardware" id="hardware">
            <p>Dummy text about the SLS rocket, Orion spacecraft, and supporting systems.</p>
            <div className="mission-placeholder">[Placeholder for spacecraft diagram]</div>
          </Section>

          <Section title="Flight Path and Timeline" id="timeline">
            <p>Dummy text describing the flight path, lunar orbit, and splashdown.</p>
            <div className="mission-placeholder">[Timeline visual placeholder]</div>
          </Section>

          <Section title="Scientific Payloads and Experiments" id="payloads">
            <p>Dummy text about CubeSats, radiation sensors, and other experiments.</p>
          </Section>

          <Section title="Successes and Challenges" id="challenges">
            <p>Dummy text about what went well and what issues occurred during Artemis I.</p>
          </Section>

          <Section title="Why Artemis Matters" id="importance">
            <p>Dummy text explaining the historical and scientific significance of Artemis I.</p>
          </Section>

          <Section title="Interactive Features" id="interactive">
            <p>Embed or link dynamic visuals here, such as:</p>
            <ul>
              <li>3D model of the rocket</li>
              <li>Mission map viewer</li>
              <li>Launch replay video</li>
            </ul>
            <div className="mission-placeholder">[Interactive 3D model placeholder]</div>
          </Section>

          <Section title="Conclusion">
            <p>Dummy text wrapping up the significance of Artemis I and next steps in the program.</p>
          </Section>
        </div>
      </div>
    </div>
  );
}
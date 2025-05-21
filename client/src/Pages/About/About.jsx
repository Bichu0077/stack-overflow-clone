import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-hero">
        <h1>About My Stack Overflow Clone</h1>
        <p>
          Empowering developers to share knowledge, solve problems, and grow
          their skills – together.
        </p>
      </header>

      <section className="about-section">
        <h2>Mission</h2>
        <p>
          This platform is built by and for developers. We aim to foster a
          helpful, inclusive environment where programmers can ask questions,
          find answers, and contribute to a collaborative community.
        </p>
      </section>

      <section className="about-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Open Q&A for developers of all levels</li>
          <li>Tag-based categorization of questions</li>
          <li>Voting system to highlight quality answers</li>
          <li>User profiles and reputation system</li>
        </ul>
      </section>

      <section className="about-section">
        <p>
          This is an educational clone project developed with MERN stack,
          designed to replicate and understand how real-world platforms like
          Stack Overflow function.
        </p>
      </section>

      <footer className="about-footer">
        <p>
          &copy; {2024} Stack Overflow Clone by Bichu Devnarayan. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;

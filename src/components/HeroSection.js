import React from "react";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-text hero-text-animation">
        <h1>Ihre Vision, unsere Expertise</h1>
        <p>Wir kreieren innovative Web-Lösungen, für Ihr Unternehmen.</p>
        <a href="/kontakt" className="cta-button">
          Jetzt kontaktieren
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

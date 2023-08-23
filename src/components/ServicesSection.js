import React from "react";

const ServicesSection = () => {
  return (
    <div className="service-animation">
      <section className="services">
        <h2>Unsere Leistungen</h2>
        <div className="service">
          <h3>Webdesign</h3>
          <p>
            Von der Idee bis zur Umsetzung - wir gestalten ansprechende und
            benutzerfreundliche Websites.
          </p>
        </div>
        <div className="service">
          <h3>Benutzerfreundlichkeit</h3>
          <p>
            Wir optimieren Ihre Website, um eine intuitive und angenehme
            Benutzererfahrung zu bieten.
          </p>
        </div>
        <div className="service">
          <h3>Webentwicklung</h3>
          <p>
            Modernste Technologien, um Ihre Website funktional und performant zu
            entwickeln.
          </p>
        </div>
        <div className="service">
          <h3>Responsives Design</h3>
          <p>
            Ihre Website sieht auf allen Geräten gut aus - von Desktops bis zu
            Mobilgeräten.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;

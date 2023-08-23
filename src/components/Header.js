import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">WebDev Solutions</div>
        <ul>
          <li>
            <a href="/home">Startseite</a>
          </li>
          <li>
            <a href="/home">Leistungen</a>
          </li>
          <li>
            <a href="/home">Projekte</a>
          </li>
          <li>
            <a href="/home">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

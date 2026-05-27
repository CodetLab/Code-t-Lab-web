import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="f-brand">
        Code&apos;t Lab
      </div>

      <ul className="f-links">
        <li>
          <a href="#ecosystem">Ecosystem</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#stack">Stack</a>
        </li>
      </ul>

      <div className="f-copy">
        © 2026 Code&apos;t Lab
      </div>
    </footer>
  );
};

export default Footer;
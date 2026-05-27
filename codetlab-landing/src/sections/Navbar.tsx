import React, { useEffect, useState } from 'react';
import logo from '../assets/logo1sinfondo.svg';

const sections = [
  'ecosystem',
  'projects',
  'philosophy',
  'stack',
  'network'
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);

        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPos >= top && scrollPos < top + height) {
          setActive(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>

      <a href="#" className="nav-logo">
        <img src={logo} alt="Code’t Lab" />

        <span className="nav-logo-dot"></span>
      </a>

      <ul className="nav-links">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className={active === section ? 'active' : ''}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <a href="#cta" className="nav-enter">
        $ enter_lab
      </a>
    </nav>
  );
};

export default Navbar;
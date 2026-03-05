import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Hausmeisterservice', path: '/hausmeisterservice' },
    { name: 'Objektbetreuung', path: '/objektbetreuung' },
    { name: 'Gebäudereinigung', path: '/gebaeudereinigung' },
    { name: 'Kleinreparaturen', path: '/kleinreparaturen' },
    { name: 'Grünanlagenpflege', path: '/gruenanlagenpflege' },
    { name: 'Winterdienst', path: '/winterdienst' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src="/logo.png" alt="ISAR Gebäudeservice Logo" className="navbar-logo-image" />
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'nav-links active-link' : 'nav-links'}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

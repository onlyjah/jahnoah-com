import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Define the type for the Navbar props
type NavbarProps = {
  links: { text: string; url: string }[];
};

import './Navbar.css';
const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const location = useLocation();
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.url}
              className={location.pathname === link.url ? 'active' : ''}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
 
export default Navbar;
import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li className="nav-link">
          <NavLink
            className={(linkData) => (linkData.isActive ? 'active-link' : '')}
            to="/"
          >
            BOOKS
          </NavLink>
        </li>
        <li className="nav-link">
          <NavLink
            className={(linkData) => (linkData.isActive ? 'active-link' : '')}
            to="/categories"
          >
            CATEGORIES
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

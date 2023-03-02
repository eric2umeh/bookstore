import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="header">
      <h1 className="title">Book Store</h1>

      <ul>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navigation;

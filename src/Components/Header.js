import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <h1 className="navbar-brand">
        Hipster
      </h1>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
          Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact to="/add" className="nav-link">
            Add Ticket
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

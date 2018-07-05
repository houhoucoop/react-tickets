import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <span className="navbar-brand mb-0 h1">React Ticket</span>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

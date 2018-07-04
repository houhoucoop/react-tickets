import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <span className="navbar-brand mb-0 h1">React Ticket</span>
            <button 
              type="button" 
              className="btn btn-primary btn-sm" 
              data-toggle="modal" 
              data-target="#exampleModal">
              Add Ticket
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

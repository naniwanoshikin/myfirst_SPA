import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <div className="nav mt-5 mx-1 mx-sm-5">
      <div className="container">
        <div className="row py-sm-2 px-sm-2">
          <Link id="nav-home" className="nav-item col-3" to="/">Home</Link>
          <Link id="nav-about" className="nav-item col-3" to="/about">About</Link>
          <Link id="nav-work" className="nav-item col-3" to="/blog">Work</Link>
          <Link id="nav-contact" className="nav-item col-3" to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

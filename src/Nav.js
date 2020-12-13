import React from 'react';
import { Link } from 'react-router-dom';

// ナビ構成
const Nav = () => {
  return (
    <div className="nav mt-5 mx-sm-5">
      <div className="container">
        <div className="row py-sm-2 px-sm-2">
          <Link className="nav-item col-3" to="/" >Home</Link>
          <Link className="nav-item col-3" to="/about">About</Link>
          <Link className="nav-item col-3" to="/blog">Work</Link>
          <Link className="nav-item col-3" to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;

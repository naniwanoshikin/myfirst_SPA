import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="mt-3 mb-3 mx-sm-5">
      <div className="snow">✳</div>
      <div className="container">
        <menu className="row mx-0 mt-2 mb-1" style={{
          position: "relative",
          zIndex: "5",
          padding: "5px 0",
          fontFamily: "Itim",
          fontSize: "22px",
          transform: "rotate(1deg)",
        }}>
          {/* id: js用 */}
          <Link className="nav-item col-3" id="nav-home" to="/">Home</Link>
          <Link className="nav-item col-3" id="nav-about" to="/about">About</Link>
          <Link className="nav-item col-3" id="nav-work" to="/blog">Work</Link>
          <Link className="nav-item col-3" id="nav-contact" to="/contact">Contact</Link>
        </menu>
      </div>
    </nav>
  );
}

export default Nav;

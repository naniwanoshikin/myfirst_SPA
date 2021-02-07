import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  position: "relative",
  zIndex: "5",
  padding: "15px 0",
  fontFamily: "Itim",
  fontSize: "25px",
  transform: "rotate(1deg)",
}

export const Nav = () => {
  return (
    <nav className="mt-4 mb-3 mx-sm-5">
      <div className="container">
        <menu className="row mx-0" style={style}>
          <Link id="nav-home" className="nav-item col-3" to="/">Home</Link>
          <Link id="nav-about" className="nav-item col-3" to="/about">About</Link>
          <Link id="nav-work" className="nav-item col-3" to="/blog">Work</Link>
          <Link id="nav-contact" className="nav-item col-3" to="/contact">Contact</Link>
        </menu>
      </div>
      <div className="snow">✳</div>
    </nav>
  );
}

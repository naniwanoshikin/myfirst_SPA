import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  position: "relative",
  zIndex: "5",
  padding: "15px 0",
  fontFamily: "Itim",
  fontSize: "22px",
  transform: "rotate(1deg)",
}

const Nav = () => {
  return (
    <nav className="mt-4 mb-4 mx-sm-5">
      <div className="snow">✳</div>
      <div className="container">
        <menu className="row mx-0 pb-0" style={style}>
          {/* id: js用 */}
          <Link id="nav-home" className="nav-item col-3" to="/">Home</Link>
          <Link id="nav-about" className="nav-item col-3" to="/about">About</Link>
          <Link id="nav-work" className="nav-item col-3" to="/blog">Work</Link>
          <Link id="nav-contact" className="nav-item col-3" to="/contact">Contact</Link>
        </menu>
      </div>
      <div style={{
          position: "absolute",
          zIndex: "5",
          right: "6%",
          top: "20px",
          color: "white"
        }}>
        <Link to="/db2">
          <i className="balloon fas fa-lg fa-weight text-light">
            <span className="p-2 rounded-pill">know BodyShape!</span>
          </i>
        </Link>
        <Link to="/login" className="ml-3">
          <i className="fas fa-lg fa-key text-light"></i>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;

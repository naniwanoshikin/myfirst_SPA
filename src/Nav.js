import React from 'react';
import { Link } from 'react-router-dom';

// ナビ構成
class Nav extends React.Component {

  render() {
    return (
      <div className="nav mt-5 mx-sm-5">
        {/* <p className="text-right pr-5">a</p> */}
        <div className="container">
          <div className="row py-sm-2 px-sm-2">
            <Link className="nav-item col-3" to="/" >Home</Link>
            <Link className="nav-item col-3" to="/about">About</Link>
            <Link className="nav-item col-3" to="/blog/10">Work</Link>
            <Link className="nav-item col-3" to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
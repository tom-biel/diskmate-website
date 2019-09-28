import React from "react";
import { Link } from "gatsby"
import "./styles.scss";
import diskmatelogo from "../../images/icon.png";

function NavBar(props) {
  return (
    <nav className="navbar primary test">
     <div className="container">
        <div className="navbar-brand">
         <Link  className="navbar-item" to="/">
            <img class="logo" src={diskmatelogo} alt="DiskMate"></img>
            <h3 class="subtitle">DiskMate</h3>
          </Link>
        </div>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
        <div className="navbar-menu">
           <Link className="button is-warning" to="/changelog">Changelog</Link>
        </div>


     </div>
    </nav>
  );
}

export default NavBar;

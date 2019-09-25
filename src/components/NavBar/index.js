import React from "react";
import { Link } from "gatsby"
import "./styles.scss";
import diskmatelogo from "../../images/icon.png";

function NavBar(props) {
  return (
    <nav className={"navbar primary"}>
     <div className="container">
        <div className="navbar-brand">
         <Link  className="navbar-item" to="/">
            <img class="logo" src={diskmatelogo} alt="DiskMate"></img>
            <h3 class="subtitle">DiskMate</h3>
          </Link>
        </div>


        <div className="navbar-menu">
         <Link  className="navbar-item" to="/changelog">Changelog</Link>
        </div>


     </div>
    </nav>
  );
}

export default NavBar;

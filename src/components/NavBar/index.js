import React, { useState } from "react"
import { Link } from "gatsby"
import "./styles.scss"
import diskmatelogo from "../../images/icon.png"

function NavBar(props) {
  const [isActive, setActive] = useState(false)

  const toggleMenu = e => {
    setActive(!isActive)
  }

  return (
    <nav
      className="navbar primary test is-spaced has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
      <div className="navbar-brand">
        <Link className="navbar-item" to="/">
          <img class="logo" src={diskmatelogo} alt="DiskMate"></img>
          <h3 class="subtitle">DiskMate</h3>
        </Link>

        <a
          role="button"
          className={"navbar-burger " + (isActive ? "is-active" : "")}
          aria-label="menu"
          aria-expanded="true"
          data-target="navbarBasicExample"
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={"navbar-menu " + (isActive ? "is-active" : "")}
      >
        <div class="navbar-start">
          <a class="navbar-item">Home</a>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-danger" href="mailto:me@tombiel.com">
                Contact
              </a>
              <Link className="button is-warning" to="/changelog">
                Changelog
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default NavBar

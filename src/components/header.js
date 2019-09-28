import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import NavBar from './NavBar';

const Header = ({ siteTitle }) => (
  <header>
    <NavBar></NavBar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

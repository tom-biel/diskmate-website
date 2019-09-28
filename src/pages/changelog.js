import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const ChangelogPage = () => (
  <Layout>
    <SEO title="Page two" />
    <NavBar />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Footer />
  </Layout>
)

export default ChangelogPage

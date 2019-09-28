import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <NavBar />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Footer />
  </Layout>
)

export default NotFoundPage

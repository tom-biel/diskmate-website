import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Midsection from '../components/midsection';
import About from '../components/About';
import "../components/style.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Midsection />
  </Layout>
)

export default IndexPage

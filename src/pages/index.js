import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Features from '../components/Features';
import About from '../components/About';
import BottomBadges from '../components/BottomBadges';

//import "../components/style.scss"

const IndexPage = () => (
  <div>
    <Layout>
      <SEO title="Home" />
      <About />
      <Features />
      <BottomBadges />
    </Layout>
  </div>
)

export default IndexPage

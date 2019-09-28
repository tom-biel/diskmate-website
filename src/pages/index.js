import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Features from '../components/Features';
import About from '../components/About';
import BottomBadges from '../components/BottomBadges';
import Header from "../components/header";
import Footer3 from "../components/Footer3"

//import "../components/style.scss"

const IndexPage = () => (
  <div>
  <Layout>
    <SEO title="Home" />
    <About />
    <Features />
    <BottomBadges />
    
  </Layout>
  <Footer3 />
  </div>
)

export default IndexPage

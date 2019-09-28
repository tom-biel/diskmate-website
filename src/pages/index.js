import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Features from '../components/Features';
import About from '../components/About';
import BottomBadges from '../components/BottomBadges';
import Header from "../components/header";
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

//import "../components/style.scss"

const IndexPage = () => (
  <div>
    <NavBar /> 
  <Layout>
    <SEO title="Home" />

    <div class="hero-body">
    <About />
    <Features />
    <BottomBadges />
    </div>

    <Footer />  
  </Layout>
  </div>
)

export default IndexPage

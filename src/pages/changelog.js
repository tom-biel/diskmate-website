import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import featuresList from "../components/Features/featuresList"

//import md from "../data/changelog.md"

const ChangelogPage = () => (
  <Layout>
    <SEO title="Chamgelog" />

    <div class="container content">
      <h1 className="title is-2 faq-title">DiskMate for macOS Changelog</h1>
    
      <h3>1.0.0 Application was launched</h3>
      <ul className="list-style">
      {featuresList.map(item => {
        return (
          <li>{item.description}</li>
        )
      })}
        <li>Configure global shortcut to eject all removable drives</li>
      </ul>
    </div>
  </Layout>
)

export default ChangelogPage

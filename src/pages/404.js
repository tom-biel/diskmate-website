import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="content has-text-centered">
      <div className="column">
        <h2>NOT FOUND</h2>
      </div>
      <div>
        <p>You just hit a route that doesn&#39;t exist.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

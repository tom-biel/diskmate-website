import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./styles.scss";

const Footer3 = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
            twitter
            medium
            github
          }
        }
      }
    `}
    render={data => (
      <footer className="footer center ">
        <div className=" has-text-centered">
          <p>
            Build with{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.site.siteMetadata.gatsby}
            >
              GatsbyJS
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.site.siteMetadata.bulma}
            >
              Bulma
            </a>
            . The code is open source and available at{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={data.site.siteMetadata.github}
            >
              Github
            </a>
            .
          </p>
         
          <span className="is-size-8 has-text-grey">© 2019 Tom Biel</span>

          </div>
      </footer>
    )}
  />
)

export default Footer3

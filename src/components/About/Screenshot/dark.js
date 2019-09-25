import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import screenshotImage from "../../../images/screenshot-dark.png"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

 /*
const DarkScreenshot = ({ darkmode }) => {

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "screenshot-dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 940) {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 470, height: 560) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `) 

  return <Img fixed={data.placeholderImage.childImageSharp.fixed}  alt=""/>
}*/

const DarkScreenshot = ({ darkmode }) => {

  return <img class="screenshot" src={screenshotImage} />
}

export default DarkScreenshot


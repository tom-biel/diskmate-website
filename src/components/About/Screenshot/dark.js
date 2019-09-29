import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import screenshotImage from "../../../images/screenshot-dark.png"

const DarkScreenshot = ({ darkmode }) => {
  return <img class="screenshot" src={screenshotImage} />
}

export default DarkScreenshot


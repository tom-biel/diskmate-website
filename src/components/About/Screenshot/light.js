import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./styles.scss";
import Img from "gatsby-image"
import screenshotImage from "../../../images/screenshot-light.png"

const LightScreenshot = ({ darkmode }) => {
  return <img class="screenshot" src={screenshotImage} />
}

export default LightScreenshot

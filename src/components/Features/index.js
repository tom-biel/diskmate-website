import React from "react"
import "./styles.scss"

import featuresList from "./featuresList"

const Features = () => {
  return (
    <section className="section features">
      <div className="container">
        <div className="columns is-multiline">
          {featuresList.map(item => {
            return (
              <div className="column is-one-third">
                <article className="media">
                  <figure className="media-left">
                    <span className="icon is-medium">
                      <img className="" src={item.icon}></img>
                    </span>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4">{item.title}</h1>
                      <p className="subtitle is-size-5">{item.description}</p>
                    </div>
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
export default Features

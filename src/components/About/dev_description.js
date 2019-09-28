import React from "react"
import "./styles.scss"

function DevDescription(props) {
  return (
    <div className="devDescription">
      <div className="operatingSystem is-size-8 has-text-grey">
        <span itemprop="operatingSystem">
           macOS 10.14 or later required, 64-bit processor
        </span>
      </div>
      
      <div class="is-size-8 has-text-grey">
        Category: <span itemprop="applicationCategory">Utility</span>
      </div>
      <div class="is-size-8 has-text-grey">
        Seller: <span
          itemprop="author creator copyrightHolder"
          itemscope=""
          itemtype="http://schema.org/Person"
        >
          <span itemprop="name">Tom Biel</span>
        </span>
      </div>
    </div>
  )
}

export default DevDescription

import React from "react";
import "./styles.scss";
import Screenshot from "./Screenshot"
import DevDescription from "./dev_description"
import AppstoreBadge from "./appstoreBadge"
import Info from "./info"

function About(props) {
  return (
    <section class="">
        <div class="container is-vertical">
            <div class="columns is-vertical test0">
              <div class="column is-5 is-narrow is-vertical test1"  >
                <Info />
                <AppstoreBadge />
                <DevDescription />
              </div>
              <div class="column screenshotBox">
                <Screenshot  />
              </div>
            </div>
        </div>
    </section>
  );
}

export default About;


// style="display: inline-block; overflow: hidden; background: url(&quot;//linkmaker.itunes.apple.com/assets/shared/badges/en-us/macappstore-lrg.svg&quot;) 0% 0% / contain no-repeat; width: 205px; height: 60px;"
import React from "react";
import "./styles.scss";
import Screenshot from "./Screenshot"

function About(props) {
  return (
    <section class="hero is-medium intro">
      <div class="hero-body"> 
        <div class="container is-vertical"> 
            <div class="columns is-vertical">
              <div class="column is-4 is-narrow" >
                <h1>DiskMate is utility App for macOS!2</h1>

                <div class="checkout">
                  <div class="large-badge">
                    <a class="appstoreBadge" href="https://apps.apple.com/us/app/diskmate/id1467915119?mt=12">
                    
                    </a>
                    </div>
                </div>
              </div>
              <div class="column is-6 is-narrow flex-center">
                <Screenshot />
               
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default About;


// style="display: inline-block; overflow: hidden; background: url(&quot;//linkmaker.itunes.apple.com/assets/shared/badges/en-us/macappstore-lrg.svg&quot;) 0% 0% / contain no-repeat; width: 205px; height: 60px;"
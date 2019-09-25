import React from "react";
import "./styles.scss";
import LightScreenshot from "./light"
import DarkScreenshot from "./dark"
import { useState } from "react";

function Screenshot(props) {

  const [darkmode, setDarkmode] = useState(true);

  return (
    <div> {}
    {darkmode ? (
      <DarkScreenshot />
    ) : (
      <LightScreenshot />
    )}

      <button className={'button is-centered is-dark2 ' + (!darkmode ? 'is-dark' : 'is-dark2')}  onClick={() => setDarkmode(!darkmode)}>
        <span>{!darkmode ? 'Dark Theme' : 'Light Theme'}</span>
      </button>
    </div>
  );
}

export default Screenshot;


// style="display: inline-block; overflow: hidden; background: url(&quot;//linkmaker.itunes.apple.com/assets/shared/badges/en-us/macappstore-lrg.svg&quot;) 0% 0% / contain no-repeat; width: 205px; height: 60px;"
import React from "react";
import "./styles.scss";
import LightScreenshot from "./light"
import DarkScreenshot from "./dark"
import { useState } from "react";

function Screenshot(props) {

  const [darkmode, setDarkmode] = useState(false);

  const toggleTheme = (e) => {
    setDarkmode(!darkmode);
  }

  return (
    <div> {}
      {darkmode ? (
        <DarkScreenshot />
      ) : (
        <LightScreenshot />
      )}
      <div class="themeButWrapper" >
        <button className={'button is-centered ' + (!darkmode ? 'is-dark' : '')}  onClick={toggleTheme}>
          <span>{!darkmode ? 'Dark Theme' : 'Light Theme'}</span>
        </button>
     </div>
    </div>
  );
}

export default Screenshot;

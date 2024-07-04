/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import LocalSorage from "./LocalSorage";
import  "./LightTheme.css";


function LightDark  () {

    const [theme, setTheme] = LocalSorage("theme", "dark");

    function handleToggleTheme() {
      setTheme(theme === "light" ? "dark" : "light");
    }
  
    console.log(theme);
  
    return (
      <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>Welcome !</p>
          <button onClick={handleToggleTheme}>Click-me!</button>
          <footer className="footer">
          <p>&#x3c; &#47; &#x3e; with ❤️ by  <a href="">Shivani Sinha</a>
          <br /> 
          <a href="https://github.com/chiragha/Reactjs-interview-projects" target="_blank">#Reactjs-interview-projects
          </a>
        </p>
      </footer>
        </div>
      </div>
    );
}

export default LightDark
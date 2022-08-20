import React from "react"

function Header (props){
    <header>
        <h2>Shopster</h2>
        <button onClick={props.handleDarkModeClick}>
          {props.isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>


}
export default Header;
import React from "react";
import logo from "./world.png";


function Header(){
    return(
        <div className="nav-bar">
        <span className="logo">
            <div className="nav-logo">
            <img src={logo} alt="world" width="24px" height="24px"></img>
            </div>
            <p className="nav-text"> My travel journal</p>
        </span>

        </div>

    )
}

export default Header;

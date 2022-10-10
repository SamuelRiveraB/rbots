import React from "react";
import Logo from "./Logo";
import "./Navigation.css";

function Navigation(props) {
    return <div>
        <nav style={{display: "flex"}}>
            <Logo />
            <p className="f3 link dim black underline pa3 pointer to-right">Sign out</p>
        </nav>
        <p>Hello, {props.name}</p>
    </div>
}

export default Navigation;
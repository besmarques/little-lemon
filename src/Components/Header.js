import React from "react";
import Logo from "../Media/Logo.svg"
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="grid">
            <img src={Logo} />
            <Nav />
        </header>
    )
}
export default Header
import React from "react";
import Logo from "../../uploads/Logo.svg";

import Nav from "./Nav";

const Header = () => {
    return(
        <header>
            <img src={Logo} alt="little lemon logo" className="logo"/>
            <Nav />
        </header>
    )
}
export default Header
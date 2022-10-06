import React from "react";
import "tachyons";

const Header = ({ handleChange }) => {
    return <div>
        <h1 className="green">Rbots</h1>
        <input type="search" placeholder="Search robots" onChange={handleChange} />
    </div>
}

export default Header;
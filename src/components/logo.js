import React, {Fragment} from 'react';
import logo from "../assets/logo.svg";

function Logo() {
    return (
        <Fragment>
            <img src={logo} className="App-logo" alt="logo"/>
        </Fragment>
    )
}

export default Logo;
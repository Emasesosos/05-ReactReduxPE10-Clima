import React, { Component } from 'react';
import logo from './../img/logo.svg';

class Imagen extends Component {
    render() {
        return(
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}

export default Imagen;
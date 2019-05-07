import React from 'react';

const Header = (props) => {
    return(
        <div>
            <nav>
                <div className="nav-wrapper light-blue darken-2">
                    <a href="https://api.openweathermap.org/data/2.5/weather?q=mexico&appid=1e6c661872ef0f8b23ef9b0c7fb48912" className="brand-logo">{props.titulo}</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
import React from 'react';
import Typed from "react-typed";
import Particles from "react-particles-js";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <Particles 
                className="particles-canvas"
                params={{
                particles:{
                    number: {
                    value: 30,
                    density:{
                        enable: true,
                        value_area: 900
                    }
                    }
                }
                }}
            />
            <div className="main-info">
                <h1>Web development and website promotions</h1>
                <Typed className="typed-text"
                    strings={["Programmer at Openbravo", "Web Development", "Google Ads"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="#" className="btn-main-offer">Contact me</a>
            </div>
        </div>
    );
}
export default Header
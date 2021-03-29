import React from 'react';
import Typed from "react-typed";
import Particles from "react-particles-js";
import { Link } from "react-scroll";

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
                <Link 
                className="btn-main-offer"    
                to="contact-me"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500} >
                Contact me
            </Link>
            </div>
        </div>
    );
}
export default Header
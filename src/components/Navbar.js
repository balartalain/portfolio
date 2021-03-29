import React, { useState, useEffect } from 'react';
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";


const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    useEffect(() => {
        console.log(isNavCollapsed);
    });
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark shadow" ref={(el) => el && el.style.setProperty("margin", 0, "important")}>
            <div className="container">                
                <div className="navbar-brand"><img src={logo} alt="logo"/> </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={ faBars } style={{ color: "#fff" }}/>
                </button>

                <div className={`collapse navbar-collapse ${isNavCollapsed }`} id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} 
                                data-toggle="collapse" 
                                data-target=".show" onClick={handleNavCollapse}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                        <Link 
                                className="nav-link" 
                                activeClass="active"
                                to="about-me"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} 
                                data-toggle="collapse" 
                                data-target=".show" onClick={handleNavCollapse}>
                                About me
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} 
                                data-toggle="collapse" 
                                data-target=".show" onClick={handleNavCollapse}>
                                Portfolio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                                className="nav-link" 
                                activeClass="active"
                                to="contact-me"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} data-toggle="collapse" 
                                data-target=".show" onClick={handleNavCollapse}>
                                Contacts
                            </Link>
                        </li>
                    </ul> 
                </div>
            </div>            
        </nav>
    )
}

export default Navbar

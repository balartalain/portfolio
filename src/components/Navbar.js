import React, { useState, useEffect } from 'react';
import logo from "../logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import  { Collapse } from "react-bootstrap";


const Navbar = () => {
    const [open, setOpen] = useState(false);
    useEffect(() => {
        console.log(open);
    });
    const expanded = () => setOpen(!open); 
    const collapse = () => { 
        if (open){
            setOpen(!open);
        }
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark shadow" ref={(el) => el && el.style.setProperty("margin", 0, "important")}>
            <div className="container">                
                <div className="navbar-brand"><img src={logo} alt="logo"/> </div>
                <button className="navbar-toggler" type="button" 
                    onClick={expanded}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    <FontAwesomeIcon icon={ faBars } style={{ color: "#fff" }}/>
                </button>

                <Collapse in={open}>
                    <div className="navbar-collapse" id="example-collapse-text">               
                        <ul  className="navbar-nav ml-auto">
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
                                    data-target=".show" onClick={collapse}>
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
                                    data-target=".show" onClick={collapse}>
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
                                    data-target=".show" onClick={collapse}>
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
                                    data-target=".show" onClick={collapse}>
                                    Contacts
                                </Link>
                            </li>
                        </ul> 
                    </div>
                </Collapse>
            </div>            
        </nav>
    )
}

export default Navbar

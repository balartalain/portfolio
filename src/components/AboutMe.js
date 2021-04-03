import React from 'react';
import picture from "../picture.png";
import obCertificate from "../openbravo_certificate.png";
const About = () => {
    return (
        <div id="about-me" className="about-section container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="wrapper-photo"><img className="photo img-fluid" src={picture} alt="logo"/></div>
                </div>
                <div className="col-md-6">
                    <h1>About me</h1>
                    <div>
                        Hello, I'm Alain, <br/>Bachelor's Degree in Computer Science 2000-2005.
                        I have been developing websites for over 8 years. I'm Full-Stack Web 
                        Developer. Tecnologies I use is MERN(MomngoDB, Express, NodeJS and ReactJS).
                        I create responsive website that are displayed on all devices desktops and smartphones. 
                        I'm currently a developer at <a href="https://www.openbravo.com/" target="blank">Openbravo</a>
                        <img alt="Certified Developer" 
                            src={obCertificate} 
                            style={{width:"80%", display: "block"}}                               
                        />                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About
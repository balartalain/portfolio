import React from 'react';
import picture from "../picture.png";
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
                        Hello, I'm Alain. I have been developing websites for over 6 years. I'm Full-Stack Web 
                        Develper. Tecnologies I use is MERN(MomngoDB, Express, NodeJS and ReactJS).
                        I create respnsive website that are displayed on all devices desktops and smartphones.  
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About
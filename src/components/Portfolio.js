import React from 'react';
import portfolio1 from "../portfolio_1.png";
import portfolio2 from "../portfolio_2.png";
import portfolio3 from "../portfolio_3.png";
import portfolio4 from "../portfolio_4.png";
const Portfolio = () => {
    return (
        <div id="portfolio" className="portfolio-section">
            <h1>Portfolio</h1>
            <div className="item"><img className="portafolio-thumb" src={portfolio1} alt="portfolio"/></div>
            <div className="item"><img className="portafolio-thumb" src={portfolio2} alt="portfolio"/></div>
            <div className="item"><img className="portafolio-thumb" src={portfolio3} alt="portfolio"/></div>
            <div className="item"><img className="portafolio-thumb" src={portfolio4} alt="portfolio"/></div>            
        </div>
    );
}
export default Portfolio
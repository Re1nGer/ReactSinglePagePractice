import React from "react";
import "./Landing.css";

function Landing() {
    return (
        <div className="landing">
            <div className="section landing__content">
                <div className="slide-in-top landing__title">
                    <h1 className="landing__title_text">We help businesses grow by creating high-quality websites</h1>
                </div>
                <div className="landing__links">
                    <ul>
                        <li className="landing__link">our studio</li>
                        <li className="landing__link landing__link--delimiter">news</li>
                        <li className="landing__link landing__link--delimiter">web design</li>
                        <li className="landing__link landing__link--delimiter">articles</li>
                        <li className="landing__link landing__link--delimiter">#future</li>
                    </ul>
                </div>
                <div className="landing__button">
                    <button>Learn More</button>
                </div>
            </div>
        </div> 
    );
}

export default Landing;
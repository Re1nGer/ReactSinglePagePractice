import React from 'react';
import CompanyOffers from '../CompanyOffers/CompanyOffers';
import "./AboutCompany.css";

function AboutCompany() {
    return (
        <div className='about'>
            <div className='about__title'>
                <h1>About Our Company</h1>
            </div>
            <div className='about__content'>
                <p className='about__content-text'>I help agencies & brands to turn their ideas into designs. My heart is creativity and design and my head has always been business led. Which to this day has served me very well!
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
            <div className='about__actions'>
                <div className='about__contact'>
                    <a href='mailto:' className='about__contact_btn'>Contact us</a>
                </div>
                <div className='about__design'>
                    <button className='about__design_btn'>See Design Work</button>
                </div>
            </div>
            <CompanyOffers />
        </div>
    );
}

export default AboutCompany;
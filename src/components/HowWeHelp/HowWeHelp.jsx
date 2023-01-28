import React from 'react';
import Offers from '../../assets/offers.jpg';
import TestimonyCard from '../TestimonyCard/TestimonyCard';
import TestimonyImage1 from '../../assets/testimony1.jpg';
import TestimonyImage2 from '../../assets/testimony2.jpg';
import TestimonyImage3 from '../../assets/testimony3.jpg';
import "./HowWeHelp.css";

function HowWeHelp() {
    return (
        <div className='section howwehelp'>
            <div className='howwehelp__img_container'>
                <img className='howwehelp__img' src={Offers} alt='offers' />
            </div>
            <div className='howwehelp__title'>
                <h1 className='howwehelp__title_text'>How We Help People</h1>
            </div>
            <div className='howwehelp__subtitle'>
                <p className='howwehelp__subtitle_text'>With serious savings, a seamless online application, and unique community benefits, our members have a lot to say about our loans!</p>
            </div>
            <div className='howwehelp__testimony'>
                <TestimonyCard testimonyName={'Paul Smith'} testimonyImg={TestimonyImage1} />
                <TestimonyCard testimonyName={'Sara Perry'} testimonyImg={TestimonyImage2} />
                <TestimonyCard testimonyName={'Marry Hudson'} testimonyImg={TestimonyImage3} />
            </div>
        </div>
     );
}

export default HowWeHelp;
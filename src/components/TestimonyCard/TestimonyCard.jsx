import React from 'react';
import QuoteIcon from '../../assets/quote.png';
import "./TestimonyCard.css";

function TestimonyCard({testimonyName, testimonyImg}) {

    return (
        <>
            <div className='testimony'>
                <div className='testimony__inner_container'>
                    <div className='testimony__icon_container'>
                        <img className='testimony__icon' src={QuoteIcon} alt='quote' />
                    </div>
                    <div className='testimony__content'>
                        <p className='testimony__content_text'>Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing.</p>
                    </div>
                </div>
                <div className='testimony__container'>
                    <div className='testimony__img_container'>
                        <img className='testimony__img' src={testimonyImg} alt='testimony' />
                    </div>
                    <h3 className='testimony__name'>{testimonyName}</h3>
                </div>
            </div>
        </>
    );
}

export default TestimonyCard;
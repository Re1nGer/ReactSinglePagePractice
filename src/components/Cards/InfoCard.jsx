import React from 'react';
import "./Card.css";

function InfoCard({ title }) {
    return (
        <div className='card'>
            <div className='card__title'>
                <h1 className='card__title-text'>{title}</h1>
            </div>
            <div className='card__line'></div>
        </div>
    );
}

export default InfoCard;
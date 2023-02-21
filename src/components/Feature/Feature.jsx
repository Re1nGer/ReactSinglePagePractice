import React from 'react';
import "./Feature.css";

function Feature({title, content}) {

    return (
        <div className='feature'>
            <div className='feature__title'>
                <h1 className='feature__title_text'>{title}</h1>
            </div>
            <div className='feature__content'>
                <p className='feature__content_text'>
                    {content}
                </p>
            </div>
            <div className='feature__more'>
                <a className='feature__more_link' href='#'>More</a>
            </div>
        </div>
    );
}

export default Feature;
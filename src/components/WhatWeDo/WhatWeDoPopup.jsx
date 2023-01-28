import React from 'react';
import "./WhatWeDoPopup.css";

function WhatWeDoPopup() {
    return (
        <div className='whatwedo__popup'>
            <h1 className='whatwedo__popup_title'>What We Do</h1>
            <p className='whatwedo__popup_content'>Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. A lacus vestibulum sed arcu non.</p>
            <div className='whatwedo__popup_btn-container'>
                <button className='whatwedo__popup_btn'>Learn More</button>
            </div>
        </div>
     );
}

export default WhatWeDoPopup;
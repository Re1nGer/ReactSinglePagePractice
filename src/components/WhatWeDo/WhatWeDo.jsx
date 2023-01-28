import React from 'react';
import "./WhatWeDo.css";
import WhatWeDoImage from '../../assets/whatwedo.jpg';
import WhatWeDo1Image from '../../assets/whatwedo1.jpg';
import WhatWeDoPopup from './WhatWeDoPopup';

function WhatWeDo() {
    return (
        <div className='whatwedo'>
            <div className='section whatwedo__imgs_container'>
                <img className='whatwedo__img' src={WhatWeDoImage} alt={'profile'} />
                <img className='whatwedo__img1' src={WhatWeDo1Image} alt={'profile1'} />
                <div className='whatwedo__popup_container'>
                    <WhatWeDoPopup />
                </div>
            </div>
        </div>
     );
}

export default WhatWeDo;
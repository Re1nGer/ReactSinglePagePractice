import React from 'react';
import { useRef } from 'react';
import { Sunset } from 'react-feather';
import './FeatureVertical.css';

function FeatureVertical({title, content, down}) {

    const featureVertical = useRef(null);

    React.useEffect(() => {

        const featureVerticalElement = featureVertical.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('feature__vertical'));
                        featureVerticalElement?.classList.add(down ? 'slide-in-bottom' : 'slide-in-top');
                }});
            },
            { threshold: 1 });


            observer.observe(featureVerticalElement);
            return () => {
            observer.disconnect();
        };

        
    },[])

    return ( 
        <div ref={featureVertical} className='feature__vertical'>
            <div className='feature__icon'>
                <div className='feature__icon_inner'>
                    <Sunset color='#fff' size={40} />
                </div>
            </div>
            <div className='feature__vertical_title'>
                <h1 className='feature__vertical_title-text'>{title}</h1>
            </div>
            <div className='feature__vertical_content'>
                <div className='feature__vertical_content-text'>{content}</div>
            </div>
            <div className='feature__vertical_more'>
                <a href='#' className='feature__vertical_more-link'>More</a>
            </div>
        </div>
     );
}

export default FeatureVertical;
import React from 'react';
import Feature from '../Feature/Feature';
import FeatureVertical from './FeatureVertical';
import "./Features.css";
import { useRef } from 'react';

const dummyFeatures = [
{
    id: 1,
    title: "Founders",
    content: "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
},
{
    id: 2,
    title: "Product teams",
    content: "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}
];

const dummyFeaturesVerticals = [
{
    id: 1,
    title: "Strategy",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
},
{
    id: 2,
    title: "Results",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
},
{
    id: 3,
    title: "Expertise",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
},
{
    id: 4,
    title: "Support",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
},
];

function Features() {

    const featureSubtitle = useRef(null);
    const featureCards = useRef(null);
    const adviceText = useRef(null);

    React.useEffect(() => {

        const featureElement = featureSubtitle.current;
        const featureCardElements = featureCards.current;
        const adviceElement = adviceText.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('features__subtitle_text'))
                        featureElement?.classList.add('slide-in-left');

                    if (entry.target.classList.contains('features__cards'))
                        featureCardElements?.classList.add('scale-in-center');

                    if (entry.target.classList.contains('features__advice_title-text'))
                        adviceElement?.classList.add('fade-in');
                }});
            },
            { threshold: 1 });


            observer.observe(featureElement);
            observer.observe(featureCardElements);
            observer.observe(adviceElement);
            return () => {
            observer.disconnect();
        };

    },[]);

    return ( 
        <>
            <div className='features'>
                <div className='features__title'>
                    <h1 className='features__title_text'>Uncover and meet customer needs.</h1>
                </div>
                <div className='features__subtitle'>
                    <p ref={featureSubtitle} className='features__subtitle_text'>
                        Most teams seek to understand customer needs, yet aren't able to hire a dedicated researcher. Now there's another option.
                    </p>
                </div>
                <div ref={featureCards} className='section features__cards'>
                    {dummyFeatures.map(card => <Feature key={card.id} title={card.title} content={card.content} />)}
                </div>
                <div className='features__advice'>
                    <div className='features__advice_title'>
                        <h1 ref={adviceText} className='features__advice_title-text'>
                            We advise organizations in value creation strategies
                        </h1>
                    </div>
                    <div className='features__vertical'>
                        {dummyFeaturesVerticals.map(card => (
                            <div className={card.id % 2 !== 0 ? 'feature--down' : ''}>
                                <FeatureVertical key={card.id} down={card.id % 2 !== 0 ? true : false} title={card.title} content={card.content} />   
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Features;
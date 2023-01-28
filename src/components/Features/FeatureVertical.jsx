import { Sunset } from 'react-feather';
import './FeatureVertical.css';

function FeatureVertical({title, content, down}) {
    return ( 
        <div className={down === true ? 'slide-in-bottom feature__vertical': 'feature__vertical slide-in-top'}>
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
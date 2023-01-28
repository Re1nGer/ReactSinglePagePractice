import React from 'react';
import InfoCard from '../Cards/InfoCard';
import InfoCardWithButton from '../Cards/InfoCardWithButton';
import './CompanyOffers.css';

function CompanyOffers() {
    return (
        <div className='section company__offers'>
            <div className='company__offers_container'>
                <InfoCard title={'We help and solve your business problem.'} />
                <InfoCardWithButton content={'Pretium aenean pharetra magna ac placerat vestibulum lectus mauris. Placerat vestibulum lectus mauris ultrices eros in. Viverra nibh cras pulvinar mattis nunc sed.'} />
            </div>
        </div>
     );
}

export default CompanyOffers;
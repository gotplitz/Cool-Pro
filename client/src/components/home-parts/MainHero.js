import React from 'react';

import itemFour from '../../assets/images/comfortable-family.jpg';

const MainHero = () => {
    return (
        <section
            className='new-hero'
            style={{ backgroundImage: `url(${itemFour})` }}
        >
            <div className='main-text-hero'>
                <h1>Welcome to Cool Pro Mechanical!</h1>
                <p>Let us customize your environment for optimal comfort!</p>
            </div>
        </section>
    );
};

export default MainHero;

import React from 'react';

import GoogleReviews from '../../assets/images/opinion-review-feedback-concept.jpg';

const ReviewsHeader = () => {
    return (
        <section className='section-size-6 lighter-bg background-zoom'>
            <img
                className='opacity-4 background'
                alt='Big air conditioner fan'
                src={GoogleReviews}
            />
            <div className='container'>
                <div className='grid'>
                    <div className='column-8 centered text-center'>
                        <h3>
                            Take a look at what our customers are saying about
                            us
                        </h3>
                        <h1 className='animated-text'>
                            Google Customer Reviews
                        </h1>
                        <a
                            className='about-cta-button white-button'
                            href='https://www.google.com/search?q=cool+pro+mechanical#lrd=0x89e82f4c3a4a4ea7:0x5d1b10d29be4116d,1,,,'
                            target='_blank'
                            rel='noreferrer'
                        >
                            Review Us Here!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsHeader;

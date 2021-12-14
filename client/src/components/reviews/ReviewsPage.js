import React from 'react';

// Parts
import ScrollToTop from '../routing/ScrollToTop';
import GoogleReviews from './GoogleReviews';
import ReviewsHeader from './ReviewsHeader';

const ReviewsPage = () => {
    return (
        <div className='content'>
            <ScrollToTop />
            <ReviewsHeader />
            <GoogleReviews />
        </div>
    );
};

export default ReviewsPage;

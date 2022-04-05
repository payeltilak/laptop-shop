import React from 'react';
import useReview from '../../hook/Reviews';
import Customer from '../Customer/Customer';


const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div >
            <div className=' row'>
                {
                    reviews.map(review => <Customer review={review} key={review.id}></Customer>)
                }
            </div>
        </div>
    );
};

export default Review;
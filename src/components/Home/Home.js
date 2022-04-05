import React from 'react';

import { Link } from 'react-router-dom';
import useReview from '../../hook/Reviews';
import Customer from '../Customer/Customer';


const Home = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div >
            <div className='row mt-5'>
                <div className=' col-md-6 col-sm-12'>
                    <img src="https://www.intel.com/content/dam/www/central-libraries/us/en/images/alder-lake-laptop-windows.png.rendition.intel.web.480.270.png" alt="" />

                </div>
                <div className=' col-md-6 col-sm-12 fw-bold'>
                    <h1>WelCome To My Showroom</h1>
                    <h2>Your Best Laptop </h2>
                    <p>A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard. Laptops typically have a clam shell form factor with the screen mounted on the inside of the upper lid and the keyboard on the inside of the lower lid, although 2-in-1 PCs with a detachable keyboard are often marketed as laptops or as having a laptop mode. Laptops are folded shut for transportation, and thus are suitable for mobile use.[1] Its name comes from lap, as it was deemed practical to be placed on a person's lap when being used. Today, laptops are used in a variety of settings, such as at work, in education, for playing games, web browsing, for personal multimedia, and for general home computer use.</p>
                </div>
            </div>
            <div>
                <h2 className='mt-4 text-primary'>Customer Reviews</h2>
                <div className='d-flex mt-4 col-sm-12 col-md=6'>

                    {
                        reviews.slice(0, 3).map(review => (<Customer review={review} key={review.key}></Customer>))
                    }

                </div>

                <Link to='/review'><button className="btn btn-primary mb-4">see all review</button></Link>

            </div>

        </div>
    );
};

export default Home;
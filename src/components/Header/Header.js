import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='fw-bold mt-5 p-4'>
           
            <nav>
                <Link className='p-4 text-decoration-none' to='/home'>Home</Link>
                <Link className='p-4 text-decoration-none' to='/review'>Review</Link>
                <Link className='p-4 text-decoration-none' to='dashboard'>DashBoard</Link>
                <Link className='p-4 text-decoration-none' to='/blogs'>Blogs</Link>
                <Link className='p-4 text-decoration-none' to='/about'>About</Link>

            </nav>
        </div>
    );
};

export default Header;
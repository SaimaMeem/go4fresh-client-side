import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/notfound.png';
const NotFound = () => {
    return (
        <section>
            <div className='pt-32 pb-16'>
            <img src={notFound} className="w-1/2 h-auto mx-auto" alt="..." />
                <h5 className='font-bold text-dark-blue my-6'>Sorry! The page you are looking for is nowhere to find. </h5>
                <div className='mt-5'>
                <Link to='/home' type="button" data-mdb-ripple="true"
                    data-mdb-ripple-color="light" className=" inline-block px-6 py-2.5 bg-lavender-dark text-white font-bold text-sm leading-tight uppercase rounded shadow-md hover:bg-lavender-darker hover:shadow-lg focus:bg-lavender-darker focus:shadow-lg focus:outline-none focus:ring-0 active:bg-lavender-darkest active:shadow-lg transition duration-150 ease-in-out">Go To Home</Link>
            </div>
            </div>
        </section>
    );
};

export default NotFound;
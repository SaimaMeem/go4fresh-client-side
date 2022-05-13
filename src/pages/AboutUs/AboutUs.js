import React from 'react';
import PageTitle from '../shared/PageTitle/PageTitle';
import aboutUsImage from '../../images/aboutus.jpg';
const AboutUs = () => {
    return (
        <section className='pt-36 pb-28 font-medium'>
            <PageTitle title={'About Us'}></PageTitle>
            <h3 className="leading-tight text-3xl font-bold text-dark-blue pb-5">About Us</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2  justify-center w-auto  md:mx-20 items-center md:px-20 md:py-14  shadow-lg rounded-lg'>
                <div className='w-full'>
                    <img className='w-4/5 mx-auto object-cover' src={aboutUsImage} alt="" />
                </div>
                <div className="bg-white w-full text-left">
                    <p>Go4Fresh was founded in 2017 to integrate farm-to-fork and deliver customers safe & healthy produce at right price.
                        We connect fresh produce farmers to businesses through a collaborative approach.
                        <br></br>
                        To develop a sustainable ecosystem, we support small farmers, local produce, local communities and the nature. Offering a wide range of conventional, organic, exotic fresh Fruits & Vegetables through direct farm sourcing and distribution to Retailers, Wholesale Buyers, Restaurants, Food Processors, Exporters and Institutional Canteens.</p>
                </div>
            </div>

        </section>
    );
};

export default AboutUs;
import React from 'react';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Testimonials from '../Testimonials/Testimonials';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
        <PageTitle title={'Home'}></PageTitle>
            <Banner></Banner>
            <Items></Items>
            <WhyChooseUs></WhyChooseUs>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loader from '../../shared/Loader/Loader';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Testimonials from '../Testimonials/Testimonials';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        <section className="pt-36 pb-28">
            <Loader />
        </section>
    }
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
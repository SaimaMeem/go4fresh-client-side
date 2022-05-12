import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import Items from '../Items/Items';
import Testimonials from '../Testimonials/Testimonials';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    const [user,loading] = useAuthState(auth);
    // console.log(user?.displayName);
    if(loading){
        // console.log("loading");
        <section className="pt-36 pb-28">
        <div className="text-center">
            <div className="spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-yellow font-bold
" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
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
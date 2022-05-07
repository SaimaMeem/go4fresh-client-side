import { faBoxesStacked, faBoxOpen, faHandHoldingWater, faHandsBubbles, faScaleBalanced, faTruckMoving } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import roundLogo from '../../../images/logowithname.png'
const WhyChooseUs = () => {
    return (
        <section className='text-dark-blue'>
            <h3 className="leading-tight text-3xl font-bold my-10 text-dark-blue">Why Choose Go4Fresh</h3>
            <div className="h-auto bg-light-orange grid grid-cols-1 md:grid-cols-3 justify-between items-center">
                <div className=' py-5 md:py-20 px-10'>
                    <p className="flex items-center justify-center mb-4 text-xl font-bold">
                        <FontAwesomeIcon icon={faBoxOpen} className="shadow-lg border-2 rounded-full p-2 border-dark-blue hover:scale-105 transition duration-150 ease-in-out"></FontAwesomeIcon>
                        &nbsp; &nbsp;Handpicked Sorting & Grading
                    </p>
                    <p className="flex items-center justify-center mb-4 text-xl font-bold">
                        <FontAwesomeIcon icon={faHandsBubbles} className="shadow-lg border-2 rounded-full p-2 border-dark-blue hover:scale-105 transition duration-150 ease-in-out"></FontAwesomeIcon>
                        &nbsp; &nbsp;Washing & Disinfecting
                    </p>
                    <p className="flex items-center justify-center mb-4 text-xl font-bold">
                        <FontAwesomeIcon icon={faHandHoldingWater} className="shadow-lg border-2 rounded-full p-2 border-dark-blue hover:scale-105 transition duration-150 ease-in-out"></FontAwesomeIcon>
                        &nbsp; &nbsp;Advance Purification
                    </p>
                </div>
                <div className='flex items-center justify-center py-5 md:py-20'>
                    <img src={roundLogo} className="h-72 w-72 rounded-full shadow-lg border-4 border-white p-5" alt="" />
                </div>
                <div className='py-5 md:py-20'>
                    <p className="flex items-center justify-center mb-4 text-xl font-bold">
                        <FontAwesomeIcon icon={faBoxesStacked} className="shadow-lg border-2 rounded-full p-2 border-dark-blue hover:scale-105 transition duration-150 ease-in-out"></FontAwesomeIcon>
                        &nbsp; &nbsp;Untouched Hygine Packed
                    </p>
                    <p className="flex items-center justify-center mb-4 text-xl font-bold">
                        <FontAwesomeIcon icon={faScaleBalanced} className="shadow-lg border-2 rounded-full p-2 border-dark-blue hover:scale-105 transition duration-150 ease-in-out"></FontAwesomeIcon>
                        &nbsp; &nbsp;Accurate Weight Billing
                    </p>
                    <p className="flex items-center justify-center mb-4 text-xl font-bold">
                        <FontAwesomeIcon icon={faTruckMoving} className="shadow-lg border-2 rounded-full p-2 border-dark-blue hover:scale-105 transition duration-150 ease-in-out"></FontAwesomeIcon>
                        &nbsp; &nbsp;Quick & Easy Delivery
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

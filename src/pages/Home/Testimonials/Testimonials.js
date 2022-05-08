import React from 'react';
import customer1 from '../../../images/customers/3.jpg';
import customer2 from '../../../images/customers/1.jpg';
import customer3 from '../../../images/customers/6.jpg';
import customer4 from '../../../images/customers/7.jpg';
const Testimonials = () => {
    return (
        <section className='text-dark-blue my-14' id='testimonials'>
            <h3 className="leading-tight text-3xl font-bold my-10 text-dark-blue">Testimonials</h3>

            <div className="mb-20 text-dark-blue px-20">
                <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 xl:grid-cols-4 gap-6 text-center">
                    <div>
                        <div className="block rounded-lg shadow-lg bg-white">
                            <div className="overflow-hidden rounded-t-lg h-28 bg-light-red"></div>
                            <div className="w-28 h-28 -mt-12 overflow-hidden border-2 border-white rounded-full mx-auto bg-white"  data-mdb-ripple="true"  data-mdb-ripple-color="light">
                                <img src={customer1} alt='' />
                            </div>
                            <div className="p-6">
                                <h4 className="text-2xl font-semibold mb-4">Alex Geller</h4>
                                <hr />
                                <p className="my-4 font-medium">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                                    </svg>
                                    I am buying fruits from Go4Fresh for one year.Because of Early morning delivery, all my efforts are reduced and am saving my time and focus is on increasing my income.
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-28 bg-light-yellow"></div>
                        <div className="w-28 h-28 -mt-12 overflow-hidden border-2 border-white rounded-full mx-auto bg-white"  data-mdb-ripple="true"  data-mdb-ripple-color="light">
                                <img src={customer3} alt='' />
                            </div>
                            <div className="p-6">
                                <h4 className="text-2xl font-semibold mb-4">Maria Miller</h4>
                                <hr />
                                <p className="my-4 font-medium">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                                    </svg>
                                    Go4Fresh’s has helped us to form organic group. It has provided us consistent market and net realisation by more than 25-30 % over conventional produce.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-28 bg-light-lavender"></div>
                        <div className="w-28 h-28 -mt-12 overflow-hidden border-2 border-white rounded-full mx-auto bg-white"  data-mdb-ripple="true"  data-mdb-ripple-color="light">
                                <img src={customer4} alt=''/>
                            </div>
                            <div className="p-6">
                                <h4 className="text-2xl font-semibold mb-4">Lisa Cudrow</h4>
                                <hr />
                                <p className="my-4 font-medium">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                                    </svg>
                                    Delivery system are very good. They are helping us to validate our order, once after our satisfaction of products only they are leaving. HAPPY WITH THE SERVICES! 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="block rounded-lg shadow-lg bg-white">
                        <div className="overflow-hidden rounded-t-lg h-28 bg-light-orange"></div>
                        <div className="w-28 h-28 -mt-12 overflow-hidden border-2 border-white rounded-full mx-auto bg-white"  data-mdb-ripple="true"  data-mdb-ripple-color="light">
                                <img src={customer2} alt='' />
                            </div>
                            <div className="p-6">
                                <h4 className="text-2xl font-semibold mb-4">Joey Smith</h4>
                                <hr />
                                <p className="my-4 font-medium">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="quote-left" className="w-6 pr-2 inline-block" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                                    </svg>
                                    Go4Fresh has helped us to reduce to our cost and is convenient to deliver farm produce. Also, gives fair price to our produce and net cost is better than other buyers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
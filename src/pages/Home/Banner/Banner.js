import React from 'react';
import banner1 from '../../../images/banner/1.jpg';
import banner2 from '../../../images/banner/2.jpg';
import banner3 from '../../../images/banner/3.jpg';
const Banner = () => {
    return (
        <div className='pt-24'>
            <div
                id="carouselDarkVariant"
                className="carousel slide carousel-fade carousel-dark relative"
                data-bs-ride="carousel" data-bs-interval="2000"
            >
                {/* <!-- Indicators --> */}
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="1"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        data-bs-target="#carouselDarkVariant"
                        data-bs-slide-to="2"
                        aria-label="Slide 1"
                    ></button>
                </div>

                {/* <!-- Inner --> */}
                <div className="carousel-inner relative w-full overflow-hidden">
                    {/* <!-- Single item --> */}
                    <div className="carousel-item active relative float-left w-full z-10">
                        <img
                            src={banner2}
                            className="block w-full object-cover h-96 md:h-[33rem]"
                            alt="Fruits and Vegetables"
                        />
                        <div className="w-1/2 carousel-caption  md:block absolute flex flex-col justify-start items-center top-28 md:top-56 lg:top-56 -left-0 pl-4 lg:pl-10">
                            <h5 className="lg:font-headings lg:text-5xl  text-md md:text-3xl font-semibold">Authentic and Organic</h5>
                            <p className='pt-2 text-sm lg:text-2xl md:text-lg font-medium'>We spend many hours sourcing the best Organic and Natural produce for our customers.</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item relative float-left w-full">
                        <img src={banner1}
                            className="block w-full object-cover h-96 md:h-[33rem]"
                            alt="Fruits and Vegetables"
                        />

                        <div className="w-1/2 carousel-caption  md:block absolute flex flex-col justify-start items-center top-28 md:top-60 lg:top-56  -left-0 pl-4 lg:pl-10">
                            <h5 className="lg:font-headings lg:text-5xl  text-md md:text-3xl font-semibold">Fruits, the Best Dessert</h5>
                            <p className='pt-2 text-sm lg:text-2xl md:text-lg font-medium'>We deliver our products directly from the farm to customers on the same day they are harvested.</p>
                        </div>
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item relative float-left w-full">
                        <img src={banner3}
                            className="block w-full object-cover h-96 md:h-[33rem]"
                            alt="Fruits and Vegetables"
                        />
                        <div className="w-1/2 carousel-caption  md:block absolute flex flex-col justify-start items-center top-28 md:top-60 lg:top-56 -left-0 pl-4 lg:pl-10">
                            <h5 className="lg:font-headings lg:text-5xl  text-md md:text-3xl font-semibold">The Freshest of Vegetables</h5>
                            <p className='pt-2 text-sm lg:text-2xl md:text-lg font-medium'>Our promise is to bring our customers the freshest and  healthiestproduce available.</p>
                        </div>
                    </div>
                </div>
                {/* <!-- Inner -->

  <!-- Controls --> */}
                <button
                    className="carousel-control-prev absolute top-0 bottom-0  items-center justify-start p-0 pl-4 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0 hidden lg:flex"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 items-center justify-end p-0 pr-4 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0 hidden lg:flex"
                    type="button"
                    data-bs-target="#carouselDarkVariant"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../../../images/brand-logo.png';
import '../Header/Header.css';
const Header = () => {
    return (
        <div>
            <nav
                className="relative w-full flex flex-wrap items-center justify-between py-3 bg-dark-blue text-white shadow-lg navbar navbar-expand-lg navbar-light h-24 font-semibold">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between sm:justify-between px-6 relative">
                    <div className="container-fluid">
                        <Link className="flex items-center text-white mt-2 lg:mt-0 mr-1" to="/">
                            <img className="hidden mr-2 sm:block" src={brandLogo} style={{ height: "60px" }} alt="" loading="lazy" />
                            <span className="font-bold text-2xl">Go4Fresh</span>
                        </Link>
                    </div>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse flex-grow items-center justify-center" id="navbarSupportedContent">
                            <ul className="navbar-nav flex flex-col list-style-none  bg-dark-blue absolute z-50 transition-all ul-items">
                            <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-darker-blue px-3 py-2 rounded-md">
                                    <Link className="nav-link text-white" to='/home'>Home</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                </li>
                                <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-darker-blue px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-white"
                                        to='/'
                                    >Items</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                </li>
                                <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-darker-blue px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-white"
                                        to='/'
                                    >Testimonials</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                </li>
                                <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-darker-blue px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-white"
                                        to='/'
                                    >Blogs</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                </li>
                                <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-darker-blue px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-white"
                                        to='/'
                                    >Another</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                </li>
                            </ul>
                            {/* <!-- Left links --> */}
                        </div>
                    </div>

                    {/* <!-- Collapsible wrapper --> */}

                    {/* <!-- Right elements --> */}
                    <div className='container-fluid relative'>
                        <div className="flex items-center">

                            {/* <Link className="text-white opacity-60 hover:opacity-80 focus:opacity-80 mr-4" to='/'>
                                Test
                            </Link> */}
                            <div className="dropdown relative">
                                <Link
                                    className="dropdown-toggle flex items-center hidden-arrow  rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:font-bold"
                                    to='/'
                                    id="dropdownMenuButton2"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                         <div className='md:inline-block hidden'> &nbsp;&nbsp;Saima Sultana&nbsp;&nbsp;</div>
                                   <img className="h-8 w-8 rounded-full" src={brandLogo} alt="" />
                                </Link>
                                <ul
                                    className="dropdown-menu min-w-max absolute hidden bg-dark-blue text-base z-60 float-left py-2 list-none text-left rounded-lg shadow-xl mt-1 m-0 bg-clip-padding border-none left-auto right-0 w-full"
                                    aria-labelledby="dropdownMenuButton2"
                                >
                                    <li>
                                        <Link
                                            className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent hover:font-bold  active:bg-darker-blue rounded-md"
                                            to='/'
                                        >Your Profile</Link>
                                        
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent hover:font-bold  active:bg-darker-blue rounded-md"
                                            to='/'
                                        >Settings</Link>
                                    </li>
                                    <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                                    <li>
                                        <Link
                                            className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent hover:font-bold  active:bg-darker-blue rounded-md"
                                            to='/'
                                        > SignOut</Link>
                                    </li>
                                </ul>
                            </div>

                            <button
                        className="navbar-toggler text-white border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bars"
                            className="w-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                            ></path>
                        </svg>
                    </button>
                        </div>
                        
                    </div>
                    {/* <!-- Right elements --> */}
                    
                </div>
            </nav>


        </div>
    );
};

export default Header;
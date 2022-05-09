import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import brandLogo from '../../../images/brand-logo.png';
import '../Header/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faCaretDown } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <div className='relative'>
            <nav
                className="fixed w-full flex flex-wrap items-center justify-between py-3  text-dark-blue bg-off-white shadow-lg navbar navbar-expand-lg navbar-dark h-24 font-semibold z-40">
                <div className="container-fluid w-full flex flex-wrap items-center justify-between sm:justify-between px-6 relative">
                    <div className="container-fluid">
                        <Link className="flex items-center text-dark-blue mt-2 lg:mt-0 mr-1" to="/home">
                            <img className="hidden mr-2 sm:block" src={brandLogo} style={{ height: "60px" }} alt="" loading="lazy" />
                            <span className="font-bold text-2xl">Go4Fresh</span>
                        </Link>
                    </div>
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse flex-grow items-center justify-center" id="navbarSupportedContent">
                            <ul className="navbar-nav flex flex-col list-style-none   absolute z-200 transition-all ul-items bg-off-white shadow-lg md:shadow-none">
                            <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-off-white-darker px-3 py-2 rounded-md">
                                    <Link className="nav-link text-dark-blue" to='/home'>Home</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                </li>
                               
                                <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-off-white-darker px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-dark-blue"
                                        to='/home#fruits&vegetables'
                                    >Fruits & Vegetables</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                </li>
                                <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-off-white-darker px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-dark-blue"
                                        to='/manageinventories'
                                    >Manage Inventories</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                </li>
                                <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-off-white-darker px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-dark-blue"
                                        to='/blogs'
                                    >Blogs</Link>
                                    <span className="absolute bottom-0.5 left-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                    <span className="absolute bottom-0.5 right-1/2 w-0 transition-all h-1 bg-lavender"></span>
                                </li>
                                <li className="nav-item p-2 relative w-max two hover:font-bold  active:bg-off-white-darker px-3 py-2 rounded-md">
                                    <Link
                                        className="nav-link text-dark-blue"
                                        to='/'
                                    >About Us</Link>
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
                                    className="dropdown-toggle flex items-center hidden-arrow  rounded-full focus:outline-none hover:font-bold"
                                    to='/'
                                    id="dropdownMenuButton2"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                         <div className='md:inline-block hidden'> &nbsp;&nbsp;Saima Sultana&nbsp;&nbsp;</div>
                                   <img className="h-8 w-8 rounded-full" src={brandLogo} alt="" /> &nbsp; &nbsp;
                                   <FontAwesomeIcon className='hidden' icon={faCaretDown}></FontAwesomeIcon>
                                </Link>
                                <ul
                                    className="dropdown-menu min-w-max absolute hidden bg-off-white text-base z-110 float-left py-2 list-none text-left rounded-lg shadow-xl mt-1 m-0 bg-clip-padding border-none left-auto right-0 w-full"
                                    aria-labelledby="dropdownMenuButton2"
                                >
                                    <li>
                                        <Link
                                            className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent hover:font-bold  active:bg-off-white-darker rounded-md"
                                            to='/'
                                        >Your Profile</Link>
                                        
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent hover:font-bold  active:bg-off-white-darker rounded-md"
                                            to='/'
                                        >Settings</Link>
                                    </li>
                                    <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
                                    <li>
                                        <Link
                                            className="dropdown-item text-sm py-2 px-4 font-semibold block w-full whitespace-nowrap bg-transparent hover:font-bold  active:bg-off-white-darker rounded-md"
                                            to='/'
                                        > SignOut</Link>
                                    </li>
                                </ul>
                            </div>

                            <button
                        className="navbar-toggler text-dark-blue border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                      <FontAwesomeIcon icon={faBars}/>
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
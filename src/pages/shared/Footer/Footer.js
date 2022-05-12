import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <footer className="w-full flex flex-col mt-auto text-center lg:text-left bg-off-white text-dark-blue">
            <div className="w-full flex flex-wrap  justify-center items-center lg:justify-evenly p-6 border-t border-gray-300">

                <div className="mr-12 hidden lg:block">
                    <span className='font-bold'>Get connected with us on social networks:</span>
                </div>
                <div className="flex justify-center">
                    <a href="#!" className="mr-6 text-dark-blue">
                        <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    </a>
                    <a href="#!" className="mr-6 text-dark-blue">
                        <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                    </a>
                    <a href="#!" className="mr-6 text-dark-blue">
                        <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                    </a>
                    <a href="#!" className="mr-6 text-dark-blue">
                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a href="#!" className="mr-6 text-dark-blue">
                        <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                    </a>
                </div>
            </div>
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid grid-cols-1 md:grid-cols-3  gap-2">
                    <div className="">
                        <h6 className="uppercase font-bold mb-4 flex justify-center">
                           Customer Service
                        </h6>
                        <p className="mb-4 flex justify-center">
                            <a href="#!" className="text-dark-blue">Contact Us</a>
                        </p>
                        <p className="mb-4 flex justify-center">
                            <a href="#!" className="text-dark-blue">FAQs</a>
                        </p>
                    </div>
                    <div className="">
                        <h6 className="uppercase font-bold mb-4 flex justify-center">
                            About Go4Fresh
                        </h6>
                        <p className="flex justify-center mb-4">
                            <Link to="/aboutus" className="text-dark-blue">About Us</Link>
                        </p>
                        <p className="flex justify-center mb-4">
                            <Link to="/home#whychooseus" className="text-dark-blue">Why Choose Us</Link>
                        </p>
                        <p className="flex justify-center mb-4">
                            <Link to="/home#testimonials" className="text-dark-blue">Testimonials</Link>
                        </p>
                        {/* <p className="mb-4 flex justify-center">
                            <a href="#!" className="text-dark-blue">Another</a>
                        </p> */}
                    </div>

                    <div className="">
                        <h6 className="uppercase font-bold mb-4 flex justify-center">
                            Contact
                        </h6>
                        <p className="flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                            &nbsp; &nbsp;New York, NY 10012, US
                        </p>
                        <p className="flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                            &nbsp; &nbsp;go4fresh@gmail.com
                        </p>
                        <p className="flex items-center justify-center mb-4">
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                            &nbsp; &nbsp;+ 01 432 234 77
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center p-6 bg-off-white-darker shadow-lg">
                <p className='font-bold'>Copyright &copy; {year} Go4Fresh</p>
            </div>
        </footer>
    );
};

export default Footer;
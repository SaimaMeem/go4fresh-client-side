import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PageTitle from '../../shared/PageTitle/PageTitle';
import Socials from '../Socials/Socials';
import registerImage from '../../../images/register.jpg';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loader from '../../shared/Loader/Loader';
const Register = () => {
    const navigate = useNavigate();
    // const location = useLocation();
    const [agree, setAgree] = useState(false);
    // let from = location?.state?.from?.pathname || "/";
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, errorEmailVerification] = useSendEmailVerification(auth);
    let divElement;
    const usernameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [token] = useToken(user);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: username });
        await sendEmailVerification();
        // console.log('Updated profile');
        navigate('/home');

    };
    // if (token) {
    //     navigate('/home');
    // }
    if (error) {
        divElement = <p className='text-redd font-semibold'>Error: {error?.message}</p>;
    }
    if (loading || updating) {
        divElement = <Loader/>
    }
    return (
        <section className='pt-36 pb-28 font-medium'>
            <PageTitle title={'Register'}></PageTitle>
            <h3 className="leading-tight text-3xl font-bold text-dark-blue pb-5"> Register</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2  justify-center w-auto rounded-lg shadow-lg md:mx-20 items-center md:px-10'>
                <div className='w-full'>
                    <img className='w-4/5 mx-auto object-cover' src={registerImage} alt="" />
                </div>
                <div className="p-6  bg-white w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating m-3 w-auto">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="username" placeholder="username" ref={usernameRef} required />
                            <label htmlFor="username" className="text-gray-700">User  Name</label>
                            {/* {errors.username && <p className='text-redd'>This field is required</p>} */}
                        </div>

                        <div className="form-floating m-3 w-auto">
                            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="email" ref={emailRef} required />
                            <label htmlFor="email" className="text-red">Email Address</label>

                        </div>

                        <div className="form-floating m-3 w-auto">
                            <input type="password" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" placeholder="password" required ref={passwordRef} />
                            <label htmlFor="password" className="text-gray-700">Password</label>

                        </div>

                        <div className='mb-3'>
                            {divElement}
                        </div>
                        <div className="flex justify-center items-center my-6">
                            <div className="form-check">
                                <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-pastel-green checked:border-pastel-green focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="checkbox" onClick={() => setAgree(!agree)} />
                                <label className="font-semibold form-check-label inline-block text-pastel-green-dark" htmlFor="checkbox">
                                    Accept Terms and Conditions
                                </label>
                            </div>

                        </div>
                        <button type="submit" data-mdb-ripple="true"
                            data-mdb-ripple-color="light" className="w-1/2 px-4 py-3 bg-blue-600 text-white font-semibold text-base leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out disabled:bg-blue-400 disabled:cursor-not-allowed" disabled={!agree}>Register</button>
                        <p className="text-black mt-6 text-center font-semibold">Already Have an Account? <Link to="/login"
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out uppercase font-bold">Login</Link>
                        </p>
                    </form>
                    <div className="or w-full"> OR </div>
                    <Socials></Socials>
                </div>
            </div>

        </section>
    );
};

export default Register;
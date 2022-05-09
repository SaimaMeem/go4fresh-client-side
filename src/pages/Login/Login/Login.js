import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import React, { useRef } from 'react';
import PageTitle from '../../shared/PageTitle/PageTitle';
import '../Login/Login.css'
import Socials from '../Socials/Socials';
import auth from '../../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../../images/login.png';
import { toast } from 'react-toastify';
const Login = () => {
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
 
        console.log(email,password);
        if (email && password) {
            console.log(email,password);
            await signInWithEmailAndPassword(email, password);
        }
    };
    let divElement;
    if (emailUser) {
        console.log(emailUser);
        // navigate('/home');
        navigate(from, { replace: true });
    }
    if (emailError) {
        divElement = <p className='text-red-600 font-semibold'>Error: {emailError?.message}</p>;
    }
    if (emailLoading) {
        divElement = <div className=" spinner-border animate-spin inline-block w-10 h-10 border-4 rounded-full text-yellow font-bold
" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Sent email', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            toast.error("Please enter your email address!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <section className='pt-36 pb-28 font-medium'>
            <PageTitle title={'Login'}></PageTitle>
            <h3 className="leading-tight text-3xl font-bold text-dark-blue pb-5"> Login</h3>
            <div className='grid grid-cols-1 lg:grid-cols-2  justify-center w-auto rounded-lg shadow-lg md:mx-20 items-center md:px-10'>
                <div className='w-full'>
                    <img className='w-4/5 mx-auto object-cover' src={loginImage} alt="" />
                </div>
                <div className="p-6  bg-white w-full">
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating m-3 w-auto">
                            <input type="email" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="email" ref={emailRef} />
                            <label htmlFor="email" className="text-gray-700">Email Address</label>
                            {/* {errors.email && <p className='text-redd'>This field is required</p>} */}
                        </div>
                        <div className="form-group mb-6">
                            <div className="form-floating m-3 w-auto">
                                <input type="password" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" placeholder="password" required ref={passwordRef} />
                                <label htmlFor="password" className="text-gray-700">Password</label>
                            </div>
                     
                        </div>
                            <div className='mb-3'>
                                {divElement}
                            </div>

                        <button type="submit" data-mdb-ripple="true"
                            data-mdb-ripple-color="light" className="w-1/2 px-4 py-3 bg-blue-600 text-white font-semibold text-base leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign in</button>
                        <div className="flex justify-center items-center m-6">

                            <p to="" className="pt-3 text-md text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out font-bold">Forgot Password?
                            <button className='text-orange-dark uppercase font-bold' onClick={resetPassword} type='button'>&nbsp;Reset Password</button></p>
                        </div>
                        <p className="text-black mt-6 text-md text-center font-bold">New to Go4Fresh? <Link to="/register"
                            className="text-orange-dark font-bold hover:text-orange-darker  focus:text-orange-darker  transition duration-200 ease-in-out uppercase">Register</Link>
                        </p>
                    </form>
                    <div className="or w-full"> OR </div>
                    <Socials></Socials>
                </div>
            </div>

        </section>
    );
};

export default Login;
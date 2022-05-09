import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import React from 'react';
import { useForm } from 'react-hook-form';
import PageTitle from '../../shared/PageTitle/PageTitle';
import '../Login/Login.css'
import Socials from '../Socials/Socials';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location?.state?.from?.pathname || "/";
    const onSubmit = data => {
        console.log(data);
        const { email, password } = data;
        console.log(email, password);
        if (email && password) {
            signInWithEmailAndPassword(email, password);
        }
    };
    let divElement;
    if (emailUser) {
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
    return (
        <section className='pt-36 pb-28 font-medium'>
            <PageTitle title={'Login'}></PageTitle>
            <div className='flex justify-center w-full'>
                <div className="p-6 rounded-lg shadow-lg bg-white max-w-md">
                    <h3 className="leading-tight text-3xl font-bold text-dark-blue pb-5"> Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-floating m-3 xl:w-96">
                            <input {...register("email", { required: true })} type="email" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="email" />
                            <label htmlFor="email" className="text-gray-700">Email Address</label>
                            {errors.email && <p>This field is required</p>}
                        </div>
                        <div className="form-group mb-6">
                            <div className="form-floating m-3 xl:w-96">
                                <input {...register("password", { required: true })} type="password" className="form-control block w-full px-3 py-1.5 text-base font-medium text-black bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" placeholder="password" required />
                                <label htmlFor="password" className="text-gray-700">Password</label>
                            </div>
                        </div>

                        <div className='mb-3'>
                            {divElement}
                        </div>
                        <button type="submit" data-mdb-ripple="true"
                            data-mdb-ripple-color="light" className="w-1/2 px-4 py-3 bg-blue-600 text-white font-semibold text-base leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Sign in</button>
                        <div className="flex justify-end items-center mb-6">

                            <a href="#!"
                                className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out font-semibold">Forgot
                                password?</a>
                        </div>
                        <p className="text-gray-800 mt-6 text-center font-semibold">New to Go4Fresh? <a href="#!"
                            className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</a>
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
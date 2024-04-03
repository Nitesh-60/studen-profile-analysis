import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [loginPage, setLoginPage] = useState(false);

    const handleRegisterToggle = () => {
        setLoginPage(!loginPage);
    };

    return (
        <><Header />
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='sm:w-1/3 w-full bg-white shadow-lg rounded-lg p-8'>
                {loginPage ? (
                    <div>
                        <h1 className='text-3xl font-bold mb-6 text-center'>Login</h1>
                        <form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className='block mb-1'>Email</label>
                                <input
                                    type='text'
                                    placeholder='Email'
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>Password</label>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <button
                                className='w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300'
                                type='submit'
                                value='Login'
                            >
                                Login
                            </button>
                        </form>
                        <p className='text-center mt-4'>
                            New user?{' '}
                            <button className='text-blue-500' onClick={handleRegisterToggle}>
                                Register
                            </button>{' '}
                            here
                        </p>
                    </div>
                ) : (
                    <div>
                        <h1 className='text-3xl font-bold mb-6 text-center'>Register</h1>
                        <form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className='block mb-1'>Full Name</label>
                                <input
                                    type='text'
                                    placeholder='Full Name'
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>Email</label>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>Password</label>
                                <input
                                    type='password'
                                    placeholder='Create Password'
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <button
                                className='w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300'
                                type='submit'
                                value='Register'
                            >
                                Register
                            </button>
                            <p className='text-center mt-4'>
                                Already a user?{' '}
                                <button className='text-blue-500' onClick={handleRegisterToggle}>
                                    Login
                                </button>{' '}
                                here
                            </p>
                        </form>
                    </div>
                )}
            </div>
        </div>
        </>
    );
};

export default Login;

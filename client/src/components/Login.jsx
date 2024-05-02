import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios'; // Import Axios
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [loginPage, setLoginPage] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleRegisterToggle = () => {
        setLoginPage(!loginPage);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

      const handleRegister = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            // Registration successful
            console.log('Registration successful:', formData);
            navigate('/dataform'); // Redirect to dataform page after registration
          } else {
            // Registration failed
            console.error('Registration failed');
          }
        } catch (error) {
          console.error('Registration error:', error);
        }
      };
    

      const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            // Login successful
            console.log('Login successful:', formData);
            navigate('/dataform'); // Redirect to profile page after login
          } else {
            // Login failed
            console.error('Login failed');
          }
        } catch (error) {
          console.error('Login error:', error);
        }
      };

    return ( 
        <><Header />
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <div className='sm:w-1/3 w-full bg-white shadow-lg rounded-lg p-8'>
                {loginPage ? (
                    <div>
                        <h1 className='text-3xl font-bold mb-6 text-center'>Login</h1>
                        <form className='space-y-4' onSubmit={handleLogin}>
                            <div>
                                <label className='block mb-1'>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Email'
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>Password</label>
                                <input
                                    type='password'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
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
                        <form className='space-y-4' onSubmit={handleRegister}>
                            <div>
                                <label className='block mb-1'>Full Name</label>
                                <input
                                    type='text'
                                    name='fullName'
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder='Full Name'
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>Email</label>
                                <input
                                    type='email'
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Email'
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>Password</label>
                                <input
                                    type='password'
                                    name='password'
                                    value={formData.password}
                                    onChange={handleChange}
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

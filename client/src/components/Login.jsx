import React, {useRef, useState } from 'react';
import Header from './Header';
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../features/registerUser/userSlice";

const Login = () => {
    const [loginPage, setLoginPage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    
    const handleRegisterToggle = () => {
        setLoginPage(!loginPage);
    };

    const handleButtonClick = () => {
        // validate email and password
        const message = checkValidData(
            email?.current?.value,
            password?.current?.value
        );
        setErrorMessage(message);
    
        if (message) return;

        if (loginPage) {
            createUserWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: name.current.value,
                  photoURL:
                    "https://as2.ftcdn.net/v2/jpg/05/76/79/91/1000_F_576799177_EkgYsiqo2AUMtoxUFIzbAutSOtHrCusD.jpg",
                })
                .then(() => {
                    const { uid, displayName, email, photoURL } = auth.currentUser;
                    dispatch(
                      addUser({
                        uid: uid,
                        displayName: displayName,
                        email: email,
                        photoURL: photoURL,
                      })
                    );
                    navigate("/dataform");
                  })
                  .catch((error) => {
                    // An error occurred
                    // ...
                    setErrorMessage(error.message);
                  });
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage);
              });
          } else {
            signInWithEmailAndPassword(
              auth,
              email.current.value,
              password.current.value
            )
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage);
              });
          }
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
                                    ref={email}
                                    type='text'
                                    placeholder='Email'
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>Password</label>
                                <input
                                    ref={password}
                                    type='password'
                                    placeholder='Password'
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <button
                                className='w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300'
                                type='submit'
                                value='Login'
                                onClick={handleButtonClick}
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
                                    ref={name}
                                    type='text'
                                    placeholder='Full Name'
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>Email</label>
                                <input
                                    ref={email}
                                    type='email'
                                    placeholder='Email'
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <div>
                                <label className='block mb-1'>Password</label>
                                <input
                                    ref={password}
                                    type='password'
                                    placeholder='Create Password'
                                    className='w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500'
                                />
                            </div>
                            <button
                                className='w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300'
                                type='submit'
                                value='Register'
                                onClick={handleButtonClick}
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

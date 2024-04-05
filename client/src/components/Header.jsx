import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useEffect } from "react";
import { auth } from "../utils/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../features/registerUser/userSlice";
import { useNavigate } from "react-router-dom";
import store from "../utils/store";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/dataform");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }

      return () => {
        unsubscribe();
      };
    });
  }, []);

  return (
    <header className="bg-gray-50 py-4 border-b border-t border-black-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-black ml-8"><Link to='/'>StudentFile</Link></h1>
        <nav className='mr-10'>
          <span className="text-black hover:text-gray-400 border-spacing-1"><Link to='/Login'>Create Account</Link></span>
        </nav>
      </div>
    </header>
  );
};

export default Header;